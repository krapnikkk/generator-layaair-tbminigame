export default class UIConfig {
    static baseRoot = ""; // 根目录
    static fguiFileExtension: string = "bin";//使用txt后缀，部分场景会将请求数据contentType作为【text/plain】返回
    static startScene:string = "Invitation";
    static fguiFileArr: { [key: string]: string }[] = [
        {
            "name": "Invitation",
        }
    ]
}