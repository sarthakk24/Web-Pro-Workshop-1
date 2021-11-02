console.log("js working");

const form_submit = document.querySelector(".calculator_submit_button");
const operation_result = document.querySelector(".operation_result");

const num1_input = document.querySelector("#Num1");
const num2_input = document.querySelector("#Num2");

const operations_input = document.querySelector(".operations-list");

form_submit.addEventListener("click", (e) => {
  e.preventDefault();
  const num1 = +num1_input.value;
  const num2 = +num2_input.value;
  const operation = operations_input.value;
  new Calculator(num1, num2, operation);
});

class Calculator {
  constructor(num1, num2, operation) {
    if (!num1) {
      this._renderError();
      return;
    }
    if (!num2) {
      this._renderError();
      return;
    }

    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation;
    this._init();
  }

  _init() {
    const markup = this._generateMarkup(this.operation);
    operation_result.innerHTML = "";
    operation_result.insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup(operation) {
    if (operation === "error") {
      return `<h1>Please Enter Correct Numbers</h1>`;
    }
    if (operation === "sum") {
      return `<h1>Result : ${this.sum(this.num1, this.num2)}</h1>`;
    }
    if (operation === "sub") {
      return `<h1>Result : ${this.sub(this.num1, this.num2)}</h1>`;
    }
    if (operation === "mul") {
      return `<h1>Result : ${this.mul(this.num1, this.num2)}</h1>`;
    }
    if (operation === "div") {
      return `<h1>Result : ${this.div(this.num1, this.num2)}</h1>`;
    }
  }

  _renderError() {
    const markup = this._generateMarkup("error");
    operation_result.innerHTML = "";
    operation_result.insertAdjacentHTML("afterbegin", markup);
  }

  sum(num1, num2) {
    return num1 + num2;
  }
  sub(num1, num2) {
    return num1 - num2;
  }
  mul(num1, num2) {
    return num1 * num2;
  }
  div(num1, num2) {
    return (num1 / num2).toFixed(3);
  }
}
