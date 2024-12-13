import Joi from "joi";

export const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required"
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required"
  })
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required"
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required"
  })
});

export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    "any.required": "Refresh token is required"
  })
});