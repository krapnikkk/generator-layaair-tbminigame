'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(
    //     `Welcome to the laudable ${chalk.red('generator-layaair-tbminigame')} generator!`
    //   )
    // );

    // const prompts = [
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
    this.log(
      yosay(`欢迎使用\n${chalk.green('generator-layaair')}创建项目 !`)
    );

    const prompts = [
      {
        type    : 'input',
        name    : 'appName',
        message : '请输入项目名称:',
        default : this.appName        //appName是内置对象，代表工程名，这里就是ys
     },
     {
       type    : 'input',
       name    : 'appAuthor',
       message : '请输入作者姓名:',
       default : 'nobody'
    },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(`${this.props.appName}/.gitignore`)
    );
    this.fs.copy(
      this.templatePath(`example.laya`),
      this.destinationPath(`${this.props.appName}/example.laya`)
    );
    this.fs.copy(
      this.templatePath('readme.md'),
      this.destinationPath(`${this.props.appName}/readme.md`)
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(`${this.props.appName}/.gitignore`)
    );
    this.fs.copy(this.templatePath(".laya"), this.destinationPath(`${this.props.appName}/.laya`));
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(`${this.props.appName}/.vscode`));
    this.fs.copy(this.templatePath("bin"), this.destinationPath(`${this.props.appName}/bin`));
    this.fs.copy(this.templatePath("laya"), this.destinationPath(`${this.props.appName}/laya`));
    this.fs.copy(this.templatePath("libs"), this.destinationPath(`${this.props.appName}/libs`));
    this.fs.copy(this.templatePath("src"), this.destinationPath(`${this.props.appName}/src`));

    }

  generateClient() {
    // console.log("generateClient")
    // this.sourceRoot(path.join(__dirname, 'templates'));
    // this.destinationPath('./');
  }

  install() {
    fs.renameSync(this.destinationPath(`${this.props.appName}/example.laya`), this.destinationPath(`${this.props.appName}/${this.props.appName}.laya`));
    fs.writeFileSync(this.destinationPath(`${this.props.appName}/${this.props.appName}.laya`),`{"proName":"${this.props.appName}","engineType":0,"proType":1,"layaProType":1,"version":"2.1.0"}`)
  
    // this.installDependencies();
  }
};




