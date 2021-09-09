/**
 * @file 收货地址
 */
declare namespace TBMiniProgram {

    /**
     * 获取收货地址列表
     */
    interface IAddressSuccesResult {
        /**
         * 返回结构类型。"deliveryAddress"：收货地址
         */
        type: string
        /**
        * 收货人名称或者商户名
        */
        name: string
        /**
        * 电话号码
        */
        telNumber: string
        /**
        * 省
        */
        provinceName: string
        /**
        * 市
        */
        cityName: string
        /**
        * 区/县
        */
        countyName: string
        /**
        * 街道
        */
        streetName: string
        /**
        * 街道编码
        */
        streetCode: string
        /**
        * 详细地址
        */
        detailInfo: string

    }

    interface IAddressOptions {
        addAddress: string,
        searchAddress: string,
        locateAddress: string,
        success?(result:IAddressSuccesResult): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(code: number): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }


    /**
     * see https://miniapp.open.taobao.com/doc.htm?docId=916&docType=20
     */
    export interface tb {
        /**
         * 打开收货地址选择器
         */
        chooseAddress(data: IAddressOptions, success?: (result: IAddressSuccesResult) => {}, fail?: (code: number) => {}, complete?: Function): void
    }
}
