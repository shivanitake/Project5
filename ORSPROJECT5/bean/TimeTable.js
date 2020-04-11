var BaseBean = require("../bean/BaseBean");
var DataUtility = require("../utility/DataUtility");

class TimeTable extends BaseBean {

    constructor() {
        super();
        this.courseName= "";
        this.courseId = "";
        this.semester = "";
        this.subjectName= "";
        this.subjectId= "";
        this.examDate= "";
        this.examTime= "";
        
    };

    /**
       * Set populateResult into bean.
       * @param {*} res 
       */
    populateResult(res) {
        this.id = res.ID;
        this.courseName = res.COURSE_NAME;
        this.courseId = res.COURSE_ID;
        this.semester = res.SEMESTER;
        this.subjectName = res.SUBJECT_NAME;
        this.subjectId = res.SUBJECT_ID;
        this.examDate = DataUtility.formatDate(res.EXAM_DATE);
        this.examTime = res.EXAM_TIME;
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
        if (body.courseName) {
            this.courseName = body.courseName;
        }
        if (body.semester) {
            this.semester = body.semester;
        }
        if (body.subjectId) {
            this.subjectId = body.subjectId;
        }
        if (body.subjectName) {
            this.subjectName = body.subjectName;
        }

        if (body.examDate) {
            this.examDate = body.examDate;
        }
        if (body.examTime) {
            this.examTime = body.examTime;
        }
        if (body.size) {
            this.size = body.size;
        }
        if (body.pageNo) {
            this.pageNo = body.pageNo;
        }
    };
}

module.exports = TimeTable;
