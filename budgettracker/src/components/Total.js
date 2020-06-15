import React, {useContext} from 'react'
import BudgetContext from '../utils/BudgetContext'




function Total (props) {
    const { total} = useContext(BudgetContext)
        return (
            <div>
                Your total expense is: {total}
                
            </div>
        )
}
export default Total;