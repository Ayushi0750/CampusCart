
const Joi = require('joi');

module.exports.listing2Schema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string()
    .valid(
      "Music", "Business", "Comedy", "Technology", "Food",
      "Wellness", "Film", "Sports", "Art", "Festival"
    )
    .required(),
  availableTickets: Joi.number().min(0).required(),
  imageUrl: Joi.string()
  .allow('')
  .uri()
  .default('https://source.unsplash.com/featured/?event'),
  
  ownerId: Joi.string().required()
});

//review schema

module.exports.review2Schema = Joi.object({
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
