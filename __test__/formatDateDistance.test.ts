import { ko } from 'date-fns/locale';

import { formatDateDistance } from '../../date/formatDateDistance';

test('test_formatDateDistance', () => {
  expect(formatDateDistance(1658320372, 1658717927)).toEqual('5 days ago');
  expect(formatDateDistance(1658320372161, 1658717927699, { lang: 'zh-CN' })).toEqual('5 天前');
  expect(formatDateDistance(1658320372, 1658717927, { locale: ko })).toEqual('5일 전');
  expect(formatDateDistance(1658320372161, 1658717927699, { lang: 'zh-CN', addSuffix: false })).toEqual('5 天');
  expect(formatDateDistance(new Date('2022-07-12'), new Date('2022-07-17'))).toEqual('5 days ago');
  expect(formatDateDistance(new Date('2022-07-05'), new Date('2022-07-12'))).toEqual('7 days ago');
  expect(formatDateDistance(new Date('2022-06-12'), new Date('2022-07-12'))).toEqual('about 1 month ago');
  expect(formatDateDistance(new Date('2021-07-12'), new Date('2022-07-12'))).toEqual('about 1 year ago');
});
