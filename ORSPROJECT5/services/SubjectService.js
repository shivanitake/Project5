var Subject = require("../bean/Subject");
var BaseService = require("./BaseService");
var CourseService = require("./CourseService");

class SubjectService extends BaseService {

    /**
     *Finds Subject by primary key id
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_subject WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Subject(), callback);
    };

    /**
     * Search Subject by CourseId,CourseName,Name
     * returns Subject Object
     * @param {*} student 
     * @param {*} callback 
     */
    search(subject, pageNo, callback) {
        var sql = "SELECT * FROM st_subject where 1=1 ";

        if (subject.courseId) {
            sql += " and COURSE_ID = '" + subject.courseId + "'";
        }
        // if (subject.courseName) {
        //     sql += " and COURSE_NAME like '" + subject.courseName + "%'";
        // }
        if (subject.id) {
            sql += " and ID = " + subject.id;
        }
        

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Subject(), callback);

    }

    /**
     * Adds a record and returns primary key
     * @param {*} subject
     * @param {*} callback 
     * @param {*} ctx 
     */
    add(subject, callback, ctx) {
        var sql = "INSERT INTO st_subject (NAME,COURSE_ID,COURSE_NAME,DESCRIPTION,CREATED_DATETIME,MODIFIED_DATETIME) "
            + " VALUES (?,?,?,?,NOW(),NOW())";
        var params = [ subject.name,
            subject.courseId, subject.courseName, subject.description];

        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {


                var pk = result.insertId;
                //Update course name ;
                var cService = new CourseService();
                cService.findByPk(subject.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_subject SET COURSE_NAME =? WHERE ID = ?";
                        var params = [course.name, pk];
                        cService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        });
                    }
                }, ctx);

                
            }
        });
    };

    /**
     * Update a record
     * return count.
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(subject, callback, ctx) {
        var sql = "UPDATE st_subject SET NAME=?,COURSE_ID=?,COURSE_NAME=?,DESCRIPTION=?,MODIFIED_DATETIME = NOW(),CREATED_DATETIME= NOW() WHERE ID=?"
        var params = [subject.name,
        subject.courseId, subject.courseName, subject.description, subject.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var cService = new CourseService();
                cService.findByPk(subject.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_subject SET COURSE_NAME =? WHERE ID = ?";
                        var params = [course.name, subject.id];
                        cService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, result.affectedRows);
                        });
                    }
                }, ctx);

            }
        });
    }

    /**
     * Deletes a record.
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx) {
        super.delete(id, 'st_subject', callback, ctx);
    }

}
module.exports = SubjectService;


    