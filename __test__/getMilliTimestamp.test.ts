import { getMilliTimestamp } from '../../date/getMilliTimestamp';

test('test_formatDate', () => {
  expect(getMilliTimestamp().toString().length).toBe(13);
  expect(getMilliTimestamp(new Date()).toString().length).toBe(13);
  expect(getMilliTimestamp(new Date().getTime()).toString().length).toBe(13);
  expect(getMilliTimestamp(1658319656900)).toEqual(1658319656900);
  expect(getMilliTimestamp(1658312707)).toEqual(1658312707000);
  expect(getMilliTimestamp(1)).toEqual(1);
});
