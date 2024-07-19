const validadeUserRegisterFields = require("./validadeUserRegisterFields");
const validateEmailFormat = require("./validateEmailFormat");
const validateIfEmailNotExists = require("./validateIfEmailNotExists");
const validateLoginFields = require("./validateLoginFields");
const validateLoginPassword = require("./validateLoginPassword");
const validateQueryParams = require("./validateQueryParams");
const validateToken = require("./validateToken");
const validateUserRegisterEmail = require("./validateUserRegisterEmail");

module.exports = {
  validateQueryParams,
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
  validateToken,
  validadeUserRegisterFields,
  validateUserRegisterEmail,
}