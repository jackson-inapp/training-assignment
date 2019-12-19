const http = require('http');

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(` <html>
                        <body>
                            <h4>Hi, how are you</h4>
                            <img src="https://www.incimages.com/uploaded_files/image/970x450/getty_503667408_2000133320009280259_352507.jpg"/>
                        </body>
                    </html>
                `);
        res.end();
    }else{
        res.write('Invalid URL ');
        res.end();
    }
}).listen(3005);