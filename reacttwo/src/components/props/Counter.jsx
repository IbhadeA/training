import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(2);

    const increment =() =>{
        setCount(count + 1); 
    }
    const decrement =() =>{
        setCount(count - 1);
    }
    const multiply =() =>{
        setCount(count *2);
    }

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={multiply}>Multiply</button>
    </div>
  )
}

// state - memoery or storgae space that each component
// can use to keep track of the information that might change
// over time, it is a way to componenets to manage snd remember their own data
// useState is a hook that allows us to add state to functional componenet
// value is the piece of information that you are remembering 
// set value is how you update or change information when needed 
// intital value is usually 0
//  const [value, setValue] = useState(initialValue);