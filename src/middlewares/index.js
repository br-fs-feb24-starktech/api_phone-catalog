const validateEmailFormat = require("./validateEmailFormat");
const validateIfEmailNotExists = require("./validateIfEmailNotExists");
const validateLoginFields = require("./validateLoginFields");
const validateLoginPassword = require("./validateLoginPassword");
const validateQueryParams = require("./validateQueryParams");
const validateToken = require("./validateToken");

module.exports = {
  validateQueryParams,
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
  validateToken,
}