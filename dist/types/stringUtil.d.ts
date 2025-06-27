export interface StringUtil {
    /**
     * 去除字符串首尾空格
     * @param str 输入字符串
     * @return 去除空格后的字符串
     */
    trim(str: string): string;
    /**
     * 判断是否为 null、undefined 或仅空白字符
     * @param str 输入字符串
     * @return 字符串是否为空
     */
    isEmpty(str: string | null | undefined): boolean;
    /**
     * 驼峰转下划线（如 helloWorld → hello_world）
     * @param str 驼峰命名的字符串
     * @return 转换后的下划线命名字符串
     */
    camelToSnake(str: string): string;
    /**
     * 下划线转驼峰（如 hello_world → helloWorld）
     * @param str 下划线命名的字符串
     * @return 转换后的驼峰命名字符串
     */
    snakeToCamel(str: string): string;
    /**
     * 首字母大写，其余不变
     * @param str 输入字符串
     * @return 首字母大写后的字符串
     */
    capitalize(str: string): string;
    /**
     * 判断原字符串是否包含某子串
     * @param str 原始字符串
     * @param substr 要查找的子串
     * @return 是否包含子串
     */
    includes(str: string, substr: string): boolean;
    /**
     * 超出最大长度时截断并追加省略号
     * @param str 原始字符串
     * @param maxLength 最大长度（默认 20）
     * @return 截断后的字符串
     */
    truncate(str: string, maxLength?: number): string;
    /**
     * 字符串截取（支持负索引）
     * @param str 原始字符串
     * @param fromIndex 起始索引
     * @param toIndex 结束索引（不含）
     * @return 截取后的字符串
     */
    sub(str: string, fromIndex: number, toIndex: number): string;
    /**
     * 移除 HTML 标签
     * @param str 包含 HTML 的字符串
     * @return 移除标签后的纯文本字符串
     */
    stripHtml(str: string): string;
    /**
     * 移除指定前缀
     * @param str 原始字符串
     * @param prefix 要移除的前缀
     * @return 移除前缀后的字符串
     */
    removePrefix(str: string, prefix: string): string;
    /**
     * 移除指定后缀
     * @param str 原始字符串
     * @param suffix 要移除的后缀
     * @return 移除后缀后的字符串
     */
    removeSuffix(str: string, suffix: string): string;
    /**
     * 将字符串转换为字节数组（仅支持 UTF-8）
     * @param str 原始字符串
     * @param charset 编码（仅支持 'utf-8'，默认）
     * @return 转换后的字节数组
     */
    strToBytes(str: string, charset?: string): Uint8Array;
    /**
     * 从字节数组转换为字符串（支持指定编码）
     * @param bytes 字节数组
     * @param charset 编码（默认 'utf-8'）
     * @return 转换后的字符串
     */
    bytesToStr(bytes: Uint8Array, charset?: string): string;
    /**
     * 字符串模板格式化（以 {} 占位）
     * @param template 模板字符串
     * @param params 替换参数列表
     * @return 格式化后的字符串
     */
    format(template: string, ...params: any[]): string;
    /**
     * 脱敏字符串指定范围，替换为给定字符
     * @param str 原始字符串
     * @param start 起始索引（支持负数）
     * @param end 结束索引（不含，支持负数）
     * @param maskChar 替换字符，默认为 '*'
     * @return 脱敏后的字符串
     */
    mask(str: string, start: number, end: number, maskChar?: string): string;
    /**
     * 生成 UUID
     * @return 随机生成的 UUID 字符串
     */
    createUUID(): string;
    /**
     * 生成随机字符串
     * @param length 生成的字符串长度
     * @param includeSpecial 是否必须包含大写、小写、数字、特殊符号（默认 false）
     * @return  随机生成的字符串
     */
    createRandomString(length: number, includeSpecial: boolean): string;
}
