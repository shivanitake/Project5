/**
 * Unit test case of Faculty Service 
 */

var FacultyService = require('D:/Users/Ritika/ORSPROJECT5/services/FacultyService.js');
var Faculty = require('D:/Users/Ritika/ORSPROJECT5/bean/Faculty.js');

/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new FacultyService();
  var bean=new Faculty()
  bean.id=1;
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.firstName + " " + bean.lastName);
  });
}



/**
 * Test search() method 
 */
function testSearch() {
  var bean = new Faculty();
  var  service=new FacultyService();
  bean.email="rshakwar@gmail.com";
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new Faculty();
  var service = new FacultyService();
  bean.firstName = 'Sushma';
  bean.lastName = 'Shakwar';  
  bean.courseId = '2';
  bean.courseName = 'BE';
  bean.subjectId = '1';
  bean.subjectName = 'Science';
  bean.dob= "2018-08-13 00:00:00";
  bean.email = 'rshakwar@gmail.com';
  bean.mobileNo= "8976890765";

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

  var bean = new Faculty();
  var service = new FacultyService();
  bean.id = 1;
  bean.firstName = 'Ritika';
  bean.lastName = 'Shakwar';  
  bean.courseId = '1';
  bean.courseName = 'BE';
  bean.subjectId = '1';
  bean.subjectName = "Maths"
  bean.dob= "2018-08-13 00:00:00";
  bean.email = 'mshakwar@gmail.com';
  bean.mobileNo= "8976890765";

  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new Faculty();
  var service=new FacultyService();
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
testdelete();
//testSearch();





