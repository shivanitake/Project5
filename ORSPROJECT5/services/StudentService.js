var Student = require("../bean/Student");
var BaseService = require("./BaseService");
var CollegeService = require("./CollegeService");

class StudentService extends BaseService {

    /**
     *Finds student by primary key id
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_student WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Student(), callback);
    };

    /**
     * Search student by CollegeId,CollegeName,FirstName,LastName,DateOfBirth
     * MobileNo,Email
     * returns Student Object
     * @param {*} student 
     * @param {*} callback 
     */
    search(student, pageNo, callback) {
        var sql = "SELECT * FROM st_student where 1=1 ";
        if (student.collegeId) {
            sql += " and COLLEGE_ID = '" + student.collegeId + "'";
        }
        // if (student.collegeName) {
        //     sql += " and COLLEGE_NAME like '" + student.collegeName + "%'";
        // }
        if (student.firstName) {
            sql += " and FIRST_NAME like '" + student.firstName + "%'";
        }
        if (student.lastName) {
            sql += " and LAST_NAME like '" + student.lastName + "%'";
        }
        if (student.dob) {
            sql += " and DATE_OF_BIRTH = '" + student.dob + "'";
        }
        if (student.mobileNo) {
            sql += " and MOBILE_NO = '" + student.mobileNo + "'";
        }
        if (student.email) {
            sql += " and EMAIL = '" + student.email + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Student(), callback);

    }

    /**
     * Adds a record and returns primary key
     * @param {*} student 
     * @param {*} callback 
     * @param {*} ctx 
     */
    add(student, callback, ctx) {
        var sql = "INSERT INTO st_student (FIRST_NAME,LAST_NAME,COLLEGE_ID,COLLEGE_NAME,DOB,MOBILE_NO,EMAIL,CREATED_DATETIME,MODIFIED_DATETIME) "
            + " VALUES (?,?,?,?,?,?,?,NOW(),NOW())";
        var params = [ student.firstName,
            student.lastName,student.collegeId, student.collegeName, student.dob, student.mobileNo, student.email];

        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                //Update college name ;
                var cService = new CollegeService();
                cService.findByPk(student.collegeId, function (cErr, college) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_student SET COLLEGE_NAME =? WHERE ID = ?";
                        var params = [college.name, pk];
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
    update(student, callback, ctx) {
        var sql = "UPDATE st_student SET FIRST_NAME=?,LAST_NAME=?, COLLEGE_ID=?,COLLEGE_NAME=?,DOB=?,MOBILE_NO=?,EMAIL=?, MODIFIED_DATETIME = NOW(),CREATED_DATETIME= NOW() WHERE ID=?"
        var params = [student.firstName,
        student.lastName,student.collegeId, student.collegeName, student.dob, student.mobileNo, student.email, student.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var cService = new CollegeService();
                cService.findByPk(student.collegeId, function (cErr, college) {
                    if (!cErr) {
                        var upateSql = "UPDATE st_student SET COLLEGE_NAME =? WHERE ID = ?";
                        var params = [college.name, student.id];
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
        super.delete(id, 'st_student', callback, ctx);
    }

}
module.exports = StudentService;


    