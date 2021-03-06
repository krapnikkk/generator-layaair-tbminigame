import {ICloudService} from "../../interface/cloudService";

export default class Process extends ICloudService {
  invoke(options: { api: string, data?: any, headers?: any }): Promise<any>;

  private topRequest;
}
