import {describe, expect, test} from '@jest/globals';
import polarBearDetector from '../PolarBears';

describe('If a string contains a \'p\' or a \'P\' character,\n return true, otherwise return false.', () => {
  test('Testing the snow.', () => {
    expect(polarBearDetector('f;luasg[oaiJVaPnwn ojng[AOWIG,]mgrapmg]prj]orgmi4wr]'))
      .toStrictEqual(true);
  });
});

describe('If a string contains a \'p\' or a \'P\' character,\n return true, otherwise return false.', () => {
  test('Testing the snow.', () => {
    expect(polarBearDetector('[oadjmngholmre[i  baghkmr=oamgojokdganb [oaiwr[ogbrorm]kbma]ibn[on ]oiadj]]'))
      .toStrictEqual(false);
  });
});

describe('If a string contains a \'p\' or a \'P\' character,\n return true, otherwise return false.', () => {
  test('Testing the snow.', () => {
    expect(polarBearDetector('fjhabeojvb easihvbawejvneijvnfkuAEBNP'))
      .toStrictEqual(true);
  });
});

describe('If a string contains a \'p\' or a \'P\' character,\n return true, otherwise return false.', () => {
  test('Testing the snow.', () => {
    expect(polarBearDetector('naew[oflpwnapfenjeawjnglkj nrsbngoirneaoinjhg4n[JNHI-OHJGNREJGNASNG[ON-'))
      .toStrictEqual(true);
  });
});