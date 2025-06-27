# arrayUtil

# 数组工具

**使用**：

```ts
import {arrayUtil} from "fox-tools";
```

## unique

**数组去重**

**参数**：  
`arr: T[]` 原始数组

**返回值**：  
`T[]` 去除重复元素后的新数组

**示例**：

```ts
arrayUtil.unique([1, 2, 2, 3]) // [1, 2, 3]
```



## flatten

**多维数组扁平化**

**参数**：

- `arr: any[]` 多层嵌套数组
- `depth?: number` 展开深度，默认完全展开

**返回值**：  
`T[]` 扁平化后的新数组

**示例**：

```ts
arrayUtil.flatten([1, [2, [3, 4]]], 1) // [1, 2, [3, 4]]
arrayUtil.flatten([1, [2, [3, 4]]])    // [1, 2, 3, 4]
```



## chunk

**数组分块**

**参数**：

- `arr: T[]` 原始数组
- `size: number` 每组的长度

**返回值**：  
`T[][]` 分块后的二维数组

**示例**：

```ts
arrayUtil.chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```



## shuffle

**打乱数组顺序**

**参数**：  
`arr: T[]` 原始数组

**返回值**：  
`T[]` 顺序被打乱的新数组

**示例**：

```ts
arrayUtil.shuffle([1, 2, 3]) // 可能为 [2, 3, 1] 等
```



## mostFrequent

**获取频率最高的元素**

**参数**：  
`arr: T[]` 原始数组

**返回值**：  
`T | undefined` 出现次数最多的值，若数组为空则为 `undefined`

**示例**：

```ts
arrayUtil.mostFrequent(['a', 'b', 'a', 'c', 'a']) // 'a'
```



## compact

**清除 null 和 undefined**

**参数**：  
`arr: (T | null | undefined)[]` 原始数组，可能包含空值

**返回值**：  
`T[]` 去除空值后的新数组

**示例**：

```ts
arrayUtil.compact([1, null, 2, undefined, 3]) // [1, 2, 3]
```



## isEqual

**数组完全相等判断**

**参数**：

- `a: T[]` 第一个数组
- `b: T[]` 第二个数组

**返回值**：  
`boolean` 两个数组值和顺序是否一致

**示例**：

```ts
arrayUtil.isEqual([1, 2], [1, 2]) // true
arrayUtil.isEqual([1, 2], [2, 1]) // false
```



## sample

**数组随机取值**

**参数**：  
`arr: T[]` 原始数组

**返回值**：  
`T | undefined` 随机选中的值（若为空数组则返回 undefined）

**示例**：

```ts
arrayUtil.sample(['a', 'b', 'c']) // 随机一个值
```



## count

**统计指定值出现次数**

**参数**：

- `arr: T[]` 原始数组
- `value: T` 要统计的目标值

**返回值**：  
`number` 在数组中出现的次数

**示例**：

```ts
arrayUtil.count(['x', 'y', 'x', 'x'], 'x') // 3
```