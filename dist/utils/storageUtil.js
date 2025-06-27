export const storageUtil = (options = {}) => {
    const { prefix = '', storage = localStorage } = options;
    const getKey = (key) => `${prefix}${key}`;
    return {
        set(key, value, { expireSeconds } = {}) {
            const expireAt = expireSeconds ? Date.now() + expireSeconds * 1000 : null;
            const payload = JSON.stringify({ value, expireAt });
            storage.setItem(getKey(key), payload);
        },
        get(key) {
            const raw = storage.getItem(getKey(key));
            if (!raw)
                return null;
            try {
                const parsed = JSON.parse(raw);
                const { value, expireAt } = parsed;
                if (expireAt && Date.now() > expireAt) {
                    storage.removeItem(getKey(key));
                    return null;
                }
                return value ?? null;
            }
            catch {
                // 非本工具写入的数据，按原样返回
                return raw;
            }
        },
        remove(key) {
            storage.removeItem(getKey(key));
        },
        clear() {
            if (!prefix) {
                storage.clear();
                return;
            }
            const toRemove = [];
            for (let i = 0; i < storage.length; i++) {
                const k = storage.key(i);
                if (k?.startsWith(prefix))
                    toRemove.push(k);
            }
            toRemove.forEach(k => storage.removeItem(k));
        },
        /**
         * 清除所有已过期项
         */
        clearExpired() {
            for (let i = 0; i < storage.length; i++) {
                const k = storage.key(i);
                if (!k?.startsWith(prefix))
                    continue;
                const raw = storage.getItem(k);
                if (!raw)
                    continue;
                try {
                    const { expireAt } = JSON.parse(raw);
                    if (expireAt && Date.now() > expireAt) {
                        storage.removeItem(k);
                    }
                }
                catch {
                    // 非 JSON 格式（非本工具写入），跳过
                }
            }
        },
    };
};
