/**
 * 类型判断工具接口
 */
export interface TypeUtil {
    /**
     * 判断是否为数组
     * @param val - 任意待判断的值
     * @returns 如果是 Array 类型则返回 true
     */
    isArray(val: unknown): val is unknown[];
    /**
     * 判断是否为非 null 的对象（不包含数组）
     * - 普通对象：{} ✅
     * - Map / Set ✅
     * - new Date() ✅
     * - RegExp ✅
     * - 自定义类的实例 ✅
     * - null ❌（虽然 typeof null === 'object'，但已排除）
     * @param val - 任意待判断的值
     * @returns 如果是 Object 类型则返回 true
     */
    isObject(val: unknown): val is object;
    /**
     * 判断是否为纯对象（即使用 {} 或 Object.create(null) 创建的对象）
     * - 普通对象：{} ✅
     * - Object.create(null) ✅
     * - new Date() ❌
     * - [] ❌
     * - new Map() ❌
     * - 自定义类实例 ❌
     * @param val - 任意待判断的值
     * @returns 是 plain object 则返回 true
     */
    isPlainObject(val: unknown): val is Record<string, unknown>;
    /**
     * 判断是否为函数类型
     * @param val - 任意待判断的值
     * @returns 是 Function 类型则返回 true
     */
    isFunction(val: unknown): val is Function;
    /**
     * 判断是否为 Promise 实例
     * @param val - 任意待判断的值
     * @returns 是 Promise 对象则返回 true
     */
    isPromise(val: unknown): val is Promise<unknown>;
    /**
     * 判断是否为有效数值（不包含 NaN）
     * @param val - 任意待判断的值
     * @returns 是 number 且非 NaN 则返回 true
     */
    isNumber(val: unknown): val is number;
    /**
     * 判断是否为合法的 Date 对象
     * @param val - 任意待判断的值
     * @returns 是有效 Date 对象则返回 true
     */
    isDate(val: unknown): val is Date;
    /**
     * 判断是否为正则表达式对象
     * @param val - 任意待判断的值
     * @returns 是 RegExp 类型则返回 true
     */
    isRegExp(val: unknown): val is RegExp;
    /**
     * 获取值的类型
     * @param val - 任意待判断的值
     * @returns 返回值的类型名称
     */
    getType(val: unknown): string;
    /**
     * 判断一个值是否为指定类型（基于 getType）
     * @param val - 待判断的值
     * @param typeName - 预期的类型名称（不区分大小写）
     * @returns 如果类型匹配则返回 true
     */
    isType(val: unknown, typeName: string): boolean;
}
