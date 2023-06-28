import {describe, expect, test} from '@jest/globals';
import twoSum from '../testfile';

describe('sum of two', () => {
  test('adds 1 to 2, should equal 3', () => {
    expect(twoSum(1,2)).toEqual(3);
  });
});