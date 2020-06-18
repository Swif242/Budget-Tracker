import React, { useState } from 'react'
import BudgetContext from '../utils/BudgetContext'
import Form from "./Form"
import TableData from "./Table"
import Total from "./Total"



function BudgetContainer() {
    const [expenses, setExpenses] = useState([])
    const [budgetState, setBudgetState] = useState({
        amount: [],
        company: "",
        note: "",
        total: 0
    });

    const handleInput = event => {
        const { name, value } = event.target;
        setBudgetState({ ...budgetState, [name]: value })
    }
    // function to handle data when the submit button is clicked
    const handleSubmit = event => {
        // let newTotal = [];
        event.preventDefault();
        console.log("You added an expense of: " + budgetState.amount + " "
            + budgetState.company + " " + budgetState.note);

        // set new state for expenses array
        setExpenses([
            // keep the older data
            ...expenses,

            //use for the new data to create a new table row
            {
                amount: budgetState.amount,
                company: budgetState.company,
                note: budgetState.note,
            }]

        )

        // create a new array of expenses
        const newExpenses = [...expenses,
        {
            amount: budgetState.amount,
            company: budgetState.company,
            note: budgetState.note,

        }]
        // set expenses to the newExpenses
        setExpenses(newExpenses)
        
        // create a new variable with the total value of all amount inputs
        const newTotal = newExpenses.reduce((total, expense) => (total + parseInt(expense.amount)), 0)


        // change the budgetState of total to newTotal
        setBudgetState({ ...budgetState, total: newTotal })


    }





    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Budget Tracker</h1>
                </div>
            </div>
            <BudgetContext.Provider value={{ ...budgetState, handleInput, handleSubmit }}>
                <Form />
                <TableData expenses={expenses} />
                <Total total={expenses.amount} />
            </BudgetContext.Provider>
        </div>
    )
}
export default BudgetContainer;