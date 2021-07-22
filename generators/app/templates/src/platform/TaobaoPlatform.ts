// class TaobaoPlatform {

//     // var TaobaoPlatform () {
//     // 	/*****平台配置******************************************** */
//     // 	this.platType = 8001;
//     // 	this.appId = "wx638732461656d042";
//     // 	this.version = "1.0.3";
//     //     this.audioContexts = [];
//     //     this.boolSku = false;
//     // };

//     //// 外部方法 ////

//     /**
//      * 获取系统信息
//      */
//     getSystemInfoSync() {
//         if (!this.canIUse("authorize")) return null;
//         return my.getSystemInfoSync();
//     }

//     /**
//      * 切置前台
//      * @param {Function} call 
//      */
//     onShow(call) {
//         var self = this;
        
//         call && my.onAppShow(function (res) {
//             self.boolSku = false;
//             call();
//         });
//     }

//     /**
//      * 切置后台
//      * @param {Function} call 
//      */
//     onHide(call) {
//         call && my.onAppHide(call);
//     }

//     /**
//      * 短震动
//      */
//     vibrateShort = my.vibrateShort

//     /**
//      * 长震动
//      */
//     vibrateLong = my.vibrateLong

//     /**
//      * api版本兼容
//      * @param apiName api名
//      */
//     canIUse(api: string) {
//         let flag = my.canIUse(api);
//         if (!flag) {
//             console.log('当前版本不支持该API: ', api);
//             this.showToast("当前版本过低,请升级版本");
//         }
//         return flag;
//     }

//     /**
//      * 授权
//      */
//     authorize(call) {
//         if (!this.canIUse("authorize")) return;
//         my.authorize({
//             scopes: 'scope.userInfo',
//             success: (res) => {
//                 console.log("authorize res: ", res);
//                 my.getAuthUserInfo({
//                     success: (userInfo) => {
//                         call && call(userInfo);
//                     }, fail: () => {
//                         console.log("获取授权失败 引导授权界面");
//                         call && call("fail");
                        
                        
                        
//                     }
//                 });
//             },
//             fail: () => {
//                 call && call("fail");
//             }
//         });
//     }

//     showAuthGuide(authType:TBMiniProgram.AuthType){
//         if (!this.canIUse("showAuthGuide")) return;
//         my.showAuthGuide({authType});
//     }

//     /**
//      * 获得用户信息
//      */
//     getAuthUserInfo(call) {
//         if (!this.canIUse("authorize")) return;
//         my.getAuthUserInfo({
//             success: (userInfo) => {
//                 call && call(userInfo);
//             }, fail: () => {
//                 call && call(false);
//             }
//         });
//     }

//     /**
//      * 分享接口
//      */
//     showSharePanel() {
//         if (!this.canIUse("showSharePanel")) return;
//         my.showSharePanel();
//     }

//     /**
//      * 监控网络状态
//      */
//     // isNetSuccess = true;
//     getNetworkType() {
//         if (!this.canIUse("getNetworkType")) return;
//         let self = this;
//         my.getNetworkType({
//             success: (res) => {
//                 // self.isNetSuccess = res.networkAvailable ? true : false;
//             }
//         });
//         my.onNetworkStatusChange((res) => {
//             // self.isNetSuccess = res.isConnected ? true : false;
//         });
//     }

//     /**
//      * 获取网络状态
//      */
//     getNetState() {
//         return this.isNetSuccess;
//     }

//     /**
//      * showLoad
//      * @param content 提示内容
//      */
//     showLoading(content) {
//         if (!this.canIUse("showLoading")) return;
//         let str_content = content == undefined ? "加载中..." : content;
//         my.showLoading({
//             content: str_content,
//             delay: 1000,
//         });
//     }

//     hideLoading() {
//         if (!this.canIUse("hideLoading")) return;
//         my.hideLoading();
//     }

