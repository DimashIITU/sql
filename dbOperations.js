var config=require('./dbConfig');
const sql=require('msnodesqlv8');

async function getLoginDetails(){
 try {
  sql.query(config,"select * from cross_join_view",(err,rows) => {
   console.log(rows);
  })
 } catch (error ) {
  console.log(error);
 }
}   
module.exports={
 getLoginDetails:getLoginDetails
}