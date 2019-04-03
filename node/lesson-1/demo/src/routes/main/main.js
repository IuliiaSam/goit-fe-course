const mainRoute = (request, response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Welcome to Pizza Shop</h1>");
  response.write("<a href='/pizzas'>Pizzas</a><br>");
  response.write("<a href='/signup'>Sign up</a>");
  response.end(); 

};

module.exports = mainRoute;