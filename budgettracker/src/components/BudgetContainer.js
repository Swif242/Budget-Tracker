import React from 'react'
// import BudgetContext from '../utils/BudgetContext'
import Form from "./Form"
// import TableData from "./Table"
// import Total from "./Total"



function BudgetContainer() {

    // const [budgetState, setBudgetState] = useState({
    //     amount: "",
    //     company: "",
    //     note: "",
    //     total: 0
    // });
   
    return (
        <div>
            <h1>Budget Tracker</h1>
            {/* <BudgetContext.Provider value={budgetState}> */}
                <Form />
                {/* <TableData /> */}
                {/* <Total /> */}
            {/* </BudgetContext.Provider> */}
        </div>
    )
}
export default BudgetContainer;