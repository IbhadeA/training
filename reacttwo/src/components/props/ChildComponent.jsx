import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        {/* <h1>Hello, the username is {props.name}</h1>
        <p> The gender is {props.gender}</p>
        <p>The age is {props.age}</p> */}
        <h1>The messsge is {props.message}</h1>
        <p>The username is {props.username}</p>
        <p>The gender is {props.gender}</p>
    </div>
  )
}
