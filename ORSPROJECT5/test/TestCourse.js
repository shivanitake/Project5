/**
 * Unit test case of Course Service 
 */


var CourseService = require('D:/Users/Ritika/ORSPROJECT5/services/CourseService.js');
var Course = require('D:/Users/Ritika/ORSPROJECT5/bean/Course.js');


/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new CourseService();
  var bean=new Course()
  bean.id=1;
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.name + " " + bean.description);
  });
}



/**
 * Test search() method 
 */
function testSearch() {
  var bean = new Course();
  var  service=new CourseService();
  bean.name='BSC';
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new Course();
  var service = new CourseService();
  bean.name = 'BA';  
  bean.description='Bachelors in Arts '; 


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

  var bean = new Course();
  var service = new CourseService();
  bean.id = 1;
  bean.name = 'BSC';  
  bean.description='Bachelor of Scienc'; 




  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new Course();
  var service=new CourseService();
bean.id=2;
  
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





