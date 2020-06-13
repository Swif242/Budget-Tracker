import React from 'react'
import Table from 'react-bootstrap/Table';
// import BudgetContext from '../utils/BudgetContext'

function TableData(props) {
    // const { expenses } = useContext(BudgetContext)
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Company</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.map(add => (<tr>
                        <td>${add.amount}</td>
                        <td>{add.company}</td>
                        <td>{add.note}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default TableData;