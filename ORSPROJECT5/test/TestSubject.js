/**
 * Unit test case of Subject Service 
 */


var SubjectService = require('D:/Users/Ritika/ORSPROJECT5/services/SubjectService.js');
var Subject= require('D:/Users/Ritika/ORSPROJECT5/bean/Subject.js');

/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new SubjectService();
  var bean= new Subject();
  bean.id=3
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.name+ " ");
  });
}



/**
 * Test search() method 
 */
function testSearch() {


  var bean = new Subject();
  bean.id=3;
  var  service = new SubjectService();
  service.search(bean.id,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);
    
    
  });
}


function testadd() {
  var bean = new Subject();
  //bean.id=3;
  bean.name = 'Commerce';
  bean.courseId= 4;
  bean.courseName= 'BCom';
  

  console.log("hello");
   var service=new SubjectService();
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

  var bean = new Subject();
  bean.id=4;
  bean.name = 'Commerce';
  bean.courseId= 5;
  bean.courseName= 'BCOMM';
  
  var service = new SubjectService();

  service.update(bean, function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {

var bean = new Subject(); 
bean.id=4;
  
console.log("hello");
  service=new SubjectService();
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
testadd();
//testUpdate();
//testdelete();
//testSearch();





