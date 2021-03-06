export interface IRequestOptions {
    appKey?: string,
    sourceAppKey?: string,
    requestAppKey?:string,
    miniappId?: string,
    sourceMiniAppId?: string,
    appOwnerOpenId?: string,    
    signSecret?: string;
    sessionKey?: string;
    requestId?: string;
    cloudId?: string;
    openId?: string;
    unionId?: string;
    userNick?: string,
    mixNick?: string,    
    session?: string;
    accessToken?: string;
    env?: string;
}
export declare enum RequestTypes {
    MTOP = 1,
    MY = 2,
    GATEWAY = 3
}
export interface IGatewayResponse {
    error_response: {
        code: string;
    };
}
export interface IRequestDetail {
    url: string;
    data?: any;
    rawData?: any;
    method?: string;
    headers?: any;
    dataType?: string;
    v?: string;
    __is_retry_task__?: boolean;
    env?: string;
    mtopOptions?: any;
}
export interface IProxyOptions {
    gatewayUrl?: string;
    dataProxyGatewayUrl?: string;
}
export declare abstract class IProxy {
    options: IProxyOptions;
    abstract apply(task: IRequestDetail, requestType?: RequestTypes): Promise<any>;
    constructor(options?: IProxyOptions);
}
export declare class Request {
    networkType?: string;
    options: IRequestOptions;
    tasks: {
        detail: IRequestDetail;
        success?: (res: any) => void;
        fail?: (res: any) => void;
    }[];
    proxy: IProxy;
    inited: boolean;
    pauseExecTask: boolean;
    init(options: IRequestOptions, proxy: IProxy): Promise<void>;
    listenNetworkChange(): Promise<void>;
    static getRequestType(url: string): RequestTypes;
    /**
     * 验证响应结果, 特定情况下重试请求
     * @param res
     */
    private verifyResponse;
    private tryThrowError;
    private sendGatewayRequest;
    flushGatewayRequestQueue(reject?: boolean): void;
    exec(detail: IRequestDetail, requestType?: RequestTypes): Promise<any>;
    /**
     *
     * @param url 网关请求
     * @param method 请求方法
     * @param queryString
     * @param headers mc_开头的http header
     * @param content json body
     */
    private getHttpRequestSign;
    /**
     * 对网关请求签名
     * @param detail
     */
    private createGatewayRequest;
}
export declare const request: Request;
