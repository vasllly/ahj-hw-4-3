import Html from './html';
import inn from './inn';
import luhnAlgorithm from './luhnAlgorithm';

export default class Code {
  constructor(html) {
    this.html = html;
  }

  init() {
    this.html.addSubmitListener(this.submitListener.bind(this));
    this.html.addInputListener(this.inputListener.bind(this));
  }

  selectCard(cardType) {
    this.html.deselectAllCards();
    if (cardType) {
      Html.selectCard(cardType);
    } else {
      this.html.selectAllCards();
    }
  }

  submitListener(event) {
    event.preventDefault();
    const digits = this.html.input.value;
    if (luhnAlgorithm(digits)) {
      this.html.showMessage('success', 'Валидный номер карты');
    } else {
      this.html.showMessage('alert', 'Не валидный номер карты!');
    }
  }

  inputListener() {
    const digits = this.html.input.value;
    this.selectCard(inn(digits));
    this.html.hideMessage();
  }
}
