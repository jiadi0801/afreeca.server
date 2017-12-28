const Joi = require('joi');

const myJoi = Joi.extend(joi =>( 
    {
        base: joi.string(),
        name: 'string',   // type
        language: {
            jsonstring: 'it must be a json string',
        },
        rules: [
            {
                name: 'jsonstring',
                validate(params, value, state, options) {
                    try {
                        JSON.parse(value || {});
                    } catch (e) {
                        return this.createError('string.jsonstring', {v: value}, state, options);
                    }
                    return value;
                }
            }
        ],
    }
));

// module.exports = Joi;
module.exports = myJoi;