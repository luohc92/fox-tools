# numberUtil

# 数值工具

**使用**：

```ts
import {numberUtil} from "fox-tools";
```

## toDecimal

**保留指定小数位数**

**参数**：

- `value: number` 要处理的数字
- `digits?: number` 小数位数（默认 2）
- `round?: boolean` 是否四舍五入（默认 true）

**返回值**：  
`number` 处理后的数字

**示例**：

```ts
numberUtil.toDecimal(3.14159) // 3.14
numberUtil.toDecimal(3.146, 2) // 3.15
numberUtil.toDecimal(3.14159, 2, false) // 3.14
```



## isValidNumber

**判断是否为合法有限数字**

**参数**：  
`value: any` 任意值

**返回值**：  
`boolean` 是否为合法数字

**示例**：

```ts
numberUtil.isValidNumber(123) // true
numberUtil.isValidNumber(NaN) // false
```



## isInteger

**判断是否为整数**

**参数**：  
`value: any` 任意值

**返回值**：  
`boolean` 是否为整数

**示例**：

```ts
numberUtil.isInteger(10) // true
numberUtil.isInteger(3.14) // false
```



## isEven

**判断是否为偶数**

**参数**：  
`value: number` 输入数字

**返回值**：  
`boolean` 是否为偶数

**示例**：

```ts
numberUtil.isEven(4) // true
```



## isOdd

**判断是否为奇数**

**参数**：  
`value: number` 输入数字

**返回值**：  
`boolean` 是否为奇数

**示例**：

```ts
numberUtil.isOdd(7) // true
```



## isBetween

**判断是否在指定范围内**

**参数**：

- `value: number` 目标数值
- `min: number` 最小边界值
- `max: number` 最大边界值
- `inclusive?: boolean` 是否包含边界（默认 true）

**返回值**：  
`boolean` 是否落在范围内

**示例**：

```ts
numberUtil.isBetween(5, 1, 10) // true
numberUtil.isBetween(10, 1, 10, false) // false
```



## clamp

**限制在指定范围内**

**参数**：

- `value: number` 原始值
- `min: number` 最小值
- `max: number` 最大值

**返回值**：  
`number` 修正后的值

**示例**：

```ts
numberUtil.clamp(15, 0, 10) // 10
```



## random

**生成范围内随机数**

**参数**：

- `min: number` 最小值
- `max: number` 最大值
- `decimalDigits?: number` 小数位数（默认 0 表示整数）

**返回值**：  
`number` 指定精度的随机数

**示例**：

```ts
numberUtil.random(1, 10) // 整数 1~10
numberUtil.random(1, 10, 2) // 2 位小数
```



## sum

**多个数值求和**

**参数**：  
`...nums: number[]` 多个数字

**返回值**：  
`number` 总和

**示例**：

```ts
numberUtil.sum(1, 2, 3, 4) // 10
```



## average

**计算平均值**

**参数**：  
`...nums: number[]` 多个数字

**返回值**：  
`number` 平均数

**示例**：

```ts
numberUtil.average(2, 4, 6) // 4
```



## toThousands

**添加千分位分隔符**

**参数**：  
`value: number | string` 数字或字符串

**返回值**：  
`string` 千分位格式字符串

**示例**：

```ts
numberUtil.toThousands(1234567) // '1,234,567'
```



## padZero

**数字左侧补零**

**参数**：

- `value: number` 原始数字
- `length: number` 目标长度

**返回值**：  
`string` 补零后的字符串

**示例**：

```ts
numberUtil.padZero(5, 3) // '005'
```



## formatBytes

**字节数格式化**

**参数**：

- `bytes: number` 字节数
- `unit?: 'B' | 'KB' | 'MB' | 'GB' | 'TB'` 指定单位，不传则自动匹配

**返回值**：  
`string` 格式化后的文件大小

**示例**：

```ts
numberUtil.formatBytes(1048576) // '1 MB'
```



## numberToChinese

**转换为中文金额大写**

**参数**：  
`num: number` 整数

**返回值**：  
`string` 中文大写金额

**示例**：

```ts
numberUtil.numberToChinese(1234) // '壹仟贰佰叁拾肆元'
```



## abbreviateNumber

**数字缩写表示（英文）**

**参数**：

- `num: number` 数字
- `digits?: number` 小数位数（默认 0）

**返回值**：  
`string` 缩写后的数字

**示例**：

```ts
numberUtil.abbreviateNumber(1000) // '1K'
numberUtil.abbreviateNumber(2500000, 1) // '2.5M'
```



## abbreviateNumberCN

**数字缩写表示（中文）**

**参数**：

- `num: number` 数字
- `digits?: number` 小数位数（默认 0）

**返回值**：  
`string` 中文缩写字符串

**示例**：

```ts
numberUtil.abbreviateNumberCN(10000) // '1万'
numberUtil.abbreviateNumberCN(120000000, 2) // '1.2亿'
```

