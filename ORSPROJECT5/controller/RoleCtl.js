var BaseCtl = require("../controller/BaseCtl");
var Role = require("../bean/Role");
var ServiceLocator = require("../services/ServiceLocator");

/**
 * Contains Role REST APIs
 */

class RoleCtl extends BaseCtl {

    constructor() {
        super();
        this.service = ServiceLocator.getRoleService();
    }

    /**
     * Return bean of Role controller.
     * @param {*} request 
     */
    getBean(request) {
        var role = new Role();
        role.populateRequest(request.body);
        return role;
    };

    
    /**
     * Get preload data.
     * @param {*} request 
     * @param {*} response 
     */

    preload(request, response) {
        var roleService = ServiceLocator.getRoleService();
        roleService.search('', null, function (err, result) {
            response.json(result.list)
        })
    };

    /**
     * return service of Role controller.
     */
    getService() {
        return this.service;
    };
    
}

module.exports = RoleCtl;
