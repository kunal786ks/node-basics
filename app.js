//core modules
const readline = require('readline');//used to read from terminal
const fs = require('fs') //used to read a file
const http = require('http');//used for web server
const url = require('url');
const events=require('events');


//custom modules
const replaceHtml=require('./modules/replaceHtml');
const user=require('./modules/user')

// Video No. 4 
//  const data=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
//  })

//  data.question('Enter Your name: ',(name)=>{
//     console.log('You entered '+name);
//     data.close();
//  })

// data.on('close',()=>{
//     console.log('this is closed');
//     process.exit(0);
// })


//video No 5
// let textIn=fs.readFileSync('./files/input.txt','utf-8');//this function is used to read the file synchronosly
// console.log(textIn);

// let content=`Data read from the input.txt: ${textIn} \n Date created ${new Date()}`

// fs.writeFileSync('./files/temp.txt',content)

// const data=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })

// data.question("Enter What Ever you want to enter into the output file",(name)=>{
//     fs.writeFileSync('./files/temp.txt',name);
//     data.close();
// })

// data.on('close',()=>{
//     console.log('data is written inside the file');
// })



//video 7
// fs.readFile('./files/start.txt','utf-8',(error,data)=>{
//     console.log(data);
//     fs.writeFile('./files/temp.txt',`this is new data \n Date Created ${new Date()} $`,()=>{
//         console.log('file witten successfully')
//     })

// })
// console.log('Reading file...');


//video 8 
// const html = fs.readFileSync('./Template/index.html', 'utf-8')
// let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
// let productList = fs.readFileSync('./Template/product-list.html', 'utf-8');
// let productDetail = fs.readFileSync('./Template/product-details.html', 'utf-8');

// let productHtmlArray = products.map((prod) => {
//     let output = productList.replace('{{%IMAGE%}}', prod.productImage)
//     output = output.replace('{{%NAME%}}', prod.name);
//     output = output.replace('{{%MODELNAME%}}', prod.modelName);
//     output = output.replace('{{%MODELNO%}}', prod.modelNumber);
//     output = output.replace('{{%SIZE%}}', prod.size);
//     output = output.replace('{{%CAMERA%}}', prod.camera);
//     output = output.replace('{{%PRICE%}}', prod.price);
//     output = output.replace('{{%COLOR%}}', prod.color);
//     output = output.replace('{{%ID%}}', prod.id);

//     return output;
// })

// function replaceHtml(template,product){
//     let output = template.replace('{{%IMAGE%}}', product.productImage)
//     output = output.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%MODELNAME%}}', product.modeName);
//     output = output.replace('{{%MODELNO%}}', product.modelNumber);
//     output = output.replace('{{%SIZE%}}', product.size);
//     output = output.replace('{{%CAMERA%}}', product.camera);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%COLOR%}}', product.color);
//     output = output.replace('{{%ID%}}', product.id);
//     output = output.replace('{{%ROM%}}', product.ROM);
//     output = output.replace('{{%DESC%}}', product.Description);

//     return output;
// }


 //step1 create a web server
// const server = http.createServer((request, response) => {
//     let { query, pathname: path } = url.parse(request.url, true);

//     // let path = request.url;
//     if (path === '/' || path.toLocaleLowerCase() === '/home') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'hello there'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     }

//     else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the about page'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if (path.toLocaleLowerCase() === '/content') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the content page'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Content page'));
//     }
//     else if (path.toLocaleLowerCase() === '/products') {
//         if (!query.id) {
//             let productHtmlArray=products.map((prod)=>{
//                 return replaceHtml(productList,prod)
//             })
//             let productResponse = html.replace('{{%CONTENT%}}', productHtmlArray.join(','))
//             response.writeHead(200, { 'Content-type': 'text/html' })
//             response.end(productResponse);
//         }
//         else{
//             const prod=products[query.id];
//             let productDetailHtml=replaceHtml(productDetail,prod)//this will return html content
//             let productResponse = html.replace('{{%CONTENT%}}', productDetailHtml)
//             response.end(productResponse);
//         }


//     }
//     else {
//         response.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the error'
//         });
//         response.end(html.replace('{{%CONTENT%}}', '404 : Page Not found'))
//     }
// })


const server=http.createServer();
// server.on('request',(request,response)=>{
//     let { query, pathname: path } = url.parse(request.url, true);

//     // let path = request.url;
//     if (path === '/' || path.toLocaleLowerCase() === '/home') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'hello there'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     }

//     else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the about page'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if (path.toLocaleLowerCase() === '/content') {
//         response.writeHead(200, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the content page'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Content page'));
//     }
//     else if (path.toLocaleLowerCase() === '/products') {
//         if (!query.id) {
//             let productHtmlArray=products.map((prod)=>{
//                 return replaceHtml(productList,prod)
//             })
//             let productResponse = html.replace('{{%CONTENT%}}', productHtmlArray.join(','))
//             response.writeHead(200, { 'Content-type': 'text/html' })
//             response.end(productResponse);
//         }
//         else{
//             const prod=products[query.id];
//             let productDetailHtml=replaceHtml(productDetail,prod)//this will return html content
//             let productResponse = html.replace('{{%CONTENT%}}', productDetailHtml)
//             response.end(productResponse);
//         }


//     }
//     else {
//         response.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-header': 'this header is from the error'
//         });
//         response.end(html.replace('{{%CONTENT%}}', '404 : Page Not found'))
//     }
// })
//step2 start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started')
})

//emitting and handling custom events

// let myEmitter=new events.EventEmitter();
// let myEmitter=new user();

// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`A new user ${name} is created with ${id}`)
// })
// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`A new user ${name} is created with ${id}`)
// })
// myEmitter.emit('userCreated',101,'john');


//node streams

//without streams
// server.on('request',(req,res)=>{
//     fs.readFile('./files/large-file.txt',(err,data)=>{
//         if(err){
//             res.end('An error occured');
//             return;
//         }
//         res.end(data);
//     })
// })

//using readable streams
// server.on('request',(req,res)=>{
//     let rs=fs.createReadStream('./files/large-files.txt')

//     rs.on('data',(chunk)=>{
//         res.write(chunk);
//     })
//     rs.compose('end',()=>{
//         res.end();
//     })
//     rs.on('error',(error)=>{
//         res.end(error.message);
//     })

// })

//using pipe method
server.on('request',(req,res)=>{
    let rs=fs.createReadStream('./files/large-files.txt')

    rs.pipe(res);
    //readbale source writeable destination
})