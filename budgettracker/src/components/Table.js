import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export default class TableData extends Component {
    render() {
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
                        <tr>
                            <td>${this.props.amount}</td>
                            <td>{this.props.company}</td>
                            <td>{this.props.note}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}
