import {IProxy} from '../../shared/request';
import {ICloudOptions} from '../../shared/types';
import CloudFunction from '../../core/functions';
import CloudStorage from '../../core/storage';
import Db from '../../core/db';
import Top from '../../core/openApi/client/top';
import Qimen from '../../core/openApi/client/qimen';
import Process from '../../core/openApi/client/process';
import Application from '../../core/openApi/client/application';

export declare class Cloud {
  function: CloudFunction;
  file: CloudStorage;
  db: Db;
  topApi: Top;
  qimenApi: Qimen;
  processApi: Process;
  application: Application;

  init(options: ICloudOptions, proxy?: IProxy): Promise<boolean>;
}

declare const _default: Cloud;
export default _default;
