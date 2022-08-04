'use strict';
const prefix = '/api/auth';

const controller = require('../controllers/auth.controller');

module.exports = (router) => router.get(`${prefix}/:id`, controller.create);