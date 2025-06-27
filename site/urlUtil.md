# urlUtil

# URL工具

**使用**：

```ts
import {urlUtil} from "fox-tools";
```

## getOrigin

**获取包含协议的主机名（含端口）**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`string` 协议 + host + port 的部分

**示例**：

```ts
urlUtil.getOrigin('https://example.com:8080/path') // 'https://example.com:8080'
```



## getHost

**获取主机名（host:port）**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`string` host 部分，不包含协议

**示例**：

```ts
urlUtil.getHost('https://example.com:8080/page?a=1') // 'example.com:8080'
```



## getPath

**获取路径部分（pathname）**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`string` 路径字符串，通常以 `/` 开头

**示例**：

```ts
urlUtil.getPath('https://site.com/api/list?id=3') // '/api/list'
```



## getHashPath

**获取 hash 路径（不含 #）**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`string` hash 字符串（不含 #）

**示例**：

```ts
urlUtil.getHashPath('https://x.com/#/dashboard') // '/dashboard'
```



## getQueryParam

**获取指定查询参数值**

**参数**：

- `key: string` 参数名
- `url: string` 完整 URL 字符串

**返回值**：  
`string | null` 对应参数的值或 null

**示例**：

```ts
urlUtil.getQueryParam('token', 'https://demo.com?a=1&token=abc') // 'abc'
```


## updateQueryParams

**批量更新查询参数**

**参数**：

- `params: Record<string, string>` 参数键值对
- `url: string` 完整 URL 字符串

**返回值**：  
`string` 更新后的完整 URL

**示例**：

```ts
urlUtil.updateQueryParams({token: '123', lang: 'zh'}, 'https://site.com?a=1')
// 'https://site.com?a=1&token=123&lang=zh'
```



## removeQueryParam

**移除指定查询参数**

**参数**：

- `key: string` 参数名
- `url: string` 完整 URL 字符串

**返回值**：  
`string` 移除后的 URL

**示例**：

```ts
urlUtil.removeQueryParam('a', 'https://abc.com?a=1&b=2')
// 'https://abc.com?b=2'
```



## getAllQueryParams

**获取所有查询参数对象**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`Record<string, string>` 所有查询参数组成的对象

**示例**：

```ts
urlUtil.getAllQueryParams('https://x.com?id=1&lang=en')
// { id: '1', lang: 'en' }
```



## hasQueryParam

**判断是否存在指定参数**

**参数**：

- `key: string` 参数名
- `url: string` 完整 URL 字符串

**返回值**：  
`boolean` 是否存在该参数

**示例**：

```ts
urlUtil.hasQueryParam('token', 'https://demo.com?token=abc') // true
```



## clearQueryParams

**移除所有查询参数**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：  
`string` 清空参数后的 URL

**示例**：

```ts
urlUtil.clearQueryParams('https://demo.com?a=1&b=2') // 'https://demo.com'
```



## urlParts

**解析 URL 结构**

**参数**：  
`url: string` 完整 URL 字符串

**返回值**：

```ts
{
  origin: string
  host: string
  pathname: string
  hash: string
  search: string
  query: Record<string, string>
}
```

**示例**：

```ts
urlUtil.urlParts('https://abc.com:8080/path?id=1#/home')
/*
{
  origin: 'https://abc.com:8080',
  host: 'abc.com:8080',
  pathname: '/path',
  hash: '/home',
  search: '?id=1',
  query: { id: '1' }
}
*/
```