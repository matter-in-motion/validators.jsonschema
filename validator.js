'use strict';
const Ajv = require('ajv');
const ajvKeywords = require('ajv-keywords');
const ajvMergePatch = require('ajv-merge-patch');

class Environment {
  initRequired = true;

  init({ settings }) {
    this.instance = new Ajv(settings.jsonschema);
    ajvKeywords(this.instance);
    ajvMergePatch(this.instance);
  }
}

module.exports = Environment;
