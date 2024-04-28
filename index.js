import express from 'express';
import multer from 'multer';
import fs from 'fs';
import cors from 'cors';

import { postCreateValidator, registerValidator } from './validations.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import { loginValidator } from './validations.js';
import {
getBooks, 
getStudents, 
getCourse,
getDepartments,
getEnrollments,
getGrade,
getProfessors,
getTransactions,
} from './controllers/index.js';

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });






import { Connection } from 'tedious'; 
Connection.Connection

var configg = {  
    server: 'ACER',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'admiin', //update me
            password: '1234'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'project2'  //update me
    }
};  
var connection = new Connection(configg);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();



function executeStatement() {  
    var request = new Request("SELECT * FROM students", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    
    // Close the connection after the final event emitted by the request, after the callback passes
    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request);  
}  
  
executeStatement()








app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

// app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
//   res.json({
//     url: `/uploads/${req.file.originalname}`,
//   });
// });
// app.post('/auth/login', loginValidator, handleValidationErrors, login);
// app.post('/auth/register', registerValidator, handleValidationErrors, register);
// app.post('/students', checkAuth, postCreateValidator, handleValidationErrors, create);
// app.post('/comment/add', checkAuth, postComment);


app.get('/students', postCreateValidator, getStudents);
app.get('/course', postCreateValidator, getCourse);
app.get('/professors', postCreateValidator, getProfessors);
app.get('/departments', postCreateValidator, getDepartments);
app.get('/books', postCreateValidator, getBooks);
app.get('/enrollments', postCreateValidator, getEnrollments);
app.get('/grade', postCreateValidator, getGrade);
app.get('/transactions', postCreateValidator, getTransactions);





// app.get('/posts/?category=1', postCreateValidator, getAllPopular);
// app.get('/tags', getLastTags);
// app.get('/posts/:id', postCreateValidator, getOne);
// app.get('/tags/search?category=0/:tag', postCreateValidator, getByTag);
// app.get('/tags/search?category=1/:tag', postCreateValidator, getByTagPopular);
// app.get('/auth/me', checkAuth, getMe);
// app.get('/comments', getComments);
// app.get('/comments/preview', getLastComments);

// app.delete('/posts/:id', checkAuth, remove);

// app.patch('/posts/:id', checkAuth, postCreateValidator, handleValidationErrors, update);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('work');
});