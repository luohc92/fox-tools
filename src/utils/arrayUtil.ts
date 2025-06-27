import {type ArrayUtil} from "../types";

export const arrayUtil: ArrayUtil = {
  /**
   * 数组去重（保留原始值，去除重复项）
   */
  unique: <T>(arr: T[]): T[] => Array.from(new Set(arr)),

  /**
   * 多维数组扁平化（默认展开全部层级）
   */
  flatten: <T>(arr: any[], depth = Infinity): T[] =>
      arr.reduce<T[]>((acc, item) => {
        if (Array.isArray(item) && depth > 0) {
          acc.push(...arrayUtil.flatten<T>(item, depth - 1))
        } else {
          acc.push(item)
        }
        return acc
      }, []),

  /**
   * 将数组按指定长度切分
   */
  chunk: <T>(arr: T[], size: number): T[][] => {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  },

  /**
   * 打乱数组顺序（Fisher–Yates 洗牌算法）
   */
  shuffle: <T>(arr: T[]): T[] => {
    const res = [...arr]
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[res[i], res[j]] = [res[j], res[i]]
    }
    return res
  },

  /**
   * 清除数组中的 null 和 undefined
   */
  compact: <T>(arr: (T | null | undefined)[]): T[] =>
      arr.filter(Boolean) as T[],

  /**
   * 判断两个数组是否相等（顺序+值）
   */
  isEqual: <T>(a: T[], b: T[]): boolean =>
      a.length === b.length && a.every((v, i) => v === b[i]),

  /**
   * 从数组中随机取出一个元素
   */
  sample: <T>(arr: T[]): T | undefined =>
      arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined,

  /**
   * 统计指定值在数组中出现的次数
   */
  count: <T>(arr: T[], value: T): number =>
      arr.reduce((total, curr) => (curr === value ? total + 1 : total), 0),

  /**
   * 返回数组中出现频率最高的元素
   */
  mostFrequent: <T>(arr: T[]): T | undefined => {
    if (arr.length === 0) return undefined
    const map = new Map<T, number>()
    for (const item of arr) {
      map.set(item, (map.get(item) ?? 0) + 1)
    }
    return [...map.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0]
  },
}
