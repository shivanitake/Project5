var TimeTable = require("../bean/TimeTable");
var BaseService = require("./BaseService");
var CourseService = require("./CourseService");
var SubjectService = require("./SubjectService");

class TimeTableService extends BaseService {

    /**
     * Finds TimeTable by primary key id
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_timetable WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new TimeTable(), callback);
    };

    /**
     * Searches and returns list. Applies pagination as well.
     */
    search(timetable, pageNo, callback) {

        var sql = "SELECT * FROM st_timetable where 1=1 ";
        if (timetable.courseId) {
            sql += " and COURSE_ID = " + timetable.courseId;
        }
        if (timetable.courseName) {
            sql += " and COURSE_NAME = '" + timetable.courseName + "'";
        }
        if (timetable.subjectId) {
            sql += " and SUBJECT_ID = " + timetable.subjectId;
        }
        if (timetable.subjectName) {
            sql += " and SUBJECT_NAME = '" + timetable.subjectName + "'";
        }


        super.executeSQLForList(sql, { "pageNo": pageNo }, new TimeTable(), callback);

    }

 

        /**
     * Adds a record and returns primary key
     * @param {*} faculty 
     * @param {*} callback 
     * @param {*} ctx 
     */
    add(timetable, callback, ctx) {
        var sql = "INSERT INTO st_timetable (CREATED_DATETIME,MODIFIED_DATETIME,COURSE_ID,COURSE_NAME,SEMESTER,SUBJECT_ID,SUBJECT_NAME,EXAM_TIME,EXAM_DATE) "
            + " VALUES (NOW(),NOW(),?,?,?,?,?,?,?)";
        var params = [timetable.courseId, timetable.courseName, timetable.semester, timetable.subjectId, timetable.subjectName,
         timetable.examTime, timetable.examDate];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {



                var pk = result.insertId;
                var sService = new SubjectService();
                sService.findByPk(timetable.subjectId, function (cErr, subject) {
                    if (!cErr) {
                        var updateSql = "UPDATE st_timetable SET SUBJECT_NAME =? WHERE ID = ?";
                        var params = [subject.name, pk];
                        sService.executeSQL(updateSql, params, function (cErr, sResult) {
                            callback(err, pk);
                        });
                    }
                }, ctx);
               


                
                //Update course name ;
                var cService = new CourseService();
                cService.findByPk(timetable.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_timetable SET COURSE_NAME =? WHERE ID = ?";
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
    update(timetable, callback, ctx) {
        var sql = "UPDATE st_timetable SET MODIFIED_DATETIME = NOW(),COURSE_ID=?,COURSE_NAME=?,SEMESTER=?,SUBJECT_ID=?,SUBJECT_NAME=?,EXAM_TIME=?,EXAM_DATE=? WHERE ID=?"
        var params = [timetable.courseId, timetable.courseName,
            timetable.semester, timetable.subjectId, timetable.subjectName, timetable.examTime, timetable.examDate, timetable.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
           
                var courseService = new CourseService();
                courseService.findByPk(timetable.courseId, function (cErr, course) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_timetable SET COURSE_NAME =? WHERE ID = ?";
                        var params = [course.name, timetable.id];
                        courseService.executeSQL(upateSql, params, function (cErr, sResult) {
                            callback(err, result.affectedRows);
                        });
                    }
                }, ctx);

                var subjectService = new SubjectService();
                subjectService.findByPk(timetable.subjectId, function (cErr, subject) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_timetable SET SUBJECT_NAME =? WHERE ID = ?";
                        var params = [subject.name, timetable.id];
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
        super.delete(id, 'st_timetable', callback, ctx);
    }
}
module.exports = TimeTableService;


