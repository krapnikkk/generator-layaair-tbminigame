
import Config from "./config/Config";
import UIManager from "./core/ui/UIManager";
import { Platform } from "./enum/enum";
import DataManager from "./manager/DataManager";
import SceneManager from "./manager/SceneManager";
export default class App {
    constructor() {
        this.initConfig();
        this.init();
    }
    initConfig() {

        // 配置当前平台信息
        this.initPlatform();

        // 获取应用配置数据等等



        
        // 通过接口获取到资源是否远程配置【模板应用】
        let resConfig = false;//todo 默认写死
        this.loadUIRes();

        // todo:DEV环境打印
        console.log(`当前版本：${Config.version}，环境平台：${Config.platform}`);

    }

    initPlatform() {
        let platform: Platform = Platform.Web;
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
        
        // SceneManager.instance.init();//场景管理器
        UIManager.inst.init();//fgui控制器管理器
        DataManager.inst.init();//数据管理器
    }

    loadUIRes() {
        // 加载fgui资源
        // if () {

        // }

        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        fgui.UIPackage.loadPackage(`${Config.baseRoot}Invitation`, Laya.Handler.create(this, this.onUILoaded));
        // todo 加载其他资源文件

    }

    onUILoaded() {
        let view = fgui.UIPackage.createObject("Invitation", "Main");
        fgui.GRoot.inst.addChild(view);
    }

}