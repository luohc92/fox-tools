export interface BigDecimalUtil {
    /** 原始数值（不包含符号） */
    readonly value: string;
    /** 当前符号，1 为正，-1 为负 */
    readonly sign: 1 | -1;
    /** 获取字符串表示（带符号） */
    toString(): string;
    /**
     * 保留指定位数小数（四舍五入）
     * @param digits 小数位数，默认 2
     * @param round 是否四舍五入，默认 true
     */
    toFixed(digits?: number, round?: boolean): string;
    /**
     * 加法运算
     * @param other 被加数（数字或字符串）
     */
    add(other: string | number): BigDecimalUtil;
    /**
     * 减法运算
     * @param other 减数（数字或字符串）
     */
    sub(other: string | number): BigDecimalUtil;
    /**
     * 乘法运算
     * @param other 乘数
     */
    mul(other: string | number): BigDecimalUtil;
    /**
     * 除法运算，保留指定位数精度
     * @param other 除数
     * @param digits 小数位数，默认 20
     */
    div(other: string | number, digits?: number): BigDecimalUtil;
    /**
     * 比较两个数的大小
     * @returns 1（大于）、0（等于）、-1（小于）
     */
    compare(other: string | number): number;
    /**
     * 判断是否相等（数值+符号）
     */
    equals(other: string | number): boolean;
    /**
     * 判断是否为 0
     */
    isZero(): boolean;
    /** 是否为正数 */
    isPositive(): boolean;
    /** 是否为负数 */
    isNegative(): boolean;
    /** 取绝对值 */
    abs(): BigDecimalUtil;
    /** 取相反数 */
    negate(): BigDecimalUtil;
    /** 克隆当前值，返回新实例 */
    clone(): BigDecimalUtil;
}
