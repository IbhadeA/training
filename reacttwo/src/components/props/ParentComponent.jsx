import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const message = "Hello from parent";
    const username = "Ib";
    const gender = "Female";
  return (
    <div>
        {/* <ChildComponent name = "Ib" age = "12" gender = "female"/> */}
        <ChildComponent message = {message} username = {username} gender = {gender}/>
    </div>
  )
}

// Props- Properties: pass data from one component to another
// Key points about props:
// 1. Data sharing 
// 2. read only- they cannot be modified
// 3. props- usage
// 4. props are optional
// 5. Props can be any type of data types: Strings, numbers, arrays, booleans