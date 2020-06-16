import React, { useState } from 'react'
import BudgetContext from '../utils/BudgetContext'
import Form from "./Form"
import TableData from "./Table"
import Total from "./Total"



function BudgetContainer() {
    const [expenses , setExpenses] = useState([])
    const [budgetState, setBudgetState] = useState({
        amount: "",
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
        event.preventDefault();
        console.log("You added an expense of: " + budgetState.amount + " "
            + budgetState.company + " " + budgetState.note);

        setExpenses([
            // keep the older data
            ...expenses,
           
            //use for the new data to create a new table row
            {
                amount: budgetState.amount,
                company: budgetState.company,
                note: budgetState.note
            }]
        )
        console.log(expenses)
        //     handleTotal()
    }

    // // working on getting the total from each exspense amount,  getting an error
    // const handleTotal = () => {
    //     let total = parseInt(expenses.amount).reduce(function (a, b) {
    //         return a + b;

    //     });
    //     setTotal(total)
    // }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Budget Tracker</h1>
                </div>
            </div>
            <BudgetContext.Provider value={{ ...budgetState, handleInput, handleSubmit }}>
                <Form />
                <TableData expenses = {expenses}/>
                <Total />
            </BudgetContext.Provider>
        </div>
    )
}
export default BudgetContainer;