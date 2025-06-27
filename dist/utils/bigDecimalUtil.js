export const bigDecimalUtil = (input) => {
    let sign;
    let value;
    const str = String(input).trim();
    if (!/^[-+]?(\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?$/i.test(str)) {
        throw new Error(`Invalid decimal string: ${input}`);
    }
    const normalized = normalizeScientificNotation(str);
    sign = normalized.startsWith('-') ? -1 : 1;
    value = normalized.replace(/^[-+]/, '');
    const wrap = (val, newSign) => {
        val = val.replace(/^[-+]/, '');
        value = val.replace(/^0+(?=\d)|^\./, '') || '0';
        sign = value === '0' ? 1 : newSign;
    };
    const api = {
        toString: () => (sign === -1 && value !== '0' ? '-' + value : value),
        toFixed: (digits = 2, round = true) => {
            const val = value.replace(/^[-+]/, '');
            if (!round) {
                const [int, dec = ''] = val.split('.');
                const truncated = `${int}.${dec.slice(0, digits).padEnd(digits, '0')}`;
                return sign === -1 && truncated !== '0' ? '-' + truncated : truncated;
            }
            const rounded = internalToFixed(val, digits);
            return sign === -1 && rounded !== '0' ? '-' + rounded : rounded;
        },
        add: (other) => {
            const o = bigDecimalUtil(other);
            if (sign === o.sign) {
                wrap(add(value, o.value), sign);
            }
            else {
                const cmp = compare(value, o.value);
                const [big, small] = cmp >= 0 ? [api, o] : [o, api];
                wrap(sub(big.value, small.value), (cmp >= 0 ? big.sign : -big.sign));
            }
            return api;
        },
        sub: (other) => api.add(bigDecimalUtil(other).negate().toString()),
        mul: (other) => {
            const o = bigDecimalUtil(other);
            wrap(mul(value, o.value), (sign * o.sign));
            return api;
        },
        div: (other, digits = 20) => {
            const o = bigDecimalUtil(other);
            if (o.value === '0')
                throw new Error('Division by zero');
            wrap(div(value, o.value, digits), (sign * o.sign));
            return api;
        },
        compare: (other) => {
            const o = bigDecimalUtil(other);
            if (sign !== o.sign)
                return sign > o.sign ? 1 : -1;
            const c = compare(value, o.value);
            return sign === 1 ? c : -c;
        },
        equals: (other) => api.compare(other) === 0,
        isZero: () => value === '0',
        isPositive: () => sign === 1 && value !== '0',
        isNegative: () => sign === -1 && value !== '0',
        abs: () => {
            sign = 1;
            return api;
        },
        negate: () => {
            if (value !== '0')
                sign *= -1;
            return api;
        },
        clone: () => bigDecimalUtil((sign === -1 ? '-' : '') + value),
        get value() {
            return value;
        },
        get sign() {
            return sign;
        },
    };
    return api;
};
function normalizeScientificNotation(input) {
    if (!/e/i.test(input))
        return input;
    const [coeff, expo] = input.toLowerCase().split('e');
    const sign = coeff.startsWith('-') ? '-' : '';
    const [intPart, decPart = ''] = coeff.replace(/^[-+]/, '').split('.');
    const digits = intPart + decPart;
    const exponent = parseInt(expo, 10);
    const pointIndex = intPart.length + exponent;
    if (pointIndex <= 0)
        return sign + '0.' + '0'.repeat(-pointIndex) + digits.replace(/^0+/, '');
    if (pointIndex >= digits.length)
        return sign + digits + '0'.repeat(pointIndex - digits.length);
    return sign + digits.slice(0, pointIndex) + '.' + digits.slice(pointIndex);
}
function internalToFixed(numStr, digits) {
    const [intPart, decPart = ''] = numStr.split('.');
    const padded = decPart.padEnd(digits + 1, '0');
    const roundDigit = +padded[digits];
    if (roundDigit < 5) {
        return `${intPart}.${padded.slice(0, digits)}`.replace(/\.$/, '');
    }
    const sumRaw = addInt(intPart + padded.slice(0, digits), '1'); // 🚀 使用 addInt
    const ni = sumRaw.slice(0, intPart.length) || '0';
    const nd = sumRaw.slice(intPart.length).padEnd(digits, '0');
    return `${ni}.${nd}`.replace(/\.$/, '');
}
// 核心数学运算（无需改动，保持原有精度逻辑）
function add(a, b) {
    const [ia, da = ''] = a.split('.');
    const [ib, db = ''] = b.split('.');
    const len = Math.max(da.length, db.length);
    const ra = ia + da.padEnd(len, '0');
    const rb = ib + db.padEnd(len, '0');
    const res = addInt(ra, rb);
    const int = res.slice(0, res.length - len) || '0';
    const dec = res.slice(-len).replace(/0+$/, '');
    return dec ? `${int}.${dec}` : int;
}
function sub(a, b) {
    const [ia, da = ''] = a.split('.');
    const [ib, db = ''] = b.split('.');
    const len = Math.max(da.length, db.length);
    const ra = ia + da.padEnd(len, '0');
    const rb = ib + db.padEnd(len, '0');
    const neg = compareInt(ra, rb) < 0;
    const res = neg ? subInt(rb, ra) : subInt(ra, rb);
    const int = res.slice(0, res.length - len) || '0';
    const dec = res.slice(-len).replace(/0+$/, '');
    const out = dec ? `${int}.${dec}` : int;
    return neg ? '-' + out : out;
}
function mul(a, b) {
    const [ia, da = ''] = a.split('.');
    const [ib, db = ''] = b.split('.');
    const res = mulInt(ia + da, ib + db);
    const decLen = da.length + db.length;
    const int = res.slice(0, res.length - decLen) || '0';
    const dec = res.slice(-decLen).replace(/0+$/, '');
    return dec ? `${int}.${dec}` : int;
}
function div(a, b, digits = 20) {
    const [ia, da = ''] = a.split('.');
    const [ib, db = ''] = b.split('.');
    const pa = ia + da;
    const pb = ib + db;
    const decLen = da.length - db.length;
    const shift = digits + Math.max(0, decLen);
    const na = pa + '0'.repeat(shift);
    const q = divInt(na, pb);
    const point = q.length - digits;
    const int = q.slice(0, point) || '0';
    const dec = q.slice(point).replace(/0+$/, '');
    return dec ? `${int}.${dec}` : int;
}
function compare(a, b) {
    const [ia, da = ''] = a.split('.');
    const [ib, db = ''] = b.split('.');
    const len = Math.max(da.length, db.length);
    const ra = ia + da.padEnd(len, '0');
    const rb = ib + db.padEnd(len, '0');
    return compareInt(ra, rb);
}
function addInt(a, b) {
    let carry = 0, res = '', i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const d1 = i >= 0 ? +a[i--] : 0;
        const d2 = j >= 0 ? +b[j--] : 0;
        const sum = d1 + d2 + carry;
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
    }
    return res.replace(/^0+/, '') || '0';
}
function subInt(a, b) {
    let borrow = 0, res = '', i = a.length - 1, j = b.length - 1;
    while (i >= 0) {
        const n1 = +a[i];
        const n2 = j >= 0 ? +b[j] : 0;
        let diff = n1 - n2 - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        }
        else {
            borrow = 0;
        }
        res = diff + res;
        i--;
        j--;
    }
    return res.replace(/^0+/, '') || '0';
}
function mulInt(a, b) {
    const res = Array(a.length + b.length).fill(0);
    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            const mul = +a[i] * +b[j];
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = mul + res[p2];
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
        }
    }
    return res.join('').replace(/^0+/, '') || '0';
}
function divInt(a, b) {
    const dividend = a.replace(/^0+/, '') || '0';
    const divisor = b.replace(/^0+/, '') || '0';
    let res = '';
    let temp = '';
    for (let i = 0; i < dividend.length; i++) {
        temp += dividend[i];
        temp = temp.replace(/^0+/, '') || '0';
        if (compareInt(temp, divisor) < 0) {
            res += res ? '0' : '';
        }
        else {
            let q = 0;
            while (compareInt(temp, mulInt(divisor, String(q + 1))) >= 0)
                q++;
            res += q;
            temp = subInt(temp, mulInt(divisor, String(q)));
        }
    }
    return res.replace(/^0+/, '') || '0';
}
function compareInt(a, b) {
    a = a.replace(/^0+/, '') || '0';
    b = b.replace(/^0+/, '') || '0';
    if (a.length > b.length)
        return 1;
    if (a.length < b.length)
        return -1;
    return a > b ? 1 : a < b ? -1 : 0;
}
