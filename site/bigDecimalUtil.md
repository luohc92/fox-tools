# bigDecimalUtil

# 精确数值工具

**参数**：

`input: string | number` 输入值

**使用**：

```ts
import {bigDecimalUtil} from "fox-tools";
```


## toString

**获取字符串表示（带符号）**

**参数**：  
无

**返回值**：  
`string` 带符号的字符串形式，如 `-123.45`

**示例**：

```ts
bigDecimalUtil('-123.45').toString() // '-123.45'
```



## toFixed

**保留指定位数小数**

**参数**：

- `digits?: number` 小数位数，默认 `2`
- `round?: boolean` 是否四舍五入，默认 `true`

**返回值**：  
`string` 处理后的字符串（保留位数并考虑正负）

**示例**：

```ts
bigDecimalUtil('-3.145').toFixed(2)        // '-3.15'
bigDecimalUtil('-3.145').toFixed(2, false) // '-3.14'
```



## add

**加法运算**

**参数**：  
`other: string | number` 被加数

**返回值**：  
`BigDecimalUtil` 相加后的新实例

**示例**：

```ts
bigDecimalUtil('2.3').add('1.2').toString() // '3.5'
```



## sub

**减法运算**

**参数**：  
`other: string | number` 减数

**返回值**：  
`BigDecimalUtil` 相减后的新实例

**示例**：

```ts
bigDecimalUtil('10').sub('4.5').toString() // '5.5'
```



## mul

**乘法运算**

**参数**：  
`other: string | number` 乘数

**返回值**：  
`BigDecimalUtil` 相乘后的新实例

**示例**：

```ts
bigDecimalUtil('2.5').mul('3').toString() // '7.5'
```



## div

**除法运算（保留精度）**

**参数**：

- `other: string | number` 除数
- `digits?: number` 小数位数（默认 `20`）

**返回值**：  
`BigDecimalUtil` 相除后的新实例

**示例**：

```ts
bigDecimalUtil('1').div('3', 4).toString() // '0.3333'
```



## compare

**比较两个数的大小**

**参数**：  
`other: string | number` 比较对象

**返回值**：  
`number` 返回 `1`（大于）、`0`（等于）、`-1`（小于）

**示例**：

```ts
bigDecimalUtil('5').compare('3') // 1
```



## equals

**判断是否相等（数值和符号）**

**参数**：  
`other: string | number` 比较对象

**返回值**：  
`boolean` 是否完全相等

**示例**：

```ts
bigDecimalUtil('-3').equals('-3.00') // true
```



## isZero

**判断是否为 0**

**参数**：  
无

**返回值**：  
`boolean` 是否为零

**示例**：

```ts
bigDecimalUtil('0.000').isZero() // true
```



## isPositive

**判断是否为正数**

**参数**：  
无

**返回值**：  
`boolean` 是否为正数（非零且正）

**示例**：

```ts
bigDecimalUtil('5.5').isPositive() // true
```



## isNegative

**判断是否为负数**

**参数**：  
无

**返回值**：  
`boolean` 是否为负数

**示例**：

```ts
bigDecimalUtil('-2.8').isNegative() // true
```



## abs

**取绝对值**

**参数**：  
无

**返回值**：  
`BigDecimalUtil` 绝对值的新实例

**示例**：

```ts
bigDecimalUtil('-3.14').abs().toString() // '3.14'
```



## negate

**取相反数**

**参数**：  
无

**返回值**：  
`BigDecimalUtil` 相反符号的新实例

**示例**：

```ts
bigDecimalUtil('7').negate().toString() // '-7'
```



## clone

**克隆当前值**

**参数**：  
无

**返回值**：  
`BigDecimalUtil` 相同数值的新实例

**示例**：

```ts
const a = bigDecimalUtil('9.99')
const b = a.clone()
b.toString() // '9.99'
```



## value

**原始值（不带符号）**

**类型**：  
`string`

**示例**：

```ts
bigDecimalUtil('-8.88').value // '8.88'
```



## sign

**符号标记（正负）**

**类型**：  
`1 | -1`

**示例**：

```ts
bigDecimalUtil('-8.88').sign // -1
```