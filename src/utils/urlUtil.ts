import type {UrlUtil} from "../types";

export const urlUtil: UrlUtil = {
  /**
   * 获取 URL 包含协议的主机名（含端口）
   * @example "https://example.com:8080/path" → "https://example.com:8080"
   */
  getOrigin: (url: string): string => {
    return new URL(url).origin
  },

  /**
   * 获取 URL 的主机名（含端口）
   * @example "https://example.com:8080/path" → "example.com:8080"
   */
  getHost: (url: string): string => {
    return parseURL(url).host
  },

  /**
   * 获取 URL 的路径部分
   * @example "https://example.com/user/list?id=3" → "/user/list"
   */
  getPath: (url: string): string => {
    return parseURL(url).pathname
  },
  /**
   * 获取 URL 的 hash 部分
   * @example "https://example.com/#/user/list?id=3" → "/user/list"
   */
  getHashPath: (url: string): string => {
    const hash = new URL(url).hash // e.g., "#/login"
    return hash.startsWith('#') ? hash.slice(1) : hash
  },
  /**
   * 获取指定参数的值
   * @param key 参数名
   * @param url 待解析的 URL，默认当前地址
   */
  getQueryParam: (key: string, url: string): string | null => {
    return parseURL(url).searchParams.get(key)
  },

  /**
   * 移除指定查询参数
   * @param key 要删除的参数名
   * @param url 待处理的 URL，默认当前地址
   */
  removeQueryParam: (key: string, url: string): string => {
    const u = parseURL(url)
    u.searchParams.delete(key)
    return u.toString()
  },

  /**
   * 获取所有查询参数，返回键值对象
   * @param url 待解析的 URL，默认当前地址
   */
  getAllQueryParams: (url: string): Record<string, string> => {
    const u = parseURL(url)
    const params: Record<string, string> = {}
    u.searchParams.forEach((value, key) => {
      params[key] = value
    })
    return params
  },

  /**
   * 清除所有查询参数
   * @param url 原始 URL，默认当前地址
   * @return 返回无参数的新 URL
   */
  clearQueryParams: (url: string): string => {
    const u = parseURL(url)
    u.search = ''
    return u.toString()
  },

  /**
   * 批量设置多个参数（会覆盖原有键）
   * @param params 参数对象
   * @param url 原始 URL，默认当前地址
   */
  updateQueryParams: (
      params: Record<string, string>,
      url: string
  ): string => {
    const u = parseURL(url)
    Object.entries(params).forEach(([key, value]) => {
      u.searchParams.set(key, value)
    })
    return u.toString()
  },

  /**
   * 判断某个参数是否存在
   * @param key 查询参数名
   * @param url 检查的 URL
   */
  hasQueryParam: (key: string, url: string): boolean => {
    return parseURL(url).searchParams.has(key)
  },
  /**
   * 获取 URL 的各个部分
   * @param url 可选，默认当前地址
   * @returns 包含 origin、host、pathname、hash、search 和 query 的对象
   */
  urlParts: (url: string): {
    origin: string          // 带协议的主机，如 http://x.com:3000
    host: string            // 不带协议，如 x.com:3000
    pathname: string        // 路径，如 /user/list
    hash: string            // 哈希值，如 /login
    search: string          // 原始 search 字符串，如 ?id=3
    query: Record<string, string> // 解构后的查询对象
  } => {
    const u = new URL(url)
    const query: Record<string, string> = {}
    u.searchParams.forEach((value, key) => {
      query[key] = value
    })
    return {
      origin: u.origin,
      host: u.host,
      pathname: u.pathname,
      hash: u.hash.startsWith('#') ? u.hash.slice(1) : u.hash,
      search: u.search,
      query,
    }
  }
}
const parseURL = (url?: string): URL => {
  if (!url) {
    throw new Error('无效的 URL：不能为空')
  }
  try {
    return new URL(url)
  } catch {
    throw new Error(`URL 格式非法：${url}`)
  }
}
