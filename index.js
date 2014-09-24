'use strict';

exports.register = function(plugin, options, next) {
  var pool = options.mysql.createPool(options.mysqlOptions);

  plugin.ext('onPreHandler', function(request, extNext) {

    pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
      } else {
        request.connection = connection;
        extNext();
      }
    });
  });

  plugin.events.on('tail', function(request, err) {
    if (request.connection) {
      request.connection.release();
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};