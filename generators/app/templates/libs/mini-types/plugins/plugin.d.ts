declare namespace TBMiniProgram {
    interface IMemberPluginOptions {
        sellerId?: number,//sellerId为可选参数，不填则为当前小程序Owner用户ID
        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(code: number): void // todo

        /**
         * 调用成功的回调函数
         */
        success?(result: any): void // todo
    }
    export interface memberPlugin extends plugin{
        checkMember(options: IMemberPluginOptions): void
    }
    export interface plugin {

    }
    export type PluginType =
        | "cemMember"
}

