import { connect } from '../dbConfig.js'
import sql from 'msnodesqlv8'

export async function getBooks(){
    try {
     sql.query(connect,"select * from library_books",(err,rows) => {
      console.log(rows);
     })
    } catch (error ) {
     console.log(error);
    }
}   