export interface IdCardUtil {
    /**
     * 验证身份证号格式是否合法（支持15位和18位，含校验位）
     * @param id - 身份证号字符串
     * @returns 是否为合法身份证号
     */
    isValid: (id: string) => boolean;
    /**
     * 判断是否为男性
     * @param id - 合法的身份证号
     * @returns true 表示男，false 表示女或无效
     */
    isMan: (id: string) => boolean;
    /**
     * 判断是否为女性
     * @param id - 合法的身份证号
     * @returns true 表示女，false 表示男或无效
     */
    isWoman: (id: string) => boolean;
    /**
     * 获取身份证对应年龄
     * @param id - 合法身份证号
     * @param strict - 是否严格模式（true 表示按日精确，false 表示只计算年份差）
     * @returns 年龄数字（无效返回 null）
     */
    getAge: (id: string, strict?: boolean) => number | null;
    /**
     * 提取身份证中的出生日期（格式为 yyyy-MM-dd）
     * @param id - 合法的身份证号（否则返回 null）
     * @returns 出生日期字符串或 null
     */
    getBirth: (id: string) => string | null;
    /**
     * 根据身份证判断性别
     * @param id - 合法的身份证号
     * @returns '男' 或 '女'，无效返回 null
     */
    getGender: (id: string) => '男' | '女' | null;
    /**
     * 获取身份证归属的省份中文名称
     * @param id - 合法的身份证号
     * @returns 所在省份名称，如“江西”或 null
     */
    getProvince: (id: string) => string | null;
}
