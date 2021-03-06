import { IAsyncInvokeOptions } from "./types";
export declare function invokeCallback(options: IAsyncInvokeOptions, asyncTask: Promise<any>): Promise<void>;
export declare function myApiPromisify(method: (options: any) => void, options?: any): Promise<any>;
export declare function getUserId(): Promise<string>;
