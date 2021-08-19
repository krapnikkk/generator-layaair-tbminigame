var touchstartCB;
var touchcancelCB;
var touchendCB;
var touchmoveCB;
Component({
  didUnmount() {
    if ($global.window) {
      $global.window.cancelAnimationFrame();
      $global.window = null;
    }
    $global.$isAdapterInjected = false;
  },
  methods: {
    onTouchStart(e) {
      console.log("touch start", e);
      touchstartCB && touchstartCB(e)
    },
    onTouchCancel(e) {
      console.log("touch cancel", e)
      touchcancelCB && touchcancelCB(e)
    },
    onTouchEnd(e) {
      console.log("touch end", e)
      touchendCB && touchendCB(e)
    },
    onTouchMove(e) {
      console.log("touch move", e);
      touchmoveCB && touchmoveCB(e)
    },
    canvasOnReady() {
      my.onTouchStart = function (cb) {
        touchstartCB = cb;
      }
      my.onTouchCancel = function (cb) {
        touchcancelCB = cb;
      }
      my.onTouchEnd = function (cb) {
        touchendCB = cb;
      }
      my.onTouchMove = function (cb) {
        touchmoveCB = cb;
      }
      delete require.cache[require.resolve("./adapter.js")];
      require("./adapter.js");
      delete require.cache[require.resolve("./libs/laya.tbpluginmini.js")];
      require("./libs/laya.tbpluginmini.js");

      delete require.cache[require.resolve("./index.js")];
      require("./index.js");

    }
  }
});