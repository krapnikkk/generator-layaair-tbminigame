import { Cloud } from "../../libs/mp-cloud-sdk/platforms/mp/index";
import { Env } from "../../libs/mp-cloud-sdk/shared/types";

// 淘宝运行时的 模块引入方法
declare function require(package: string): any;
declare function requirePlugin(pluginName: TBMiniProgram.PluginType): TBMiniProgram.memberPlugin;
function _interopRequireDefault(obj: { [key: string]: any }) { return obj && obj.__esModule ? obj : { "default": obj }; }
//
declare let $ENV: Env
interface $globalData {
    $isAdapterInjected: boolean;//适配器是否已经注入
    bridge: typeof my;
    currentComponentConfig: plugin[]
}
interface plugin {
    component2: number;
    is: string;
    pluginId: string;
    render: Function
    usingComponents: { [key: string]: string }[]
}

export default class PlatformManager {
    private _mpCloudSdk: Cloud
    private _globalData: { [key: string]: any }
    private _memberPlugin: TBMiniProgram.memberPlugin;
    readonly app: tinyapp.IGetAppResult = (typeof getApp !== "undefined") ? getApp() : null;
    key_server: string = "GreedySnakeServer";
    env: Env;// 开发环境
    shopId: number;
    activityId: number;
    teamId: string;
    nickName: string;
    avatar: string;
    userOpenId: string;
    fromUserOpenId: string;
    private static _ins: PlatformManager;
    public static get ins(): PlatformManager {
        if (this._ins == null) {
            this._ins = new PlatformManager();
        }
        return this._ins;
    }

    init() {
        this.addEvent();
        this.initQuery();
        this.initConfig();
        this.initPlugin();
    }

    addEvent() {
        this.onError();
        this.onUnhandledRejection();
        this.onShow();
        this.onHide();
    }

    initQuery() {
        if (Laya.Browser.onTBMiniGame) {
            this._globalData = this.app.globalData as IGlobalData;
        } else {
            this._globalData = {
                options: {
                    query: {
                        "activityId": "1081",
                        // "teamId":
                    }
                }
            }
            this.nickName = "krapnik";
            this.userOpenId = "AAE_kMeqANncuYqdmll-W8oz";
            this.avatar = "";
        }
        console.log("获取到globalData为：", this._globalData);
        if (this._globalData.options) { // 小程序环境
            let query = this._globalData.options.query // 测试环境，该字段挂在app的实例
                ||
            {// 自定义调试使用，该字段挂在app的实例
                "activityId": "1081",
                // "fromId": "AAE_kMeqANncuYqdmll-W8oz",
                // "teamId":""
            };
            if (this.app['game'].query && JSON.stringify(this.app['game'].query) != "{}") { // 正式环境：game场景上的实例
                query = this.app['game'].query || null;
            }
            this.env = query.env; // 根据url链接透传的字段 【默认为空】
            this.fromUserOpenId = query.fromId as string || null;
            this.teamId = query.teamId;
            this.activityId = query.activityId;
            console.log("query：", query);
        }

    }

    initConfig() {
        try {
            this.env = this.env || $ENV
            this._mpCloudSdk = _interopRequireDefault(require("@tbmp/mp-cloud-sdk"))["default"] as Cloud;
            //test | pre | online
            this._mpCloudSdk.init({
                env: this.env
            });
        } catch (e) {
            throw e.toString();
        }
    }

    initPlugin() {
        this._memberPlugin = requirePlugin("cemMember");
    }

    // -----------------------------------------小程序环境接口-------------------------------------- //
    onError() {
        my.onError((error: Error) => {
            // todo 上报错误日志
            console.warn("onError");
            console.log("error:", error);
        });
    }

    onUnhandledRejection() {
        my.onUnhandledRejection((res) => {
            // todo 上报错误日志
            console.warn("onUnhandledRejection");
            console.log(res.reason);
            console.log(res.promise);
        });
    }

