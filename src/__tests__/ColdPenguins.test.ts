import {describe, expect, test} from '@jest/globals';
import WarmPenguinsUp from '../ColdPenguins';

describe('The penguins should be grouped in arrays of length 3\n to stay warm, and any extra (not enough to form an array of 3)\n should be put in the last array.', () => {
  test('Checking 6 penguin array.', () => {
    expect(WarmPenguinsUp(
      ['Penguin1', 
      'Penguin2', 
      'Penguin3',
      'Penguin4',
      'Penguin5',
      'Penguin6']
      )).toStrictEqual(
      [['Penguin1', 'Penguin2', 'Penguin3'], 
      ['Penguin4', 'Penguin5', 'Penguin6']]
    );
  });
});

describe('The penguins should be grouped in arrays of length 3\n to stay warm, and any extra (not enough to form an array of 3)\n should be put in the last array.', () => {
  test('Checking 7 penguin array.', () => {
    expect(WarmPenguinsUp(
      ['Penguin1', 
      'Penguin2', 
      'Penguin3',
      'Penguin4',
      'Penguin5',
      'Penguin6',
      'Penguin7']
      )).toStrictEqual(
      [['Penguin1', 'Penguin2', 'Penguin3'], 
      ['Penguin4', 'Penguin5', 'Penguin6', 'Penguin7']]
    );
  });
});

describe('The penguins should be grouped in arrays of length 3\n to stay warm, and any extra (not enough to form an array of 3)\n should be put in the last array.', () => {
  test('Checking 2 penguin array.', () => {
    expect(WarmPenguinsUp(
      ['Penguin1', 'Penguin2']
      )).toStrictEqual(
      [['Penguin1', 'Penguin2']]
    );
  });
});