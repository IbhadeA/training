import React, {useState} from 'react'

export default function Form() {
    const[formData, setFormData] =useState({
        // username: "",
        // email: "",
        firstname: "",
        lastname: "",
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({...formData, [name]: value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // alert(`The firstname is ${formData.firstname} and the lastname is ${formData.lastname}`)
        console.log (formData, "formData")
    }
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            {/* <label>Username</label>
            <input type='text'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            /> */}
            
            {/* <label>Email</label>
            <input type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            />
             */}
            <label>First Name</label>
            <input type='text'
            name='firstname'
            value={formData.firstname}
            onChange={handleInputChange}
            />
            
            <label>Last Name</label>
            <input type='text'
            name='lastname'
            value={formData.lastname}
            onChange={handleInputChange}
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
