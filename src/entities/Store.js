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

  getChartData() {
    console.log("getChartData");
    let xAxis = [];
    let yAxis = [];
    let totalBalance = this.getTotalBalance();
    let mlyPayment = this.monthlyPayment;

    if (totalBalance > 0) {
      for (let d = totalBalance; d >= 0; d -= mlyPayment) {
        yAxis.push(d);
      }
    }
    if (mlyPayment > 0) {
      let period = Math.floor(totalBalance / mlyPayment);
      for (let p = 1; p <= period; p++) {
        xAxis.push(p);
      }
    }
    return [
      {
        x: xAxis,
        y: yAxis,
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" },
      },
    ];
  }
}
