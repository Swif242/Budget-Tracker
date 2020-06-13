import React, { Component } from 'react'
import Form from "./Form"
import TableData from "./Table"
import Total from "./Total"
export default class BudgetContainer extends Component {
    render() {
        return (
            <div>
                <h1>Budget Tracker</h1>
                <Form />
                <TableData />
                <Total />
            </div>
                
        
        )
    }
}