//     /**
//      * showToast
//      * @param content 提示内容
//      */
//     showToast(content) {
//         if (!this.canIUse("showToast")) return;
//         if (!content || content == undefined) return;
//         my.showToast({
//             type: 'success',
//             content: content,
//             duration: 2000,
//             success: () => {
//                 //
//             },
//         });
//     }

//     /**
//      * 确认/取消 弹框
//      * @param title 
//      * @param content 
//      * @param str_sure 
//      * @param str_cancel 
//      */
//     confirm(title, content, str_sure = "确定", str_cancel = "取消") {
//         if (!this.canIUse("confirm")) return;
//         my.confirm({
//             title: title,
//             content: content,
//             confirmButtonText: str_sure,
//             cancelButtonText: str_cancel,
//             success: (result) => {
//                 console.log("result: ", result);
//             },
//         });
//     }

//     /**
//      * 打开入会插件
//      */
//     openMember(closeCB, resultCB) {
//         let app = getApp();
//         if (app["openMember"]) {
//             app["openMember"](closeCB, resultCB);
//         }
//     }

//     /**
//      * 检测会员 
//      * @param {*} callback 
//      */
//     checkMember(callback) {
//         let app = getApp();
//         if (app["checkMember"]) {
//             app["checkMember"](callback);
//         }
//     }

//     /**
//      * 打开 商品详情
//      * @param good_id 商品id
//      * @param success 成功回调
//      */
//     openDetail(good_id, success, fail) {
//         console.log('===== openDetail ====', good_id);
//         if (!this.canIUse("openDetail", "tb")) return;
//         my.tb.openDetail({
//             itemId: good_id,
//             success: (res) => {
//                 success && success(res);
//             },
//             fail: (res) => {
//                 fail && fail(res);
//             },
//         });
//     }

//     /**
//      * 收藏 商品
//      * @param good_id 商品id
//      */
//     collectGoods(good_id, success, fail) {
//         if (!this.canIUse("collectGoods", "tb")) return;
//         let self = this;
//         my.tb.collectGoods({
//             id: good_id,
//             success: (res) => {
//                 self.showToast("收藏成功");
//                 success && success(res);
//             },
//             fail: (res) => {
//                 fail && fail(res);
//             },
//             complete: (res) => {
//                 //
//             }
//         })
//     }

//     /**
//      * 取消收藏 商品
//      * @param good_id 商品id
//      */
//     unCollectGoods(good_id) {
//         if (!this.canIUse("unCollectGoods", "tb")) return;
//         let self = this;
//         my.tb.unCollectGoods({
//             id: good_id,
//             success: (res) => {
//                 self.showToast("取消关注");
//             },
//             fail: (res) => {

//             },
//             complete: (res) => {
//             }
//         })
//     }

//     //检测是否已收藏
//     checkGoodsCollectedStatus(good_id, func) {
//         if (!this.canIUse("checkGoodsCollectedStatus", "tb")) return;
//         my.tb.checkGoodsCollectedStatus({
//             id: good_id,
//             success: (res) => {
//                 func && func(res.isCollect);
//             },
//         })
//     }

//     /**
//      * 检测对某个商铺 的关注状态
//      * @param sellerId 店铺id
//      * @param callback 获取成功 回调
//      */
//     checkShopFavoredStatus(sellerId, callback) {
//         if (!this.canIUse("checkShopFavoredStatus", "tb")) return;
//         my.tb.checkShopFavoredStatus({
//             id: sellerId,
//             success: (res) => {
//                 /*
//                     res: {
//                         id: 卖家id
//                         isFavor: 是否关注(Boolen)
//                     }
//                 */
//                 callback && callback(res.isFavor);
//             },
//             fail: (res) => {

//             }
//         })
//     }

