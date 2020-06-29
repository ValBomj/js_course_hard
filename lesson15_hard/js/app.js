'use strict';

const start = document.getElementById('start');
const cancel = document.getElementById('cancel');
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll(
  '.additional_income-item'
);
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector(
  '.additional_income-value'
);
const additionalExpensesValue = document.querySelector(
  '.additional_expenses-value'
);
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incTitle = document.querySelector('input.income-title');
const incAmount = document.querySelector('.income-amount');
const expTitle = document.querySelector('input.expenses-title');
const expAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector(
  '.additional_expenses-item'
);
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
let incomeItems = document.querySelectorAll('.income-items');

const data = document.querySelector('.data');
const placeholderInput = data.querySelectorAll('input');

const inputValidation = () => {
  const placeholderInput = data.querySelectorAll('input');
  placeholderInput.forEach((item) => {
    if (item.placeholder === 'Сумма') {
      item.addEventListener('keyup', function (e) {
        const itemValueArr = item.value.split('');
        itemValueArr.forEach((letter, i, array) => {
          if (letter.match(/[^0-9]/)) {
            delete array[i];
            item.value = array.join('');
          }
        });
      });
    }
    if (
      item.placeholder === 'Наименование' ||
      item.placeholder === 'название'
    ) {
      item.addEventListener('keyup', (e) => {
        const itemValueArr = item.value.split('');
        itemValueArr.forEach((letter, i, array) => {
          if (letter.match(/[^А-Яа-яЁё,.!?;: ]/)) {
            delete array[i];
            item.value = array.join('');
          }
        });
      });
    }
  });
};
inputValidation();

class AppData {
  constructor() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.deposit = false;
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.addExpenses = [];
  }

  inputBlock() {
    const placeholderInput = data.querySelectorAll('input');
    placeholderInput.forEach((item) => {
      if (item.type !== 'range') {
        item.disabled = !item.disabled;
      }
    });
    incomePlus.disabled = !incomePlus.disabled;
    expensesPlus.disabled = !expensesPlus.disabled;
  };
  inputReset() {
    const placeholderInput = data.querySelectorAll('input');
    placeholderInput.forEach((item) => {
      item.value = '';
      if (item.type === 'range') {
        item.value = 1;
        const periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = '1';
      }
    });
  };
  reset() {
    const expensesItems = document.querySelectorAll('.expenses-items');
    const incomeItems = document.querySelectorAll('.income-items');

    expensesItems.forEach((item, i) => {
      if (i > 0) {
        item.parentNode.removeChild(item);
      }
      expensesPlus.style.display = 'block';
    });
    incomeItems.forEach((item, i) => {
      if (i > 0) {
        item.parentNode.removeChild(item);
      }
      incomePlus.style.display = 'block';
    });
    start.disabled = true;

    start.style.display = 'block';
    cancel.style.display = 'none';
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    budgetMonthValue.value = '';
    budgetDayValue.value = '';
    expensesMonthValue.value = '';
    additionalExpensesValue.value = '';
    additionalIncomeValue.value = '';
    targetMonthValue.value = '';
    incomePeriodValue.value = '';
  };
  start() {
    this.inputBlock();
    this.budget = +salaryAmount.value;

    this.getExpInc();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
    start.style.display = 'none';
    cancel.style.display = 'block';
  };
  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();

    periodSelect.addEventListener('input', () => {
      incomePeriodValue.value = this.calcPeriod();
    });
  };
  addExpIncBlock(e) {
    const button = e.target;
    const itemName = button.parentNode.className;
    let items = document.querySelectorAll(`.${itemName}-items`);
    const cloneItem = items[0].cloneNode(true);
    const inputs = cloneItem.querySelectorAll('input');
    inputs.forEach((item) => {
      item.value = '';
    });
    items[0].parentNode.insertBefore(cloneItem, button);
    inputValidation();
    let newItems = document.querySelectorAll(`.${itemName}-items`);

    if (newItems.length === 3) {
      button.style.display = 'none';
    }
  };
  getExpInc() {
    const count = (item) => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    }
    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (const key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  };
  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  };
  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  };
  getAddExpInc() {

  };
  // Вычисляем сумму всех обязательных доходов за месяц
  getExpensesMonth() {
    for (const key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  };
  // Вычисляем бюджет на месяц и на день
  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  };
  // Вычисляем срок достижения цели (в месяцах)
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  };
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  };
  calcSavedMoney() {
    return this.budgetMonth * this.period;
  };
  eventListeners() {
    start.disabled = true;
    salaryAmount.addEventListener('blur', () => {
      if (salaryAmount.value.trim().length > 0) {
        start.disabled = false;
      }
    });
    start.addEventListener('click', this.start.bind(this));

    cancel.addEventListener('click', () => {
      this.inputReset();
      this.inputBlock();
      this.reset();
    });

    expensesPlus.addEventListener('click', this.addExpIncBlock.bind(this));
    incomePlus.addEventListener('click', this.addExpIncBlock.bind(this));
    periodSelect.addEventListener('input', () => {
      const periodAmount = document.querySelector('.period-amount');
      periodAmount.textContent = periodSelect.value;
    });
  };
}

const appData = new AppData();
appData.eventListeners();
appData.reset();
