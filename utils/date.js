var format = require('date-fns/format')

const timestampToDate = (date, formatStr = 'yyyy-MM-dd HH:mm',) => {
    if (typeof date === 'number' && date.toString().length === 10) {
        return format(date * 1000, formatStr)
    } else {
        return format(date, formatStr)
    }
}

console.log(timestampToDate(1658320372161))
console.log(format(1658320372, 'yyyy-MM-dd HH:mm'))
console.log(timestampToDate(1658320372))
console.log(timestampToDate(new Date()))
console.log(timestampToDate(1658320372000, 'yyyy/MM/dd HH:mm:ss'))