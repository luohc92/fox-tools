import type {DateUtil, DiffUnit} from "../types";

export const dateUtil: DateUtil = {
  // 计算两个日期之间的差。
  diff: (d1: Date | string | number, d2: Date | string | number, unit: DiffUnit = 'millisecond') => {
    const date1 = new Date(d1)
    const date2 = new Date(d2)
    const diffTime = Math.abs(date1.getTime() - date2.getTime())
    switch (unit) {
      case 'millisecond':
        return diffTime
      case 'second':
        return Math.floor(diffTime / 1000)
      case 'minute':
        return Math.floor(diffTime / (1000 * 60))
      case 'hour':
        return Math.floor(diffTime / (1000 * 60 * 60))
      case 'day':
        return Math.floor(diffTime / (1000 * 60 * 60 * 24))
      case 'week':
        return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7))
      case 'month': {
        const years = Math.abs(date1.getFullYear() - date2.getFullYear())
        const months = Math.abs(date1.getMonth() - date2.getMonth())
        return years * 12 + months
      }
      case 'year':
        return Math.abs(date1.getFullYear() - date2.getFullYear())
      default:
        throw new Error(`Unsupported unit: ${unit}`)
    }
  },
  // 计算两个日期之间的相差。
  diffDetailed: (d1: Date | string | number, d2: Date | string | number) => {
    let start = new Date(d1)
    let end = new Date(d2)

    if (start > end) [start, end] = [end, start]
    const result = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    }
    result.years = end.getFullYear() - start.getFullYear()
    result.months = end.getMonth() - start.getMonth()
    if (result.months < 0) {
      result.years -= 1
      result.months += 12
    }
    // 临时构造差异年的月份起点
    const mid = new Date(start)
    mid.setFullYear(mid.getFullYear() + result.years)
    mid.setMonth(mid.getMonth() + result.months)

    const msDiff = end.getTime() - mid.getTime()
    const totalSeconds = Math.floor(msDiff / 1000)
    result.days = Math.floor(totalSeconds / (60 * 60 * 24))
    result.hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    result.minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    result.seconds = totalSeconds % 60
    result.milliseconds = msDiff % 1000
    return result
  },
  // 判断某一年是否为闰年。
  isLeapYear: (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  },
  // 判断某个日期是否为周末。
  isWeekend: (date: Date | string | number): boolean => {
    const day = new Date(date).getDay()
    return day === 0 || day === 6 // 周日是0，周六是6
  },
  // 获取指定日期的星期几文本。
  getWeekdayText: (date: Date | string | number): string => {
    const weekdays = ['一', '二', '三', '四', '五', '六', '日']
    const day = new Date(date).getDay()
    return weekdays[day]
  }
}
