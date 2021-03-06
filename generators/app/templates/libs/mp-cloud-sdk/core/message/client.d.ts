import Powermsg from '@ali/lib-powermsg-sdk';
import { Env } from '../../shared/types';
export default class Client {
    env: Env;
    pmg: Powermsg;
    deviceId: string;
    initing: boolean;
    queue: (() => void)[];
    config: any;
    constructor(env: Env);
    init: () => Promise<any>;
    onMessage: (callback: any) => Promise<() => void>;
    private createPwgInstance;
}
