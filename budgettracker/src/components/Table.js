import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import BudgetContext from '../utils/BudgetContext'

function TableData() {
    const { expenses } = useContext(BudgetContext)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Company</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{amount}</td>
                        <td>{company}</td>
                        <td>{note}</td>
                    </tr> */}
                    {/* {expenses.map(add => (<tr>
                        <td>${add.amount}</td>
                        <td>{add.company}</td>
                        <td>{add.note}</td>
                    </tr>
                    ))} */}
                </tbody>
            </Table>
        </div>
    )
}
export default TableData;