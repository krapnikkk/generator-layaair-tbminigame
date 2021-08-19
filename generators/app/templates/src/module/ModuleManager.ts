import Invitation from "./Invitation";
import InvitationBinder from "./Invitation/InvitationBinder";

export default class ModuleManager {
    static init(){
        this.bindAll();
        this.registerAll();
    }
    static bindAll(): void {
        InvitationBinder.bindAll();
    }

    static registerAll(){
        Laya.ClassUtils.regClass("Invitation",Invitation);
    }
}