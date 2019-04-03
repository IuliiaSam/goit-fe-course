const path = require('path');
const fs = require('fs');

const getPizzas = (request, response) => {

  if (request.method === 'GET') {

    const filePath = path.join(__dirname, '../../', 'database/products/', 'all-products.json');
    const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    response.writeHead(200, {'Content-Type': 'application/json',});
    response.write(JSON.stringify({status: 'success', pizzas: file}));
    response.end();

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);

  };
};

module.exports = getPizzas;