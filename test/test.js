'use strict';
const test = require('ava');
const App = require('@matter-in-motion/app');
const extension = require('../index');

process.env.NODE_ENV = '';

const app = new App({
  extensions: [extension]
});
const validator = app.require('validators.jsonschema');

test('adds schema', t => {
  validator.addSchema({ type: 'string' }, 'test');
  t.pass();
});

test('fails to add the same schema', t => {
  const err = t.throws(() => validator.addSchema({ type: 'string' }, 'test'));
  t.is(err.message, 'schema with key or id "test" already exists');
});

test('validates against the schema', t => {
  validator.validate('test', 'test');
  t.pass();
});

test('get the schema and validates against it', t => {
  const schema = validator.getSchema('test');
  t.true(schema('test'));
});

test('get the schema validation errors', t => {
  const schema = validator.getSchema('test');
  t.false(schema(1));
  t.truthy(schema.errors);
  const errors = validator.errorsText(schema.errors);
  t.true(typeof errors === 'string');
});

test('compile schema', t => {
  const schema = validator.compile({ type: 'string' });
  t.true(schema('test'));
});

test('removes schema', t => {
  validator.removeSchema('test');
  const schema = validator.getSchema('test');
  t.is(schema, undefined);
});

test('adds a keyword', t => {
  validator.addKeyword('myrange', {
    type: 'number',
    compile: (sch, parentSchema) => {
      const min = sch[0];
      const max = sch[1];

      return parentSchema.exclusiveRange === true
        ? data => data > min && data < max
        : data => data >= min && data <= max;
    }
  });

  const schema = validator.compile({ myrange: [2, 4], exclusiveRange: true });
  t.true(schema(2.01));
  t.true(schema(3.99));
  t.false(schema(2));
  t.false(schema(4));
});