    /**
     * 监听小程序显示事件
     * @param {Function} callback 
     */
    onShow() {
        my.onAppShow(() => {
            Laya.stage.event(ON_APP_SHOW);
        });
    }

    /**
     * 监听小程序切后台事件
     * @param {Function} callback 
     */
    onHide() {
        my.onAppHide(() => {
            Laya.stage.event(ON_APP_HIDE);
        });
    }

    /** 检测是否是会员 */
    checkMember() {
        return new Promise((resolve: (res: boolean) => void, reject) => {
            this._memberPlugin.checkMember({
                success(res) {
                    //检查成功返回实际结果
                    console.log("checkMember:", res);
                    resolve(res.data.isMember == "true"); // todo
                },
                fail(res) {
                    console.log("false checkMember:", res);
                    //检查失败时当做非会员
                    reject();
                }
            });
        })
    }

    /**
     * 打开入会插件
     */
    openMember() {
        this.app['game'].openMember();
        // 复写绑定插件事件
        this.app['game'].onClose = () => {
            this.app['game'].setData({ expend: false });
            Laya.stage.event(ON_JOIN_MEMBER_CLOSE);
        };
        this.app['game'].onAuthSuccess = (res) => {
            console.log(`onAuthSuccess: ${res} `);
            this.app['game'].setData({ expend: false });
            Laya.stage.event(ON_JOIN_MEMBER_SUCCESS);
        };
        this.app['game'].onAuthFail = (res) => {
            console.log(`onAuthFail: ${res} `);
            this.app['game'].setData({ expend: false });
            Laya.stage.event(ON_JOIN_MEMBER_FAIL);
        };
    }

    /**
     * 设置 分享数据
     * @param {title: 标题，desc: 内容，imageUrl: 头像url} options 
     */
    setShare(shareInfo: IGlobalDataShareInfo) {
        this._globalData.shareInfo = shareInfo;
        this.app['game']["onShareAppMessage"] = () => {
            return this._globalData.shareInfo;
        }
    }

    /**
    * api版本兼容
    * @param api api名
    */
    canIUse(api: string): boolean {
        let flag = my.canIUse(api);
        if (!flag) {
            console.log('当前版本不支持该API: ', api);
            this.showToast("当前版本过低,请升级版本");
        }
        return flag;
    }

    /**
     * showToast
     * @param content 提示内容
     */
    showToast(content: string, duration?: number) {
        if (!this.canIUse("showToast")) return;
        if (!content || content == undefined) return;
        my.showToast({
            type: 'success',
            content,
            duration: duration || 2000,
            success: () => {
                //
            },
        });
    }

    /**
     * showLoad
     * @param content 提示内容
     */
    showLoading(content: string) {
        if (!this.canIUse("showLoading")) return;
        let str_content = content == undefined ? "加载中..." : content;
        my.showLoading({
            content: str_content,
            delay: 1000,
        });
    }

    /**
     * 获取用户授权
     */
    authorize(scopes: TBMiniProgram.ScopesType) {
        return new Promise((resolve, reject) => {
            if (!this.canIUse("authorize")) {
                reject();
            }
            my.authorize({
                scopes: scopes,
                success: (res) => {
                    resolve(res);
                },
                fail: () => {
                    // todo 获取授权失败处理
                    reject();
                }
            });
        })
    }

    /**
     * 获得用户信息
     */
    getAuthUserInfo(): Promise<TBMiniProgram.IGetAuthUserInfoSuccessResult | boolean> {
        return new Promise((resolve, reject) => {
            if (!this.canIUse("getAuthUserInfo")) {
                reject();
            };
            my.getAuthUserInfo({
                success: (userInfo) => {
                    resolve(userInfo);
                }, fail: () => {
                    reject();
                }
            });
        })

    }

