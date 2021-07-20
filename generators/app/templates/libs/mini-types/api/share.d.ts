/**
 * @file 分享
 */
declare namespace AliMiniProgram {
  interface IHideShareMenuOptions {
    /**
     * 调用成功的回调函数
     */
    success?(): void

    /**
     * 分享失败的回调函数
     */
    fail?(): void

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void
  }

  export interface my {
    /**
     * 隐藏分享按钮。
     */
    hideShareMenu(options?: IHideShareMenuOptions): void
  }
}
