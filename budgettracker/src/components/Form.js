import React, { useContext } from 'react'
import BudgetContext from '../utils/BudgetContext'
// import TableData from "./Table"
// import Total from './Total'



function Form() {

    // setting up useContext
    const {handleInput, handleSubmit} = useContext(BudgetContext);
   

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label> Add Expense: </label>
                <input
                    type="integer"
                    name="amount"
                    placeholder="Enter Amount"
                    onChange={event => handleInput(event)}
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Enter Company"
                    onChange={event => handleInput(event)}
                    // onChange={event => setCompany(event.target.value)}
                />
                <input
                    type="text"
                    name="note"
                    placeholder="Enter Description"
                    onChange={event => handleInput(event)}
                />
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Form;