    /**
     * 登录服务器
     * @param useInfo 
     * @param callback 
     * @param caller 
     */
    loginServer() {
        return new Promise<void>((resolve, reject) => {
            this.authorize("scope.userInfo").then(() => {
                this.getAuthUserInfo().then((useInfo: TBMiniProgram.IGetAuthUserInfoSuccessResult) => {
                    console.log("useInfo:", useInfo);
                    if (useInfo) {
                        //提交参数固定
                        this.avatar = useInfo.avatar;//头像
                        this.nickName = useInfo.nickName;//名字
                        this.login({
                            avatar: useInfo.avatar,
                            nickName: useInfo.nickName
                        }).then((res) => {
                            let data = res.data as ILoginResInfo;
                            console.log("loginServer", res);
                            if (res.code == 0) {
                                this.userOpenId = data.userOpenId;
                                this.shopId = data.shopId;
                                // Laya.stage.event(Event.ON_LOGIN_SUC);
                                resolve()
                            } else { // 根据实际业务场景 判断是否重新登陆
                                // todo
                                // this.login();
                            }
                        }).catch((e) => {
                            reject();
                        })
                    } else {
                        console.error("获取用户信息失败，未授权");
                        reject();
                    }
                }).catch((e) => {
                    console.error("获取用户信息失败，未授权");
                    reject();
                });
            }).catch((e) => {
                console.error("授权失败");
                reject();
            })
        })


    }

    /**
     * 
     * @param useInfo 暂时满足接口实现
     * @param call 
     */
    login(useInfo: ILoginReqInfo) {
        if (this.fromUserOpenId) {
            Object.assign(useInfo, {
                activityId: this.activityId,
                fromUserOpenId: this.fromUserOpenId
            });
        } else {
            Object.assign(useInfo, {
                activityId: this.activityId
            })
        }
        return this.invokeBase("C_user_login", useInfo);
    }

    throwError(res: TBMiniProgram.IFavorShopFailResult) {
        this.showToast(`调用失败!错误码：${res.code}`);
    }

    /**
     * 关注店铺
     * @param sellerId 店铺归属的卖家Id
     */
    favorShop(id: number) {
        return new Promise<void>((resolve, reject) => {
            if (!this.canIUse("tb.favorShop")) {
                reject();
            };
            my.tb.favorShop({
                id: id,
                success: () => {
                    this.showToast("订阅成功");
                    resolve();
                },
                fail: (res: TBMiniProgram.IFavorShopFailResult) => {
                    this.showToast("订阅失败");
                    reject(res);
                }
            })
        });
    }

    /**
     * 收藏商品
     * @param good_id 商品id
     */
    collectGoods(good_id: number) {
        return new Promise<void>((resolve, reject) => {
            if (!this.canIUse("tb.collectGoods")) {
                reject();
            };
            my.tb.collectGoods({
                id: good_id,
                success: () => {
                    this.showToast("收藏成功");
                    resolve();
                },
                fail: (res: TBMiniProgram.ICollectGoodsFailResult) => {
                    this.showToast("收藏失败");
                    reject(res);
                },
                complete: () => {
                }
            })
        })
    }

    /** 检测商品收藏状态 */
    checkGoodsCollectedStatus(good_id: number) {
        return new Promise<boolean>((resolve, reject) => {
            if (!this.canIUse("tb.checkGoodsCollectedStatus")) {
                reject();
            }
            my.tb.checkGoodsCollectedStatus({
                id: good_id,
                success: (res: TBMiniProgram.ICheckCollectGoodsSuccesResult) => {
                    resolve(res.isCollect);
                },
                fail: (res: TBMiniProgram.ICheckCollectGoodsFailResult) => {
                    reject(false);
                }
            })
        })
    }

    /**
     * 跳转商品详情
     * @param itemId 商品id
     */
    openDetail(itemId: string, forceH5: boolean = true) {
        return new Promise<void>((resolve, reject) => {
            if (!this.canIUse("tb.openDetail")) {
                reject();
            };
            my.tb.openDetail({
                itemId,
                forceH5,
                success: () => {
                    resolve();
                },
                fail: () => {
                    reject();
                },
            });
        });
    }

