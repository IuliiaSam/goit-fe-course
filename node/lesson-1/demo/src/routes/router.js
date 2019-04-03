const mainRoute = require('./main/main');
const getPizzas = require('./pizzas/pizzas');
const signUpRoute = require('./users/sign-up-route');

const router = {
  '/pizzas': getPizzas,
  '/signup': signUpRoute,
  default: mainRoute,
};

module.exports = router;