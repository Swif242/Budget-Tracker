import React, { useState } from 'react'
import BudgetContext from '../utils/BudgetContext'
import Form from "./Form"
import TableData from "./Table"
import Total from "./Total"



function BudgetContainer() {
    const [expenses, setExpenses] = useState([
        // {
        // amount: 0,
        // company: "",
        // note: "",
        // }
    ])
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
        let newTotal = [];
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

        // push each amount input into a new array to test
        newTotal.push(budgetState.amount)
        console.log(newTotal) //prints out a new array but with only 1 value replaces prior value

        // after creating new array add each value
        newTotal = newTotal.reduce(function (a, b) {
            return a + b;
        });

        // change the budgetState of total to newTotal
        setBudgetState({ ...budgetState.total, newTotal })


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