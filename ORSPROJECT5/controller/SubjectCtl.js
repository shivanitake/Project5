var BaseCtl = require("../controller/BaseCtl");
var Subject = require("../bean/Subject");
var ServiceLocator = require("../services/ServiceLocator");


/**
 * Contains Subject REST APIs.
 */

class SubjectCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getSubjectService();
    }

    /**
     * Returns preload data.
     * @param {*} request 
     * @param {*} response 
     */
    preload(request, response) {
        var crsService = ServiceLocator.getCourseService();
        crsService.search('', null, function (err, result) {
            var clist = result.list;

            var subService = ServiceLocator.getSubjectService();
            subService.search('', null, function (err, result) {
            var slist = result.list;

           

            var data={
                "clist":clist,
                "slist":slist
            }
            response.status(200).json(data)
        });
    });
    };

    /**
     * Return bean of Subject controller.
     * @param {*} request 
     */
    getBean(request) {
        var subject = new Subject();
        subject.populateRequest(request.body);
        return subject;
    };

    /**
     * return service of Role controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = SubjectCtl;