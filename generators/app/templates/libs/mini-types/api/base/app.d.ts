/**
 * @file 应用级事件
 */
declare namespace TBMiniProgram {
    interface IGetAuthUserInfoSuccessResult {
        /**
         * 用户昵称
         */
        readonly nickName: string

        /**
         * 用户头像链接
         */
        readonly avatar: string
    }

    interface IUnhandledrejectionInputParam {

        callback?: Function;
    }

    export interface my {
        /**
       * 监听小程序切前台事件。
       */
        onShow(callback: Function): void


        /**
         * @param callback 
         * 监听小程序切前台事件，该事件与 App.onShow 的回调时机一致。对应的取消监听 API 请参见 my.offAppShow。 
         * 使用说明： 
         * - 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。 
         * - 请勿使用 API 监听匿名函数，否则将无法关闭监听。
         */
        onAppShow(callback: Function): void

        /**
         * @param callback 
         * 取消监听小程序切前台事件。 
         * 使用说明： 
         * - 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。 
         * - 请勿使用 API 监听匿名函数，否则将无法关闭监听。
         */
        offAppShow(callback: Function): void

        /**
         * 
         * @param callback 
         * 该事件与 App.onHide 的回调时机一致。
         * 对应的取消监听 API 请参见 my.offAppHide。 
         * 使用说明： 
         * - 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。 
         * - 请勿使用 API 监听匿名函数，否则将无法关闭监听。
         */
        onAppHide(callback: Function): void

        /**
         * 
         * @param callback 
         * 基础库 1.20.0 开始支持，低版本需做 兼容处理。 取消监听小程序切后台事件。 
         * 使用说明： 
         * - 由于开发者工具版本限制，目前本 API 暂不支持在开发者工具调试和真机调试，仅支持真机预览。开发者请调至 预览 模式，在支付宝客户端扫码查看效果。 
         * - 请勿使用 API 监听匿名函数，否则将无法关闭监听。
         */
        offAppHide(callback: Function): void

        /**
         * 
         * @param callback Function  小程序 JS 错误事件的回调函数。
         * 监听小程序错误事件
         */
        onError(callback: Function): void

        /**
        * 
        * @param callback Function  小程序 JS 错误事件的回调函数。
        * 取消监听小程序错误事件
        */
        offError(callback: Function): void

        /**
         * 
         * @param callback Function  小程序 JS 错误事件的回调函数。
         * 监听unhandledrejection事件。
         * 当Promise 被 reject 且没有 reject 处理器时，会触发 unhandledrejection 事件，该事件的回调时机、参数与 App.onUnhandledRejection 的一致。
         */
        onUnhandledRejection(inputParam?: IUnhandledrejectionInputParam): void

        
    }
}
