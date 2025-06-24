export const storageUtil = (
    options: StorageUtilOptions = {}
): StorageUtil => {
  const {prefix = '', storage = localStorage} = options
  const getKey = (key: string) => `${prefix}${key}`
  return {
    set(key, value, {expireSeconds}: SetOptions = {}) {
      const expireAt = expireSeconds ? Date.now() + expireSeconds * 1000 : null
      const payload = JSON.stringify({value, expireAt})
      storage.setItem(getKey(key), payload)
    },
    get(key) {
      const raw = storage.getItem(getKey(key))
      if (!raw) return null
      try {
        const parsed = JSON.parse(raw)
        const {value, expireAt} = parsed
        if (expireAt && Date.now() > expireAt) {
          storage.removeItem(getKey(key))
          return null
        }
        return value ?? null
      } catch {
        // 非本工具写入的数据，按原样返回
        return raw as any
      }
    },
    remove(key) {
      storage.removeItem(getKey(key))
    },
    clear() {
      if (!prefix) {
        storage.clear()
        return
      }
      const toRemove: string[] = []
      for (let i = 0; i < storage.length; i++) {
        const k = storage.key(i)
        if (k?.startsWith(prefix)) toRemove.push(k)
      }
      toRemove.forEach(k => storage.removeItem(k))
    },
    /**
     * 清除所有已过期项
     */
    clearExpired() {
      for (let i = 0; i < storage.length; i++) {
        const k = storage.key(i)
        if (!k?.startsWith(prefix)) continue

        const raw = storage.getItem(k)
        if (!raw) continue

        try {
          const {expireAt} = JSON.parse(raw)
          if (expireAt && Date.now() > expireAt) {
            storage.removeItem(k)
          }
        } catch {
          // 非 JSON 格式（非本工具写入），跳过
        }
      }
    },
  }
}

/**
 * 存储工具的配置项
 */
export interface StorageUtilOptions {
  /** 键名前缀，便于隔离不同业务模块 */
  prefix?: string

  /** 使用的存储类型，默认为 localStorage，可切换为 sessionStorage 或自定义实现 */
  storage?: Storage
}

/**
 * 设置存储时的选项
 */
export interface SetOptions {
  /** 过期时间（单位：秒），可选 */
  expireSeconds?: number
}

/**
 * 存储工具实例类型
 */
export interface StorageUtil {
  /**
   * 设置存储项（支持过期时间）
   * @param key 键名
   * @param value 键值
   * @param options 可选的设置选项，如过期时间
   */
  set(key: string, value: unknown, options?: SetOptions): void
  /**
   * 获取存储项，自动剔除过期数据
   * @param key 键名
   */
  get<T = any>(key: string): T | null
  /**
   * 移除单项
   * @param key 键名
   */
  remove(key: string): void
  /**
   * 清除所有存储项，传入了prefix，清除指定前缀的数据
   */
  clear(): void
  /**
   * 清除所有已过期项
   */
  clearExpired(): void
}
