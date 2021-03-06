import { Request } from '../../shared/request';
import { Env } from "../../../packages/mp-cloud-node-sdk/types/shared/types";
interface IPushOptions {
    subType: number;
    deviceId?: string;
    data: object;
    pushType: string;
}
export default class Server {
    env: Env;
    request: Request;
    constructor(env: Env, request: Request);
    push(options: IPushOptions): Promise<any>;
}
export {};
