let http = require('http');
let fs = require('fs');
let url = require('url');

const templateHTML = (title, list, body) => {
    return`
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
    </body>
    </html>
    `;
}

const templateLIST = (fileList) => {
    let list = '<ul>'
    for(let i = 0; i < fileList.length; i++){
        list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
    }
    list = list + '</ul>';
    return list;
}

let app = http.createServer((request,response) => {
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data', (err, fileList) => {
                var title = 'Welcome'
                var description = 'Hello, Node.js';
                let list = templateLIST(fileList);
                let template = templateHTML(title, list, `<h2>${title}</h2>${description}`)
                response.writeHead(200);
                response.end(template);
                })
            }
            else{
                fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
                    fs.readdir('./data', (err, fileList) => {
                    let list = templateLIST(fileList);
                    var title = queryData.id
                    let template = templateHTML(title, list, `<h2>${title}</h2>${description}`)
                    response.writeHead(200);
                    response.end(template); // ! 앞에서 작성한 코드를 무엇을 넣느냐에 따라 사용자에게 전송하는 데이터가 바뀐다.
                });
            });
        }
    }
    else{
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);