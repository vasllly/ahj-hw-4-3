export default function inn(digits) {
  const first = parseInt(digits[0], 10);
  const second = parseInt(digits[1], 10);
  const third = parseInt(digits[2], 10);

  if (first === 2) return 'mir';
  if (first === 4) return 'visa';
  if (first === 5 && second > 0 && second < 6) return 'master';
  if (digits.substring(0, 2) === '35') return 'jcb';
  if (digits.substring(0, 2) === '34' || digits.substring(0, 2) === '37') return 'amex';
  if (digits.substring(0, 4) === '6011' || digits.substring(0, 2) === '65') return 'discover';

  const diners1 = digits.substring(0, 2) === '30' && third >= 0 && third < 6;
  const diners2 = digits.substring(0, 2) === '36' || digits.substring(0, 2) === '38';
  if (diners1 || diners2) return 'diners_club';

  return false;
}
