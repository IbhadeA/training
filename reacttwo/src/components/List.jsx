import React from 'react'

export default function List() {
    // const items = ['Apple', 'Banana', 'Orange', 'Grapes']
    const moneyTransaction = [
        {id: '1', details: 'Payment to Supplier A', amount: 'N600,00', date: '2024-08-01'},
        {id: '2', details: 'Payment to Supplier B', amount: 'N600,00', date: '2024-08-02'},
        {id: '3', details: 'Payment to Supplier C', amount: 'N600,00', date: '2024-08-03'},
        {id: '4', details: 'Payment to Supplier D', amount: 'N600,00', date: '2024-08-04'},
        {id: '5', details: 'Payment to Supplier E', amount: 'N600,00', date: '2024-08-05'},
        {id: '6', details: 'Payment to Supplier F', amount: 'N600,00', date: '2024-08-06'},
    ]
  return (
    <div>
        <ul>
            {moneyTransaction.map (trans =>(
                <li key = {trans.id}>
                    <p>ID:{trans.id}</p>
                    <p>Details:{trans.details}</p>
                    <p>Amount:{trans.amount}</p>
                    <p>Date:{trans.date}</p>
                </li>
            ))}
        </ul>
        {/* <ul>
            {items.map((item, index)=>(
                <li key = {index}>{item}</li>
            ))}
        </ul> */}
    </div>
  )
}

// What is a list
// A list refers to an array or iterable collection of elements that you want to render dynamically within your components
// rendering a list in react involves mapping over an array creatinf react elements for ready items in the array 
// javascript map() method