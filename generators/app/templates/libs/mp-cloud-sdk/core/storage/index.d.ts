import { IAsyncInvokeOptions } from "../../shared/types";
import { ICloudService } from "../interface/cloudService";
export interface IUploadFileOptions extends IAsyncInvokeOptions {
    /**
     * 选择到的本地文件路径
     */
    filePath: string;
    /**
     * 文件类型, image/audio/video
     */
    fileType: FileTypes;
    /**
     * 云存储文件名可带路径, 如a/xxx.jpg
     */
    fileName?: string;
    /**
     * web环境上传 file对象
     */
    file?: any;
}
export interface IDownloadFileOptions extends IAsyncInvokeOptions {
    fileType?: FileTypes;
    fileId: string;
}
export interface ITempFileURLOptions extends IAsyncInvokeOptions {
    fileList: string[];
}
export declare type IDeleteFileOptions = IDownloadFileOptions;
export declare type FileTypes = "image" | "video" | "audio";
export default class CloudStorage extends ICloudService {
    private parseUploadResult;
    private parsePostUploadResult;
    private parseAusUploadResult;
    /**
     * 文件上传
     * 1.获取上传配置
     * 2.调用my.api上传
     * 3.建立存储关系
     * @param options
     */
    uploadFile(options: IUploadFileOptions): Promise<any>;
    /**
     * 删除文件
     * @param options
     */
    deleteFile(options: IDeleteFileOptions): Promise<boolean>;
    /**
     * 根据文件id(cloud://)获取授权的url
     * @param options
     */
    getTempFileURL(options: IAsyncInvokeOptions & {
        fileType: string;
        fileId: string | string[];
    }): Promise<any>;

    /**
     * 从服务端获取文件并在本地读取
     * @param options 
     */
    readRemoteFile(options: IAsyncInvokeOptions & {
        url: string;
    }): Promise<ArrayBuffer>;
    /**
     * 存储的请求代理, 统一sdk环境和存储环境
     * @param action
     * @param data
     * @param requestType
     */
    private storageRequest;
}
