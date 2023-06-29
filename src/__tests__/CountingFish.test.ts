import {describe, expect, test} from '@jest/globals';
import fishCounter from '../CountingFish';

describe('Count the fish by type, return a regular object.', () => {
  test('Testing 2 salmon, 1 tuna.', () => {
    expect(fishCounter(
      [
        {
          type: 'salmon',
          size: 'small',
          color: 'red-ish orange'
        },
        {
          type: 'salmon',
          size: 'medium',
          color: 'red-ish orange'
        },
        {
          type: 'tuna',
          size: 'gargantuan',
          color: 'metalic gray'
        }
      ]
    )).toStrictEqual(
        {
          salmon: 2,
          tuna: 1
        }
    );
  });
});

describe('Count the fish by type, return a regular object.', () => {
  test('Testing 1 bass, 1 salmon, 3 sardines.', () => {
    expect(fishCounter(
      [
        {
          type: 'bass',
          size: 'medium',
          color: 'light green'
        },
        {
          type: 'salmon',
          size: 'small',
          color: 'red-ish orange'
        },
        {
          type: 'sardine',
          size: 'very small',
          color: 'gray'
        },
        {
          type: 'sardine',
          size: 'small',
          color: 'gray'
        },
        {
          type: 'sardine',
          size: 'very small',
          color: 'light gray'
        }
      ]
    )).toStrictEqual(
        {
          bass: 1,
          salmon: 1,
          sardine: 3
        }
    );
  });
});