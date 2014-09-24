hapi-myconnection
=================

Wrap Hapi requests with access to a Mysql connection from pool.

It gives you access to `request.connection` within your handlers which you can then use to make Mysql requests. It also releases the connection to the pool after the request.

Usage
-----
```js

// options used to pass mysql driver to create pool
var mysqlOptions = {
  host: 'localhost',
  user: 'anyUser'
};

server.pack.register({
  plugin: require('hapi-myconnection'),
  options: {
    mysql: mysql,
    mysqlOptions: {
      host: 'localhost',
      user: 'root',
      password: 'root'
    }
  }
}, function(err) {
  throw err;
});
```

License
-------
MIT