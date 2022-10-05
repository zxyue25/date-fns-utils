import { ko } from 'date-fns/locale';

import { formatDateDuration } from '../../date/formatDateDuration';

test('test_formatDateRange', () => {
  expect(formatDateDuration(71)).toEqual('1minute11seconds');
  expect(formatDateDuration(71, { lang: 'zh-CN' })).toEqual('1分钟11秒');
  expect(formatDateDuration(3604, { lang: 'zh-CN' })).toEqual('1小时4秒');
  expect(formatDateDuration(80221, { lang: 'zh-CN' })).toEqual('22小时17分钟1秒');
  expect(formatDateDuration(80221, { locale: ko })).toEqual('22시간17분1초');
  expect(formatDateDuration(80221, { lang: 'zh-CN', delimiter: ',' })).toEqual('22小时,17分钟,1秒');
  expect(formatDateDuration(80221, { lang: 'zh-CN', format: ['hours', 'minutes'] })).toEqual('22小时17分钟');
  expect(formatDateDuration(80220, { lang: 'zh-CN' })).toEqual('22小时17分钟');
  expect(formatDateDuration(80220, { lang: 'zh-CN', zero: true })).toEqual('22小时17分钟0秒');
  expect(formatDateDuration(880220, { lang: 'zh-CN' })).toEqual('244小时30分钟20秒');
});
