import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch  } = useContext(AppContext);
    const [lcurrency, setLcurrency] = useState(currency);
    const [showOptions, setShowOptions] = useState(false);
    // TODO save hover state for each item in map
    const [hoverOn, setHoverOn] = useState(false);

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
        <button  type="button" 
                 className='btn btn-primary dropdown-toggle'
                 style={{ backgroundColor: '#93e399', color: '#ffffff' }}
                 onClick={toggleCurrencyOptions}>Currency ({getCurrencyLabel(lcurrency)})</button>
        <ul className={`custom-menu dropdown-menu ${showOptions ? 'show' : ''} `} style={{ backgroundColor: '#93e399'}}>
            <li><button className="dropdown-item" style={{ backgroundColor: '#93e399'}} onClick={()=>submitEvent('$')}>{getCurrencyLabel('$')}</button></li>
            <li><button className="dropdown-item" style={{ backgroundColor: '#93e399'}} onClick={()=>submitEvent('£')}>{getCurrencyLabel('£')}</button></li>
            <li><button className="dropdown-item" 
                        style={hoverOn ? { backgroundColor: 'white'}: { backgroundColor: '#93e399'}} 
                        onClick={()=>submitEvent('€')}
                        onMouseOver={() => setHoverOn(true)}
                        onMouseLeave={() => setHoverOn(false)}
                    >{getCurrencyLabel('€')}
                </button></li>
            <li><button className="dropdown-item" 
                        style={{ backgroundColor: '#93e399'}} 
                        onClick={()=>submitEvent('₹')}
                    >{getCurrencyLabel('₹')}
                </button></li>
        </ul>
   </div>
);   
};

export default Currency;
