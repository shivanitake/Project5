/**
 * Unit test case of TimeTable Service 
 */

var TimeTableService = require('D:/Users/Ritika/ORSPROJECT5/services/TimeTableService.js');
var TimeTable = require('D:/Users/Ritika/ORSPROJECT5/bean/TimeTable.js');

/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new TimeTableService();
  var bean=new TimeTable()
  bean.id=1;
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.courseName + " " + bean.subjectName);
  });
}



/**
 * Test search() method 
 */
function testSearch() {
  var bean = new TimeTable();
  var  service=new TimeTableService();
  bean.courseName="BSC";
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new TimeTable();
  var service = new TimeTableService();
  bean.courseId = 1;
  bean.courseName = 'BSC'; 
  bean.semester = "1st"; 
  bean.subjectId = 1;
  bean.subjectName = 'Science';
  bean.examTime = "09:00 AM to 12:00 PM";
  bean.examDate = "2018-08-13 00:00:00";


  console.log("hello");
  service.add(bean,function(err,id){

    if(err)
    {
      console.log(err);
      return;
    }
console.log('primary key:'+id);

  });

  

}

function testUpdate() {

  var bean = new TimeTable();
  var service = new TimeTableService();
  bean.id = 1;
  bean.courseId = 1;
  bean.courseName = 'BSC'; 
  bean.semester = "1st"; 
  bean.subjectId = 1;
  bean.subjectName = 'Science';
  bean.examTime = "12:00 PM to 03:00 PM"
  bean.examDate= "2018-08-20 00:00:00";
  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new TimeTable();
  var service=new TimeTableService();
bean.id=3;
  
console.log("hello");
  service.delete(bean.id,function(err,count){

    if(err)
    {
      console.log(err);
      return;
    }
console.log(count)


  });

}
  
//testFindByPk();
//testAuthenticate();
//testadd();// no use of bean.id
//testUpdate();
//testdelete();
testSearch();





