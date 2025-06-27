export type Nullable = null | undefined | string | number | boolean | object | unknown[] | Map<unknown, unknown> | Set<unknown>;
/**
 * 格式校验工具接口
 */
export interface ValidateUtil {
    /**
     * 判断值是否为空，包括：
     *  - null、undefined
     *  - 空字符串或仅空白
     *  - 空数组、空对象、空 Map、空 Set
     *  - NaN、Infinity
     *  - boolean
     *  严格模式下，小于等于 0 的数字、false 均视为空
     * @param val
     * @param strict 是否严格模式
     * @return 如果为空返回 true，否则返回 false
     */
    isNullOrEmpty(val: Nullable, strict?: boolean): boolean;
    /**
     * 判断是否为邮箱地址（如 user@example.com）
     * @param val 要校验的字符串
     * @return 如果符合邮箱格式返回 true，否则返回 false
     */
    isEmail(val: string): boolean;
    /**
     * 判断是否为手机号（中国大陆手机号 11 位）
     * @param val 手机号字符串
     * @return 如果符合手机号格式返回 true，否则返回 false
     */
    isPhone(val: string): boolean;
    /**
     * 判断是否为身份证号（15 或 18 位）
     * @param val 身份证号
     * @return 如果符合身份证号格式返回 true，否则返回 false
     */
    isIdCard(val: string): boolean;
    /**
     * 是否为中文
     * @param val 字符串
     * @param minLength 最小长度（可选）（0 表示不限制）
     * @param maxLength 最大长度（可选）（0 表示不限制）
     * @return 如果符合中文格式返回 true，否则返回 false
     */
    isChinese(val: string, minLength?: number, maxLength?: number): boolean;
    /**
     * 判断是否为数字（可为整数或小数）
     * @param num 数值
     * @param min 最小值（可选）
     * @param max 最大值（可选）
     * @return 如果符合数字格式返回 true，否则返回 false
     */
    isNumber(num: number, min?: number, max?: number): boolean;
    /**
     * 判断是否为纯英文
     * @param val 字符串
     * @param minLength 最小长度（可选）
     * @param maxLength 最大长度（可选）（0 表示不限制）
     * @return 如果符合英文格式返回 true，否则返回 false
     */
    isEnglish(val: string, minLength?: number, maxLength?: number): boolean;
    /**
     * 判断是否为英文和数字
     * @param val 字符串
     * @param minLength 最小长度（可选）
     * @param maxLength 最大长度（可选）（0 表示不限制）
     * @return 如果符合英文和数字格式返回 true，否则返回 false
     */
    isAlphanumeric(val: string, minLength?: number, maxLength?: number): boolean;
    /**
     * 判断是否为正整数
     * @param num 数值
     * @param min 最小值（可选）
     * @param max 最大值（可选）
     * @return 如果符合正整数格式返回 true，否则返回 false
     */
    isPositiveInt(num: string, min?: number, max?: number): boolean;
    /**
     * 判断是否为合法 URL， http:// 或 https://
     * @param val URL 字符串
     * @return 如果符合 URL 格式返回 true，否则返回 false
     */
    isURL(val: string): boolean;
    /**
     * 判断是否为 IPv4 地址
     * @param val IP 字符串
     * @return 如果符合 IPv4 格式返回 true，否则返回 false
     */
    isIPv4(val: string): boolean;
    /**
     * 判断是否为 Base64 编码格式
     * @param val 原始字符串
     * @return 如果符合 Base64 格式返回 true，否则返回 false
     */
    isBase64(val: string): boolean;
    /**
     * 判断是否为十六进制颜色值（如 #fff）
     * @param val 原始字符串
     * @return 如果符合十六进制颜色格式返回 true，否则返回 false
     */
    isHexColor(val: string): boolean;
    /**
     * 判断是否为 UUID（如 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx）
     * @param val 原始字符串
     * @return 如果符合 UUID 格式返回 true，否则返回 false
     */
    isUUID(val: string): boolean;
    /**
     * 判断是否为有效日期
     * @param val 日期字符串
     * @return 如果符合 YYYY-MM-DD 或 YYYY/MM/DD 格式返回 true，否则返回 false
     */
    isDate(val: string): boolean;
    /**
     * 判断是否为有效时间（HH:mm 或 HH:mm:ss）
     * @param val 时间字符串
     * @return 如果符合格式返回 true，否则返回 false
     */
    isTime(val: string): boolean;
    /**
     * 判断是否为合法日期时间字符串（YYYY-MM-DD HH:mm[:ss] 或 YYYY/MM/DD HH:mm[:ss]）
     * @param val 日期时间字符串
     * @return 如果符合格式返回 true，否则返回 false
     */
    isDateTime(val: string): boolean;
    /**
     * 判断是否为货币（最多两位小数）
     * @param val 金额字符串
     * @return 如果符合货币格式返回 true，否则返回 false
     */
    isCurrency(val: string): boolean;
    /**
     * 判断是否为用户名（字母数字下划线，3~20 位）
     * @param val 用户名字符串
     * @return 如果符合规则返回 true，否则返回 false
     */
    isUsername(val: string): boolean;
    /**
     * 判断是否为强密码（包含大小写字母、数字、特殊符号）
     * @param val 密码字符串
     * @return 如果符合强密码规则返回 true，否则返回 false
     */
    isStrongPassword(val: string): boolean;
    /**
     * 判断是否为图片文件路径（通过扩展名）
     * @param val 文件名字符串
     * @returns 如果是 .jpg、.jpeg、.png、.gif、.bmp 或 .webp 文件返回 true，否则返回 false
     */
    isImageFile(val: string): boolean;
    /**
     * 判断是否为视频文件路径（通过扩展名）
     * @param val 文件名字符串
     * @returns 如果是 .mp4、.mov、.avi 或 .mkv 文件返回 true，否则返回 false
     */
    isVideoFile(val: string): boolean;
    /**
     * 判断是否为 PDF 文件
     * @param val 文件名字符串
     * @returns 如果是 .pdf 文件返回 true，否则返回 false
     */
    isPdfFile(val: string): boolean;
    /**
     * 判断是否为 Excel 文件（含 WPS 表格）
     * @param val 文件名字符串
     * @returns 如果是 .xls、.xlsx 或 .et 文件返回 true，否则返回 false
     */
    isExcelFile(val: string): boolean;
    /**
     * 判断是否为 Word 文件（含 WPS 文字）
     * @param val 文件名字符串
     * @returns 如果是 .doc、.docx 或 .wps 文件返回 true，否则返回 false
     */
    isWordFile(val: string): boolean;
    /**
     * 判断是否为 PowerPoint 文件（含 WPS 演示）
     * @param val 文件名字符串
     * @returns 如果是 .ppt、.pptx 或 .dps 文件返回 true，否则返回 false
     */
    isPptFile(val: string): boolean;
}
