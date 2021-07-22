import { Env, Platform } from "../../enum/enum";

export default class Config {
    // 项目相关配置
    static version: string = "0.0.1";//内部版本号用作记录，后续版本后自动发布
    static ENV: Env = Env.Dev; // 默认测试环境
    static platform: Platform = Platform.Web; // 平台信息，打包的时候会自动构建信息
    static platformArr:Platform[] = [Platform.MiniGame,Platform.TBMiniGame]; // 需要监听判断的平台
    static baseRoot: string = "https://xiaoailingdong.oss-cn-shenzhen.aliyuncs.com/CClient/Test/res/fgui/";// 远程资源根目录


}