/**
 * @file 用户授权
 */
 declare namespace TBMiniProgram {

    interface ICollectGoodsFailResult {//收藏商品。
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IOpenDetailFailResult {// 打开商品详情页
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IUnCollectGoodsFailResult {//取消收藏商品
        /**
         * 错误码
         */
        readonly code: string

    }
    interface ICheckCollectGoodsSuccesResult {//检查商品是否被收藏 成功
        /**
         * 出参
         * id:商品id
         * isCollect:是否收藏了该商品
         */
        readonly id: string 
        readonly isCollect:boolean

    }
    interface ICheckCollectGoodsFailResult {//检查商品是否被收藏 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IFavorShopFailResult {//关注店铺 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IcheckShopFavoredSuccesResult {//检查商品是否被收藏 成功
        /**
         * 出参
         * sellerid:	店铺归属的卖家Id
         * isFavor:	    是否关注了该店铺
         */
         readonly sellerid: string 
         readonly isFavor:boolean
    }
    interface IcheckShopFavoredFailResult {//检查商品是否被收藏 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IUnFavorShopFailResult {//取消关注店铺 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IUnFavorShopFailResult {//取消关注店铺 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface INavigateShopFailResult {//取消关注店铺 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    interface IShowSkuSuccesResult {//显示指定商品 SKU 选择器 成功
        /**
         * 固定值：addCartSuccess
         * 商品ID
         * skuId
         * 加购数量
         */
        readonly status: string
        readonly itemId: string
        readonly skuId: string
        readonly quantity: string

    }
    interface IShowSkuFailResult {//显示指定商品 SKU 选择器 失败
        /**
         * 错误码
         */
        readonly code: string

    }
    /**--------------------------------------------------------------- */

    interface ICollectGoodsOptions {//收藏商品。
        /**
         * 商品id
         */
        id: number

        /**
         * 调用成功的回调函数
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

    interface IOpenDetailOptions {// 打开商品详情页
        /**
         * 商品id
         */
        itemId: string
        /**
         * 是否打开H5类型的商品详情面
         */
        forceH5:boolean
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IOpenDetailFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IUnCollectGoodsOptions {//取消收藏商品
        /**
         * 商品id
         */
        id: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IUnCollectGoodsFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface ICheckCollectGoodsOptions {//检查商品是否被收藏
        /**
         * 商品id
         */
        id: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(result:ICheckCollectGoodsSuccesResult): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: ICheckCollectGoodsFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IFavorShopOptions {//关注店铺
        /**
         * 店铺归属的卖家Id
         */
        id: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IFavorShopFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IcheckShopFavoredOptions {//查询店铺关注状态
        /**
         * 店铺归属的卖家Id
         */
        id: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(result: IcheckShopFavoredSuccesResult): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IcheckShopFavoredFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IUnFavorShopOptions {//取消关注店铺
        /**
         * 店铺归属的卖家Id
         */
        id: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IUnFavorShopFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    type appCode = "shop"|"cardCoupon"|"orderDetail"|"orderList"|"liveRoom";
    interface INavigateShopOptions {//跳转店铺
        /**
         * 跳转官方业务页面定义的AppCode。
         * 目前支持：shop（打开店铺页）；
         * cardCoupon（打开红包卡券页，9.17.0及以上版本）；
         * orderDetail（打开订单详情页，9.18.0及以上版）；
         * orderList（打开订单列表页，9.18.0及以上版本）；
         * liveRoom（打开直播间，9.24.0及以上版本）
         */
         appCode: appCode
         /**
         * appCode 配套参数，需要和 appCode 搭配使用。
         * 
         * orderId 对应appCode需为：orderDetail。当appCode为orderDetail时，指定订单Id
         * 
         * weexShopSubTab 对应appCode需为：shop。店铺顶部的子Tab，支持：shopindex首页（shopTab需为shopindexbar）、newitems：新品（shopTab需为shopindexbar）
         * shopId 对应appCode需为：shop。当appCode为shop时，指定店铺Id
         * weexShopTab对应appCode需为：shop。店铺底部Tab名称，支持：shopindexbar首页、allitemsbar全部宝贝、dongtaibar微淘、categorybar分类、memberbar会员、
         */
        appParams: {
            shopId?:string
            weexShopSubTab?:string
            weexShopTab?:string
        }
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: INavigateShopFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IShowSkuOptions {//显示指定商品 SKU 选择器
        /**
         * 商品ID
         */
        itemId: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(result:IShowSkuSuccesResult): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IShowSkuFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    interface IShowSkuOptions {//显示指定商品 SKU 选择器
        /**
         * 商品ID
         */
        itemId: number
        /**
         * 调用成功的回调函数 无返回值。
         */
        success?(result:IShowSkuSuccesResult): void

        /**
         * 调用失败的回调函数 部分错误原因见错误码列表
         */
        fail?(result: IShowSkuFailResult): void

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void
    }
    
    export interface tb {
            /**
           * 关注店铺
           */
            favorShop(options: IFavorShopOptions): void
            /**
           * 查询店铺关注状态
           */
            checkShopFavoredStatus(options: IcheckShopFavoredOptions): void
            /**
           * 取消关注店铺
           */
            unFavorShop(options: IUnFavorShopOptions): void
            /**
           *  跳转店铺
           */
            navigateToTaobaoPage(options: INavigateShopOptions): void
             /**
           *  显示指定商品 SKU 选择器
           */
            showSku(options: IShowSkuOptions): void
            /**
            * 跳转订单页
            */
            confirmCustomOrder(options: ICustomOrdeOptions): void
        
    }
}
