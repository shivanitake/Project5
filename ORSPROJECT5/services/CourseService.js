var Course = require("../bean/Course");
var BaseService = require("./BaseService")

class CourseService extends BaseService {

    /**
     * Finds course by primary key id
     * 
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    findByPk(id, callback, ctx) {
        var sql = "SELECT * FROM st_course WHERE ID= ?";
        var params = [id];
        super.executeSQLForObject(sql, params, new Course(), callback);
    };

    /**
     * Search course by Name
     * 
     * @param {*} course
     * @param {*} callback 
     */
    search(course, pageNo, callback, ctx) {
        var sql = "SELECT * FROM st_course where 1=1 ";

        if (course.name) {
            sql += " and NAME like '" + course.name + "%'";
        }
        if (course.id) {
            sql += " and ID=" + course.id;
        }

        if (course.description) {
            sql += " and DESCRIPTION like '" + course.description + "%'";
        }

        super.executeSQLForList(sql, { "pageNo": pageNo }, new Course(), callback);
    }
    /**
     * Adds a record and returns primary key
     * 
     * @param {*} course 
     * @param {*} callback 
     * @param {*} ctx 
     */

    add(course, callback, ctx) {
        var sql = "INSERT INTO st_course (CREATED_DATETIME,MODIFIED_DATETIME,NAME,DESCRIPTION) "
            + " VALUES (NOW(),NOW(),?,?)";
        var params = [course.name, course.description];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {
                callback(err, result.insertId);
            }
        });
    };

    /**
     * Updates a record and returns count.
     * @param {*} course 
     * @param {*} callback 
     * @param {*} ctx 
     */
    update(course, callback, ctx) {
        var sql = "UPDATE st_course SET   MODIFIED_DATETIME = NOW(), NAME=?,DESCRIPTION=? WHERE ID=?"
        var params = [course.name, course.description, course.id];
        super.executeSQL(sql, params, function (err, result) {
            if (err) {
                callback(err);
            } else {    
                callback(err, result.affectedRows);
            }
        });
    }

    /**
     * Deletes record and return course bean.
     * @param {*} id 
     * @param {*} callback 
     * @param {*} ctx 
     */
    delete(id, callback, ctx) {
        super.delete(id, 'st_course', callback, ctx);
    }
}

module.exports = CourseService;
