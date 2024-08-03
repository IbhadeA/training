import React,{useState} from 'react'

export default function TernaryOperator() {
    const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
    {isLoggedIn ? <p>Welcome Back</p> : <p>Please log in</p>}

    <button onClick={() => setLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout': 'Login'}
    </button>
    </div>
    
  )
}