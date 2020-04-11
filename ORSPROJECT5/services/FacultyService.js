var Faculty = require("../bean/Faculty");
var Subject = require("../bean/Subject");
var Course = require("../bean/Course");
var BaseService = require("./BaseService");
var CourseService = require("./CourseService");
var SubjectService = require("./SubjectService");

class FacultyService extends BaseService {

    /**
     * Finds Faculty by primary key id
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_faculty WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Faculty(), callback);
    };

    /**
     * Searches and returns list. Applies pagination as well.
     */
    search(faculty, pageNo, callback) {

        var sql = "SELECT * FROM st_faculty where 1=1 ";
        if (faculty.courseId) {
            sql += " and COURSE_ID = " + faculty.courseId;
        }
        if (faculty.subjectId) {
            sql += " and SUBJECT_ID = " + faculty.subjectId;
        }
        if (faculty.email) {
            sql += " and EMAIL like '" + faculty.email + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Faculty(), callback);

    }

    /**
     * Adds a record and returns primary key
     * @param {*} faculty 
     * @param {*} callback 
     * @param {*} ctx 
     */
    add(faculty, callback, ctx) {
        var sql = "INSERT INTO st_faculty (CREATED_DATETIME,MODIFIED_DATETIME,FIRST_NAME,LAST_NAME,COURSE_ID,COURSE_NAME,SUBJECT_ID,SUBJECT_NAME,DOB,EMAIL,MOBILE_NO) "
            + " VALUES (NOW(),NOW(),?,?,?,?,?,?,?,?,?)";
        var params = [faculty.firstName, faculty.lastName,
        faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.email, faculty.mobileNo];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {



                var pk = result.insertId;
                var sService = new SubjectService();
                sService.findByPk(faculty.subjectId, function (cErr, subject) {
                    if (!cErr) {
                        var updateSql = "UPDATE st_faculty SET SUBJECT_NAME =? WHERE ID = ?";
                        var params = [subject.name, pk];
                        sService.executeSQL(updateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        });
                    }
                }, ctx);
               


                
                //Update course name ;
                var cService = new CourseService();
                cService.findByPk(faculty.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_faculty SET COURSE_NAME =? WHERE ID = ?";
                        var params = [course.name, pk];
                        cService.executeSQL(upateSql, params, function (cErr, sResult) {
                        //    callback(err, pk);
                        });
                    }
                }, ctx);




            }
        });
    };

    /**
     * Updates a record and returns count
     * @param {*} faculty 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(faculty, callback, ctx) {
        var sql = "UPDATE st_faculty SET MODIFIED_DATETIME = NOW(),FIRST_NAME=?,LAST_NAME=?,COURSE_ID=?,COURSE_NAME=?,SUBJECT_ID=?,SUBJECT_NAME=?,DOB=?,EMAIL=?,MOBILE_NO=?  WHERE ID=?"
        var params = [faculty.firstName, faculty.lastName,
        faculty.courseId, faculty.courseName, faculty.subjectId, faculty.subjectName, faculty.dob, faculty.email, faculty.mobileNo, faculty.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {

                var courseService = new CourseService();
                courseService.findByPk(faculty.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_faculty SET COURSE_NAME =? WHERE ID = ?";
                        var params = [course.name, faculty.id];
                        courseService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, result.affectedRows);
                        });
                    }
                }, ctx);

                var subjectService = new SubjectService();
                subjectService.findByPk(faculty.subjectId, function (cErr, subject) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_faculty SET SUBJECT_NAME =? WHERE ID = ?";
                        var params = [subject.name, faculty.id];
                        subjectService.executeSQL(upateSql, params, function (cErr, sResult) {
                            //callback(err, result.affectedRows);
                        });
                    }
                }, ctx);





            }
        });
    }

    /**
     *  Delete record and return marksheet bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */

    delete(id, callback, ctx) {
        super.delete(id, 'st_faculty', callback, ctx);
    }
}
module.exports = FacultyService;


