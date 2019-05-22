export default class Html {
  constructor() {
    this.submit = document.getElementById('submitform');
    this.cards = [...document.getElementsByClassName('card')];
    this.input = document.getElementById('card_number');
    this.message = document.getElementById('message');
  }

  static selectCard(cardType) {
    const card = document.getElementsByClassName(cardType);
    card[0].classList.remove('cdisabled');
  }

  selectAllCards() {
    this.cards.forEach((el) => {
      el.classList.remove('cdisabled');
    });
  }

  deselectAllCards() {
    this.cards.forEach((el) => {
      el.classList.add('cdisabled');
    });
  }

  showMessage(type, text) {
    this.message.classList = type;
    this.message.innerHTML = text;
  }

  hideMessage() {
    this.message.classList = 'hidden';
  }

  addSubmitListener(callback) {
    this.submit.addEventListener('click', (event) => {
      callback.call(null, event);
    });
  }

  addInputListener(callback) {
    this.input.addEventListener('input', () => {
      callback.call(null);
    });
  }
}
