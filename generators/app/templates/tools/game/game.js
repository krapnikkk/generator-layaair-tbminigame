
var touchstartCB;
var touchcancelCB;
var touchendCB;
var touchmoveCB;
var shareInfoList = [];
Page(
  {
    onReady() {
    },
    onLoad(query) {
      var app = getApp();
      this.query = query;
      app.game = this;
    },
    onTouchStart(e) {
      touchstartCB && touchstartCB(e)
    },
    onTouchCancel(e) {
      touchcancelCB && touchcancelCB(e)
    },
    onTouchEnd(e) {
      touchendCB && touchendCB(e)
    },
    onTouchMove(e) {
      touchmoveCB && touchmoveCB(e)
    },

    canvasOnReady() {
      my.onTouchStart = function (cb) {
        touchstartCB = cb;
      };
      my.onTouchCancel = function (cb) {
        touchcancelCB = cb;
      }
      my.onTouchEnd = function (cb) {
        touchendCB = cb;
      }
      my.onTouchMove = function (cb) {
        touchmoveCB = cb;
      }

      delete require.cache[require.resolve("layaengine/adapter.js")];
      require("layaengine/adapter.js");
      $global.window.pushSharedInfo = function (obj) {
        shareInfoList.push(obj);
      };
      delete require.cache[require.resolve("layaengine/libs/min/laya.tbmini.min.js")];
      require("layaengine/libs/min/laya.tbmini.min.js");
      delete require.cache[require.resolve("./index.js")];
      require("./index.js");
    },
    onUnload() {
      $global.window.cancelAnimationFrame();
      $global.$isAdapterInjected = false;
      $global.window = null;
    },

    async openMember() {
      this.setData({ expend: true });
    },
    async onClose() {
      this.setData({ expend: false });
    },
    async onAuthSuccess(res) {
      this.setData({ expend: false });
    },
    async onAuthFail(res) {
      this.setData({ expend: false });
    }
  }
);
