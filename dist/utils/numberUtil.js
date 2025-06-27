export const numberUtil = {
    toDecimal: (value, digits = 2, round = true) => {
        const factor = Math.pow(10, digits);
        const result = round
            ? Math.round(value * factor) / factor
            : Math.floor(value * factor) / factor;
        return Number(result.toFixed(digits));
    },
    isValidNumber: value => typeof value === 'number' && !isNaN(value) && isFinite(value),
    isInteger: value => Number.isInteger(value),
    isEven: value => value % 2 === 0,
    isOdd: value => value % 2 !== 0,
    isBetween: (value, min, max, inclusive = true) => inclusive
        ? value >= min && value <= max
        : value > min && value < max,
    clamp: (value, min, max) => Math.max(min, Math.min(max, value)),
    random: (min, max, decimalDigits = 0) => {
        const raw = Math.random() * (max - min) + min;
        const factor = Math.pow(10, decimalDigits);
        return Math.round(raw * factor) / factor;
    },
    sum: (...nums) => nums.reduce((acc, n) => acc + n, 0),
    average: (...nums) => nums.length === 0 ? 0 : nums.reduce((a, b) => a + b, 0) / nums.length,
    toThousands: value => {
        const num = typeof value === 'number' ? value : parseFloat(value);
        if (isNaN(num))
            return String(value);
        return num.toLocaleString();
    },
    padZero: (value, length) => String(value).padStart(length, '0'),
    formatBytes: (bytes, unit) => {
        if (bytes < 0 || isNaN(bytes))
            return '0 B';
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        const k = 1024;
        // 固定单位转换
        if (unit && units.includes(unit)) {
            const index = units.indexOf(unit);
            const value = bytes / Math.pow(k, index);
            return `${value.toFixed(2)} ${unit}`;
        }
        // 自动选择单位
        let i = 0;
        let value = bytes;
        while (value >= k && i < units.length - 1) {
            value /= k;
            i++;
        }
        return `${value.toFixed(2)} ${units[i]}`;
    },
    numberToChinese: num => {
        const units = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿'];
        const digits = '零壹贰叁肆伍陆柒捌玖';
        const str = String(num).replace(/[^0-9]/g, '');
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str[str.length - 1 - i]);
            result = (digit ? digits[digit] + units[i] : '零') + result;
        }
        return result.replace(/零+/g, '零').replace(/零$/, '');
    },
    abbreviateNumber: (num, digits = 0) => {
        const abs = Math.abs(num);
        const units = [
            { value: 1e9, symbol: 'B' },
            { value: 1e6, symbol: 'M' },
            { value: 1e3, symbol: 'K' },
        ];
        for (const unit of units) {
            if (abs >= unit.value) {
                return (num / unit.value).toFixed(digits).replace(/\.?0+$/, '') + unit.symbol;
            }
        }
        return String(num);
    },
    abbreviateNumberCN: (num, digits = 0) => {
        const absNum = Math.abs(num);
        const units = [
            { value: 1e8, symbol: '亿' },
            { value: 1e4, symbol: '万' },
            { value: 1e3, symbol: '千' },
        ];
        for (const unit of units) {
            if (absNum >= unit.value) {
                return (num / unit.value).toFixed(digits).replace(/\.?0+$/, '') + unit.symbol;
            }
        }
        return String(num);
    },
};
