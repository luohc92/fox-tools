export const arrayUtil = {
    /**
     * 数组去重（保留原始值，去除重复项）
     */
    unique: (arr) => Array.from(new Set(arr)),
    /**
     * 多维数组扁平化（默认展开全部层级）
     */
    flatten: (arr, depth = Infinity) => arr.reduce((acc, item) => {
        if (Array.isArray(item) && depth > 0) {
            acc.push(...arrayUtil.flatten(item, depth - 1));
        }
        else {
            acc.push(item);
        }
        return acc;
    }, []),
    /**
     * 将数组按指定长度切分
     */
    chunk: (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    },
    /**
     * 打乱数组顺序（Fisher–Yates 洗牌算法）
     */
    shuffle: (arr) => {
        const res = [...arr];
        for (let i = res.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [res[i], res[j]] = [res[j], res[i]];
        }
        return res;
    },
    /**
     * 清除数组中的 null 和 undefined
     */
    compact: (arr) => arr.filter(Boolean),
    /**
     * 判断两个数组是否相等（顺序+值）
     */
    isEqual: (a, b) => a.length === b.length && a.every((v, i) => v === b[i]),
    /**
     * 从数组中随机取出一个元素
     */
    sample: (arr) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined,
    /**
     * 统计指定值在数组中出现的次数
     */
    count: (arr, value) => arr.reduce((total, curr) => (curr === value ? total + 1 : total), 0),
    /**
     * 返回数组中出现频率最高的元素
     */
    mostFrequent: (arr) => {
        if (arr.length === 0)
            return undefined;
        const map = new Map();
        for (const item of arr) {
            map.set(item, (map.get(item) ?? 0) + 1);
        }
        return [...map.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    },
};
