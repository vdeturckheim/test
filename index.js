'use strict';

var opbeat = require('opbeat').start({
  appId: '78544d65cf',
  organizationId: '524b0487555c4ee29fefbb61cf3d6f1a',
  secretToken: '517f5411e5ac40a6ea5054a91b3b0b9bd6858883'
})


const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/crash',
    handler: function (request, reply) {
        throw new Error('ponay');
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
