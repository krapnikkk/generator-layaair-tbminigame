import { Db } from "./db";
export interface IFindOptions {
    /**
     * 查询的文档数量限制
     */
    limit?: number;
    /**
     * 跳过的文档数量
     */
    skip?: number;
    /**
     * 排序规则
     */
    sort?: object;
    /**
     * 查询后过滤的字段
     */
    projection?: object;
}
export declare class CollectionReference {
    /**
     * 初始化
     *
     * @internal
     *
     * @param db    - 数据库的引用
     * @param coll  - 集合名称
     */
    private _db;
    private _coll;
    constructor(db: Db, coll: string);
    /**
     * 读取集合名字
     */
    readonly name: string;
    /**
     * 对集合执行聚合查询
     * @param pipeline 聚合查询对象
     */
    aggregate(pipeline: object | object[]): Promise<any>;
    /**
     * 获取集合中复合条件的记录数量
     * @param filter 过滤条件
     */
    count(filter: object): Promise<any>;
    /**
     * 删除集合中的一批记录
     * @param filter 过滤条件
     */
    deleteMany(filter: object): Promise<any>;
    /**
     * 查找集合中符合条件的所有记录
     * @param filter 过滤条件
     * @param options 查询配置项
     */
    find(filter: any, options?: IFindOptions): Promise<any>;
    /**
     * 替换一条数据
     * @param filter 过滤条件
     * @param data 新数据
     */
    replaceOne(filter: object, data: object): Promise<any>;
    /**
     * 在集合中添加一条记录
     * @param data 带插入的数据
     */
    insertOne(data: object): Promise<any>;
    /**
     * 在集合中添加一批记录
     * @param data 待插入的数据，只能为数组
     */
    insertMany(data: object[]): Promise<any>;
    /**
     *
     * @param filter 过滤条件
     * @param data 更新规则
     *
     */
    updateMany(filter: object, data: object): Promise<any>;
}
