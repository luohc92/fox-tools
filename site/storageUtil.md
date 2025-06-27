# storageUtil

# 存储工具

**参数**：

`StorageUtilOptions?` 可选项

- `prefix: string` 前缀
- `storage: Storage` 使用的存储类型 localStorage (默认) | sessionStorage

**使用**：

```ts
import {storageUtil} from "fox-tools";
const storage = storageUtil({
  prefix: 'fox',
  storage: sessionStorage,
});
```

## set

**设置存储项**

**参数**：

- `key: string` 键名
- `value: unknown` 键值
- `options?: SetOptions` 可选项（如过期时间）

**返回值**：  
`void` 无返回值

**示例**：

```ts
storage.set('token', 'abc123', {expireSeconds: 3600})
```

```ts
storage.set('token', 'abc123', {expireSeconds: 3600})
```

## get

**获取存储项**

**参数**：  
`key: string` 键名

**返回值**：  
`T | null` 存储的值，若不存在或已过期则返回 null

**示例**：

```ts
const token = storage.get<string>('token')
```

## remove

**移除单项**

**参数**：  
`key: string` 键名

**返回值**：  
`void` 无返回值

**示例**：

```ts
storage.remove('token')
```

## clear

**清空所有存储项（可清除指定前缀的数据）**

**参数**：  
无

**返回值**：  
`void` 无返回值

**示例**：

```ts
storage.clear()
```

## clearExpired

**清除所有已过期项**

**参数**：  
无

**返回值**：  
`void` 无返回值

**示例**：

```ts
storage.clearExpired()
```

