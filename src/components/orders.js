import React from 'react'

 function Orders(props) {
  const { details } = props

  if (!details) {
    return <h3>Working on fetching order details...</h3>
  }

  return (
    <div >
      <h2>{details.name}</h2>
      <p>Pizza Size: {details.size}</p>
      <p>Pizza Sauce: {details.Sauce}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div>
      }
      <p>Gluten Free: {details.gluntenfree}</p>
      <p>Special Instructions: {details.special}</p>
    </div>
  )
}


export default Orders