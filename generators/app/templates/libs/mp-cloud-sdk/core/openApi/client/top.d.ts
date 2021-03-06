import {ICloudService} from "../../interface/cloudService";

export default class Top extends ICloudService {
  invoke(options: { api: string, data?: any, headers?: any, authScope?: string }): Promise<any>;

  private topRequest;
}
