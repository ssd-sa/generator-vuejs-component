'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-vuejs-component:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({componentName: 'component'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'src/component/component.vue',
      'src/component/component.html',
      'src/component/component.js',
      'src/component/component.scss'
    ]);
  });
});
