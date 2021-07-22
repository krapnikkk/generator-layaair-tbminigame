var polea = (() => {
  // src/GameConfig.ts
  var GameConfig = class {
    constructor() {
    }
    static init() {
      var reg = Laya.ClassUtils.regClass;
    }
  };
  GameConfig.width = 750;
  GameConfig.height = 1334;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "none";
  GameConfig.alignV = "top";
  GameConfig.alignH = "left";
  GameConfig.startScene = "loading/loading.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  // src/enum/enum.ts
  var Env;
  (function(Env2) {
    Env2[Env2["Prd"] = 0] = "Prd";
    Env2[Env2["Dev"] = 1] = "Dev";
  })(Env || (Env = {}));
  var Platform;
  (function(Platform2) {
    Platform2["Web"] = "Web";
    Platform2["TBMiniGame"] = "TBMiniGame";
    Platform2["MiniGame"] = "MiniGame";
  })(Platform || (Platform = {}));
  var EUILayer;
  (function(EUILayer2) {
    EUILayer2["Bg"] = "Bg";
    EUILayer2["Main"] = "Main";
    EUILayer2["Panel"] = "Panel";
    EUILayer2["Popup"] = "Popup";
    EUILayer2["Prop"] = "Prop";
    EUILayer2["Tip"] = "Tip";
    EUILayer2["Pause"] = "Pause";
    EUILayer2["Set"] = "Set";
    EUILayer2["Top"] = "Top";
    EUILayer2["Loading"] = "Loading";
    EUILayer2["Native"] = "Native";
  })(EUILayer || (EUILayer = {}));

  // src/config/Config.ts
  var Config = class {
  };
  Config.version = "0.0.1";
  Config.ENV = Env.Dev;
  Config.platform = Platform.Web;
  Config.platformArr = [Platform.MiniGame, Platform.TBMiniGame];
  Config.baseRoot = "https://xiaoailingdong.oss-cn-shenzhen.aliyuncs.com/CClient/Test/res/fgui/";

  // src/core/ui/UIConfig.ts
  var UIConfig = class {
  };
  UIConfig.baseRoot = "";
  UIConfig.fguiFileExtension = "bin";
  UIConfig.fguiFileArr = [
    ""
  ];

  // src/core/ui/UIManager.ts
  var UIManager = class {
    constructor() {
      this.windowMap = new Map();
      if (UIManager._inst) {
        throw "singleton class is not use new constructor!";
      }
    }
    static get inst() {
      if (this._inst == null) {
        this._inst = new UIManager();
      }
      return this._inst;
    }
    init() {
      fgui.UIConfig.packageFileExtension = UIConfig.fguiFileExtension;
      Laya.stage.addChild(fgui.GRoot.inst.displayObject);
    }
    add(window2) {
      this.windowMap.set(window2.url, window2);
      return window2;
    }
    remove(window2) {
      if (this.windowMap.has(window2.url)) {
        this.windowMap.delete(window2.url);
        window2.dispose();
      }
    }
    show(url, param) {
      if (this.windowMap.has(url)) {
        let window2 = this.windowMap.get(url);
        window2.data = param;
        if (window2.isShowing) {
        } else {
          window2.show();
        }
      } else {
        console.error("\u663E\u793A\u7A97\u53E3\u5931\u8D25\u6CA1\u6709\u6CE8\u518C\u7A97\u53E3 url:" + url);
      }
    }
    hide(url, param) {
      if (this.windowMap.has(url)) {
        let window2 = this.windowMap.get(url);
        if (window2.isShowing) {
          window2.data = param;
          window2.hide();
        }
      } else {
        console.error("\u9690\u85CF\u7A97\u53E3\u5931\u8D25\u6CA1\u6709\u6CE8\u518C\u7A97\u53E3 url:" + url);
      }
    }
    hideAll(filter = null) {
      this.windowMap.forEach((v, k) => {
        if (v.isShowing && (filter == null || filter.findIndex((a) => a == v.url) == -1)) {
          v.hide();
        }
      });
    }
    delAll(filter = null) {
      let needDel = new Array();
      this.windowMap.forEach((v, k) => {
        if (filter == null || filter.findIndex((a) => a == v.url) == -1) {
          needDel.push(v.url);
        }
      });
      for (let i = 0; i < needDel.length; i++) {
        this.remove(this.windowMap.get(needDel[i]));
      }
    }
    del(url) {
      if (this.windowMap.has(url)) {
        this.remove(this.windowMap.get(url));
      }
    }
  };

  // src/manager/DataManager.ts
  var DataManager = class {
    static get inst() {
      if (this._inst == null) {
        this._inst = new DataManager();
      }
      return this._inst;
    }
    constructor() {
      if (DataManager._inst) {
        throw "singleton class is not use new constructor!";
      }
    }
    init() {
      this.getUserInfo();
    }
    getUserInfo() {
    }
  };

  // src/App.ts
  var App = class {
    constructor() {
      this.initConfig();
      this.init();
    }
    initConfig() {
      this.initPlatform();
      let resConfig = false;
      this.loadUIRes();
      console.log(`\u5F53\u524D\u7248\u672C\uFF1A${Config.version}\uFF0C\u73AF\u5883\u5E73\u53F0\uFF1A${Config.platform}`);
    }
    initPlatform() {
      let platform = Platform.Web;
      console.log(Config.platformArr);
      if (Laya.Browser._isMiniGame) {
        for (let i = 0; i < Config.platformArr.length; i++) {
          let item = Config.platformArr[i];
          if (Laya.Browser[`on${item}`]) {
            platform = item;
            break;
          }
        }
      }
      return platform;
    }
    init() {
      Laya.stage.addChild(fgui.GRoot.inst.displayObject);
      UIManager.inst.init();
      DataManager.inst.init();
    }
    loadUIRes() {
      Laya.stage.addChild(fgui.GRoot.inst.displayObject);
      fgui.UIPackage.loadPackage(`${Config.baseRoot}Invitation`, Laya.Handler.create(this, this.onUILoaded));
    }
    onUILoaded() {
      let view = fgui.UIPackage.createObject("Invitation", "Main");
      fgui.GRoot.inst.addChild(view);
    }
  };

  // src/Main.ts
  var Main = class {
    constructor() {
      if (window["Laya3D"])
        Laya3D.init(GameConfig.width, GameConfig.height);
      else
        Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
      Laya["Physics"] && Laya["Physics"].enable();
      Laya["DebugPanel"] && Laya["DebugPanel"].enable();
      Laya.stage.scaleMode = GameConfig.scaleMode;
      Laya.stage.screenMode = GameConfig.screenMode;
      Laya.stage.alignV = GameConfig.alignV;
      Laya.stage.alignH = GameConfig.alignH;
      Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
      if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
        Laya.enableDebugPanel();
      if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
        Laya["PhysicsDebugDraw"].enable();
      if (GameConfig.stat)
        Laya.Stat.show();
      Laya.alertGlobalError(true);
      Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    onVersionLoaded() {
      Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    }
    onConfigLoaded() {
      GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
      new App();
    }
  };
  new Main();
})();
//# sourceMappingURL=bundle.js.map
