import { Request } from "../../shared/request";
export interface ICloudServiceOptions {
    env?: 'test' | 'online' | 'pre';
}
export declare abstract class ICloudService {
    options: ICloudServiceOptions;
    request: Request;
    constructor(options: ICloudServiceOptions, request: Request);
    init?(): void;
}
