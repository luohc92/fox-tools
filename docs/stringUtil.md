# stringUtil

# 字符串工具

**使用**：

```ts
import {stringUtil} from "fox-tools";
```

## trim

**去除首尾空格**

**参数**：  
`str: string` 输入字符串

**返回值**：  
`string` 去除空格后的字符串

**示例**：

```ts
stringUtil.trim('  hello  ') // 'hello'
```

## isEmpty

**判断字符串是否为空**

**参数**：  
`str: string | null | undefined` 输入字符串

**返回值**：  
`boolean` 是否为 null、undefined 或空白字符

**示例**：

```ts
stringUtil.isEmpty('   ') // true
```

## camelToSnake

**驼峰转下划线**

**参数**：  
`str: string` 驼峰命名的字符串

**返回值**：  
`string` 转换后的下划线命名字符串

**示例**：

```ts
stringUtil.camelToSnake('helloWorld') // 'hello_world'
```

## snakeToCamel

**下划线转驼峰**

**参数**：  
`str: string` 下划线命名的字符串

**返回值**：  
`string` 转换后的驼峰命名字符串

**示例**：

```ts
stringUtil.snakeToCamel('hello_world') // 'helloWorld'
```

## capitalize

**首字母大写**

**参数**：  
`str: string` 输入字符串

**返回值**：  
`string` 首字母大写后的字符串

**示例**：

```ts
stringUtil.capitalize('world') // 'World'
```

## includes

**判断是否包含子串**

**参数**：

- `str: string` 原始字符串
- `substr: string` 要查找的子串

**返回值**：  
`boolean` 是否包含该子串

**示例**：

```ts
stringUtil.includes('hello world', 'world') // true
```

## truncate

**截断字符串并追加省略号**

**参数**：

- `str: string` 原始字符串
- `maxLength?: number` 最大长度（默认 20）

**返回值**：  
`string` 截断后的字符串

**示例**：

```ts
stringUtil.truncate('This is a very long string.', 10) // 'This is a ...'
```

## sub

**字符串截取（支持负索引）**

**参数**：

- `str: string` 原始字符串
- `fromIndex: number` 起始索引
- `toIndex: number` 结束索引（不含）

**返回值**：  
`string` 截取后的字符串

**示例**：

```ts
stringUtil.sub('abcdef', 1, 4) // 'bcd'
```

## stripHtml

**移除 HTML 标签**

**参数**：  
`str: string` 包含 HTML 的字符串

**返回值**：  
`string` 移除标签后的纯文本

**示例**：

```ts
stringUtil.stripHtml('<p>Hello</p>') // 'Hello'
```

## removePrefix

**移除前缀**

**参数**：

- `str: string` 原始字符串
- `prefix: string` 要移除的前缀

**返回值**：  
`string` 移除前缀后的字符串

**示例**：

```ts
stringUtil.removePrefix('abc_test', 'abc_') // 'test'
```

## removeSuffix

**移除后缀**

**参数**：

- `str: string` 原始字符串
- `suffix: string` 要移除的后缀

**返回值**：  
`string` 移除后缀后的字符串

**示例**：

```ts
stringUtil.removeSuffix('report.xlsx', '.xlsx') // 'report'
```

## strToBytes

**字符串转字节数组（UTF-8）**

**参数**：

- `str: string` 原始字符串
- `charset?: string` 编码，仅支持 `'utf-8'`（默认）

**返回值**：  
`Uint8Array` 转换后的字节数组

**示例**：

```ts
stringUtil.strToBytes('hello') // Uint8Array([...])
```

## bytesToStr

**字节数组转字符串**

**参数**：

- `bytes: Uint8Array` 字节数组
- `charset?: string` 编码（默认 `'utf-8'`）

**返回值**：  
`string` 解码后的字符串

**示例**：

```ts
stringUtil.bytesToStr(new Uint8Array([104, 105])) // 'hi'
```

## format

**字符串模板格式化**

**参数**：

- `template: string` 模板字符串（含 `{}` 占位）
- `...params: any[]` 替换参数列表

**返回值**：  
`string` 格式化后的字符串

**示例**：

```ts
stringUtil.format('Hello, {} {}!', 'John', 'Doe') // 'Hello, John Doe!'
```

## mask

**字符串脱敏替换**

**参数**：

- `str: string` 原始字符串
- `start: number` 起始索引（支持负数）
- `end: number` 结束索引（不含，支持负数）
- `maskChar?: string` 替换字符，默认 `'*'`

**返回值**：  
`string` 脱敏后的字符串

**示例**：

```ts
stringUtil.mask('1234567890', 3, 7) // '123****890'
```

## createUUID

**生成 UUID**

**参数**：  
无

**返回值**：  
`string` 随机生成的 UUID

**示例**：

```ts
stringUtil.createUUID() // 'b3f1ac2c-06c3-45ef-b0df-bf437aaad510'
```

## createRandomString

**生成随机字符串**

**参数**：

- `length: number` 长度
- `includeSpecial: boolean` 是否包含特殊字符（默认 false）

**返回值**：  
`string` 随机生成的字符串

**示例**：

```ts
stringUtil.createRandomString(8, true) // 'a1X@7dZq'（示例）
```