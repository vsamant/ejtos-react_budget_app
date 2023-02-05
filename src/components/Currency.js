import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch  } = useContext(AppContext);
    const [lcurrency, setLcurrency] = useState(currency);
    const [showOptions, setShowOptions] = useState(false);

    const submitEvent = (newc) => {
        console.log("Params "  + newc);
        setLcurrency(newc);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newc,
        });
        toggleCurrencyOptions();
    }

    const getCurrencyLabel = (curr) => {
        switch (curr) {
            case '$':
                return '$ Dollar';
            case '£':
                return '£ Pound';
            case '€':
                return '€ Euro';
            case '₹':
                return '₹ Rupee';
            default:
                return curr + ' Unknown';

        }

    }

    const toggleCurrencyOptions = () => {
        setShowOptions(!showOptions); 
    }

    return (
   <div className='dropdown'>
        <button  type="button" className='btn btn-primary dropdown-toggle' onClick={toggleCurrencyOptions}>Currency ({getCurrencyLabel(lcurrency)})</button>
        <ul className={`custom-menu dropdown-menu ${showOptions ? 'show' : ''} `}>
            <li><button className="dropdown-item" type="button" onClick={()=>submitEvent('$')}>{getCurrencyLabel('$')}</button></li>
            <li><button className="dropdown-item" type="button" onClick={()=>submitEvent('£')}>{getCurrencyLabel('£')}</button></li>
            <li><button className="dropdown-item" type="button" onClick={()=>submitEvent('€')}>{getCurrencyLabel('€')}</button></li>
            <li><button className="dropdown-item" type="button" onClick={()=>submitEvent('₹')}>{getCurrencyLabel('₹')}</button></li>
        </ul>
   </div>
);   
};

export default Currency;
