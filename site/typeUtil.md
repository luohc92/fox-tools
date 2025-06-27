# typeUtil

# 类型工具

**使用**：

```ts
import {typeUtil} from "fox-tools";
```

## isArray

**判断是否为数组**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 如果是数组则返回 true

**示例**：

```ts
typeUtil.isArray([1, 2, 3]) // true
```



## isObject

**判断是否为非 null 的对象**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是非 null 且类型为对象则返回 true

**示例**：

```ts
typeUtil.isObject({}) // true
typeUtil.isObject(null) // false
```



## isPlainObject

**判断是否为纯对象**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是由 {} 或 Object.create(null) 创建的对象返回 true

**示例**：

```ts
typeUtil.isPlainObject({}) // true
typeUtil.isPlainObject(new Date()) // false
```



## isFunction

**判断是否为函数**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是函数则返回 true

**示例**：

```ts
typeUtil.isFunction(() => {
}) // true
```



## isPromise

**判断是否为 Promise 实例**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是 Promise 对象返回 true

**示例**：

```ts
typeUtil.isPromise(Promise.resolve(123)) // true
```



## isNumber

**判断是否为有效数值（非 NaN）**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是有效数字则返回 true

**示例**：

```ts
typeUtil.isNumber(123) // true
typeUtil.isNumber(NaN) // false
```



## isDate

**判断是否为合法 Date 实例**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是有效 Date 对象则返回 true

**示例**：

```ts
typeUtil.isDate(new Date()) // true
typeUtil.isDate('2023-01-01') // false
```



## isRegExp

**判断是否为正则表达式**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`boolean` 是 RegExp 对象则返回 true

**示例**：

```ts
typeUtil.isRegExp(/abc/) // true
```



## getType

**获取值的类型名称**

**参数**：  
`val: unknown` 任意待判断的值

**返回值**：  
`string` 类型名（如 'Array'、'String'、'Number' 等）

**示例**：

```ts
typeUtil.getType([]) // 'Array'
typeUtil.getType(123) // 'Number'
```



## isType

**判断值是否为指定类型**

**参数**：

- `val: unknown` 任意待判断的值
- `typeName: string` 要判断的类型名（不区分大小写）

**返回值**：  
`boolean` 若匹配指定类型则返回 true

**示例**：

```ts
typeUtil.isType([], 'array') // true
typeUtil.isType(123, 'Number') // true
```