const Joi = require('joi')

// module.exports = {
//   createBusinessValidation: Joi.object({
//     name_space: Joi.string().required(),
//     name: Joi.string().required(),
//     cancel_date: Joi.string().required(),
//   }),
// };

exports.createNew = (req, res, next) => {
  res.json({})
}