(function () {
    'use strict';

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
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

    var Env;
    (function (Env) {
        Env[Env["Prd"] = 0] = "Prd";
        Env[Env["Dev"] = 1] = "Dev";
    })(Env || (Env = {}));
    var Platform;
    (function (Platform) {
        Platform["Web"] = "Web";
        Platform["TBMiniGame"] = "TBMiniGame";
        Platform["MiniGame"] = "MiniGame";
    })(Platform || (Platform = {}));
    var EUILayer;
    (function (EUILayer) {
        EUILayer["Bg"] = "Bg";
        EUILayer["Main"] = "Main";
        EUILayer["Panel"] = "Panel";
        EUILayer["Popup"] = "Popup";
        EUILayer["Prop"] = "Prop";
        EUILayer["Tip"] = "Tip";
        EUILayer["Pause"] = "Pause";
        EUILayer["Set"] = "Set";
        EUILayer["Top"] = "Top";
        EUILayer["Loading"] = "Loading";
        EUILayer["Native"] = "Native";
    })(EUILayer || (EUILayer = {}));

    class Config {
    }
    Config.version = "0.0.1";
    Config.ENV = Env.Dev;
    Config.platform = Platform.Web;
    Config.platformArr = [Platform.MiniGame, Platform.TBMiniGame];
    Config.baseRoot = "https://xiaoailingdong.oss-cn-shenzhen.aliyuncs.com/CClient/Test/res/fgui/";

    class UIConfig {
    }
    UIConfig.baseRoot = "";
    UIConfig.fguiFileExtension = "bin";
    UIConfig.startScene = "Invitation";
    UIConfig.startEntry = "Main";
    UIConfig.fguiFileArr = [
        {
            "name": "Invitation",
        }
    ];

    class Event {
    }
    Event.ON_PROGRESS = "ON_PROGRESS";

    class UIBase extends fgui.Window {
        setup() {
        }
        onInit() {
            console.log("onInit");
        }
        dispose() {
            super.dispose();
        }
    }

    class UI_Main extends UIBase {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "Main"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
            this.m_loader_tips = (this.getChildAt(1));
            this.m_panel_date_activity = (this.getChildAt(2));
            this.m_panel_ranking = (this.getChildAt(3));
            this.m_btn_invite = (this.getChildAt(4));
            this.m_txt_tips_invite_count = (this.getChildAt(5));
            this.m_btn_rule = (this.getChildAt(6));
            this.m_bg_polyfill = (this.getChildAt(7));
            this.m_list_recommendation = (this.getChildAt(8));
            this.m_btn_jackpot = (this.getChildAt(9));
            this.m_btn_prize = (this.getChildAt(10));
            this.m_group_float = (this.getChildAt(11));
        }
    }
    UI_Main.URL = "ui://aksov0e9m5i80";

    class Invitation extends UI_Main {
        constructor() {
            super();
            console.log("constructor");
        }
        onInit() {
            super.onInit();
        }
        init() {
        }
        onConstruct() {
            super.onConstruct();
            console.log("onConstruct");
            this.onClick(this, this.onTouch);
        }
        onTouch() {
            console.log("click");
        }
    }

    class UI_btn_common_base extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "btn_common_base"));
        }
        onConstruct() {
            this.m_status = this.getControllerAt(0);
        }
    }
    UI_btn_common_base.URL = "ui://aksov0e9m5i810";

    class UI_panel_date_activity extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "panel_date_activity"));
        }
        onConstruct() {
            this.m_status = this.getControllerAt(0);
            this.m_txt_count = (this.getChildAt(4));
            this.m_txt_date = (this.getChildAt(5));
            this.m_txt_time = (this.getChildAt(6));
            this.m_txt_desc_1 = (this.getChildAt(7));
            this.m_txt_desc_2 = (this.getChildAt(8));
            this.m_txt_desc_3 = (this.getChildAt(9));
            this.m_txt_desc_4 = (this.getChildAt(10));
            this.m_txt__active = (this.getChildAt(11));
            this.m_txt_finish = (this.getChildAt(12));
        }
    }
    UI_panel_date_activity.URL = "ui://aksov0e9m5i83";

    class UI_panel_ranking extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "panel_ranking"));
        }
        onConstruct() {
            this.m_tab = this.getControllerAt(0);
            this.m_bg = (this.getChildAt(0));
            this.m_btn_tab_rank = (this.getChildAt(1));
            this.m_btn_tab_invitation = (this.getChildAt(2));
            this.m_list_rank = (this.getChildAt(3));
            this.m_list_invitation = (this.getChildAt(4));
        }
    }
    UI_panel_ranking.URL = "ui://aksov0e9m5i8a";

    class UI_btn_tab_base extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "btn_tab_base"));
        }
        onConstruct() {
            this.m_triangle = (this.getChildAt(3));
        }
    }
    UI_btn_tab_base.URL = "ui://aksov0e9m5i8c";

    class UI_list_rank extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "list_rank"));
        }
        onConstruct() {
            this.m_status = this.getControllerAt(0);
            this.m_txt_default = (this.getChildAt(0));
            this.m_list_rank = (this.getChildAt(1));
            this.m_item = (this.getChildAt(2));
        }
    }
    UI_list_rank.URL = "ui://aksov0e9m5i8e";

    class UI_list_item_rank extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "list_item_rank"));
        }
        onConstruct() {
            this.m_txt_number = (this.getChildAt(0));
            this.m_bg_avatar = (this.getChildAt(1));
            this.m_loader_avatar = (this.getChildAt(2));
            this.m_txt_nickname = (this.getChildAt(3));
            this.m_txt_invitation = (this.getChildAt(4));
            this.m_loader_award = (this.getChildAt(5));
            this.m_line = (this.getChildAt(6));
        }
    }
    UI_list_item_rank.URL = "ui://aksov0e9m5i8f";

    class UI_loader_avatar extends fgui.GLabel {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "loader_avatar"));
        }
        onConstruct() {
            this.m_mask = (this.getChildAt(0));
        }
    }
    UI_loader_avatar.URL = "ui://aksov0e9m5i8k";

    class UI_loader_award extends fgui.GLabel {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "loader_award"));
        }
        onConstruct() {
            this.m_frame = (this.getChildAt(0));
            this.m_loader_award = (this.getChildAt(1));
        }
    }
    UI_loader_award.URL = "ui://aksov0e9m5i8m";

    class UI_item_record extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "item_record"));
        }
        onConstruct() {
            this.m_ranking = this.getControllerAt(0);
            this.m_prize = this.getControllerAt(1);
            this.m_bg = (this.getChildAt(0));
            this.m_txt_number = (this.getChildAt(1));
            this.m_bg_avatar = (this.getChildAt(2));
            this.m_loader_avatar = (this.getChildAt(3));
            this.m_txt_nickname = (this.getChildAt(4));
            this.m_txt_invitation = (this.getChildAt(5));
            this.m_loader_award = (this.getChildAt(6));
            this.m_txt_rank_bg = (this.getChildAt(7));
            this.m_txt_rank = (this.getChildAt(8));
        }
    }
    UI_item_record.URL = "ui://aksov0e9m5i8p";

    class UI_list_invitation extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "list_invitation"));
        }
        onConstruct() {
            this.m_status = this.getControllerAt(0);
            this.m_txt_invitation = (this.getChildAt(0));
            this.m_list_invitation = (this.getChildAt(1));
            this.m_txt_tips_title = (this.getChildAt(2));
            this.m_txt_tips_desc = (this.getChildAt(3));
            this.m_txt_tips = (this.getChildAt(4));
        }
    }
    UI_list_invitation.URL = "ui://aksov0e9m5i8s";

    class UI_list_item_invitation extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "list_item_invitation"));
        }
        onConstruct() {
            this.m_bg_avatar = (this.getChildAt(0));
            this.m_loader_avatar = (this.getChildAt(1));
            this.m_txt_nickname = (this.getChildAt(2));
            this.m_txt_date = (this.getChildAt(3));
            this.m_line = (this.getChildAt(4));
        }
    }
    UI_list_item_invitation.URL = "ui://aksov0e9m5i8t";

    class UI_btn_invite extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "btn_invite"));
        }
        onConstruct() {
            this.m_scale = this.getTransitionAt(0);
        }
    }
    UI_btn_invite.URL = "ui://aksov0e9m5i8u";

    class UI_list_item_recommendation extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "list_item_recommendation"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
            this.m_loader_goods = (this.getChildAt(1));
            this.m_txt_goodsName = (this.getChildAt(2));
            this.m_txt_prize = (this.getChildAt(3));
            this.m_btn_view = (this.getChildAt(4));
            this.m_btn_collect = (this.getChildAt(5));
        }
    }
    UI_list_item_recommendation.URL = "ui://aksov0e9m5i8y";

    class UI_loader_goods extends fgui.GLabel {
        static createInstance() {
            return (fgui.UIPackage.createObject("Invitation", "loader_goods"));
        }
        onConstruct() {
            this.m_mask = (this.getChildAt(0));
        }
    }
    UI_loader_goods.URL = "ui://aksov0e9m5i8z";

    class InvitationBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(Invitation.URL, Invitation);
            fgui.UIObjectFactory.setExtension(UI_btn_common_base.URL, UI_btn_common_base);
            fgui.UIObjectFactory.setExtension(UI_panel_date_activity.URL, UI_panel_date_activity);
            fgui.UIObjectFactory.setExtension(UI_panel_ranking.URL, UI_panel_ranking);
            fgui.UIObjectFactory.setExtension(UI_btn_tab_base.URL, UI_btn_tab_base);
            fgui.UIObjectFactory.setExtension(UI_list_rank.URL, UI_list_rank);
            fgui.UIObjectFactory.setExtension(UI_list_item_rank.URL, UI_list_item_rank);
            fgui.UIObjectFactory.setExtension(UI_loader_avatar.URL, UI_loader_avatar);
            fgui.UIObjectFactory.setExtension(UI_loader_award.URL, UI_loader_award);
            fgui.UIObjectFactory.setExtension(UI_item_record.URL, UI_item_record);
            fgui.UIObjectFactory.setExtension(UI_list_invitation.URL, UI_list_invitation);
            fgui.UIObjectFactory.setExtension(UI_list_item_invitation.URL, UI_list_item_invitation);
            fgui.UIObjectFactory.setExtension(UI_btn_invite.URL, UI_btn_invite);
            fgui.UIObjectFactory.setExtension(UI_list_item_recommendation.URL, UI_list_item_recommendation);
            fgui.UIObjectFactory.setExtension(UI_loader_goods.URL, UI_loader_goods);
        }
    }

    class ModuleManager {
        static init() {
            this.bindAll();
            this.registerAll();
        }
        static bindAll() {
            InvitationBinder.bindAll();
        }
        static registerAll() {
            Laya.ClassUtils.regClass("Invitation", Invitation);
        }
    }

    class UIManager {
        constructor() {
            this.windowMap = new Map();
            this._loadedCount = 0;
            this._totalResCount = 0;
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
            this.initConfig();
            this.loadUIRes();
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        }
        initConfig() {
            fgui.UIConfig.packageFileExtension = UIConfig.fguiFileExtension;
        }
        loadUIRes() {
            this._totalResCount = UIConfig.fguiFileArr.length;
            for (let i = 0; i < this._totalResCount; i++) {
                let res = UIConfig.fguiFileArr[i];
                let pkgName = res.name;
                fgui.UIPackage.loadPackage(`${Config.baseRoot}${pkgName}`, Laya.Handler.create(this, this.onUILoaded));
            }
        }
        onUILoaded() {
            this._loadedCount++;
            Laya.stage.event(Event.ON_PROGRESS, [this._loadedCount, this._totalResCount]);
            if (this._loadedCount == this._totalResCount) {
                ModuleManager.init();
                let component = fgui.UIPackage.createObject(UIConfig.startScene, "Main");
                component.contentPane = component;
                fgui.GRoot.inst.addChild(component);
            }
        }
        add(window) {
            this.windowMap.set(window.url, window);
        }
        remove(window) {
            if (this.windowMap.has(window.url)) {
                this.windowMap.delete(window.url);
                window.dispose();
            }
        }
        show(url, param) {
            if (this.windowMap.has(url)) {
                let window = this.windowMap.get(url);
                window.data = param;
                if (window.isShowing) {
                }
                else {
                    window.show();
                }
            }
            else {
                console.error("显示窗口失败没有注册窗口 url:" + url);
            }
        }
        hide(url, param) {
            if (this.windowMap.has(url)) {
                let window = this.windowMap.get(url);
                if (window.isShowing) {
                    window.data = param;
                    window.hide();
                }
            }
            else {
                console.error("隐藏窗口失败没有注册窗口 url:" + url);
            }
        }
        hideAll(filter = null) {
            this.windowMap.forEach((v, k) => {
                if (v.isShowing && (filter == null || filter.findIndex(a => a == v.url) == -1)) {
                    v.hide();
                }
            });
        }
        delAll(filter = null) {
            let needDel = new Array();
            this.windowMap.forEach((v, k) => {
                if (filter == null || filter.findIndex(a => a == v.url) == -1) {
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
    }

    class DataManager {
        constructor() {
            if (DataManager._inst) {
                throw "singleton class is not use new constructor!";
            }
        }
        static get inst() {
            if (this._inst == null) {
                this._inst = new DataManager();
            }
            return this._inst;
        }
        init() {
            this.getUserInfo();
        }
        getUserInfo() {
        }
    }

    class App {
        constructor() {
            this.initConfig();
            this.init();
        }
        initConfig() {
            this.initPlatform();
            let resConfig = false;
            console.log(`当前版本：${Config.version}，环境平台：${Config.platform}`);
        }
        initPlatform() {
            let platform = Platform.Web;
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
            UIManager.inst.init();
            DataManager.inst.init();
        }
        onUILoaded() {
        }
    }

    class Main {
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
    }
    new Main();

}());
