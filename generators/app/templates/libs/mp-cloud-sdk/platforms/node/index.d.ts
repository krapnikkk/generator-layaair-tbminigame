import { IProxy, IRequestOptions } from '../../shared/request';
import { ICloudOptions } from '../../shared/types';
import CloudFunction from '../../core/functions';
import Database from '../../core/db';
import Top from '../../core/openApi/server/top';

export declare class Cloud {
    private _options;
    db: Database;
    function: CloudFunction;
    private request;
    topApi: Top;
    setEnv(env: any): void;
    init(options: ICloudOptions & IRequestOptions, proxy: IProxy): void;
}
export declare function cloud(context: any, options: ICloudOptions): Cloud;
