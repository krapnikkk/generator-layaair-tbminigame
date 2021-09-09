// response
interface IResBase {
    msg: string;
    handler: string;
    code: number;
    data?: ITaskInfo[] | IActivityInfo | IReward[] | ILoginResInfo | ISpendInfo | IGoods;
    requestId: string;
}

// resquest
interface IReqData {
    activityId?: number;
    detailType?: string;
    Id?: string | number
    type?: string;
    outcome?: string;
    shopId?: string;
}

interface ITaskInfo {
    detailType: string;
    reward: IReward[];
    eachPeriodType: string;
    rewardTime: number;
    periodType: string;
    sortIndex: number;
    competition: string;
    title: string;
    content: string;
    eachPeriod: number;
    periodLimit: number;
    status: string;
    period: number;
    url: string;
}

interface IReward {
    type: string;
    value: number;
    desc?: string;
}

interface ISpendInfo {
    reward: IReward[];
    totalFee: number; // 本次购买金额
    numIids: any;     // 本次购买商品详情
}

interface IActivityInfo {
    activityId: number;
    name: string;
    startTime: number;
    endTime: number;
    shareTitle: string;
    sharePic: string;
    shareInfo: string;
    ruleInfo: string;
    status: string;
    endLocation: string;
}

/**
 * activityId: 	    活动Id
 * nickName:        用户昵称，如未授权，C端带默认昵称
 * avatar:          头像，如未授权，C端带默认头像
 * fromUserOpenId:  分享者openId
 */
interface ILoginReqInfo {
    activityId?: number;
    nickName?: string;
    avatar?: string;
    fromUserOpenId?: string;
}

interface ILoginResInfo {
    activityId: number;
    shopId: number;
    userOpenId: string;
    sellerId: number;
    nickName: string;
    avatar: string;
    newUser: boolean;
    isBlack: boolean;
    fromAvatar?: string;
    fromNickName?: string;
    shopLogo?: string;
    shopName?: string;
}

interface IBasePageReqData extends IReqData {
    pageNumber?: number;
    pageSize?: number;
}

interface IBasePage {
    total: number;
    totalPage: number;
    currentPage: number;
}

interface IGoods extends IBasePage {
    pageData: IGoodsItem[]
}

interface IGoodsItem {
    goodsId: string;
    goodsName: string;
    pic: string;
    price: string;
    sum: number;
    soldQuantity: number
}