import React, { useState } from 'react'
// import BudgetContext from '../utils/BudgetContext'
import TableData from "./Table"
import Total from './Total'
// import Table from 'react-bootstrap/Table';


function Form() {

    // setting up useState
    // const {amount, company, note, expenses, total} = useContext(BudgetContext);
    const [amount, setAmount] = useState("")
    const [company, setCompany] = useState("")
    const [note, setNote] = useState("")
    const [expenses, setExpenses] = useState([])
    const [total, setTotal] = useState(0)

    const handleSubmit = event => {
        event.preventDefault();
        console.log("You added an expense of: " + amount + " "
            + company + " " + note);
        
        setExpenses([
            // keep the older data
            ...expenses,
            //use for the new data to create a new table row
            {
                amount: amount,
                company: company,
                note: note
            }]
        )
        handleTotal()
    }

    const handleTotal = () => {
        let total = parseInt(expenses.amount).reduce(function (a, b) {
            return a + b;
            
        });
        setTotal(total)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Add Expense: </label>
                <input
                    type="integer"
                    name="amount"
                    placeholder="Enter Amount"
                    onChange={event => setAmount(event.target.value)}
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Enter Company"
                    onChange={event => setCompany(event.target.value)}
                />
                <input
                    type="text"
                    name="note"
                    placeholder="Enter Description"
                    onChange={event => setNote(event.target.value)}
                />
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
            <TableData expenses={expenses} />
            <Total total={total} />
        </div>
    )
}


export default Form;