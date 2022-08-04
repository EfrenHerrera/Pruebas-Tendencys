const Joi = require('joi');

module.exports = {
    aplicationCreate: Joi.object().keys({
        name: Joi.string().required(),
    })
};