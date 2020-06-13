import React, { useState } from 'react'
import TableData from "./Table"
function Form() {
    const [amount, setAmount] = useState("")
    const [company, setCompany] = useState("")
    const [note, setNote] = useState("")


    const handleSubmit = event => {
        event.preventDefault();
        console.log("You added expense" + amount + " "
            + company + " " + note);
    }

    return (
        <div>
            <TableData
                amount={this.amount}
                company={this.company}
                note={this.note}
            />


            <form onSubmit={handleSubmit}>
                <label> Add Expense: </label>
                <input
                    type="number"
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
        </div>
    )
}


export default Form;