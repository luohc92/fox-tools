/**
 * 数字处理工具接口定义
 */
export interface NumberUtil {
  /**
   * 保留指定小数位数（默认 2），可选择是否四舍五入
   * @param value 要处理的数字
   * @param digits 小数位数（默认 2）
   * @param round 是否四舍五入（默认 true）
   * @returns 处理后的数字
   */
  toDecimal(value: number, digits?: number, round?: boolean): number

  /**
   * 判断是否为合法有限数字（不是 NaN 且有限）
   * @param value 任意值
   * @returns 是否为合法数字
   */
  isValidNumber(value: any): boolean

  /**
   * 判断是否为整数
   * @param value 任意值
   * @returns 是否为整数
   */
  isInteger(value: any): boolean

  /**
   * 判断是否为偶数
   * @param value 输入数字
   * @returns 是否为偶数
   */
  isEven(value: number): boolean

  /**
   * 判断是否为奇数
   * @param value 输入数字
   * @returns 是否为奇数
   */
  isOdd(value: number): boolean

  /**
   * 判断数字是否在指定范围内
   * @param value 目标数值
   * @param min 最小边界值
   * @param max 最大边界值
   * @param inclusive 是否包含边界（默认 true）
   * @returns 是否在范围内
   */
  isBetween(value: number, min: number, max: number, inclusive?: boolean): boolean

  /**
   * 限制值在指定范围内（超出则截断）
   * @param value 原始值
   * @param min 最小值
   * @param max 最大值
   * @returns 修正后的值
   */
  clamp(value: number, min: number, max: number): number

  /**
   * 生成指定范围内的随机数（支持指定小数位数）
   * @param min 最小值
   * @param max 最大值
   * @param decimalDigits 小数位数（默认 0 表示整数）
   * @returns 指定精度的随机数
   */
  random(min: number, max: number, decimalDigits?: number): number


  /**
   * 多个数值求和
   * @param nums 多个数字
   * @returns 总和
   */
  sum(...nums: number[]): number

  /**
   * 计算平均值
   * @param nums 多个数字
   * @returns 平均数
   */
  average(...nums: number[]): number

  /**
   * 添加千分位分隔符（例如 1234567 → 1,234,567）
   * @param value 数字或可转换为数字的字符串
   * @returns 字符串形式的千分位格式
   */
  toThousands(value: number | string): string

  /**
   * 数字左侧补零至指定长度
   * @param value 原始数字
   * @param length 目标总长度
   * @returns 补零后的字符串
   */
  padZero(value: number, length: number): string

  /**
   * 将字节数格式化为指定单位（支持自动判断）
   * @param bytes 字节数
   * @param unit 指定单位（可选：'B' | 'KB' | 'MB' | 'GB' | 'TB'），不传则自动匹配
   * @returns 格式化字符串（如 "12.34 MB"）
   */
  formatBytes(bytes: number, unit?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'): string

  /**
   * 将数字转换为中文金额大写（仅支持整数）
   * @param num 整数
   * @returns 中文大写字符串
   */
  numberToChinese(num: number): string

  /**
   * 数字缩写格式（如 1000 → 1K，1000000 → 1M）
   * @param num 数字
   * @param digits 小数位数（默认 0）
   * @returns 缩写后的表示
   */
  abbreviateNumber(num: number, digits?: number): string

  /**
   * 中文数字缩写格式（如 1000 → 1千，10000 → 1万，1亿 → 1亿）
   * @param num 数字
   * @param digits 小数位数（默认 0）
   * @returns 中文单位缩写后的字符串
   */
  abbreviateNumberCN(num: number, digits?: number): string

}
