var BaseCtl = require("../controller/BaseCtl");
var Course = require("../bean/Course");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Course REST APIs
 */

class CourseCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getCourseService();
    }

      /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    preload(request, response) {

        var courseService = ServiceLocator.getCourseService();
        courseService.search('', null, function (err, result) {
            var clist = result.list;
        
       

      
        
        var data = {
            
            "clist": clist
        };
        response.status(200).json(data)

       
    });    
    };



    /**
     * Return bean of Course controller.
     * @param {*} request 
     */
    getBean(request) {
        var course = new Course();
        course.populateRequest(request.body);
        return course;
    };

    /**
     * return service of Role controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = CourseCtl;
