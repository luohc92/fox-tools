/**
 * 常用格式校验工具（基于正则表达式）
 * 支持邮箱、手机号、身份证号、IP、URL、中文名、日期、文件名等
 */
export const validateUtil = (): ValidateUtil => ({
  /** 是否为邮箱地址 */
  isEmail: str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),

  /** 是否为中国大陆手机号 */
  isPhone: str => /^1[3-9]\d{9}$/.test(str),

  /** 是否为身份证号（15 或 18 位） */
  isIdCard: str => /^\d{15}$|^\d{17}[\dXx]$/.test(str),

  /** 是否为中文 */
  isChinese: (str: string, minLength: 0, maxLength: 0) => {
    const len = str.length
    if (len < minLength) return false
    if (maxLength !== 0 && len > maxLength) return false
    return /^[\u4e00-\u9fa5]+$/.test(str)
  },

  /** 是否为数字（整数或浮点数） */
  isNumber: (num: number, min?: number, max?: number): boolean => {
    if (typeof num !== 'number' || isNaN(num)) {
      return false;
    }
    // 如果传了 min 和 max，就进行范围校验
    if (typeof min === 'number' && num < min) {
      return false;
    }
    return !(typeof max === 'number' && num > max);
  },
  /** 是否为纯英文 */
  isEnglish: (str: string, minLength = 0, maxLength = 0): boolean => {
    const len = str.length;
    if (len < minLength) return false;
    if (maxLength !== 0 && len > maxLength) return false;
    return /^[A-Za-z]+$/.test(str);
  },
  /** 是否为英文和数字 */
  isAlphanumeric: (str: string, minLength = 0, maxLength = 0): boolean => {
    const len = str.length;
    if (len < minLength) return false;
    if (maxLength !== 0 && len > maxLength) return false;
    return /^[A-Za-z0-9]+$/.test(str);
  },
  /** 是否为正整数 */
  isPositiveInt: (num: string, min?: number, max?: number): boolean => {
    if (!/^\d+$/.test(num)) {
      return false;
    }
    const intVal = parseInt(num, 10);
    if (intVal <= 0) {
      return false;
    }
    if (typeof min === 'number' && intVal < min) {
      return false;
    }
    return !(typeof max === 'number' && intVal > max);
  },

  /** 是否为用户名（字母数字下划线，3~20位） */
  isUsername: str => /^[a-zA-Z0-9_]{3,20}$/.test(str),

  /** 密码强度：至少包含大小写字母、数字、特殊字符，最少6位 */
  isStrongPassword: str =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(str),

  /** 是否为合法 URL，必须带 http:// 或 https:// */
  isURL: str =>
      /^(https?:\/\/)([\w-]+\.)+[a-z]{2,}(:\d{1,5})?(\/\S*)?$/i.test(str),

  /** 是否为 IPv4 地址 */
  isIPv4: str =>
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/.test(str),

  /** 是否为 Base64 字符串 */
  isBase64: str =>
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str),

  /** 是否为十六进制颜色代码（#fff / #ffffff） */
  isHexColor: str => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(str),

  /** 是否为 UUID 格式 */
  isUUID: str =>
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str),
  /** 是否为合法日期 */
  isDate,
  /** 是否为时间字符串（HH:mm 或 HH:mm:ss） */
  isTime,
  /** 是否为合法日期时间字符串（YYYY-MM-DD HH:mm[:ss]） */
  isDateTime: (str: string): boolean => {
    if (typeof str !== 'string') return false
    const [datePart, timePart] = str.trim().split(' ')
    if (!datePart || !timePart) return false

    return isDate(datePart) && isTime(timePart)
  },
  /** 是否为金额格式（最多两位小数） */
  isCurrency: str => /^\d+(\.\d{1,2})?$/.test(str),

  /** 图片扩展名校验（.jpg/.png/...） */
  isImageFile: str => /\.(jpe?g|png|gif|bmp|webp)$/i.test(str),

  /** 视频扩展名校验（.mp4/.mov/...） */
  isVideoFile: str => /\.(mp4|mov|avi|mkv)$/i.test(str),

  /** 是否为 PDF 文件 */
  isPdfFile: (str: string) => /\.pdf$/i.test(str),

  /** 是否为 Excel 文件（含 WPS 表格） */
  isExcelFile: (str: string) => /\.(xls|xlsx|et)$/i.test(str),

  /** 是否为 Word 文件（含 WPS 文字） */
  isWordFile: (str: string) => /\.(doc|docx|wps)$/i.test(str),

  /** 是否为 PowerPoint 文件（含 WPS 演示） */
  isPptFile: (str: string) => /\.(ppt|pptx|dps)$/i.test(str),
})
const isDate = (str: string): boolean => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(str)) return false
  const [y, m, d] = str.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return (
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d
  )
}
const isTime = (str: string): boolean =>
    /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(str)

/**
 * 格式校验工具接口
 */
export interface ValidateUtil {
  /**
   * 判断是否为邮箱地址（如 user@example.com）
   * @param str 要校验的字符串
   * @return 如果符合邮箱格式返回 true，否则返回 false
   */
  isEmail(str: string): boolean

  /**
   * 判断是否为手机号（中国大陆手机号 11 位）
   * @param str 手机号字符串
   * @return 如果符合手机号格式返回 true，否则返回 false
   */
  isPhone(str: string): boolean

  /**
   * 判断是否为身份证号（15 或 18 位）
   * @param str 身份证号
   * @return 如果符合身份证号格式返回 true，否则返回 false
   */
  isIdCard(str: string): boolean

