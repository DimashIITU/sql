import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getDepartments(){
    try {
     sql.query(connect,"select * from departments",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
   }   