const http = require("http");

const server = http.createServer((request, responsive) => {
  console.log(request.url); 

  responsive.write("<h1>Hello world 4 </h1>");
  responsive.end(); 
});

server.listen(3000, () => {
  console.log("sever has been started on port 3000");
});