  /**
   * 是否为中文
   * @param str 字符串
   * @param minLength 最小长度（可选）（0 表示不限制）
   * @param maxLength 最大长度（可选）（0 表示不限制）
   * @return 如果符合中文格式返回 true，否则返回 false
   */
  isChinese(str: string, minLength?: number, maxLength?: number): boolean

  /**
   * 判断是否为数字（可为整数或小数）
   * @param num 数值
   * @param min 最小值（可选）
   * @param max 最大值（可选）
   * @return 如果符合数字格式返回 true，否则返回 false
   */
  isNumber(num: number, min?: number, max?: number): boolean

  /**
   * 判断是否为纯英文
   * @param str 字符串
   * @param minLength 最小长度（可选）
   * @param maxLength 最大长度（可选）（0 表示不限制）
   * @return 如果符合英文格式返回 true，否则返回 false
   */
  isEnglish(str: string, minLength?: number, maxLength?: number): boolean;

  /**
   * 判断是否为英文和数字
   * @param str 字符串
   * @param minLength 最小长度（可选）
   * @param maxLength 最大长度（可选）（0 表示不限制）
   * @return 如果符合英文和数字格式返回 true，否则返回 false
   */
  isAlphanumeric(str: string, minLength?: number, maxLength?: number): boolean;

  /**
   * 判断是否为正整数
   * @param num 数值
   * @param min 最小值（可选）
   * @param max 最大值（可选）
   * @return 如果符合正整数格式返回 true，否则返回 false
   */
  isPositiveInt(num: string, min?: number, max?: number): boolean

  /**
   * 判断是否为合法 URL， http:// 或 https://
   * @param str URL 字符串
   * @return 如果符合 URL 格式返回 true，否则返回 false
   */
  isURL(str: string): boolean

  /**
   * 判断是否为 IPv4 地址
   * @param str IP 字符串
   * @return 如果符合 IPv4 格式返回 true，否则返回 false
   */
  isIPv4(str: string): boolean

  /**
   * 判断是否为 Base64 编码格式
   * @param str 原始字符串
   * @return 如果符合 Base64 格式返回 true，否则返回 false
   */
  isBase64(str: string): boolean

  /**
   * 判断是否为十六进制颜色值（如 #fff）
   * @param str 原始字符串
   * @return 如果符合十六进制颜色格式返回 true，否则返回 false
   */
  isHexColor(str: string): boolean

  /**
   * 判断是否为 UUID（如 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx）
   * @param str 原始字符串
   * @return 如果符合 UUID 格式返回 true，否则返回 false
   */
  isUUID(str: string): boolean

  /**
   * 判断是否为有效日期
   * @param str 日期字符串
   * @return 如果符合 YYYY-MM-DD 或 YYYY/MM/DD 格式返回 true，否则返回 false
   */
  isDate(str: string): boolean

  /**
   * 判断是否为有效时间（HH:mm 或 HH:mm:ss）
   * @param str 时间字符串
   * @return 如果符合格式返回 true，否则返回 false
   */
  isTime(str: string): boolean

  /**
   * 判断是否为合法日期时间字符串（YYYY-MM-DD HH:mm[:ss] 或 YYYY/MM/DD HH:mm[:ss]）
   * @param str 日期时间字符串
   * @return 如果符合格式返回 true，否则返回 false
   */
  isDateTime(str: string): boolean

  /**
   * 判断是否为货币（最多两位小数）
   * @param str 金额字符串
   * @return 如果符合货币格式返回 true，否则返回 false
   */
  isCurrency(str: string): boolean

  /**
   * 判断是否为用户名（字母数字下划线，3~20 位）
   * @param str 用户名字符串
   * @return 如果符合规则返回 true，否则返回 false
   */
  isUsername(str: string): boolean

  /**
   * 判断是否为强密码（包含大小写字母、数字、特殊符号）
   * @param str 密码字符串
   * @return 如果符合强密码规则返回 true，否则返回 false
   */
  isStrongPassword(str: string): boolean

  /**
   * 判断是否为图片文件路径（通过扩展名）
   * @param str 文件名字符串
   * @returns 如果是 .jpg、.jpeg、.png、.gif、.bmp 或 .webp 文件返回 true，否则返回 false
   */
  isImageFile(str: string): boolean

  /**
   * 判断是否为视频文件路径（通过扩展名）
   * @param str 文件名字符串
   * @returns 如果是 .mp4、.mov、.avi 或 .mkv 文件返回 true，否则返回 false
   */
  isVideoFile(str: string): boolean

  /**
   * 判断是否为 PDF 文件
   * @param str 文件名字符串
   * @returns 如果是 .pdf 文件返回 true，否则返回 false
   */
  isPdfFile(str: string): boolean;

  /**
   * 判断是否为 Excel 文件（含 WPS 表格）
   * @param str 文件名字符串
   * @returns 如果是 .xls、.xlsx 或 .et 文件返回 true，否则返回 false
   */
  isExcelFile(str: string): boolean;

  /**
   * 判断是否为 Word 文件（含 WPS 文字）
   * @param str 文件名字符串
   * @returns 如果是 .doc、.docx 或 .wps 文件返回 true，否则返回 false
   */
  isWordFile(str: string): boolean;

  /**
   * 判断是否为 PowerPoint 文件（含 WPS 演示）
   * @param str 文件名字符串
   * @returns 如果是 .ppt、.pptx 或 .dps 文件返回 true，否则返回 false
   */
  isPptFile(str: string): boolean;
}

