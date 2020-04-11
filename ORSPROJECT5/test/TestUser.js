/**
 * Unit test case of User Service 
 */


var UserService = require('D:/Users/Ritika/ORSPROJECT5/services/UserService.js');
var User = require('D:/Users/Ritika/ORSPROJECT5/bean/User.js');


/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new UserService();
  var bean=new User()
  bean.id=12;
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
  var bean = new User();
  var  service=new UserService();
  bean.firstname='Ritika';
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new User();
  var service = new UserService();
  bean.firstName = "Ritika";
  bean.lastName = "shakwar";
  bean.login = "r@gmail.com";
  bean.password = "1234"; 
  bean.dob = "2018-08-13";
  bean.mobileNo = "8123456789";
  bean.roleId = "1";
  bean.gender = "F";
  bean.pic = "NA";
  bean.picType="NA";
  bean.picName="NA";

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

  var bean = new User();
  var service = new UserService();
  bean.id = 13;
  bean.firstName = "Ritika";
  bean.lastName = "shakwar";
  bean.login = "r@gmail.com";
  bean.password = "1234";
  bean.dob = "2018-08-13";
  bean.mobileNo = "8123456789";
  bean.roleId = "1";
  bean.gender = "F";
  bean.image = "NA";


  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new User();
  var service=new UserService();
bean.id=17;
  
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
testadd();
//testUpdate();
//testdelete();
//testSearch();





