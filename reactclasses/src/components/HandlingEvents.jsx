import React,{useState} from 'react'

export default function HandlingEvents() {
    const [message, setMessage] = useState();
  
    const handleClick = () =>{
        setMessage('Button is clicked');
    // alert ('Button is Clicked');
  }
    return (
    <div>
        <button onClick ={handleClick}>Click Me </button>
        <p>{message}</p>
    </div>
  )
}
// Events
// onClick
// onChange
// onSubmit