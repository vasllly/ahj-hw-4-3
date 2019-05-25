import inn from '../src/js/inn';
import luhnAlgorithm from '../src/js/luhnAlgorithm';

test.each([
  ['mir card', '2771332735204018', 'mir'],
  ['mir card', '2709721239739635', 'mir'],
  ['mir card', '2706924347029229', 'mir'],
  ['visa card', '4539804056541904', 'visa'],
  ['visa card', '4556936653057328', 'visa'],
  ['visa card', '4024007195998173', 'visa'],
  ['master card', '5190967013969042', 'master'],
  ['master card', '5185553343850289', 'master'],
  ['master card', '5328530337680409', 'master'],
  ['amex card', '371023430676356', 'amex'],
  ['amex card', '348361270397349', 'amex'],
  ['amex card', '346552273313737', 'amex'],
  ['discover card', '6011235155346246', 'discover'],
  ['discover card', '6011846272441908', 'discover'],
  ['discover card', '6011451783051609', 'discover'],
  ['jcb card', '3512762153658299', 'jcb'],
  ['jcb card', '3596662313538275', 'jcb'],
  ['jcb card', '3588389793421034', 'jcb'],
  ['diners_club card', '3618339003667706', 'diners_club'],
  ['diners_club card', '3003746755071604', 'diners_club'],
  ['diners_club card', '3011994599434549', 'diners_club'],
  ['undefined card', '1011994599434549', false],
  ['undefined card', '1011994599434549', false],
  ['undefined card', '1011994599434549', false],
])('test for inn - it should be %s', (_, input, expected) => {
  expect(inn(input)).toBe(expected);
});

test.each([
  ['true', '2771332735204018', true],
  ['true', '2709721239739635', true],
  ['true', '2706924347029229', true],
  ['false', '1011994599434549', false],
  ['false', '1011994599434549', false],
  ['false', '1011994599434549', false],
])('test for luhnAlgorithm - it should be %s', (_, input, expected) => {
  expect(luhnAlgorithm(input)).toBe(expected);
});
