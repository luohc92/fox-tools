# dateUtil

# 日期工具

**使用**：

```ts
import {dateUtil} from "fox-tools";
```

## diff

**日期差值计算**

**参数**：

- `d1: Date | string | number` 第一个日期
- `d2: Date | string | number` 第二个日期
- `unit?: DiffUnit` 差值单位（默认为 `'millisecond'`）

**返回值**：

`number` 两日期之间的差值（以指定单位计）

**示例**：

```ts
dateUtil.diff('2024-01-01', '2025-01-01', 'day') // 365
```



## diffDetailed

**日期精确差异计算**

**参数**：

- `d1: Date | string | number` 起始日期
- `d2: Date | string | number` 结束日期

**返回值**：

`TimeDiff` 包含各时间单位差值的对象（years、months、days...）

**示例**：

```ts
dateUtil.diffDetailed('2024-01-01', '2025-02-03')
// {
//   years: 1,
//   months: 1,
//   days: 2,
//   hours: 0,
//   minutes: 0,
//   seconds: 0,
//   milliseconds: 0
// }
```



## isLeapYear

**是否为闰年**

**参数**：  
`year: number` 四位数年份

**返回值**：

`boolean` 是否为闰年

**示例**：

```ts
dateUtil.isLeapYear(2024) // true
```



## isWeekend

**是否为周末**

**参数**：  
`date: Date | string | number` 日期值

**返回值**：

`boolean` 是否为周六或周日

**示例**：

```ts
dateUtil.isWeekend('2025-06-28') // true
```



## getWeekdayText

**获取星期几文本**

**参数**：  
`date: Date | string | number` 日期值

**返回值**：

`string` 对应的星期几中文文本（'一' ~ '日'）

**示例**：

```ts
dateUtil.getWeekdayText('2025-06-25') // '三'
```
