var getTime = require('date-fns/getTime')
const ms = 1;
const s = 1 * 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const M = d * 30;
const y = d * 365;

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

const showTimeAgo = (time, index) => {
    const unit = [
        '{n} year(s) ago',
        '{n} month(s) ago',
        '{n} day(s) ago',
        window.__('hour_ago', { n: time.toString() }, '{n} hour(s) ago'),
        window.__('min_ago', { n: time.toString() }, '{n} minute(s) ago'),
        window.__('second_ago', { n: time.toString() }, '{n} second(s) ago'),
    ];
    return unit[index];
};

const showTimeLater = (time, index) => {
    const unit = [
        window.__('year_after', { n: time.toString() }, '{n} year(s) later'),
        window.__('month_after', { n: time.toString() }, '{n} month(s) later'),
        window.__('day_after', { n: time.toString() }, '{n} day(s) later'),
        window.__('hour_after', { n: time.toString() }, '{n} hour(s) later'),
        window.__('min_after', { n: time.toString() }, '{n} minute(s) later'),
        window.__('second_after', { n: time.toString() }, '{n} second(s) later'),
    ];
    return unit[index];
};

const formatDateDistance = (date, baseDate = new Date()) => {
    if (!date) {
        return '--';
    }
    const targetDateTimeStamp = getMilliTimestamp(date);
    const refDateTimeStamp = getMilliTimestamp(baseDate);
    const timeGap = targetDateTimeStamp - refDateTimeStamp;
    const milliseconds = Math.abs(timeGap);

    let res = '';
    [y, M, d, h, m, s, ms].forEach((item, index) => {
        const num = Math.floor(milliseconds / item);
        if (!res && num >= 1) {
            res = timeGap < 0 ? showTimeAgo(num, index) : showTimeLater(num, index);
        }
    });

    return res;
};
console.log(formatDateDistance(1658320372161))
console.log(formatDateDistance(1658124987305))
console.log(formatDateDistance(1658298801556, new Date()))