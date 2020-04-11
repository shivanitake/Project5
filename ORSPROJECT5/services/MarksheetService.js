var Marksheet = require("../bean/Marksheet");
var BaseService = require("./BaseService");
var StudentService = require("./StudentService");

class MarksheetService extends BaseService {

    /**
     * Finds marksheet by primary key id
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_marksheet WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Marksheet(), callback);
    };

    /**
     * Finds marksheet by roleid
     */
    findByRollNo(rollNo, callback, ctx) {
        var sql = "SELECT * FROM st_marksheet WHERE ROLL_NO = ?";
        var params = [rollNo];
        super.executeSQLForObject(sql, params, new Marksheet(), callback);
    };


    // findByRollNo(marksheet, pageNo, callback) {

    //     var sql = "SELECT * FROM st_marksheet where ROLL_NO=? ";
    //     // if (marksheet.rollNo) {
    //     //     sql += " and ROLL_NO = '" + marksheet.rollNo + "'";
    //     // }

    //     super.executeSQLForList(sql, { "pageNo": pageNo }, new Marksheet(), callback);
    // }


    /**
     * Searches and returns list. Applies pagination as well.
     */
    search(marksheet, pageNo, callback) {

        var sql = "SELECT * FROM st_marksheet where 1=1 ";
        if (marksheet.rollNo) {
            sql += " and ROLL_NO = '" + marksheet.rollNo + "'";
        }
        if (marksheet.studentId) {
            sql += " and STUDENT_ID = '" + marksheet.studentId + "'";
        }
        if (marksheet.name) {
            sql += " and NAME like '" + marksheet.name + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Marksheet(), callback);

    }

    /**
     * Adds a record and returns primary key
     * @param {*} marksheet 
     * @param {*} callback 
     * @param {*} ctx 
     */
    add(marksheet, callback, ctx) {
        var sql = "INSERT INTO st_marksheet (CREATED_DATETIME,MODIFIED_DATETIME,ROLL_NO,STUDENT_ID,NAME,PHYSICS,CHEMISTRY,MATHS) "
            + " VALUES (NOW(),NOW(),?,?,?,?,?,?)";
        var params = [marksheet.rollNo, marksheet.studentId,
        marksheet.name, marksheet.physics, marksheet.chemistry, marksheet.maths];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var pk = result.insertId;
                //Update student name;
                var sService = new StudentService();
                sService.findByPk(marksheet.studentId, function (sErr, std) {
                    if (!sErr) {
                        var name = '' + std.firstName + ' ' + std.lastName;
                        var upateSql = "UPDATE st_marksheet SET name  = '" + name
                            + "' WHERE ID = " + pk;
                        sService.executeSQL(upateSql, null, function (sErr, sResult) {
                            callback(err, pk);
                        });
                    }
                }, ctx);
            }
        });
    };

    /**
     * Updates a record and returns count
     * @param {*} marksheet 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(marksheet, callback, ctx) {
        var sql = "UPDATE st_marksheet SET MODIFIED_DATETIME = NOW(), ROLL_NO=?,STUDENT_ID=?,NAME=?,PHYSICS=?,CHEMISTRY=?,MATHS=?  WHERE ID=?"
        var params = [marksheet.rollNo, marksheet.studentId,
        marksheet.name, marksheet.physics, marksheet.chemistry, marksheet.maths, marksheet.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                var affectedRows = result.affectedRows;
                //Update student name;
                var sService = new StudentService();
                sService.findByPk(marksheet.studentId, function (sErr, std) {
                    if (!sErr) {
                        var name = '' + std.firstName + ' ' + std.lastName;
                        var upateSql = "UPDATE st_marksheet SET name  = '" + name
                            + "' WHERE ID = " + marksheet.id;
                        sService.executeSQL(upateSql, null, function (sErr, sResult) {
                            callback(err, affectedRows);
                        });
                    }
                }, ctx);
            }
        });
    }

        /**
     * Searches and returns list. Applies pagination as well.
     */
    getMeritList(marksheet, pageNo, callback) {

        var sql = "SELECT * FROM st_marksheet order by (physics+chemistry+maths) desc";
       
        super.executeSQLForList(sql, { "pageNo": pageNo }, new Marksheet(), callback);

        
    }
    

    /**
     *  Delete record and return marksheet bean
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */

    delete(id, callback, ctx) {
        super.delete(id, 'st_marksheet', callback, ctx);
    }
}
module.exports = MarksheetService;


