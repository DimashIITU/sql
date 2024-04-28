import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getTransactions(){
    try {
     sql.query(connect,"select * from library_transactions",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
}   