import {describe, expect, test} from '@jest/globals';
import teachToFish from '../HungryPenguins';

describe('The penguins are hungry, so they bought fishing rods.\n But they don\'t know how to use them. Give the array of penguin\n objects a fishing method that will console.log(\'<[][]<\');', () => {
  test('Testing 1 penguin.', () => {
    expect(JSON.stringify(teachToFish(
      [
        { creature: 'Penguin1' }
      ]
    ))).toStrictEqual(JSON.stringify(
      [
        {
          creature: 'Penguin1', fishing: () => {console.log('<[][]<')}
        }
      ]
    ));
  });
});

describe('The penguins are hungry, so they bought fishing rods.\n But they don\'t know how to use them. Give the array of penguin\n objects a fishing method that will console.log(\'<[][]<\');', () => {
  test('Testing 6 penguins.', () => {
    expect(JSON.stringify(teachToFish(
      [
        { creature: 'Penguin1' },
        { creature: 'Penguin2' },
        { creature: 'Penguin3' },
        { creature: 'Penguin4' },
        { creature: 'Penguin5' },
        { creature: 'Penguin6' }
      ]
    ))).toStrictEqual(JSON.stringify(
      [
        {
          creature: 'Penguin1', fishing: () => {console.log('<[][]<')}
        },
        {
          creature: 'Penguin2', fishing: () => {console.log('<[][]<')}
        },
        {
          creature: 'Penguin3', fishing: () => {console.log('<[][]<')}
        },
        {
          creature: 'Penguin4', fishing: () => {console.log('<[][]<')}
        },
        {
          creature: 'Penguin5', fishing: () => {console.log('<[][]<')}
        },
        {
          creature: 'Penguin6', fishing: () => {console.log('<[][]<')}
        }
      ]
    ));
  });
});
