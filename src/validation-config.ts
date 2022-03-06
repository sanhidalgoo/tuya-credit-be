import * as Joi from 'joi';

export default Joi.object({
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
});
