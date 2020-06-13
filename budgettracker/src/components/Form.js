import React, { useState } from 'react'
// import TableData from "./Table"
import Table from 'react-bootstrap/Table';


function Form() {
    const [amount, setAmount] = useState("")
    const [company, setCompany] = useState("")
    const [note, setNote] = useState("")
    const [expenses, setExpenses] = useState([])


    const handleSubmit = event => {
        event.preventDefault();
        console.log("You added expense" + amount + " "
            + company + " " + note);
        setExpenses( [
            ...expenses,
            {
                amount: amount,
                company: company,
                note: note
            }]
        )
        console.log(expenses)
        
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
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Company</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>$20</td>
                            <td>Papa Johns</td>
                            <td>Pizza</td>
                        </tr>
                        {expenses.map( add => (<tr>
                            <td>2.</td>
                            <td>${add.amount}</td>
                            <td>${add.company}</td>
                            <td>${add.note}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}


export default Form;