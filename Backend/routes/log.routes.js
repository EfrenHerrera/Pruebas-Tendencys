'use strict';

const prefix = '/api/logs';
const controller = require('../controllers/main.controller');
const isAuth = require('../config/middleware/is-auth');

module.exports = (router) => { 
    router.get(`${prefix}/`, isAuth, controller.all);
    router.post(`${prefix}/`, isAuth, controller.create);
    router.get(`${prefix}/:id`, isAuth, controller.info);
    router.put(`${prefix}/:id`, isAuth, controller.update);
    router.delete(`${prefix}/:id`, isAuth, controller.delete);
}