var BaseCtl = require("../controller/BaseCtl");
var College = require("../bean/College");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains College REST APIs
 */
class CollegeCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getCollegeService();
    }
    /**
     * Returns preload data.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    preload(request, response) {

        var collegeService = ServiceLocator.getCollegeService();
        collegeService.search('', null, function (err, result) {
            var clist = result.list;
        
        var state = [{ name: 'Maharashtra', code: 'MH' },
        { name: 'Madhya Pradesh', code: 'MP' },
        { name: 'Delhi', code: 'DL' }]
        var city = [{ name: 'Indore', code: 'INDORE', state: 'MP' },
        { name: 'Bhopal', code: 'BHOPAL', state: 'MP' },
        { name: 'Mumbai', code: 'MUMBAI', state: 'MH' },
        { name: 'Pune', code: 'PUNE', state: 'MH' },
        { name: 'Delhi', code: 'DELHI', state: 'DL' }]

      
        
        var data = {
            "stateList": state,
            "cityList": city,
            "clist": clist
        };
        response.status(200).json(data)

       
    });    
    };


    /**
     * Returns College bean populated from request parameters. 
     */
    getBean(request) {
        var college = new College();
        college.populateRequest(request.body);
        return college;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = CollegeCtl;
