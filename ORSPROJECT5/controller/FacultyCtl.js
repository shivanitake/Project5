var BaseCtl = require("../controller/BaseCtl");
var Faculty = require("../bean/Faculty");

var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Faculty REST APIs
 */

class FacultyCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getFacultyService();
    }

    /**
     * Returns preload data. 
     * 
     * @param {*} request
     * @param {*} response
     */
    preload(request, response) {
        var stdService = ServiceLocator.getSubjectService();
        stdService.search('', null, function (err, result) {
            var slist = result.list;
        
        var crsService = ServiceLocator.getCourseService();
        crsService.search('', null, function (err, result) {
            var clist = result.list;
        

      

        var data = {
            
            "clist":clist,
            "slist":slist
        };
        response.status(200).json(data)
    });
});
      
    
    };

    /**     
     * Returns Faculty bean populated from request parameters.
     */
    getBean(request) {
        var faculty = new Faculty();
        faculty.populateRequest(request.body);
        return faculty;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = FacultyCtl;