import { IAsyncInvokeOptions, Env, Envs } from "./types";
export declare function noop(): void;
export declare function invokeTaskCallback(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function safeAccess(props: any, keys: string[] | string, def?: any): any;
export declare function invokeCallback(options: IAsyncInvokeOptions, asyncTask: Promise<any>): Promise<void>;
export declare function myApiPromisify(method: (options: any) => void, options?: any): Promise<any>;
export declare function getUserId(): Promise<string>;
export declare function getEnvs(env: Env | Envs): Envs;