//     /**
//      * 关注 店铺
//      * @param shop_id 店铺id
//      */
//     favorShop(sellerId, call, type = 0) {
//         if (!this.canIUse("favorShop", "tb")) return;
//         let self = this;
//         my.tb.favorShop({
//             id: sellerId,
//             success: (res) => {
//                 call && call(true);
//                 // MainUtil.analysis('joinFavor', { isFavor: true , type : type});
//                 self.showToast("关注成功");
//             },
//             fail: (res) => {
//                 // failFunc && failFunc();
//                 // self.showToast("关注失败");
//                 if (res && res.errorMessage == "用户已订阅") {
//                     call && call(true);
//                 }
//                 else {
//                     call && call(false);
//                 }
//             }
//         })
//     }

//     /**
//      * 取消关注 店铺
//      * @param shop_id 店铺id
//      */
//     unFavorShop(shop_id) {
//         if (!this.canIUse("unFavorShop", "tb")) return;
//         let self = this;
//         my.tb.unFavorShop({
//             id: shop_id,
//             success: (res) => {
//                 self.showToast("取消关注");
//             },
//             fail: (res) => {
//                 //
//             }
//         });
//     }

//     /**
//      * 跳转其他小程序id
//      * @param app_Id 其他小程序id
//      */
//     navigateToMiniProgram(app_Id) {
//         if (!this.canIUse("navigateToMiniProgram")) return;
//         my.navigateToMiniProgram({
//             appId: app_Id,
//             extraData: {
//                 "data1": "test"
//             },
//             success: (res) => {
//                 console.log(JSON.stringify(res))
//             },
//             fail: (res) => {
//                 console.log(JSON.stringify(res))
//             }
//         });
//     }

//     /**
//      * 跳转店铺
//      * @param shop_id 店铺id
//      */
//     navigateToTaobaoPage(shop_id, call) {
//         if (!this.canIUse("navigateToTaobaoPage", "tb")) return;
//         let self = this;
//         my.tb.navigateToTaobaoPage({
//             appCode: 'shop',
//             appParams: {
//                 shopId: shop_id,
//                 weexShopSubTab: "shopindex",
//                 weexShopTab: "shopindexbar"
//             },
//             success: (res) => {
//                 console.log("跳转店铺成功");
//                 call && call(true);
//             },
//             fail: (err) => {
//                 console.log("跳转店铺失败: ", err);
//                 call && call(false);
//             }
//         });
//     }

//     /**
//      * 数据埋点
//      * @param state 埋点 
//      * @param data  数据
//      */
//     reportAnalytics(state, data) {
//         if (!this.canIUse("reportAnalytics")) return;
//         my.reportAnalytics(state, data);
//     }

//     /**
//      * 显示SKU选择器
//      * @param good_id 商品id
//      * @param call 成功回调
//      */
//     showSku(good_id, call) {
//         // console.log("显示SKU选择器")
//         if (!this.canIUse("tb.showSku")) return;
//         my.tb.showSku({
//             itemId: good_id,
//             success: (res) => {
//                 console.log("skuId = ", res.skuId);
//                 call && call(res);
//                 //浏览完直接下单
//                 // this.order(res.itemId, res.skuId, res.quantity, success ? success : null);
//             },
//             fail: (res) => {
//                 self.boolSku = false;
//                 call && call(false);
//             },
//         });
//     }

//     /**
//      * 下单
//      * @param good_id 商品id
//      * @param sku_id skuid
//      * @param quantity 商品数量
//      * @param success 成功回调
//      */
//     confirmCustomOrder(good_id, sku_id, quantity, success) {
//         if (!this.canIUse("confirmCustomOrder", "tb")) return;
//         my.tb.confirmCustomOrder({
//             itemId: good_id,
//             skuId: sku_id,
//             quantity: quantity,
//             success: (res) => {
//                 success && success(true);
//             },
//             fail: (res) => {
//                 success && success(false);
//             },
//         });
//     }

