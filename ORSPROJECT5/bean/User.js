var BaseBean = require("../bean/BaseBean");
var DataUtility = require("../utility/DataUtility");

class User extends BaseBean {

    constructor() {
        super();
        this.firstName = "";
        this.lastName = "";
        this.login = "";
        this.password = "";
        this.dob = "";
        this.mobileNo = "";
        this.roleId = "";
        this.role = "";
        this.gender = "";
        this.pic = "";
        this.picType="";
        this.picName="";
    };

    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res) {
        this.id = res.ID;
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.login = res.LOGIN;
        this.password = res.PASSWORD;
        this.dob = DataUtility.formatDate(res.DOB);
        this.mobileNo = res.MOBILE_NO;
        this.roleId = res.ROLE_ID;
        this.role = res.ROLE;
        this.gender = res.GENDER;
        this.pic = res.PIC;
        this.picType = res.PIC_TYPE;
        this.picName =  res.PIC_NAME;

        this.createdBy = res.CREATED_BY;
        this.modifiedBy = res.MODIFIED_BY;
        this.createdDateTime = res.CREATED_DATETIME;
        this.modifiedDateTime = res.MODIFIED_DATETIME;
    };
    
    /**
       * Get request data from body.
       * @param {*} body 
       */
    populateRequest(body) {
        if (body.id) {
            this.id = body.id;
        }
        if (body.firstName) {
            this.firstName = body.firstName;
        }
        if (body.lastName) {
            this.lastName = body.lastName;
        }
        if (body.login) {
            this.login = body.login;
        }
        if (body.password) {
            this.password = body.password;
        }
        if (body.dob) {
            this.dob = body.dob;
        }
        if (body.mobileNo) {
            this.mobileNo = body.mobileNo;
        }

        if (body.roleId) {
            this.roleId = body.roleId;
        }
        if (body.role) {
            this.role = body.role;
        }
        if (body.gender) {
            this.gender = body.gender;
        }
        if (body.pic) {
            this.pic = body.pic;
        }
        if (body.picType) {
            this.picType = body.picType;
        }
        if (body.picName) {
            this.picName = body.picName;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}

module.exports = User;
