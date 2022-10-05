import { getTimestamp } from '../../date/getTimestamp';

test('test_formatDate', () => {
  expect(getTimestamp().toString().length).toBe(10);
  expect(getTimestamp(new Date()).toString().length).toBe(10);
  expect(getTimestamp(new Date().getTime()).toString().length).toBe(10);
  expect(getTimestamp(1658319656900)).toEqual(1658319656);
  expect(getTimestamp(1658312707)).toEqual(1658312);
  expect(getTimestamp(1)).toEqual(0);
});
