const knex = require ('knex');
const configurantion = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configurantion.test : configurantion.development;

const connetion = knex(config);

module.exports = connetion;