exports.register = function (server, options, next) {

  server.route({
    path: '/',
    method: 'GET',
    handler: function (request, reply) {

      reply('works');

    }
  });

  next();

};

exports.register.attributes = {
  pkg: require('./package.json')
};