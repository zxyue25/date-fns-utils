var getTime = require('date-fns/getTime')
var format = require('date-fns/format')
var getUnixTime = require('date-fns/getUnixTime')

const time = getTime(new Date())
// console.log(getTime())
console.log(getTime(new Date()))
console.log(getTime(Date.parse(new Date())))
console.log(getTime(1658312707))
console.log(getTime(1))

console.log(format(time, 'Pp'))

console.log('getUnixTime', getUnixTime(time))
console.log('getUnixTime', getUnixTime(Date.parse(new Date())))
console.log('getUnixTime', getUnixTime(1658319655000))
console.log('getUnixTime', getUnixTime(1658319656900))
console.log('getUnixTime', getUnixTime(16583196))


const getMilliTimestamp = (date) => {
    if (!date) {
        return getTime(new Date())
    } else {
        if (date instanceof Date) {
            return getTime(date)
        } else {
            if (date.toString().length === 10) {
                return getTime(date * 1000)
            } else {
                return date
            }
        }
    }
};
console.log("=======")
console.log(getMilliTimestamp())
console.log(getMilliTimestamp(new Date()))
console.log('new Date().getTime()', new Date().getTime())
console.log(getMilliTimestamp(new Date().getTime()))
console.log(getMilliTimestamp(Date.parse(new Date())))
console.log(getMilliTimestamp(1658312707))
console.log(getMilliTimestamp(1))

const getTimestamp = (date) => {
    if(!date){
       return getUnixTime(new Date())
    }
    return getUnixTime(date)
};

console.log("=======")
console.log(getTimestamp())
console.log(getTimestamp(new Date()))
console.log(getTimestamp(new Date().getTime()))
console.log(getTimestamp(Date.parse(new Date())))
console.log(getTimestamp(1658312707))
console.log(getTimestamp(1658319656900))
console.log(getTimestamp(1))