import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getGrade(){
    try {
     sql.query(connect,"select * from grade",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
}   