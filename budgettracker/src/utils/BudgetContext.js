import React from "react";

const BudgetContext = React.createContext({
  amount: "",
  company: "",
  note: "",
  expenses: [],
  total: 0
});

export default BudgetContext;