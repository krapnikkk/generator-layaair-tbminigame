import UI_Main from "./Invitation/UI_Main";

export default class Invitation extends UI_Main {
    public view:fairygui.GObject;
    constructor() {
        super();
        
    }

    onInit(){
        super.onInit();
    }

    init(): void {
        
    }

    setup(){
        this.contentPane = UI_Main.createInstance(); 
    }

    onConstruct(){
        super.onConstruct();
        console.log("onConstruct");
        
        this.onClick(this,this.onTouch)
    }

    onTouch(){
        console.log("click");
    }

}