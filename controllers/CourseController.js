import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getCourse(){
    try {
     sql.query(connect,"select * from course",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
}   
  