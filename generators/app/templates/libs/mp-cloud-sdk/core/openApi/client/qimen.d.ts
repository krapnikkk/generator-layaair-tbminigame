import {ICloudService} from "../../interface/cloudService";

export default class Qimen extends ICloudService {
  invoke(options: { api: string, data?: any, targetAppKey?: any, headers?: any }): Promise<any>;

  private topRequest;
}
