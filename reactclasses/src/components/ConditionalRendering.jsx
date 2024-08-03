import React, {useState} from 'react'

export default function ConditionalRendering() {
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();

    const handlechange = (event)=> {
        const value = event.target.value;
        setNumber(value);

        if (value === ''){
            setMessage('');
        }else {
            const num = Number(value);
            if (num >10){
                setMessage (<p>Number is greated that 10</p>);
            }else if (num < 0){
                setMessage (<p>Number is negative</p>);
            }else {
                setMessage (<p>Number is between 0 and 10</p>);
            }
        }
    }
  
    return (
    <div>
        <input
        type='number'
        value={number}
        onChange={handlechange}
        placeholder='Type a number'
        />
        {message}
    </div>
  )
}

// using javascript conditional statements - if, else if, else
// Ternary operatpr - condition? true: false
// logical && oprerator - &&