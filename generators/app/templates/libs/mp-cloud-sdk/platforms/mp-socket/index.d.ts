import { Cloud as MpCloud } from '../mp';
import { ICloudOptions } from '../../shared/types';
import Client from '../../core/message/client';
import { IProxy } from '../../shared/request';
export declare class Cloud extends MpCloud {
    message: {
        client: Client;
    };
    init(options: ICloudOptions, proxy: IProxy): Promise<boolean>;
}
declare const _default: Cloud;
export default _default;
