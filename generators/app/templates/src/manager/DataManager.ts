/**
 * 数据管理器
 */
export default class DataManager {
    private static _inst: DataManager;

    public static get inst(): DataManager {
        if (this._inst == null) {
            this._inst = new DataManager();
        }
        return this._inst;
    }
    constructor() {
        if(DataManager._inst){
            throw "singleton class is not use new constructor!";
        }
    }

    
    
    /**
     * 初始化
     */
    public init() {
        this.getUserInfo();
    }

    // 获取用户数据
    public getUserInfo(){

    }
}