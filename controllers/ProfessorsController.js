import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getProfessors(){
    try {
     sql.query(connect,"select * from professors",(err,rows) => {
      console.log(rows);
      console.log(err);
     })
    } catch (error ) {
     console.log(error);
    }
} 