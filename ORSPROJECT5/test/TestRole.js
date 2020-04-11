/**
 * Unit test case of role Service 
 */


var RoleService = require('D:/Users/Ritika/ORSPROJECT5/services/RoleService.js');
var Role = require('D:/Users/Ritika/ORSPROJECT5/bean/Role.js');


/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new RoleService();
  var bean=new Role()
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
  var bean = new Role();
  var  service=new RoleService();
  bean.name='Faculty';
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new Role();
  var service = new RoleService();
  bean.name = 'test1';  
  bean.description='test1'; 


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

  var bean = new Role();
  var service = new RoleService();
  bean.id = 5;
  bean.name = 'OE';  
  bean.description='Office Ex'; 

  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new Role();
  var service=new RoleService();
bean.id=7;
  
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





