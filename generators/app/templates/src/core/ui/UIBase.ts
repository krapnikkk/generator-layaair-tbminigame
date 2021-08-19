/**
 * UI基类
 * 发布出来的代码将会自动继承该类
 */
export default class UIBase extends fgui.Window{
    public url: string;
    setup(){
        
    }
    onInit(){
        console.log("onInit");
    }

    dispose(){
        super.dispose();
    }
}