//     /**
//      * 打开收货地址选择器
//      * @param success 成功回调
//      */
//     chooseAddress(success) {
//         if (!this.canIUse("chooseAddress", "tb")) return;
//         my.authorize({
//             scopes: 'scope.addressList',
//             success: (result) => {
//                 my.tb.chooseAddress({
//                     addAddress: "show",
//                     searchAddress: "hide",
//                     locateAddress: "hide",
//                     success: (res) => {
//                         console.log('======= 收货地址 ======', JSON.stringify(res))
//                         let data = {
//                             name: res.name,
//                             phone: res.telNumber,
//                             address: res.provinceName + res.cityName + res.countyName + res.streetName + res.detailInfo,
//                             province: res.provinceName,
//                             city: res.cityName,
//                             county: res.countyName,
//                             street: res.streetName,
//                             detailInfo: res.detailInfo
//                         }
//                         success && success(data);
//                     },
//                     fail: (res) => {
//                         // console.log('======= 收货失败 ======', JSON.stringify(res))
//                     },
//                 });
//             },
//         })
//     }

//     /**
//      * 创建音效主件
//      * @param url 
//      * @param loop 
//      * @param play 
//      */
//     createInnerAudioContext(url, loop, play) {
//         var self = this;
//         for (let i = 0; i < self.audioContexts.length; i++) {
//             let context = self.audioContexts[i];
//             if (context.src == url) {
//                 if (play) {
//                     context.loop = loop;
//                     context.onPlay();
//                 }
//                 else {
//                     context.destroy();
//                     self.audioContexts.splice(i, 1);
//                     i--;
//                 }
//                 return;
//             }
//         }
//         var innerAudioContext = my.createInnerAudioContext();
//         innerAudioContext.autoplay = true;
//         innerAudioContext.loop = loop;
//         innerAudioContext.src = url;
//         innerAudioContext.onPlay(() => {
//             console.log('开始播放');
//             self.audioContexts.push(innerAudioContext);
//         })
//         innerAudioContext.onError((res) => {
//             console.log(res.errMsg);
//             innerAudioContext.destroy();
//         })
//         innerAudioContext.onEnded(() => {
//             console.log('播放结束')
//         })
//         innerAudioContext.onStop(() => {
//             console.log('停止播放')
//         })
//     }

//     /**
//      * 是否是IPhone手机
//      */
//     isIPhone() {
//         var systemInfo = my.getSystemInfoSync();
//         if (systemInfo != null) {
//             let platform = systemInfo.platform;
//             return platform == "iOS";
//         }
//         return false;
//     }

//     prompt(tit, call) {
//         my.prompt({
//             title: tit,
//             // message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
//             // placeholder: '给朋友留言',
//             okButtonText: '确定',
//             cancelButtonText: '取消',
//             success: (result) => {
//                 // inputValue: "请输入", ok: true
//                 call && result.ok && call(result.inputValue);
//                 // console.log("result111111111",result);
//                 // my.alert({
//                 //     title: JSON.stringify(result),
//                 // });
//             },
//         })
//     }

//     /**
//      * 设置导航条颜色
//      */
//     setBarColor(bool) {
//         let color;
//         if (bool) {
//             color = '#6da5b4';
//         }
//         else {
//             color = "#4979a6";
//         }
//         my.setNavigationBar({ backgroundColor: color });
//     }

//     /**
//      * 获得服务器时间
//      * @param call 
//      */
//     getServerTime(call) {
//         my.getServerTime({
//             success(res) {
//                 call && call(res.time);
//             },
//             fail(res) {
//                 let time = Date.now();
//                 call && call(time);
//             }
//         })
//     }

//     /**
//      * 发送网络信息
//      * @param type 
//      * @param call 
//      * @param data 
//      */
//     SendNetMessage(type, call, data) {
//         let app = getApp();
//         app["SendNetMessage"](type, call, data);
//     }

//     /**
//      * 登录服务器
//      * @param {*} call 
//      */
//     loginServer(useInfo, call) {
//         let app = getApp();
//         app["loginServer"](useInfo, call);
//     }

//     userReport(res) {
//         console.log(res);
//     }

// }