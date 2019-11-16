'use strict';
const Validator = require('./validator');

module.exports = () => ({
  validators: { jsonschema: new Validator() }
});
