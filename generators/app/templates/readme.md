## 使用前请初始化项目配置
双击start.bat文件

## 版本説明
LayaAir：2.12.0 [该版本sdk已修复淘宝小程序环境音频播放异常问题和支持淘宝小部件]

## vscode工具调试
项目已自动配置成[vscode工作流](https://ldc2.layabox.com/doc/?nav=zh-ts-3-0-9)


## 工具一览
## [polea](https://github.com/Hunterib/Laya-polea)

当前版本：**0.2.5**

安装方法：
```
npm install polea@latest 
```

### init.bat
启动polea初始化项目【目前自动初始化项目】

### compile.bat
使用polea转移ts代码为js

### watch.bat【暂不可用】
自动监听使用polea转换ts代码为js

### watch-ui.bat【暂不可用】
自动监听使用polea转换IDE已保存的UI发布成资源文件

### watch-all.bat【暂不可用】
自动监听使用polea转换ts代码为js&转换IDE已保存的UI发布成资源文件

## [Fairygui](https://fairygui.com/)

[教程](https://fairygui.com/docs/editor)

[编辑器下载](https://fairygui.com/download)

[sdk](https://github.com/fairygui/FairyGUI-layabox)

### 【GenCode】代码发布插件
已内置【GenCode】代码发布插件，发布代码时，Main组件自动绑定上级目录同名脚本【因此入口组件文件名字必须默认为Main】

目录结构：
```
- module
    - Demo
        DemoBinder.ts // 组件注册绑定脚本
        ...
        UI_Main.ts // 原代码发布的入口文件
    Demo.ts // 自主新建入口文件，并手动继承原入口代码     
```
调整内容：
- DemoBinder.ts // 自动修改
```
import UI_Main from "../Demo"; // 插件会自动把原入口代码文件的引用替换成自主新建入口文件【遵循包名】
```
- Demo.ts // 需手动修改
```
import UI_Main from "./Demo/UI_Main";

export default class Demo extends UI_Main{
    constructor(){
        super();
    }

    /**
    * 这里编写你的代码逻辑
    **/
}
```

#### 项目打包
命令行发布项目

安装配置，部分由于github原因，需要配置host，[参考](https://github.com/ineo6/hosts)
```
npm install 
```

compile
```
node layarepublic/gulp/bin/gulp.js --gulpfile=D:/workspace/project/generator-layaair-tbminigame/generators/app/templates/layarepublic/compile.js --config=D:/workspace/project/generator-layaair-tbminigame/generators/app/templates/.laya/taobaominiapp.json publish
```

publish
```
node layarepublic/gulp/bin/gulp.js --gulpfile=D:/workspace/project/generator-layaair-tbminigame/generators/app/templates/layarepublic/publish.js --config=D:/workspace/project/generator-layaair-tbminigame/generators/app/templates/.laya/taobaominiapp.json publish
```



