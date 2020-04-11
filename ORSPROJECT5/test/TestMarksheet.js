/**
 * Unit test case of Markskeet Service 
 */

//var check= require('../services/MarksheetService');
var MarksheetService = require('D:/Users/Ritika/ORSPROJECT5/services/MarksheetService.js');
var Marksheet = require('D:/Users/Ritika/ORSPROJECT5/bean/Marksheet.js');

/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new MarksheetService();
  var bean=new Marksheet()
  bean.id=3;
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.name + " " + bean.rollNo);
  });
}



/**
 * Test search() method 
 */
function testSearch() {
  var bean = new Marksheet();
  var  service=new MarksheetService();
  bean.rollNo=b2;
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new Marksheet();
  var service = new MarksheetService();
  bean.rollNo = 'b2';
  bean.name = 'Radha';  
  bean.physics = 77;
  bean.chemistry = 89;
  bean.maths = 90;
  bean.studentId = '10';

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

  var bean = new Marksheet();
  var service = new MarksheetService();
  bean.id = 5;
  bean.rollNo = 'b5';
  bean.name = 'Ram Singh';
  bean.physics = 66;
  bean.chemistry = 67;
  bean.maths = 68;
  bean.studentId = 5;

  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new Marksheet();
  var service=new MarksheetService();
bean.id=6;
  
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





