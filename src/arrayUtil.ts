export const arrayUtil = {
  /**
   * 去重（基于原始值相等）
   */
  unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr))
  },

  /**
   * 扁平化数组（默认只扁平一层）
   */
  flatten<T>(arr: any[], depth = Infinity): T[] {
    return flatten(arr, depth)
  },

  /**
   * 将数组按指定长度切分
   */
  chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  },

  /**
   * 随机打乱数组顺序（Fisher–Yates 洗牌）
   */
  shuffle<T>(arr: T[]): T[] {
    const res = [...arr]
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[res[i], res[j]] = [res[j], res[i]]
    }
    return res
  },

  /**
   * 返回数组中出现最多的元素（多数值）
   */
  mostFrequent<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined
    const map = new Map<T, number>()
    arr.forEach(item => map.set(item, (map.get(item) ?? 0) + 1))
    return [...map.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0]
  },

  /**
   * 清除数组中的 null 和 undefined
   */
  compact<T>(arr: (T | null | undefined)[]): T[] {
    return arr.filter(Boolean) as T[]
  },

  /**
   * 判断两个数组是否相等（顺序+值）
   */
  isEqual<T>(a: T[], b: T[]): boolean {
    return (
        a.length === b.length &&
        a.every((v, i) => v === b[i])
    )
  },

  /**
   * 获取数组中的随机元素
   */
  sample<T>(arr: T[]): T | undefined {
    return arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined
  },

  /**
   * 统计数组中某值的出现次数
   */
  count<T>(arr: T[], value: T): number {
    return arr.reduce((total, curr) => (curr === value ? total + 1 : total), 0)
  },
}

function flatten<T>(arr: any[], depth = Infinity): T[] {
  return arr.reduce<T[]>((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      acc.push(...flatten<T>(item, depth - 1))
    } else {
      acc.push(item)
    }
    return acc
  }, [])
}

export interface ArrayUtil {
  unique<T>(arr: T[]): T[]

  flatten<T>(arr: any[], depth?: number): T[]

  chunk<T>(arr: T[], size: number): T[][]

  shuffle<T>(arr: T[]): T[]

  mostFrequent<T>(arr: T[]): T | undefined

  compact<T>(arr: (T | null | undefined)[]): T[]

  isEqual<T>(a: T[], b: T[]): boolean

  sample<T>(arr: T[]): T | undefined

  count<T>(arr: T[], value: T): number
}
