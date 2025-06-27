import type {Nullable, ValidateUtil} from "../types";

/**
 * 常用格式校验工具（基于正则表达式）
 * 支持邮箱、手机号、身份证号、IP、URL、中文名、日期、文件名等
 */
export const validateUtil: ValidateUtil = {
  /** 是否为空 */
  isNullOrEmpty: (val: Nullable, strict = false) => {
    if (val === null || val === undefined) return true
    if (typeof val === 'string') return val.trim() === ''
    if (typeof val === 'number') Number.isNaN(val) || !Number.isFinite(val)
    if (strict) {
      if (typeof val === 'number') return val <= 0
      if (typeof val === 'boolean') return !val
    }
    if (Array.isArray(val)) return val.length === 0
    if (val instanceof Map || val instanceof Set) return val.size === 0
    if (typeof val === 'object') return Object.keys(val).length === 0
    return false
  },
  /** 是否为邮箱地址 */
  isEmail: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),

  /** 是否为中国大陆手机号 */
  isPhone: val => /^1[3-9]\d{9}$/.test(val),

  /** 是否为身份证号（15 或 18 位） */
  isIdCard: val => /^\d{15}$|^\d{17}[\dXx]$/.test(val),

  /** 是否为中文 */
  isChinese: (val: string, minLength: 0, maxLength: 0) => {
    const len = val.length
    if (len < minLength) return false
    if (maxLength !== 0 && len > maxLength) return false
    return /^[\u4e00-\u9fa5]+$/.test(val)
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
  isEnglish: (val: string, minLength = 0, maxLength = 0): boolean => {
    const len = val.length;
    if (len < minLength) return false;
    if (maxLength !== 0 && len > maxLength) return false;
    return /^[A-Za-z]+$/.test(val);
  },
  /** 是否为英文和数字 */
  isAlphanumeric: (val: string, minLength = 0, maxLength = 0): boolean => {
    const len = val.length;
    if (len < minLength) return false;
    if (maxLength !== 0 && len > maxLength) return false;
    return /^[A-Za-z0-9]+$/.test(val);
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
  isUsername: val => /^[a-zA-Z0-9_]{3,20}$/.test(val),

  /** 密码强度：至少包含大小写字母、数字、特殊字符，最少6位 */
  isStrongPassword: val =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(val),

  /** 是否为合法 URL，必须带 http:// 或 https:// */
  isURL: val =>
      /^(https?:\/\/)([\w-]+\.)+[a-z]{2,}(:\d{1,5})?(\/\S*)?$/i.test(val),

  /** 是否为 IPv4 地址 */
  isIPv4: val =>
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/.test(val),

  /** 是否为 Base64 字符串 */
  isBase64: val =>
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(val),

  /** 是否为十六进制颜色代码（#fff / #ffffff） */
  isHexColor: val => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(val),

  /** 是否为 UUID 格式 */
  isUUID: val =>
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(val),
  /** 是否为合法日期 */
  isDate: (val: string): boolean => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) return false
    const [y, m, d] = val.split('-').map(Number)
    const date = new Date(y, m - 1, d)
    return (
        date.getFullYear() === y &&
        date.getMonth() === m - 1 &&
        date.getDate() === d
    )
  },
  /** 是否为时间字符串（HH:mm 或 HH:mm:ss） */
  isTime: (val: string): boolean =>
      /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(val),
  /** 是否为合法日期时间字符串（YYYY-MM-DD HH:mm[:ss]） */
  isDateTime: (val: string): boolean => {
    if (typeof val !== 'string') return false
    const [datePart, timePart] = val.trim().split(' ')
    if (!datePart || !timePart) return false

    return validateUtil.isDate(datePart) && validateUtil.isTime(timePart)
  },
  /** 是否为金额格式（最多两位小数） */
  isCurrency: val => /^\d+(\.\d{1,2})?$/.test(val),

  /** 图片扩展名校验（.jpg/.png/...） */
  isImageFile: val => /\.(jpe?g|png|gif|bmp|webp)$/i.test(val),

  /** 视频扩展名校验（.mp4/.mov/...） */
  isVideoFile: val => /\.(mp4|mov|avi|mkv)$/i.test(val),

  /** 是否为 PDF 文件 */
  isPdfFile: (val: string) => /\.pdf$/i.test(val),

  /** 是否为 Excel 文件（含 WPS 表格） */
  isExcelFile: (val: string) => /\.(xls|xlsx|et)$/i.test(val),

  /** 是否为 Word 文件（含 WPS 文字） */
  isWordFile: (val: string) => /\.(doc|docx|wps)$/i.test(val),

  /** 是否为 PowerPoint 文件（含 WPS 演示） */
  isPptFile: (val: string) => /\.(ppt|pptx|dps)$/i.test(val),
}
