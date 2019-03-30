'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.group(() => {
  Route.get('products', 'ProductController.index');
  Route.get('product/:id', 'ProductController.show');

  Route.get('orders', 'OrderController.index');
  Route.post('order', 'OrderController.store');
  Route.patch('order/:id', 'OrderController.update');
  Route.delete('order/:id', 'OrderController.delete');

  Route.get('banks', 'BankController.index');

  Route.get('couriers', 'CourierController.index');

  Route.post('checkout', 'CheckoutController.store');
  Route.get('checkout', 'CheckoutController.index');

  Route.post('detailcheckout', 'DetailcheckoutController.store');

  Route.post('register', 'AuthController.register').as('registerJwt')
  Route.post('login', 'AuthController.login').as('loginJwt')
  Route.post('refresh', 'AuthController.refreshToken').as('refreshTokenJwt').middleware(['auth:jwt'])
  Route.post('logout', 'AuthController.logout').as('logoutJwt').middleware(['auth:jwt'])
  Route.get('profile', 'AuthController.profile').as('profileJwt').middleware(['auth:jwt']);


}).prefix('api/v1')

