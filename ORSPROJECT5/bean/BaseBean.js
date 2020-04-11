/**
 * Base bean contains generic attributes for all beans.
 * All beans must inherit this class
 */
class BaseBean {
    constructor() {
        this.id = '';
        this.createdBy = '';
        this.modifiedBy = '';
        this.createdDateTime = '';
        this.modifiedDateTime = '';
    };
}

module.exports = BaseBean;
