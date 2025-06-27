/**
 * 数组工具函数接口定义
 */
export interface ArrayUtil {
    /**
     * 数组去重（保留原始值，去除重复项）
     * @param arr 原始数组
     * @return 去重后的新数组
     */
    unique<T>(arr: T[]): T[];
    /**
     * 多维数组扁平化
     * @param arr 多层嵌套的数组
     * @param depth 展开深度（默认完全展开）
     * @return 扁平化后的新数组
     */
    flatten<T>(arr: any[], depth?: number): T[];
    /**
     * 将数组按指定长度分块
     * @param arr 原始数组
     * @param size 每组的长度
     * @return 分块后的二维数组
     */
    chunk<T>(arr: T[], size: number): T[][];
    /**
     * 打乱数组顺序（Fisher–Yates 洗牌算法）
     * @param arr 原始数组
     * @return 顺序被打乱的新数组
     */
    shuffle<T>(arr: T[]): T[];
    /**
     * 返回数组中出现频率最高的元素
     * @param arr 原始数组
     * @return 出现最多次的值（若为空数组则返回 undefined）
     */
    mostFrequent<T>(arr: T[]): T | undefined;
    /**
     * 清除数组中的 null 和 undefined
     * @param arr 原始数组，可能包含 null 或 undefined
     * @return 移除无效值后的新数组
     */
    compact<T>(arr: (T | null | undefined)[]): T[];
    /**
     * 判断两个数组是否完全相等（值和顺序都一致）
     * @param a 第一个数组
     * @param b 第二个数组
     * @return 是否相等
     */
    isEqual<T>(a: T[], b: T[]): boolean;
    /**
     * 从数组中随机取出一个元素
     * @param arr 原始数组
     * @return 随机选中的元素（若为空数组则返回 undefined）
     */
    sample<T>(arr: T[]): T | undefined;
    /**
     * 统计指定值在数组中出现的次数
     * @param arr 原始数组
     * @param value 要统计的目标值
     * @return 出现次数
     */
    count<T>(arr: T[], value: T): number;
}
