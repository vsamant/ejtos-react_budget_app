import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses  } = useContext(AppContext);
    //const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    // how to get default value for budget
    //let [lbudget] = useState()
    const [ lbudget, setLbudget] = useState(budget);
    //lbudget = budget;

    const submitEvent = (newb) => {
        console.log("prev budget " + budget);
        console.log("total expenses " + totalExpenses);
        console.log("Incrementing local budget " + newb);
        if (newb < totalExpenses) {
            alert("You can reduce the budget lower than the spending");
        } else {
            setLbudget(newb);
            //console.log()

            dispatch({
                type: 'SET_BUDGET',
                payload: newb,
            });
        }

        console.log("state budget" + budget);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                    required='required'
                    type='number'
                    id='maxbudget'
                    step="10"
                    max="20000"
                    value={lbudget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => submitEvent(event.target.value)}>
                </input>            
            </span>
        </div>
    );
};

export default Budget;