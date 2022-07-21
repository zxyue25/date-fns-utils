const { ar, enUS, id, ja, ko, ms, pt, ru, th, tr, vi, zhCN, zhTW, es } = require('date-fns/locale');
const { format, formatDistance, formatDistanceStrict, formatRelative } = require('date-fns');

const LANGUAGE_DATE_FNS_MAP = {
  ar,
  en: enUS,
  id,
  ja,
  ko,
  ms,
  pt,
  ru,
  th,
  tr,
  vi,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
};

const formatDate = (
  date = 0,
  formatStr = 'PPpp',
  options = {}
) => format(date, formatStr, { locale: zhCN, ...options });

console.log(formatDate(new Date()))
const formatDateDistance = (
  date = 0,
  baseDate = 0,
  options = {
   
  }
) => formatDistance(date, baseDate, { locale: enUS, ...options });
// console.log(formatDateDistance(1658320372161))
console.log("===formatDistance===")
console.log(formatDateDistance(1658320372161, new Date()))
console.log(formatDateDistance(1658124987305, new Date()))
console.log(formatDateDistance(1658298801556, new Date()))

const formatDateDistanceStrict = (
  date = 0,
  baseDate = 0,
  options = {}
)  => formatDistanceStrict(date, baseDate, { locale: zhCN, ...options });
console.log("===formatDistanceStrict===")
console.log(formatDateDistanceStrict(1658320372161, new Date()))
console.log(formatDateDistanceStrict(1658124987305, new Date()))

const formatDateRelative = (
  date = 0,
  baseDate = 0,
  options = {
  }
) => formatRelative(date, baseDate, { locale: zhCN, ...options });
console.log("===formatRelative===")
console.log(formatDateRelative(1658320372161, new Date()))
console.log(formatDateRelative(1658124987305, new Date()))