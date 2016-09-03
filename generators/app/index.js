'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-vuejs-component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'Enter your component name.',
      default: 'component'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.vue'),
      {componentName: this.props.componentName}
    );
    this.fs.copy(
      this.templatePath('component.html'),
      this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.html')
    );
    this.fs.copy(
      this.templatePath('component.js'),
      this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.js')
    );
    this.fs.copy(
      this.templatePath('component.scss'),
      this.destinationPath('src/components/' + this.props.componentName + '/' + this.props.componentName + '.scss')
    );
  }
});
