var BaseBean = require("../bean/BaseBean");
var DataUtility = require("../utility/DataUtility");

class Faculty extends BaseBean {

    constructor() {
        super();
        this.firstName = "";
        this.lastName = "";
        this.dob = "";
        this.email= "";
        this.mobileNo = "";
        this.courseId = "";
        this.subjectId= "";
        this.courseName= "";
        this.subjectName= "";
        
    };

    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res) {
        this.id = res.ID;
        this.firstName = res.FIRST_NAME;
        this.lastName = res.LAST_NAME;
        this.dob = DataUtility.formatDate(res.DOB);
        this.mobileNo = res.MOBILE_NO;
        this.email = res.EMAIL;
        this.courseId= res.COURSE_ID;
        this.courseName=res.COURSE_NAME;
        this.subjectId= res.SUBJECT_ID;
        this.subjectName=res.SUBJECT_NAME;
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
        if (body.dob) {
            this.dob = body.dob;
        }
        if (body.mobileNo) {
            this.mobileNo = body.mobileNo;
        }

        if (body.email) {
            this.email = body.email;
        }
        if (body.courseId) {
            this.courseId = body.courseId;
        }
        if (body.subjectId) {
            this.subjectId = body.subjectId;
        }
        if (body.courseName) {
            this.courseName = body.courseName;
        }
        if (body.subjectName) {
            this.subjectName = body.subjectName;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}

module.exports = Faculty;