    /** 跳转店铺 */
    navigateToShop() {
        return this.navigateToTaobaoPage({
            appCode: "shop", appParams: {
                shopId: `${this.shopId}`,
                weexShopSubTab: "shopindex",
                weexShopTab: "shopindexbar"
            }
        })
    }

    /** 跳转直播 */
    navigateToLive() {
        return this.navigateToTaobaoPage({
            appCode: "liveRoom", appParams: {
                // shopId: `${this.shopId}`, // 官方文档中未传任何参数
            }
        })
    }

    navigateToTaobaoPage(options: TBMiniProgram.INavigateShopOptions) {
        return new Promise<void>((resolve, reject) => {
            if (!this.canIUse("tb.navigateToTaobaoPage")) {
                reject();
            };
            let appCode = options.appCode;
            let appParams = options.appParams;
            my.tb.navigateToTaobaoPage({
                appCode,
                appParams,
                success: () => {
                    resolve();
                },
                fail: (err: TBMiniProgram.INavigateShopFailResult) => {
                    reject(err);
                }
            });
        });
    }

    // ----------------------------------------------- 云函数调用 --------------------------------------- //
    // 活动信息
    getActivityInfo() {
        return this.invokeBase("C_activity_info");
    }

    // 促销商品信息
    getOperateGoodsList(data?: IBasePageReqData) {
        return this.invokeBase("C_operateGoods_getList", data);
    }

    /** 获取任务列表 */
    getTaskList() {
        return this.invokeBase("C_task_getTaskList");
    }

    /** 获取任务奖励 */
    getTaskPrize(detailType: string) {
        return this.invokeBase("C_task_getTaskPrize", { detailType });
    }

    /** 获取任务奖励 - 入会或者订阅 */
    getTaskPrizeByEnter(detailType: string) {
        return this.invokeBase("C_task_getMemberOrFollowPrize", { detailType });
    }

    /** 获取任务奖励 - 消费 */
    getTaskPrizeBySpend() {
        return this.invokeBase("C_task_getSpendPrize");
    }

    /** 获取任务奖励 - 邀请 */
    getTaskPrizeByInvate() {
        return this.invokeBase("C_task_getInvitePrize");
    }

    /** 任务上报 */
    getTaskReport(detailType: string) {
        return this.invokeBase("C_task_taskReport", { detailType });
    }

    /** 
     * 任务上报 - 入会或者订阅
     * @param outcome already(已经入过会或已关注店铺), success(本次操作成功, 淘宝结果), failure(本次操作失败, 淘宝结果)
     * */
    getTaskReportByEnter(detailType: string, outcome: string) {
        return this.invokeBase("C_task_entranceMember", { detailType, outcome, shopId: `${this.shopId}` });
    }

    /** 任务上报 - 消费 */
    getTaskReportBySpend() {
        return this.invokeBase("C_task_spendReport");
    }

    invokeBase(type: string, data?: IReqData) {
        let baseRes = { "activityId": this.activityId };
        Object.assign(baseRes, data);
        return new Promise((resolve: (value: IResBase) => void, reject) => {
            this.invoke(type, baseRes).then((res) => {
                resolve(res);
            }).catch((e) => {
                reject(e);
            });
        })
    }

    invoke(handler: string, data: object) {
        return new Promise((resolve: (value: IResBase) => void, reject) => {
            console.log("request:", handler, data)
            this._mpCloudSdk.function.invoke(this.key_server, data, handler).then((res: IResBase) => {
                console.log("response:", res);
                resolve(res);
            }).catch((e) => {
                console.warn(e);
                console.warn("invoke error:", handler, data);
                reject(e);
                // todo
            });
        })
    }
}