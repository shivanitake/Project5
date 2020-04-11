var BaseCtl = require("../controller/BaseCtl");
var Marksheet = require("../bean/Marksheet");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Marksheet REST APIs
 */

class MarksheetCtl extends BaseCtl {
    constructor() {
        super();
        this.service = ServiceLocator.getMarksheetService();
    }

    /**
     * Returns preload data. 
     * 
     * @param {*} request
     * @param {*} response
     */
    preload(request, response) {
        var stdService = ServiceLocator.getStudentService();
        stdService.search('', null, function (err, result) {
            var slist = result.list;

            var data = {
            
                "slist":slist
                
            };
            response.status(200).json(data)
        })
        
    };

        /**
     * returns user profile data
     * @param {*} req 
     * @param {*} res 
     */
    // myRole(req, res) {
    //    // var service = this.getService();
    //     var id = req.session.user.id; //get user from session
    //     var roleId = req.session.user.roleId
        
    //     service.findByPk(id, function (err, bean) {
    //         var r = new Response(err, bean);;
    //         res.json(r);
    //         console.log(r);
    //         console.log("hdhgdgsgdsgdhsgdhsgd"+bean.roleId);
    //     });
    // }

    /**     
     * Returns Marksheet bean populated from request parameters.
     */
    getBean(request) {
        var marksheet = new Marksheet();
        marksheet.populateRequest(request.body);
        return marksheet;
    };

    /**
     * Returns service of this controller.
     */
    getService() {
        return this.service;
    };
}

module.exports = MarksheetCtl;