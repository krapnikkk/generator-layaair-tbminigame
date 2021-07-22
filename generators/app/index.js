'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`欢迎使用\n${chalk.green('generator-layaair-tbminigame')}`)
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
    // this.fs.copy(
    //   this.templatePath('.gitignore'),
    //   this.destinationPath(`${this.props.appName}/.gitignore`)
    // );
    this.log("正在复制模板文件......");
    this.fs.copy(
      this.templatePath(`example.laya`),
      this.destinationPath(`${this.props.appName}/example.laya`)
    );
    this.fs.copy(
      this.templatePath('readme.md'),
      this.destinationPath(`${this.props.appName}/readme.md`)
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath(`${this.props.appName}/gitignore`)
    );
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath(`${this.props.appName}/tsconfig.json`)
    );
    this.fs.copy(this.templatePath(".laya"), this.destinationPath(`${this.props.appName}/.laya`));
    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(`${this.props.appName}/.vscode`));
    this.fs.copy(this.templatePath("bin"), this.destinationPath(`${this.props.appName}/bin`));
    this.fs.copy(this.templatePath("laya"), this.destinationPath(`${this.props.appName}/laya`));
    this.fs.copy(this.templatePath("libs"), this.destinationPath(`${this.props.appName}/libs`));
    this.fs.copy(this.templatePath("src"), this.destinationPath(`${this.props.appName}/src`));
    this.fs.copy(this.templatePath("tools"), this.destinationPath(`${this.props.appName}/tools`));
    this.fs.copy(this.templatePath("UIProject"), this.destinationPath(`${this.props.appName}/UIProject`));
    this.log("复制模板文件完成！");
    }

  generateClient() {
    // console.log("generateClient")
    // this.sourceRoot(path.join(__dirname, 'templates'));
    // this.destinationPath('./');
  }

  install() {
    this.log("正在重命名模板文件......");
    fs.renameSync(this.destinationPath(`${this.props.appName}/UIProject/example.fairy`), this.destinationPath(`${this.props.appName}/${this.props.appName}.fairy`));
    fs.renameSync(this.destinationPath(`${this.props.appName}/example.laya`), this.destinationPath(`${this.props.appName}/${this.props.appName}.laya`));
    fs.renameSync(this.destinationPath(`${this.props.appName}/gitignore`), this.destinationPath(`${this.props.appName}/.gitignore`));
    fs.writeFileSync(this.destinationPath(`${this.props.appName}/${this.props.appName}.laya`),`{"proName":"${this.props.appName}","engineType":0,"proType":1,"layaProType":1,"version":"2.1.0"}`)
    this.log("重命名模板文件完成！");
    // this.installDependencies();
  }
};




