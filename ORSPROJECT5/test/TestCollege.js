/**
 * Unit test case of College Service 
 */


var CollegeService = require('D:/Users/Ritika/ORSPROJECT5/services/CollegeService.js');
var College = require('D:/Users/Ritika/ORSPROJECT5/bean/College.js');


/**
 * Test findByPK() method 
 */
function testFindByPk() {
  var service = new CollegeService();
  var bean=new College()
  bean.id=3;
  service.findByPk(bean.id, function (err, bean) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(bean);
    console.log(bean.id + " " + bean.name + " " + bean.address);
  });
}



/**
 * Test search() method 
 */
function testSearch() {
  var bean = new College();
  var  service=new CollegeService();
  bean.name='SVITS';
  
service.search(bean,1,function (err, list) {

    if (err) {
      console.log(err);
      return;
    }
    console.log(list);

    
  });
}


function testadd() {
  var bean= new College();
  var service = new CollegeService();
  bean.name = 'Radha';  
  bean.address='Vijay Nagar'; 
  bean.state = 'MP';
  bean.city = 'Indore';
  bean.phoneNo = 987678567;

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

  var bean = new College();
  var service = new CollegeService();
  bean.id = 5;
  bean.name = 'Radha';  
  bean.address='Vijay Nagar'; 
  bean.state = 'MP';
  bean.city = 'Indore';
  bean.phoneNo = 987678567;



  service.update(bean,function (err, count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}

function testdelete() {
  var bean= new College();
  var service=new CollegeService();
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
  
testFindByPk();
//testAuthenticate();
//testadd();// no use of bean.id
//testUpdate();
//testdelete();
//testSearch();





