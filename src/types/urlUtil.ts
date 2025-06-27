/**
 * URL 工具函数接口
 */
export interface UrlUtil {
  /**
   * 获取 URL 包含协议的主机名（含端口）
   * @example "https://example.com:8080/path" → "https://example.com:8080"
   */
  getOrigin(url: string): string

  /**
   * 获取主机名（host:port）
   * @param url 可选，默认当前地址
   * @returns host 字符串（不含协议）
   */
  getHost(url: string): string

  /**
   * 获取路径部分（pathname）
   * @param url 可选，默认当前地址
   * @returns 路径字符串，通常以 / 开头
   */
  getPath(url: string): string

  /**
   * 获取 hash 路径部分（不含 #）
   * @param url 可选，默认当前地址
   * @returns hash 路径字符串
   */
  getHashPath(url: string): string

  /**
   * 获取指定查询参数的值
   * @param key 要获取的参数名
   * @param url 可选，默认使用默认 URL
   * @returns 参数值或 null
   */
  getQueryParam(key: string, url: string): string | null

  /**
   * 批量设置多个查询参数（将覆盖已有键）
   * @param params 参数键值对
   * @param url 可选，默认使用默认 URL
   * @returns 更新后的完整 URL 字符串
   */
  updateQueryParams(params: Record<string, string>, url: string): string

  /**
   * 移除指定查询参数
   * @param key 要删除的参数名
   * @param url 可选，默认使用默认 URL
   * @returns 更新后的完整 URL 字符串
   */
  removeQueryParam(key: string, url: string): string

  /**
   * 获取所有查询参数（转换为对象）
   * @param url 可选，默认使用默认 URL
   * @returns 参数对象
   */
  getAllQueryParams(url: string): Record<string, string>

  /**
   * 判断是否存在指定查询参数
   * @param key 参数名
   * @param url 可选，默认使用默认 URL
   * @returns 是否存在该参数
   */
  hasQueryParam(key: string, url: string): boolean

  /**
   * 移除所有查询参数
   * @param url 可选，默认使用默认 URL
   * @returns 清除参数后的 URL
   */
  clearQueryParams(url: string): string

  /**
   * 解析 URL
   * @param url 可选，默认使用默认 URL
   * @returns 解析后的 URL 对象
   */
  urlParts(url: string): {
    origin: string
    host: string
    pathname: string
    hash: string
    search: string
    query: Record<string, string>
  }
}
