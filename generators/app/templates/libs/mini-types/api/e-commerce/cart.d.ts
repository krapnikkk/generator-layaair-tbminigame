/**
 * @file 购物车
 */
declare namespace TBMiniProgram {
    interface IOpenCartOptions {
        /**
         * 购物车类型。tmall：天猫超市购物车。taobao: 淘宝购物车
         */
        cartType?: string

        /**
        * 是否打开H5类型的页面
        */
        forceH5?: boolean

        /**
         * 调用成功的回调函数，无返回值
         */
        success?(): void

        /**
         * 调用失败的回调函数
         */
        fail?(result: ICollectGoodsFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IAddToCartOptions {
        /**
         * 商品ID信息,多个以逗号隔开，格式为itemid_skuid_count。只有itemId也可以加购。
         */
        itemIds: string

        /**
        * exts,使用|分割的k:v模式
        */
        exts?: string

        /**
         * 调用成功的回调函数，无返回值
         */
        success?(): void

        /**
         * 调用失败的回调函数
         */
        fail?(result: ICollectGoodsFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    export interface tb {
        /**
       * 打开购物车
       */
        openCart(options: IOpenCartOptions): void
        /**
       * 加入购物车
       */
        addToCart(options: IAddToCartOptions): void
    }
}