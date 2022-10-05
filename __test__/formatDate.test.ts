import { formatDate } from '../../date/formatDate';

test('test_formatDate', () => {
  expect(formatDate(1658320372161)).toEqual('2022-07-20 20:32');
  expect(formatDate(1658320372)).toEqual('2022-07-20 20:32');
  expect(formatDate(1658320372000, 'yyyy/MM/dd HH:mm:ss')).toEqual('2022/07/20 20:32:52');
});
