import { config } from '../dbConfig.js'
import sql from 'mssql/msnodesqlv8.js'

export async function getStudents(){
  // try {
  //  sql.query(connect,"select * from game",(err,rows) => {
  //   console.log(rows);
  //   console.log(err);
  //   return rows
  //  })
  // } catch (error ) {
  //  console.log(error);
  // }
  sql.connect(config, function(err) {
    if (err) {
      console.log(err);
    }
    const request = new sql.Request();
    request.query('select * from students', function(err, recordset) {
      if (err) {
        console.log(err);
      } else{
        console.log(recordset);
      }
  
    })
  })
}   

