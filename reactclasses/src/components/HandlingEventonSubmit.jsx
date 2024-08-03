import React, {useState} from 'react'

export default function HandlingEventonSubmit() {
  const [name, setName] = useState();
  const [submittedName, setSubmittedName] = useState();

  const handleSubmit = (event) =>{
    event.preventDefault();
    setSubmittedName(name);
  };
    return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label>Name</label>
            <input
            type='text'
            value={name}
            onChange={(e)=> setName (e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>

        <p>The name submitted is: {submittedName}</p>
    </div>
  )
}
