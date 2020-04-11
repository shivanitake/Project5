/**
 * Unit test case of Student Service 
 */


var StudentService = require('D:/Users/Ritika/ORSPROJECT5/services/StudentService.js');
var Student= require('D:/Users/Ritika/ORSPROJECT5/bean/Student.js');

/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new StudentService();
  var bean= new Student();
  service.findByPk(3, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.firstName+ " " + bean.lastName);
  });
}



/**
 * Test search() method 
 */
function testSearch() {


  var bean = new Student();
  bean.id=3;
  var  service = new StudentService();
  service.search(bean.id,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);
    
    
  });
}


function testadd() {
  var bean = new Student();
  //bean.id=3;
  bean.firstName = 'Radha';
  bean.lastName= 'Sharma';
  bean.collegeId= 4;
  bean.collegeName= 'UIT'
  bean.dob='1990-01-21';
  bean.mobileNo=8978767547;
  bean.email='rsharma@gmail.com';
  

  console.log("hello");
   var service=new StudentService();
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

  var bean = new Student();
  bean.id=14;
  bean.firstName = 'Neha';
  bean.lastName= 'Sharma';
  bean.collegeId= 4;
  bean.collegeName= 'UIT'
  bean.dob='1990-01-24';
  bean.mobileNo=8978767597;
  bean.email='nsharma@gmail.com';
  
  var service = new StudentService();

  service.update(bean, function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {

var bean = new Student(); 
bean.id=16;
  
console.log("hello");
  service=new StudentService();
  service.delete(bean.id,function(err,count){

    if(err)
    {
      console.log(err);
      return;
    }
console.log(count)


  });

}
  
testFindByPk();
//testadd();
//testUpdate();
//testdelete();
//testSearch();





