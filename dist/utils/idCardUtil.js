export const idCardUtil = {
    isValid(id) {
        if (!/^\d{15}$|^\d{17}[\dXx]$/.test(id))
            return false;
        // 如果是 18 位，校验最后一位
        if (id.length === 18) {
            const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            const codes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            const sum = id.slice(0, 17).split('').reduce((acc, num, i) => acc + Number(num) * weights[i], 0);
            const checkCode = codes[sum % 11];
            return checkCode === id[17].toUpperCase();
        }
        return true;
    },
    isMan(id) {
        return idCardUtil.getGender(id) === '男';
    },
    isWoman(id) {
        return idCardUtil.getGender(id) === '女';
    },
    getAge(id, strict = false) {
        const birthStr = idCardUtil.getBirth(id);
        if (!birthStr)
            return null;
        const birthDate = new Date(birthStr);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (strict) {
            const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
            if (today < thisYearBirthday)
                age -= 1;
        }
        return age;
    },
    getBirth(id) {
        if (!this.isValid(id))
            return null;
        const birth = id.length === 18 ? id.slice(6, 14) : '19' + id.slice(6, 12);
        return `${birth.slice(0, 4)}-${birth.slice(4, 6)}-${birth.slice(6)}`;
    },
    getGender(id) {
        if (!this.isValid(id))
            return null;
        const code = id.length === 18 ? Number(id[16]) : Number(id[14]);
        return code % 2 === 0 ? '女' : '男';
    },
    getProvince(id) {
        if (!this.isValid(id))
            return null;
        return provinceMap[id.slice(0, 2)] || null;
    }
};
const provinceMap = {
    '11': '北京', '12': '天津', '13': '河北', '14': '山西', '15': '内蒙古',
    '21': '辽宁', '22': '吉林', '23': '黑龙江',
    '31': '上海', '32': '江苏', '33': '浙江', '34': '安徽', '35': '福建', '36': '江西', '37': '山东',
    '41': '河南', '42': '湖北', '43': '湖南', '44': '广东', '45': '广西', '46': '海南',
    '50': '重庆', '51': '四川', '52': '贵州', '53': '云南', '54': '西藏',
    '61': '陕西', '62': '甘肃', '63': '青海', '64': '宁夏', '65': '新疆',
    '71': '台湾', '81': '香港', '82': '澳门'
};
