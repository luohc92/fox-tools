import type {TypeUtil} from "../types";

export const typeUtil: TypeUtil = {
  /**
   * 判断是否为数组
   * @param val - 任意待判断的值
   * @returns 如果是 Array 类型则为 true，否则为 false
   */
  isArray: (val): val is unknown[] => Array.isArray(val),

  /**
   * 判断是否为对象（非 null 且非数组）
   * @param val - 任意待判断的值
   * @returns 如果是对象则为 true
   */
  isObject: (val): val is object =>
      val !== null && typeof val === 'object' && !Array.isArray(val),

  /**
   * 判断是否为普通对象（即 Object 字面量）
   * @param val - 任意待判断的值
   * @returns 如果是 plain object 返回 true
   */
  isPlainObject: (val): val is Record<string, unknown> =>
      Object.prototype.toString.call(val) === '[object Object]',

  /**
   * 判断是否为有效数值（不包含 NaN）
   * @param val - 任意待判断的值
   * @returns 是 number 且非 NaN 则为 true
   */
  isNumber: (val): val is number => typeof val === 'number' && !isNaN(val),

  /**
   * 判断是否为函数
   * @param val - 任意待判断的值
   * @returns 是函数则返回 true
   */
  isFunction: (val): val is Function => typeof val === 'function',

  /**
   * 判断是否为 Promise 实例
   * @param val - 任意待判断的值
   * @returns 是 Promise 则返回 true
   */
  isPromise: (val): val is Promise<unknown> =>
      !!val &&
      (typeof val === 'object' || typeof val === 'function') &&
      typeof (val as any).then === 'function',

  /**
   * 判断是否为有效的 Date 对象
   * @param val - 任意待判断的值
   * @returns 是合法日期对象则为 true
   */
  isDate: (val: unknown): val is Date =>
      Object.prototype.toString.call(val) === '[object Date]' &&
      typeof val === 'object' &&
      val !== null &&
      !isNaN(Number(val)),


  /**
   * 判断是否为 RegExp 正则表达式
   * @param val - 任意待判断的值
   * @returns 是正则对象则返回 true
   */
  isRegExp: (val): val is RegExp =>
      Object.prototype.toString.call(val) === '[object RegExp]',
  /**
   * 精确获取值的类型名称（小写）
   * @param val - 任意待识别的值
   * @returns 对应类型字符串，如 'string'、'array'、'null' 等
   */
  getType: (val: unknown): string => {
    const type = typeof val
    if (type === 'string') return 'string'
    if (type === 'number') return Number.isNaN(val) ? 'nan' : 'number'
    if (type === 'boolean') return 'boolean'
    if (type === 'undefined') return 'undefined'
    if (type === 'function') return 'function'
    if (type === 'symbol') return 'symbol'
    if (type === 'bigint') return 'bigint'
    if (val === null) return 'null'
    if (Array.isArray(val)) return 'array'
    if (val instanceof Date) return 'date'
    if (val instanceof RegExp) return 'regexp'
    if (val instanceof Map) return 'map'
    if (val instanceof Set) return 'set'
    if (val instanceof WeakMap) return 'weakmap'
    if (val instanceof WeakSet) return 'weakset'
    if (val instanceof Promise) return 'promise'
    if (val instanceof Error) return 'error'
    const rawType = Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
    return rawType || 'unknown'
  },
  isType: (val: unknown, typeName: string): boolean => {
    return typeUtil.getType(val) === typeName.toLowerCase()
  }
}
