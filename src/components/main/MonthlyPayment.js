import React from "react";
import { TextField, Card } from "@mui/material";
import { store } from "../../data/store";
import { observer } from "mobx-react-lite";

export const MonthlyPayment = observer(() => {
  let initialBalance = store.getTotalBalance();

  const handleChangeMonthlyPayment = (e) => {
    if (e.target.value !== "") {
      store.setMonthlyPayment(parseInt(e.target.value));
    } else {
      store.setMonthlyPayment(0);
    }
  };
  return (
    <Card
      style={{
        margin: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="main"
    >
      <h3>Initial Balance: {initialBalance}</h3>
      <TextField
        id="monthly-payment"
        label="Monthly Payment: "
        variant="outlined"
        value={store.monthlyPayment}
        onChange={handleChangeMonthlyPayment}
      />
    </Card>
  );
});
