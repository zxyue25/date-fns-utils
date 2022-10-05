import { formatDateRange } from '../../date/formatDateRange';

test('test_formatDateRange', () => {
  expect(formatDateRange(1658320372161, 1658717927699)).toEqual('2022/07/20 - 2022/07/25');
  expect(formatDateRange(1658320372, 1658717927)).toEqual('2022/07/20 - 2022/07/25');
  expect(formatDateRange(1658320372, 1658717927, '', '~')).toEqual('2022/07/20 ~ 2022/07/25');
  expect(formatDateRange(1658320372, 1658717927, 'yyyy/MM/dd HH:mm', '~')).toEqual(
    '2022/07/20 20:32 ~ 2022/07/25 10:58'
  );
});
