# validateUtil

# 校验工具

**使用**：

```ts
import {validateUtil} from "fox-tools";
```

## isNullOrEmpty

**判断值是否为空**

> 包括：
> - null、undefined、空字符串或仅空白、空数组、空对象、空 Map、空 Set、NaN、Infinity、boolean
> - 严格模式下，小于等于 0 的数字、false 均视为空

**参数**：

- `val: Nullable` 待判断的值
- `strict?: boolean` 是否启用严格模式（默认 false）

**返回值**：  
`boolean` 若为空则返回 true，否则返回 false

**示例**：

```ts
validateUtil.isNullOrEmpty(null)           // true
validateUtil.isNullOrEmpty(false)           // false
validateUtil.isNullOrEmpty('', true)       // true
validateUtil.isNullOrEmpty(0, true)        // true
validateUtil.isNullOrEmpty(false, true)        // true
```

## isEmail

**判断是否为邮箱地址**

**参数**：  
`val: string` 要校验的字符串

**返回值**：  
`boolean` 若符合邮箱格式返回 true

**示例**：

```ts
validateUtil.isEmail('user@example.com') // true
```

## isPhone

**判断是否为手机号（中国大陆）**

**参数**：  
`val: string` 手机号字符串

**返回值**：  
`boolean` 若符合手机号格式返回 true

**示例**：

```ts
validateUtil.isPhone('13812345678') // true
```

## isIdCard

**判断是否为身份证号**

**参数**：  
`val: string` 身份证号

**返回值**：  
`boolean` 若为合法身份证格式返回 true

**示例**：

```ts
validateUtil.isIdCard('11010119900307123X') // true
```

## isChinese

**判断是否为中文**

**参数**：

- `val: string` 字符串
- `minLength?: number` 最小长度（默认不限）
- `maxLength?: number` 最大长度（默认不限）

**返回值**：  
`boolean` 若符合中文规则返回 true

**示例**：

```ts
validateUtil.isChinese('测试', 2) // true
```

## isNumber

**判断是否为数字（整数或小数）**

**参数**：

- `num: number` 数值
- `min?: number` 最小值（可选）
- `max?: number` 最大值（可选）

**返回值**：  
`boolean` 若为合法数字并在范围内返回 true

**示例**：

```ts
validateUtil.isNumber(3.14) // true
```

## isEnglish

**判断是否为纯英文**

**参数**：

- `val: string` 输入字符串
- `minLength?: number` 最小长度（默认不限）
- `maxLength?: number` 最大长度（默认不限）

**返回值**：  
`boolean` 若为纯英文返回 true

**示例**：

```ts
validateUtil.isEnglish('hello', 2) // true
```

## isAlphanumeric

**判断是否为英文+数字组合**

**参数**：

- `val: string` 字符串
- `minLength?: number` 最小长度（默认不限）
- `maxLength?: number` 最大长度（默认不限）

**返回值**：  
`boolean` 若符合规则返回 true

**示例**：

```ts
validateUtil.isAlphanumeric('abc123') // true
```

## isPositiveInt

**判断是否为正整数**

**参数**：

- `num: string` 数字字符串
- `min?: number` 最小值
- `max?: number` 最大值

**返回值**：  
`boolean` 若为正整数且符合范围返回 true

**示例**：

```ts
validateUtil.isPositiveInt('100') // true
```

## isURL

**判断是否为合法 URL**

**参数**：  
`val: string` URL 字符串

**返回值**：  
`boolean` 若为合法 http/https URL 返回 true

**示例**：

```ts
validateUtil.isURL('https://example.com') // true
```

## isIPv4

**判断是否为 IPv4 地址**

**参数**：  
`val: string` IP 地址字符串

**返回值**：  
`boolean` 若符合 IPv4 格式返回 true

**示例**：

```ts
validateUtil.isIPv4('192.168.1.1') // true
```

## isBase64

**判断是否为 Base64 编码**

**参数**：  
`val: string` 原始字符串

**返回值**：  
`boolean` 若为合法 Base64 返回 true

**示例**：

```ts
validateUtil.isBase64('dGVzdA==') // true
```

## isHexColor

**判断是否为十六进制颜色值**

**参数**：  
`val: string` 颜色字符串

**返回值**：  
`boolean` 若为合法 hex 值返回 true

**示例**：

```ts
validateUtil.isHexColor('#fff') // true
```

## isUUID

**判断是否为 UUID**

**参数**：  
`val: string` 原始字符串

**返回值**：  
`boolean` 若为合法 UUID 返回 true

**示例**：

```ts
validateUtil.isUUID('123e4567-e89b-12d3-a456-426614174000') // true
```

## isDate

**判断是否为合法日期字符串**

**参数**：  
`val: string` 日期字符串

**返回值**：  
`boolean` 符合 YYYY-MM-DD 或 YYYY/MM/DD 格式返回 true

**示例**：

```ts
validateUtil.isDate('2023-01-01') // true
```

## isTime

**判断是否为时间格式（HH:mm 或 HH:mm:ss）**

**参数**：  
`val: string` 时间字符串

**返回值**：  
`boolean` 若符合格式返回 true

**示例**：

```ts
validateUtil.isTime('23:59') // true
validateUtil.isTime('10:00:30') // true
```

## isDateTime

**判断是否为日期时间格式**

**参数**：  
`val: string` 日期时间字符串

**返回值**：  
`boolean` 若符合格式返回 true

**示例**：

```ts
validateUtil.isDateTime('2024-01-01 12:00:00') // true
```

## isCurrency

**判断是否为货币格式（最多两位小数）**

**参数**：  
`val: string` 金额字符串

**返回值**：  
`boolean` 若为合法格式返回 true

**示例**：

```ts
validateUtil.isCurrency('123.45') // true
```

## isUsername

**判断是否为合法用户名**

**参数**：  
`val: string` 用户名字符串

**返回值**：  
`boolean` 字母数字下划线，长度 3～20 返回 true

**示例**：

```ts
validateUtil.isUsername('user_01') // true
```

## isStrongPassword

**判断是否为强密码**

**参数**：  
`val: string` 密码字符串

**返回值**：  
`boolean` 若包含大小写字母、数字、符号返回 true

**示例**：

```ts
validateUtil.isStrongPassword('Abcd123$') // true
```

## isImageFile

**判断是否为图片文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若后缀为 .jpg/.png 等返回 true

**示例**：

```ts
validateUtil.isImageFile('logo.png') // true
```

## isVideoFile

**判断是否为视频文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若为 .mp4/.mov 等格式返回 true

**示例**：

```ts
validateUtil.isVideoFile('movie.mp4') // true
```

## isPdfFile

**判断是否为 PDF 文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若扩展名为 .pdf 返回 true

**示例**：

```ts
validateUtil.isPdfFile('test.pdf') // true
```

## isExcelFile

**判断是否为 Excel 文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若为 .xls/.xlsx/.et 返回 true

**示例**：

```ts
validateUtil.isExcelFile('report.xlsx') // true
```

## isWordFile

**判断是否为 Word 文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若为 .doc/.docx/.wps 返回 true

**示例**：

```ts
validateUtil.isWordFile('doc.docx') // true
```

## isPptFile

**判断是否为 PowerPoint 文件**

**参数**：  
`val: string` 文件名字符串

**返回值**：  
`boolean` 若为 .ppt/.pptx/.dps 返回 true

**示例**：

```ts
validateUtil.isPptFile('slides.ppt') // true
```