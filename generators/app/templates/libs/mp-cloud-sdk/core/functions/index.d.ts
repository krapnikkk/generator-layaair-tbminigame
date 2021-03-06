import { IAsyncInvokeOptions } from '../../shared/types';
import { ICloudService } from '../interface/cloudService';
export interface ICallFunctionOptions extends IAsyncInvokeOptions {
    name: string;
    data: any;
}
export interface IInvokeMethod {
    (IAsyncInvokeOptions: any): void;
}
export default class CloudFunction extends ICloudService {
    invoke(name: string, data?: object, handler?: string): Promise<any>;
    private fcRequest;
}
