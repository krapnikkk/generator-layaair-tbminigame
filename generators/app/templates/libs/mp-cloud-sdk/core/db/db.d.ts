import { CollectionReference } from "./collection";
import { IAsyncInvokeOptions } from "../../shared/types";
import { ICloudService } from "../interface/cloudService";
export declare class Db extends ICloudService {
    /**
     * 获取集合的引用
     *
     * @param collName - 集合名称
     */
    collection(collName: string): CollectionReference;
    /**
     * 创建集合
     */
    createCollection(name: string, options: {
        collName: string;
    } & IAsyncInvokeOptions): Promise<any>;
    dbRequest(action?: string, params?: any): Promise<any>;
}
