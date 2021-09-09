/**
 * @file 客户端获取会员信息
 */
declare namespace TBMiniProgram {
    interface IGetAuthUserInfoSuccessResult {
        /**
         * 授权码
         */
        readonly accessToken: string

        /**
         * 成功的授权 scope
         */
        readonly authSucessScope: string

        /**
        * 授权出错详情对象
        */
        readonly authErrorScope: { [key: string]: string }
    }

    interface IAuthorizeOptions {

        /**
         * 授权类型
         * see https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7dd8669auitjdk&docId=119119&docType=1&tag=dev
         */
        scopes: ScopesType;
        /**
         * 调用成功的回调函数
         */
        success?(result: IGetAuthUserInfoSuccessResult): void

        /**
         * 调用失败的回调函数
         */
        fail?(): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }

    export type ScopesType =
        | "scope.userInfo"
        | "scope.addressList"
        | "scope.getPhoneNumber"
        | "scope.location"
        | "scope.audioRecord"
        | "scope.addCalendarPlan"
        | "scope.album"
        | "scope.camera"
        | "scope.clipboard"
        | "scope.getStepsStatus"
        | "scope.latourBenefit"
        | "scope.benefitSend"


    export interface my {
        /**
         * 发起用户授权。
         * 支持授权类型 ：https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7dd8669auitjdk&docId=119119&docType=1&tag=dev
         * 调用此API会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。详见授权文档
         * see: https://miniapp.open.taobao.com/doc.htm?docId=988&docType=20
         */
        authorize(options?: IAuthorizeOptions): void
    }
}
