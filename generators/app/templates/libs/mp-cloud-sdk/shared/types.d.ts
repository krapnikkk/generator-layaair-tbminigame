export interface ICallback {
    (res: any): void;
}
export interface IHttpRequestOptions extends IAsyncInvokeOptions {
    url: string;
    method?: string;
    headers?: any;
    data?: any;
    dataType?: string;
}
export declare type Env = 'test' | 'pre' | 'online';
export declare type Envs = {
    database: Env;
    file: Env;
    function: Env;
    message: Env;
};
export interface ICloudOptions {
    env?: Env | Envs;
    appKey?: string;
}
declare global {
    interface Window {
    }
    var my: {
        httpRequest: (options: IHttpRequestOptions) => void;
        sendMtop: (options: any) => void;
        alert: (options: {
            title?: string;
            content?: string;
        }) => void;
    };
    var NODE_PLATFORM: boolean;
    var SDK_VERSION: string;
}
export interface IAsyncInvokeOptions {
    success?: ICallback;
    fail?: ICallback;
    complete?: ICallback;
}
export declare type AsyncInvokeResult = Promise<any> | void;
export declare type Constructor<T = {}> = new (...args: any[]) => T;
