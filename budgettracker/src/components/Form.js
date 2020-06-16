import React, { useContext } from 'react'
import BudgetContext from '../utils/BudgetContext'




function Form() {
    // setting up useContext
    const { handleInput, handleSubmit } = useContext(BudgetContext);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card-group">
                    <div className="card">
                        <img src="./images/adding-money-clipart-18.png" className="card-img-top" alt="adding money image" />
                        <div className="card-body">
                            <h5 className="card-title">How much was it?? </h5>
                            <input
                                type="integer"
                                name="amount"
                                placeholder="Enter Purchase Amount"
                                onChange={event => handleInput(event)}
                            />
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/adding-money-place.png" className="card-img-top" alt="company image" />
                        <div className="card-body">
                            <h5 className="card-title">Where'd you get it?? </h5>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter Company Name"
                                onChange={event => handleInput(event)}
                            />
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/notes-clipart.jpg" className="card-img-top" alt="note image" />
                        <div className="card-body">
                            <h5 className="card-title">What is it??</h5>
                            <input
                                type="text"
                                name="note"
                                placeholder="Enter Item Description"
                                onChange={event => handleInput(event)}
                            />
                        </div>

                    </div>

                </div>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>

        </div>
    )
}


export default Form;