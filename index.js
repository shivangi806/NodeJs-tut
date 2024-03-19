// const data = require('./data');
// const fs = require('fs');
// // console.log(30);
// var a = 10;
// var b = 10;
// var c = 20;

// console.log(a+b+c);
// console.log(app);
// console.log(app.name);

// fs.writeFileSync("file1.txt" , "hello this is shivangi chandra here");


// const http = require('http');

// http.createServer((req,res)=>{
//     res.write("<h1>shivangi here</h1>");
//     res.end();
// }).listen(4500);


//****************************************************************** */
// now we will make api 
//***************************************************************** */
//step 1 make server
// const http = require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{

//     resp.writeHead(200,{'Content-type' : "application\json"});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);


// taking input from command line 
// console.log(process.argv);
// const { log } = require('console');
// const fs = require('fs');
// const input = process.argv;
// // node index.js add filename fileInput
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('error');
// }


// multiple file creatin from for loop
// const fs = require('fs');
// for(let i=0;i<4;i++){
//     fs.writeFileSync(`hello${i}.txt`,`this is shivangi${i}`);
// }



// const express = require('express'); // import
// const app = express(); // execute express

// app.get('',(req,resp)=>{
//     console.log(req.query);
    // resp.send(`<h1>Welcome : ${req.query.name}<h1/>`);
    // resp.send('<h1>hello this is home page<h1/>');
    // resp.end();
    // resp.send(`
    //     <input type='text' placeholder='User name'>
    //     </input>
    //     <button>Click me </button>
    // `)


    // json data handle karna
    // resp.send(
    //     [
    //         {
    //             name:"shubham",
    //             email:"abc"
    //         },
    //         {
    //             name:"shivangi",
    //             email:"pqr"
    //         }
    //     ]
    // )

//     resp.send(`<h1>hello this is home page</h1>`+ `<a href="/about">Go to about page</a>`);
// });

// app.get('/about',(req,resp)=>{
//     // resp.send('this is about page');
//     resp.send(`
//         <h4>this is about page</h4>
//         <input type='text' placeholder='User name'>
//         </input>
//         <button>Click me </button>
//     `)
//     // resp.end();
// });

// app.listen(5000);



//  get page load ****************************************************
// ab isme hume about page load karna

// const express = require('express');
// const app = express();
// const path = require('path');

// const dirpath = path.join(__dirname,'public');
// app.use(express.static(dirpath));
// // console.log(` dir name  is :  ${__dirname}`);
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${dirpath}/about.html`);
// })

// app.get('*',(req,resp)=>{
//     resp.sendFile(`${dirpath}/error.html`);
// })

//************EJS****************** */
// app.set('view engine','ejs');
// app.get('/profile',(_,resp)=>{
//     const user = {
//         name:"shivangi",
//         email:"abc@gmail.com",
//         skills : ['php','html','css','js']
//     }
//     resp.render('profile',{user});
// })

// app.set('view engiine','ejs');
// app.get('/login',(req,resp)=>{
//     resp.render('login');
// })

// app.listen(5000);

//****************************MIDDLEWARE */
const express = require('express');
const app = express();
const reqFilter = require('./middleware');

// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send('enter age');
//     }
//     else if(req.query.age < 18){
//         resp.send('you cannot access');
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter);
app.get('/',reqFilter,(req,resp)=>{
    resp.send("welcome page");
})

app.get('/user',(req,resp)=>{
    resp.send("users page");
})

app.listen(5000);




