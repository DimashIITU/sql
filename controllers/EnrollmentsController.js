import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getEnrollments(){
    try {
     sql.query(connect,"select * from enrollments",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
}   