var BaseBean = require('../bean/BaseBean');
var DataUtility = require("../utility/DataUtility");


class Subject extends BaseBean {
    constructor() {
        super();
        this.courseId = 0;
        this.courseName = '';
        this.name = '';
        this.description = '';

    }

    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res) {
        this.id = res.ID;
        this.courseId = res.COURSE_ID;
        this.courseName = res.COURSE_NAME;
        this.name = res.NAME;
        this.description = res.DESCRIPTION;
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
        if (body.courseId) {
            this.courseId = body.courseId;
        }
        if (body.description) {
            this.description = body.description;
        }
        if (body.courseName) {
            this.courseName = body.courseName;
        }
        if (body.name) {
            this.name = body.name;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}
module.exports = Subject;   