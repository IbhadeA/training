import React from 'react'
import {Link} from "react-router-dom"

export default function Contact() {
  return (
 <>
 <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
 </nav>
  <h2>This is the Contact Page</h2>
 </>
  
  )
}