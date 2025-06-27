# idCardUtil

# 身份证工具

**使用**：

```ts
import {idCardUtil} from "fox-tools";
```

## isValid

**验证身份证号格式是否合法**

**参数**：  
`id: string` 身份证号字符串

**返回值**：  
`boolean` 是否为合法身份证号

**示例**：

```ts
idCardUtil.isValid('34052419800101001X') // true
```



## isMan

**判断是否为男性**

**参数**：  
`id: string` 合法的身份证号

**返回值**：  
`boolean` true 表示男，false 表示女或无效

**示例**：

```ts
idCardUtil.isMan('110101199003076519') // true
```



## isWoman

**判断是否为女性**

**参数**：  
`id: string` 合法的身份证号

**返回值**：  
`boolean` true 表示女，false 表示男或无效

**示例**：

```ts
idCardUtil.isWoman('110101199003076528') // true
```



## getAge

**获取身份证对应年龄**

**参数**：

- `id: string` 合法的身份证号
- `strict?: boolean` 是否严格模式（true 表示按日精确，false 表示只计算年份差）

**返回值**：  
`number | null` 年龄数值（若身份证无效则为 null）

**示例**：

```ts
idCardUtil.getAge('110101200001016515') // 24
idCardUtil.getAge('110101200001016515', true) // 精确到生日
```



## getBirth

**提取出生日期（yyyy-MM-dd 格式）**

**参数**：  
`id: string` 合法的身份证号

**返回值**：  
`string | null` 出生日期字符串，身份证无效时为 null

**示例**：

```ts
idCardUtil.getBirth('110101200112316521') // '2001-12-31'
```



## getGender

**根据身份证判断性别**

**参数**：  
`id: string` 合法的身份证号

**返回值**：  
`'男' | '女' | null` 性别文本，身份证无效时为 null

**示例**：

```ts
idCardUtil.getGender('110101199006013215') // '男'
```



## getProvince

**获取身份证归属省份**

**参数**：  
`id: string` 合法的身份证号

**返回值**：  
`string | null` 省份中文名称，身份证无效时为 null

**示例**：

```ts
idCardUtil.getProvince('34052419800101001X') // '安徽'
```