import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch  } = useContext(AppContext);
    const [lcurrency, setLcurrency] = useState(currency);
    const [lname, setLname] = useState('Pound');

    const submitEvent = (newc) => {
        console.log("Params "  + newc);
        setLcurrency(newc);
        let newn = lname;
        switch (newc) {
            case '$':
                newn = 'Dollar';break;
            case '£':
                newn = 'Pound';break;
            case '€':
                newn = 'Euro';break;
            case '₹':
                newn = 'Ruppee';break;
            default:
                newn = 'Unknown';

        }
        setLname(newn);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newc,
        });
    }
/*
    return (
        <div className='alert alert-primary'>
            <span>
                Currency ({lcurrency} {lname})
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => submitEvent(event.target.value)}>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Ruppee</option>
            </select>
            </span>

        </div>
    );
    */
   return (
    <div className='dropdown'>
        <button>Currency ({lcurrency} {lname})</button>
        <div class="dropdown-options">
            <a href="#" onClick={()=>submitEvent('$')}>$ Dollar</a>
            <a href="#" onClick={()=>submitEvent('£')}>£ Pound</a>
            <a href="#" onClick={()=>submitEvent('€')}>€ Euro</a>
            <a href="#" onClick={()=>submitEvent('₹')}>₹ Ruppee</a>
        </div>
    </div>
);   
};

export default Currency;
