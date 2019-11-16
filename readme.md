# Matter In Motion. JSON Schema Validator

[![NPM Version](https://img.shields.io/npm/v/@matter-in-motion/validators.jsonschema.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/validators.jsonschema)
[![NPM Downloads](https://img.shields.io/npm/dt/@matter-in-motion/validators.jsonschema.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/validators.jsonschema)

**Node.js framework for building applications (cli, server, etc...).**

## JSON Schema

(JSON Schema)[(http://json-schema.org)] validator extension for [matter in motion](https://github.com/matter-in-motion/mm) framework. Adds [Ajv](https://github.com/epoberezkin/ajv) as `validators.jsonschema` with two plugins [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch) and [ajv-keywords](https://github.com/epoberezkin/ajv-keywords)

### Installation

`npm i @matter-in-motion/validators.jsonschema`

## Usage

1. Add `validators.jsonschema` to your extensions in the settings.

```js
const validator = app.require('validators.jsonschema');
const valid = validator.validate(schema, data);
```

## Settings

All of the [Ajv options](https://github.com/epoberezkin/ajv#options)

License: MIT.
