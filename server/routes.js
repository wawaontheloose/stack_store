/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/cart', require('./api/cart'));
  app.use('/api/promocodes', require('./api/promocode'));
  app.use('/api/category', require('./api/category'));
  app.use('/api/products', require('./api/product'));
  app.use('/api/reviews', require('./api/review'));
  app.use('/api/orders', require('./api/order'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
