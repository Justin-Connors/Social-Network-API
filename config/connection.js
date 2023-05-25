const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/socialnetwork');

module.exports = connection;