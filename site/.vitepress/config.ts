import {defineConfig} from 'vitepress'

export default defineConfig({
  title: 'fox-tools',
  description: '一套灵巧的 JavaScript 工具包 ✨',
  base: '/fox-tools/',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到结果',
                resetButtonTitle: '清除',
                backButtonTitle: '关闭'
              }
            }
          }
        }
      }
    },
    nav: [
      {text: '指南', link: '/'},
      {text: 'GitHub', link: 'https://github.com/luohc92/fox-tools'},
    ],
    sidebar: [
      {
        text: '字符串工具 stringUtil', link: '/stringUtil', collapsed: true, items: [
          {text: '去除首尾空格', link: '/stringUtil#trim'},
          {text: '判断字符串是否为空', link: '/stringUtil#isempty'},
          {text: '驼峰转下划线', link: '/stringUtil#cameltosnake'},
          {text: '下划线转驼峰', link: '/stringUtil#snaketocamel'},
          {text: '首字母大写', link: '/stringUtil#capitalize'},
          {text: '判断是否包含子串', link: '/stringUtil#includes'},
          {text: '截断字符串并追加省略号', link: '/stringUtil#truncate'},
          {text: '字符串截取（支持负索引）', link: '/stringUtil#sub'},
          {text: '移除 HTML 标签', link: '/stringUtil#striphtml'},
          {text: '移除前缀', link: '/stringUtil#removeprefix'},
          {text: '移除后缀', link: '/stringUtil#removesuffix'},
          {text: '字符串转字节数组', link: '/stringUtil#strtobytes'},
          {text: '字节数组转字符串', link: '/stringUtil#bytestostr'},
          {text: '字符串模板格式化', link: '/stringUtil#format'},
          {text: '字符串脱敏替换', link: '/stringUtil#mask'},
          {text: '生成 UUID', link: '/stringUtil#createuuid'},
          {text: '生成随机字符串', link: '/stringUtil#createrandomstring'}
        ]
      },
      {
        text: '数组工具 arrayUti', link: '/arrayUtil', collapsed: true, items: [
          {text: '去重数组', link: '/arrayUtil#unique'},
          {text: '多维数组扁平化', link: '/arrayUtil#flatten'},
          {text: '数组分块', link: '/arrayUtil#chunk'},
          {text: '打乱数组顺序', link: '/arrayUtil#shuffle'},
          {text: '获取频率最高的元素', link: '/arrayUtil#mostfrequent'},
          {text: '清除 null 和 undefined', link: '/arrayUtil#compact'},
          {text: '数组完全相等判断', link: '/arrayUtil#isequal'},
          {text: '数组随机取值', link: '/arrayUtil#sample'},
          {text: '统计指定值出现次数', link: '/arrayUtil#count'}
        ]
      },
      {
        text: '数值工具 numberUtil', link: '/numberUtil', collapsed: true, items: [
          {text: '保留指定小数位数', link: '/numberUtil#todecimal'},
          {text: '判断是否为合法有限数字', link: '/numberUtil#isvalidnumber'},
          {text: '判断是否为整数', link: '/numberUtil#isinteger'},
          {text: '判断是否为偶数', link: '/numberUtil#iseven'},
          {text: '判断是否为奇数', link: '/numberUtil#isodd'},
          {text: '判断是否在指定范围内', link: '/numberUtil#isbetween'},
          {text: '限制在指定范围内', link: '/numberUtil#clamp'},
          {text: '生成范围内随机数', link: '/numberUtil#random'},
          {text: '多个数值求和', link: '/numberUtil#sum'},
          {text: '计算平均值', link: '/numberUtil#average'},
          {text: '添加千分位分隔符', link: '/numberUtil#tothousands'},
          {text: '数字左侧补零', link: '/numberUtil#padzero'},
          {text: '字节数格式化', link: '/numberUtil#formatbytes'},
          {text: '转换为中文金额大写', link: '/numberUtil#numbertochinese'},
          {text: '数字缩写表示（英文）', link: '/numberUtil#abbreviatenumber'},
          {text: '数字缩写表示（中文）', link: '/numberUtil#abbreviatenumbercn'}
        ]
      },
      {
        text: '精确数值工具 bigDecimalUtil', link: '/bigDecimalUtil', collapsed: true, items: [
          {text: '获取字符串表示', link: '/bigDecimalUtil#tostring'},
          {text: '保留指定位数小数', link: '/bigDecimalUtil#tofixed'},
          {text: '加法运算', link: '/bigDecimalUtil#add'},
          {text: '减法运算', link: '/bigDecimalUtil#sub'},
          {text: '乘法运算', link: '/bigDecimalUtil#mul'},
          {text: '除法运算', link: '/bigDecimalUtil#div'},
          {text: '比较两个数的大小', link: '/bigDecimalUtil#compare'},
          {text: '判断是否相等', link: '/bigDecimalUtil#equals'},
          {text: '判断是否为 0', link: '/bigDecimalUtil#iszero'},
          {text: '判断是否为正数', link: '/bigDecimalUtil#ispositive'},
          {text: '判断是否为负数', link: '/bigDecimalUtil#isnegative'},
          {text: '取绝对值', link: '/bigDecimalUtil#abs'},
          {text: '取相反数', link: '/bigDecimalUtil#negate'},
          {text: '克隆当前值', link: '/bigDecimalUtil#clone'},
          {text: '原始值', link: '/bigDecimalUtil#value'},
          {text: '符号标记', link: '/bigDecimalUtil#sign'}
        ]
      },
      {
        text: '身份证工具 idCardUtil', link: '/idCardUtil', collapsed: true, items: [
          {text: '验证身份证号格式是否合法', link: '/idCardUtil#isvalid'},
          {text: '判断是否为男性', link: '/idCardUtil#isman'},
          {text: '判断是否为女性', link: '/idCardUtil#iswoman'},
          {text: '获取身份证对应年龄', link: '/idCardUtil#getage'},
          {text: '提取出生日期', link: '/idCardUtil#getbirth'},
          {text: '根据身份证判断性别', link: '/idCardUtil#getgender'},
          {text: '获取身份证归属省份', link: '/idCardUtil#getprovince'}
        ]
      },
      {
        text: '日期工具 dateUtil', link: '/dateUtil', collapsed: true, items: [
          {text: '日期差值计算', link: '/dateUtil#diff'},
          {text: '日期精确差异计算', link: '/dateUtil#diffdetailed'},
          {text: '是否为闰年', link: '/dateUtil#isleapyear'},
          {text: '是否为周末', link: '/dateUtil#isweekend'},
          {text: '获取星期几文本', link: '/dateUtil#getweekdaytext'}
        ]
      },
      {
        text: 'URL工具 urlUtil', link: '/urlUtil', collapsed: true, items: [
          {text: '获取包含协议的主机名', link: '/urlUtil#getorigin'},
          {text: '获取主机名', link: '/urlUtil#gethost'},
          {text: '获取路径部分', link: '/urlUtil#getpath'},
          {text: '获取 hash 路径', link: '/urlUtil#gethashpath'},
          {text: '获取指定查询参数值', link: '/urlUtil#getqueryparam'},
          {text: '批量更新查询参数', link: '/urlUtil#updatequeryparams'},
          {text: '移除指定查询参数', link: '/urlUtil#removequeryparam'},
          {text: '获取所有查询参数对象', link: '/urlUtil#getallqueryparams'},
          {text: '判断是否存在指定参数', link: '/urlUtil#hasqueryparam'},
          {text: '移除所有查询参数', link: '/urlUtil#clearqueryparams'},
          {text: '解析 URL 结构', link: '/urlUtil#urlparts'}
        ]
      },
      {
        text: '存储工具 storageUtil', link: '/storageUtil', collapsed: true, items: [
          {text: '设置存储项', link: '/storageUtil#set'},
          {text: '获取存储项', link: '/storageUtil#get'},
          {text: '移除单项', link: '/storageUtil#remove'},
          {text: '清空所有存储项', link: '/storageUtil#clear'},
          {text: '清除所有已过期项', link: '/storageUtil#clearexpired'}
        ]
      },
      {
        text: '类型工具 typeUtil', link: '/typeUtil', collapsed: true, items: [
          {text: '判断是否为数组', link: '/typeUtil#isarray'},
          {text: '判断是否为非 null 的对象', link: '/typeUtil#isobject'},
          {text: '判断是否为纯对象', link: '/typeUtil#isplainobject'},
          {text: '判断是否为函数', link: '/typeUtil#isfunction'},
          {text: '判断是否为 Promise 实例', link: '/typeUtil#ispromise'},
          {text: '判断是否为有效数值', link: '/typeUtil#isnumber'},
          {text: '判断是否为合法 Date 实例', link: '/typeUtil#isdate'},
          {text: '判断是否为正则表达式', link: '/typeUtil#isregexp'},
          {text: '获取值的类型名称', link: '/typeUtil#gettype'},
          {text: '判断值是否为指定类型', link: '/typeUtil#istype'}
        ]
      },
      {
        text: '验证工具 validateUtil', link: '/validateUtil', collapsed: true, items: [
          {text: '判断值是否为空', link: '/validateUtil#isnullorempty'},
          {text: '判断是否为邮箱地址', link: '/validateUtil#isemail'},
          {text: '判断是否为手机号', link: '/validateUtil#isphone'},
          {text: '判断是否为身份证号', link: '/validateUtil#isidcard'},
          {text: '判断是否为中文', link: '/validateUtil#ischinese'},
          {text: '判断是否为数字', link: '/validateUtil#isnumber'},
          {text: '判断是否为纯英文', link: '/validateUtil#isenglish'},
          {text: '判断是否为英文+数字组合', link: '/validateUtil#isalphanumeric'},
          {text: '判断是否为正整数', link: '/validateUtil#ispositiveint'},
          {text: '判断是否为合法 URL', link: '/validateUtil#isurl'},
          {text: '判断是否为 IPv4 地址', link: '/validateUtil#isipv4'},
          {text: '判断是否为 Base64 编码', link: '/validateUtil#isbase64'},
          {text: '判断是否为十六进制颜色值', link: '/validateUtil#ishexcolor'},
          {text: '判断是否为 UUID', link: '/validateUtil#isuuid'},
          {text: '判断是否为合法日期字符串', link: '/validateUtil#isdate'},
          {text: '判断是否为时间格式', link: '/validateUtil#istime'},
          {text: '判断是否为日期时间格式', link: '/validateUtil#isdatetime'},
          {text: '判断是否为货币格式', link: '/validateUtil#iscurrency'},
          {text: '判断是否为合法用户名', link: '/validateUtil#isusername'},
          {text: '判断是否为强密码', link: '/validateUtil#isstrongpassword'},
          {text: '判断是否为图片文件', link: '/validateUtil#isimagefile'},
          {text: '判断是否为视频文件', link: '/validateUtil#isvideofile'},
          {text: '判断是否为 PDF 文件', link: '/validateUtil#ispdffile'},
          {text: '判断是否为 Excel 文件', link: '/validateUtil#isexcelfile'},
          {text: '判断是否为 Word 文件', link: '/validateUtil#iswordfile'},
          {text: '判断是否为 PowerPoint 文件', link: '/validateUtil#ispptfile'}
        ]
      }
    ]
  }
})
