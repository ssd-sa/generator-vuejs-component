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
      'src/components/component/component.vue',
      'src/components/component/component.html',
      'src/components/component/component.js',
      'src/components/component/component.scss'
    ]);
  });
});
