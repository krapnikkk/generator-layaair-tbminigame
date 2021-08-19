App({
  globalData:{},
  game:null,
  onLaunch(options) {
    my.onError(function(error) {
      // 小程序执行出错时
      console.error(error);
    });
    // 第一次打开
    // options.query == {number:1}
    this.globalData.options = options;
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});