


const Joi = require('joi');

module.exports.listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow('').default(''),
  image: Joi.object({
  url: Joi.string().allow('').uri().default('https://source.unsplash.com/featured/?book')
}).default({}),
  
  price: Joi.number().required(),
  location: Joi.string().allow('').default(''),
  country: Joi.string().allow('').default(''),
  seller: Joi.object({
    name: Joi.string().allow('').default(''),
    college: Joi.string().allow('').default(''),
    category: Joi.string().valid('hostler', 'day scholar', 'faculty'),
    contact: Joi.object({
      phone: Joi.string().allow('').default(''),
      email: Joi.string().email().allow('').default('')
    }).default({})
  }).default({}),
  
 
  dateListed: Joi.date().default(() => new Date()),
  isBarterAvailable: Joi.boolean().default(false),
  barterConditions: Joi.string().allow('').default('')
});


//review schema

module.exports.reviewSchema = Joi.object({
  comment: Joi.string().required().messages({
    "string.empty": "Comment cannot be empty.",
    "any.required": "Comment is required."
  }),
  rating: Joi.number().min(1).max(5).required().messages({
    "number.base": "Rating must be a number.",
    "number.min": "Rating must be at least 1.",
    "number.max": "Rating cannot exceed 5.",
    "any.required": "Rating is required."
  }),
  
 createdAt : Joi.date().default(() => new Date()),
});
