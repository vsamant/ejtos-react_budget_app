import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch  } = useContext(AppContext);

    // how to get default value for budget
    //let [lbudget] = useState()
    const [ lbudget, setLbudget] = useState(budget);
    //lbudget = budget;

    const submitEvent = () => {
        console.log("Incrementing local budget");
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                    required='required'
                    type='number'
                    id='maxbudget'
                    step="10"
                    max="20000"
                    value={lbudget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setLbudget(event.target.value)}>
                </input>            
            </span>
        </div>
    );
};

export default Budget;