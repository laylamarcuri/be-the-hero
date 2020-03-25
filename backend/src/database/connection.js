const knex = require ('knex');
const configurantion = require('../../knexfile');

const connetion = knex(configurantion.development);

module.exports = connetion;