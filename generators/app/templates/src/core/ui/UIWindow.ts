import UIConfig from "./UIConfig"

export class loadPackage implements fgui.IUISource {
    fileName: string;
    loaded: boolean;
    constructor(pkgName) {
        this.fileName = pkgName;
    }

    load(callback: Function, thisObj: any): void {
        fgui.UIPackage.loadPackage(UIConfig.baseRoot + "/" + this.fileName, Laya.Handler.create(this, () => {
            this.loaded = true;
            callback.call(thisObj);
            //console.log("加载完成" + this.fileName);
        }));
    }
}



export class UIWindow extends fgui.Window {
    public readonly pkgName: string;
    public readonly resName: string;

    protected readonly mCloseBtnName = "BtnClose";

    constructor(pkgName: string, resName: string) {
        super();
        this.pkgName = pkgName;
        this.resName = resName;
        this.url = `ui://${pkgName}/${resName}`;

        this.addUISource(new loadPackage(pkgName)); // 窗口动态创建
    }

    protected onInit(): void {
        //console.log("显示成功");
        let windObj = fgui.UIPackage.createObjectFromURL(this.url);
        if (windObj == null) {
            console.error("创建窗口失败 url" + this.url);
            return;
        }
        this.contentPane = windObj.asCom;
        this.width = fairygui.GRoot.inst.width;
        this.height = fairygui.GRoot.inst.height;
        this.centerOn(fgui.GRoot.inst, true);
        if (this.mCloseBtnName != null && this.mCloseBtnName.length != 0) {
            let btnClose = this.contentPane.getChild(this.mCloseBtnName);
            if (btnClose && (btnClose.asCom || btnClose.asButton)) {
                this.closeButton = btnClose;
            }
        }
    }

    public url: string;
}