import { ICloudService, ICloudServiceOptions } from "../interface/cloudService";
import Client from './client';
import Server from './server';
export default class Message extends ICloudService {
    server: Server;
    client: Client;
    constructor(options: ICloudServiceOptions);
}
