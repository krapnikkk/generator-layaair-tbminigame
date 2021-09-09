// 淘宝小程序相关
interface IGlobalData {
    options: { [key: string]: string };
    shareInfo: IGlobalDataShareInfo
}

interface IGlobalDataOptions {
    query: { [key: string]: string };
}

/**
 * SEE: https://miniapp.open.taobao.com/doc.htm?docId=118909&docType=1&tag=dev
 */
interface IGlobalDataShareInfo {
    title: string;
    desc?: string;
    path?: string;
    imageUrl?: string;
    extraParams?: { [key: string]: string };
    success?: Function;
    fail?: Function;
}
