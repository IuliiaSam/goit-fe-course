const qs = require('querystring');
const fs = require('fs');
const path = require('path');


const signUpRoute = (request, response) => {

  if (request.method === 'POST') {

    // sample incoming data:
    // {
    //   "username": "John",
    //   "telephone": "063 777 77 77",
    //   "password": "12345",
    //   "email": "john@gmail.com"
    //  }
 
    let body = '';

    request.on('data', function (incomingData) {
      body = body + incomingData;
      console.log('Incoming data');
    });

    request.on('end', function () {

      console.log('data body', JSON.parse(body));

      const userData = JSON.parse(body); 

      saveUser(userData);

      const responseData = {
        status: 'success',
        user: userData,
      }
      
      response.writeHead (200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(responseData));
      response.end();

    });

    const saveUser = user => {

      const filePath = path.join(__dirname, '../../database/users', `${user.username}.json`);

      fs.writeFile(filePath, JSON.stringify(user), function (err) {
        if (err) throw err;
        console.log('Saved');
      });
    
    };
  
  };
};

module.exports = signUpRoute;