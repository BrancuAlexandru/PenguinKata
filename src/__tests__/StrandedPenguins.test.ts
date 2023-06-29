import {describe, expect, test} from '@jest/globals';
import boatBuilder from '../StrandedPenguins';

describe('Build the penguins boats according to number and size.\n Size is denoted by number of underlines. The input will never\n have 0 boats or less, and will never have boats of size 0 or less.', () => {
  test('Testing 1 boat of size 17.', () => {
    expect(boatBuilder([[1,17]]))
      .toStrictEqual(
        ['|_________________/']
      );
  });
});

describe('Build the penguins boats according to number and size.\n Size is denoted by number of underlines. The input will never\n have 0 boats or less, and will never have boats of size 0 or less.', () => {
  test('Testing 3 boats of size 1.', () => {
    expect(boatBuilder([[3,1]]))
      .toStrictEqual(
        ['|_/', '|_/', '|_/']
      );
  });
});

describe('Build the penguins boats according to number and size.\n Size is denoted by number of underlines. The input will never\n have 0 boats or less, and will never have boats of size 0 or less.', () => {
  test('Testing 3 boats of size 1.', () => {
    expect(boatBuilder([[1,2], [2,1], [4,3]]))
      .toStrictEqual(
        ['|__/', '|_/', '|_/', '|___/', '|___/', '|___/', '|___/']
      );
  });
});