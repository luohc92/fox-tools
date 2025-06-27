export const stringUtil = {
    trim: str => str.trim(),
    isEmpty: str => !str || str.trim() === '',
    camelToSnake: str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`),
    snakeToCamel: str => str.replace(/_([a-z])/g, (_, char) => char.toUpperCase()),
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
    includes: (str, substr) => str.includes(substr),
    truncate: (str, maxLength = 20) => str.length <= maxLength ? str : str.slice(0, maxLength) + '...',
    sub: (str, fromIndex, toIndex) => {
        const len = str.length;
        let start = fromIndex < 0 ? len + fromIndex : fromIndex;
        let end = toIndex < 0 ? len + toIndex : toIndex;
        if (start > end)
            [start, end] = [end, start];
        start = Math.max(0, Math.min(start, len));
        end = Math.max(0, Math.min(end, len));
        return str.substring(start, end);
    },
    stripHtml: str => str.replace(/<[^>]*>/g, ''),
    removePrefix: (str, prefix) => str.startsWith(prefix) ? str.slice(prefix.length) : str,
    removeSuffix: (str, suffix) => str.endsWith(suffix) ? str.slice(0, -suffix.length) : str,
    strToBytes: (str, charset = 'utf-8') => {
        if (charset !== 'utf-8') {
            throw new Error(`TextEncoder 仅支持 utf-8，当前不支持: ${charset}`);
        }
        return new TextEncoder().encode(str);
    },
    bytesToStr: (bytes, charset = 'utf-8') => {
        try {
            return new TextDecoder(charset).decode(bytes);
        }
        catch {
            throw new Error(`TextDecoder 不支持的编码：${charset}`);
        }
    },
    format: (template, ...params) => {
        let i = 0;
        return template.replace(/\{}/g, () => i < params.length ? String(params[i++]) : '{}');
    },
    mask: (str, start, end, maskChar = '*') => {
        if (typeof str !== 'string')
            return str;
        const len = str.length;
        let s = start < 0 ? len + start : start;
        let e = end < 0 ? len + end : end;
        s = Math.max(0, Math.min(s, len));
        e = Math.max(s, Math.min(e, len));
        const maskLen = e - s;
        const safeChar = typeof maskChar === 'string' ? maskChar : '*';
        const repeatCount = Math.max(0, Math.floor(maskLen));
        return str.slice(0, s) + safeChar.repeat(repeatCount) + str.slice(e);
    },
    createUUID() {
        let dt = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return c === 'x' ? r.toString(16) : ((r & 0x3) | 0x8).toString(16);
        });
    },
    createRandomString(length, includeSpecial = false) {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
        const specials = '!@#$%&*';
        const basic = upper + lower + digits;
        const all = includeSpecial ? basic + specials : basic;
        if (includeSpecial && length < 4) {
            throw new Error('长度至少为 4，才能包含大写、小写、数字、特殊符号各一');
        }
        const required = [];
        if (includeSpecial) {
            required.push(upper[Math.floor(Math.random() * upper.length)], lower[Math.floor(Math.random() * lower.length)], digits[Math.floor(Math.random() * digits.length)], specials[Math.floor(Math.random() * specials.length)]);
        }
        const bytes = new Uint8Array(length - required.length);
        crypto.getRandomValues(bytes);
        const filler = Array.from(bytes, b => all[b % all.length]);
        const full = [...required, ...filler];
        for (let i = full.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [full[i], full[j]] = [full[j], full[i]];
        }
        return full.join('');
    },
};
