export interface TimeDiff {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
export type DiffUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
export interface DateUtil {
    /**
     * 计算两个日期之间的差值，可选单位：毫秒到年。
     * @param d1 - 第一个日期（Date 对象、时间戳或字符串）
     * @param d2 - 第二个日期（Date 对象、时间戳或字符串）
     * @param unit - 单位（'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'），默认是 'millisecond'
     * @returns 差值（以指定单位计）
     */
    diff: (d1: Date | string | number, d2: Date | string | number, unit?: DiffUnit) => number;
    /**
     * 精确计算两个时间的差异，包含年/月/日/时/分/秒/毫秒。
     * @param d1 - 起始日期（Date | string | number）
     * @param d2 - 结束日期（Date | string | number）
     * @returns 一个对象，包含各时间单位的差值
     */
    diffDetailed: (d1: Date | string | number, d2: Date | string | number) => TimeDiff;
    /**
     * 判断某一年是否为闰年。
     * @param year - 四位数的年份
     * @returns 如果是闰年则返回 true，否则返回 false
     */
    isLeapYear: (year: number) => boolean;
    /**
     * 判断某个日期是否为周末。
     * @param date - 日期（Date 对象、时间戳或字符串）
     * @returns 如果是周末则返回 true，否则返回 false
     */
    isWeekend: (date: Date | string | number) => boolean;
    /**
     * 获取指定日期的星期几文本。
     * @param date - 日期（Date 对象、时间戳或字符串）
     * @returns 星期几文本： '一', '二', '三', '四', '五', '六', '日'
     */
    getWeekdayText: (date: Date | string | number) => string;
}
