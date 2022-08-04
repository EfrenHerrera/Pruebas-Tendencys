const Joi = require('joi');

module.exports = {
    logsCreate: Joi.object().keys({
        application_id: Joi.string().alphanum().required(),
        type: Joi.string().valid('error', 'info', 'warning').required(),
        priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
        path: Joi.string().required(),
        message: Joi.string().required(),
        request: Joi.object({ data: Joi.any() }).required(),
        response: Joi.object({ data: Joi.any() }).required(),
    }),
    logsUpdate: Joi.object().keys({
        application_id: Joi.string().alphanum().required(),
        type: Joi.string().valid('error', 'info', 'warning').required(),
        priority: Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
        path: Joi.string().required(),
        message: Joi.string().required(),
        request: Joi.object({ data: Joi.any() }).required(),
        response: Joi.object({ data: Joi.any() }).required(),
    })
};