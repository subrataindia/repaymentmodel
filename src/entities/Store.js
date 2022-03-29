import { makeAutoObservable } from "mobx";

export default class Store {
  accountsData = [];
  monthlyPayment = 0;

  constructor() {
    // console.log('store constructor called');
    makeAutoObservable(this);
  }

  setAccountsData(newData) {
    this.accountsData = [...this.accountsData, newData];
    console.log(this.accountsData);
  }

  getTotalBalance() {
    return this.accountsData.length > 0
      ? this.accountsData.reduce((a, b) => a + b)
      : 0;
  }

  setMonthlyPayment(value) {
    this.monthlyPayment = value;
  }
}
