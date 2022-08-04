'use strict';

const prefix = '/api/applications';
const controller = require('../controllers/applications.controller');

module.exports = (router) => { 
    router.get(`${prefix}/`, controller.all);
    router.post(`${prefix}/`, controller.create);
}