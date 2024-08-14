import React from 'react'
import Navbar from './Navbar'
import FetchingData from '../components/api/FetchingData'



export default function Home() {
  return (
   <>
   <Navbar/>
   <FetchingData/>
   <h2>Welcome to Landing Page</h2>
   </>

)
}