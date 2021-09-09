/**
 * @file 打开淘宝官方页
 */
declare namespace TBMiniProgram {
    export type AppCodeType =
        | "shop"
        | "cardCoupon"
        | "orderDetail"
        | "orderList"
        | "liveRoom"

    export type OrderListType =
        | "total_orders"
        | "wait_to_pay"
        | "wait_to_shipments"
        | "wait_to_confirm"
        | "wait_to_evaluate"

    export type CardCouponType =
        | "coupon"
        | "redEnvelope"
        | "card"
        | "ticket"
        | "other"

    export type WeexShopSubTabType =
        | "shopindex"
        | "newitems"

    export type WeexShopTabType =
        | "shopindexbar"
        | "allitemsbar"
        | "dongtaibar"
        | "categorybar"
        | "memberbar"

    interface INavigateToTaobaoPageOptions {
        /**
         * 跳转官方业务页面定义的AppCode。
         * 目前支持：
         * shop（打开店铺页）；
         * cardCoupon（打开红包卡券页，9.17.0及以上版本）；
         * orderDetail（打开订单详情页，9.18.0及以上版）；
         * orderList（打开订单列表页，9.18.0及以上版本）；
         * liveRoom（打开直播间，9.24.0及以上版本）
         */
        appCode: AppCodeType
        /**
         * appCode 配套参数，需要和 appCode 搭配使用。
         */
        appParams?: IOrderListOptions | IOrderDetailOptions | ICardCouponOptions | IShopOptions
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

    interface IOrderListOptions {
        /**
         * 	对应appCode需为：orderList。
         * 指定订单列表对应的tab，支持：
         * total_orders 全部订单；
         * wait_to_pay 待付款；
         * wait_to_shipments 待发货；
         * wait_to_confirm 待收货；
         * wait_to_evaluate 待评价
         */
        OrderListType?: OrderListType
    }


    interface IOrderDetailOptions {
        /**
         * 	对应appCode需为：orderDetail。
         *  当appCode为orderDetail时，指定订单Id
         */
        orderId: string
    }

    interface ICardCouponOptions {
        /**
         * 	对应appCode需为：cardCoupon。
         * 指定红包卡券页对应tab，支持：
         * coupon 优惠券；
         * redEnvelope 红包；
         * card 卡；
         * ticket 票；
         * other 其它。
         * （不传tabType时，默认打开 优惠券 tab）。
         */
        tabType?: CardCouponType
    }

    interface IShopOptions {
        /**
         * 对应appCode需为：shop。
         * 当appCode为shop时，指定店铺Id
         */
        shopId: string
        /**
         * 对应appCode需为：shop。
         * 店铺底部Tab名称，支持：
         * shopindexbar首页、
         * allitemsbar全部宝贝、
         * dongtaibar微淘、
         * categorybar分类、
         * memberbar会员
         */
        weexShopTab?:WeexShopTabType
        /**
         * 对应appCode需为：shop。
         * 店铺顶部的子Tab，支持：
         * shopindex首页（shopTab需为shopindexbar）、
         * newitems：新品（shopTab需为shopindexbar）
         */
        weexShopSubTab?:WeexShopSubTabType
    }

    export interface tb {
        /**
         * 打开淘宝提供的官方页面。
         */
        navigateToTaobaoPage(options: INavigateToTaobaoPageOptions): void
    }
}
