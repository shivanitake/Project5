var CollegeService = require("./CollegeService");
var MarksheetService = require("./MarksheetService");
var RoleService = require("./RoleService");
var StudentService = require("./StudentService");
var UserService = require("./UserService");
var CourseService = require("./CourseService");
var SubjectService = require("./SubjectService");
var FacultyService = require("./FacultyService");
var TimeTableService = require("./TimeTableService");
/**
 * Locate service 
 */
class ServiceLocator {

  constructor() {
    this.db = 'MySQL';
  }
  static getCollegeService() {
    return new CollegeService();
  }
  static getMarksheetService() {
    return new MarksheetService();
  }
  static getRoleService() {
    return new RoleService();
  }
  static getStudentService() {
    return new StudentService();
  }
  static getUserService() {
    return new UserService();
  }
  static getCourseService() {
    return new CourseService();
  }
  static getSubjectService() {
    return new SubjectService();
  }
  static getFacultyService() {
    return new FacultyService();
  }
  static getTimeTableService() {
    return new TimeTableService();
  }

}
module.exports = ServiceLocator;

