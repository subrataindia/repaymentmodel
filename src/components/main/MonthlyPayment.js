import React from "react";
import { TextField, Card } from "@mui/material";
import { store } from "../../data/store";
import { observer } from "mobx-react-lite";

export const MonthlyPayment = observer(() => {
  let initialBalance = store.getTotalBalance();
  const handleChange = (e) => {
    store.setMonthlyPayment(parseInt(e.target.value));
  };
  return (
    <Card
      style={{
        margin: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
      }}
      className="main"
    >
      <div>Initial Balance: {initialBalance}</div>
      <TextField
        id="monthly-payment"
        label="Monthly Payment: "
        variant="outlined"
        value={store.monthlyPayment}
        onChange={handleChange}
      />
    </Card>
  );
});
