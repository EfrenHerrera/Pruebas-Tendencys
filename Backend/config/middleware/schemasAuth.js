const Joi = require('joi');

module.exports = {
    authTokenCreate: Joi.object().keys({
        application_id: Joi.string().required(),
    })
};