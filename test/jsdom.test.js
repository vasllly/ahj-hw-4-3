import Html from '../src/js/html';
import Code from '../src/js/code';

document.body.innerHTML = `
  <div class="main">
    <h3>Check your credit card number</h3>
    <ul class="cards list-unstyled">
      <li><span class="card mir" title="Mir">Mir</span></li>
      <li><span class="card visa" title="Visa">Visa</span></li>
      <li><span class="card master" title="Mastercard">Mastercard</span></li>
      <li><span class="card amex" title="American Express">American Express</span></li>
      <li><span class="card discover" title="Discover">Discover</span></li>
      <li><span class="card jcb" title="JCB">JCB</span></li>
      <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
    </ul>
    <form id="form" class="form-inline" novalidate="novalidate">
      <div class="form-group">
        <input class="form-control col-md-6" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
        <input type="submit" id="submitform" class="btn btn-success" value="Click to Validate">
      </div>
    </form>
    <p id="message"></p>
  </div>
`;

const html = new Html();
const code = new Code(html);
code.init();

test('input undefined card', () => {
  html.input.value = '1771332735204018';
  code.inputListener();
  const cards = [...document.getElementsByClassName('card')];
  const clases = cards.map(o => o.classList.contains('cdisabled'));
  const expected = [false, false, false, false, false, false, false];
  expect(clases).toEqual(expected);
});

test('input card mir', () => {
  html.input.value = '2771332735204018';
  code.inputListener();
  const cards = [...document.getElementsByClassName('card')];
  const clases = cards.map(o => o.classList.contains('cdisabled'));
  const expected = [false, true, true, true, true, true, true];
  expect(clases).toEqual(expected);
});

test('input card visa', () => {
  html.input.value = '4539804056541904';
  code.inputListener();
  const cards = [...document.getElementsByClassName('card')];
  const clases = cards.map(o => o.classList.contains('cdisabled'));
  const expected = [true, false, true, true, true, true, true];
  expect(clases).toEqual(expected);
});

test('input card master', () => {
  html.input.value = '5190967013969042';
  code.inputListener();
  const cards = [...document.getElementsByClassName('card')];
  const clases = cards.map(o => o.classList.contains('cdisabled'));
  const expected = [true, true, false, true, true, true, true];
  expect(clases).toEqual(expected);
});

test('input card master and submit', () => {
  html.input.value = '5190967013969042';
  html.submit.click();
  expect(html.message.classList.contains('success')).toBeTruthy();
});

test('input invalid card number and submit', () => {
  html.input.value = '1190967013969042';
  html.submit.click();
  expect(html.message.classList.contains('alert')).toBeTruthy();
});
