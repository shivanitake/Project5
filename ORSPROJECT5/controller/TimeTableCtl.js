var BaseCtl = require("../controller/BaseCtl");
var TimeTable = require("../bean/TimeTable");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains TimeTable REST APIs
 */

class TimeTableCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getTimeTableService();
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
        

        var semester = [{ name: 'semester 1', code: '1st' },{ name: 'semester 2', code: '2nd' },{ name: 'semester 3', code: '3rd' },
        { name: 'semester 4', code: '4th' },{ name: 'semester 5', code: '5th' },{ name: 'semester 6', code: '6th' },{ name: 'semester 7', code: '7th' },
        { name: 'semester 8', code: '8th' },]
        var examTime = [{ name: 'slot 1', code: '09:00 AM to 12:00 PM'},
        { name: 'slot 2', code: '12:00 PM to 03:00 PM'},{ name: 'slot 3', code: '03:00 PM to 06:00 PM'}]

        var data = {
            "semester": semester,   
            "examTime": examTime,
            "clist":clist,
            "slist":slist
        };
        response.status(200).json(data)
    });
});
    };

    /**     
     * Returns TimeTable bean populated from request parameters.
     */
    getBean(request) {
        var timetable = new TimeTable();
        timetable.populateRequest(request.body);
        return timetable;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = TimeTableCtl;