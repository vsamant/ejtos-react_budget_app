import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses  } = useContext(AppContext);
    const [ lbudget, setLbudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const submitEvent = (newb) => {
        console.log("prev budget " + budget);
        console.log("total expenses " + totalExpenses);
        console.log("Incrementing local budget " + newb);
        if (newb < totalExpenses) {
            alert("You can reduce the budget lower than the spending");
        } else {
            setLbudget(newb);

            dispatch({
                type: 'SET_BUDGET',
                payload: newb,
            });
        }

        console.log("state budget" + budget);
    }

    const alertType = 'alert-secondary'

    return (
        <div className={`alert ${alertType}`}>
            <span>Budget:&nbsp;&nbsp;&nbsp;&nbsp;{currency}<input
                    required='required'
                    type='number'
                    id='maxbudget'
                    step="10"
                    max="20000"
                    value={lbudget}
                    style={{  width: '12em'}}
                    onChange={(event) => submitEvent(event.target.value)}>
                </input>            
            </span>
        </div>
    );
};

export default Budget;