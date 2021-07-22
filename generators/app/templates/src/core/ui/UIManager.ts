import Invitation from "../../module/Invitation";
import UIConfig from "./UIConfig";
import Config from "../config/Config";
import Event from "../../Event";
import UIBase from "./UIBase";
import InvitationBinder from "../../module/Invitation/InvitationBinder";

export default class UIManager {
    private static _inst: UIManager;
    private readonly windowMap = new Map<string, UIBase>();

    public static get inst(): UIManager {
        if (this._inst == null) {
            this._inst = new UIManager();
        }
        return this._inst;
    }
    constructor() {
        if (UIManager._inst) {
            throw "singleton class is not use new constructor!";
        }
    }

    public init() {
        // 初始化FGUI相关配置
        this.initConfig();
        this.loadUIRes();
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        
    }

    public initConfig(){
        fgui.UIConfig.packageFileExtension = UIConfig.fguiFileExtension;
    }

    private _loadedCount:number = 0;
    private _totalResCount:number = 0;
    loadUIRes() {
        // 加载fgui资源
        this._totalResCount = UIConfig.fguiFileArr.length;
        for(let i = 0;i<this._totalResCount;i++){
            let res = UIConfig.fguiFileArr[i];
            let pkgName = res.name;
            // window[`${pkgName}Binder`]['bindAll']();
            InvitationBinder.bindAll();
            fgui.UIPackage.loadPackage(`${Config.baseRoot}${pkgName}`, Laya.Handler.create(this, this.onUILoaded));
        }
    }

    onUILoaded(){
        this._loadedCount++;
        Laya.stage.event(Event.ON_PROGRESS,[this._loadedCount,this._totalResCount]);
        if(this._loadedCount == this._totalResCount){
            console.log("Invitation");
            let view = new Invitation();
            view.setup();
            fgui.GRoot.inst.addChild(view.contentPane);
        }
        
    }

    public add(window: UIBase) {
        this.windowMap.set(window.url, window);
    }

    public remove(window: UIBase) {
        if (this.windowMap.has(window.url)) {
            this.windowMap.delete(window.url);
            window.dispose();
        }
    }

    public show(url: string, param?: any) {
        if (this.windowMap.has(url)) {
            let window = this.windowMap.get(url);
            window.data = param;
            if (window.isShowing) {
                // window.onShown();
            } else {
                window.show();
            }
        } else {
            console.error("显示窗口失败没有注册窗口 url:" + url);
        }
    }

    public hide(url: string, param?: any) {
        if (this.windowMap.has(url)) {
            let window = this.windowMap.get(url);
            if (window.isShowing) {
                window.data = param;
                window.hide();
            }
        } else {
            console.error("隐藏窗口失败没有注册窗口 url:" + url);
        }
    }

    public hideAll(filter: Array<string> = null) {
        this.windowMap.forEach((v, k) => {
            if (v.isShowing && (filter == null || filter.findIndex(a => a == v.url) == -1)) {
                v.hide();
            }
        });
    }

    public delAll(filter: Array<string> = null) {
        let needDel = new Array<string>();
        this.windowMap.forEach((v, k) => {
            if (filter == null || filter.findIndex(a => a == v.url) == -1) {
                needDel.push(v.url);
            }
        });

        for (let i = 0; i < needDel.length; i++) {
            this.remove(this.windowMap.get(needDel[i]));
        }
    }

    public del(url: string): void {
        if (this.windowMap.has(url)) {
            this.remove(this.windowMap.get(url));
        }
    }



}