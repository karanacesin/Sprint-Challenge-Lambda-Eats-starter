import React from 'react'

 function OrderForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props

  return (
    <form onSubmit={onSubmit}>
      <div >
        <h2>Order!!</h2>
      </div>

      <div >
        <label>Name:
          <input
            type='text'
            placeholder='Your Name'
            maxLength='50'
            name='name'
            value={values.name}
            onChange={onInputChange}
          ></input>
        </label>

        <label>Pizza Size:
          <select
            name='size'
            value={values.size}
            onChange={onInputChange}
          >
              <option value=''>Select a size</option>
              <option value='6"'>6"</option>
              <option value='8"'>8"</option>
              <option value='10"'>10"</option>
              <option value='12"'>12"</option>
          </select>
        </label>

        <label>Pizza Sauce:
          <select 
          name='sauce' 
          value={values.sauce} 
          onChange={onInputChange}
          > 
          <option value=''>How much?</option>
          <option value='light'>light</option>
          <option value='normal'>normal</option>
          <option value='extra'>extra</option>
          </select>
        </label>

        <div>
            <h4>Toppings</h4>

            <label>Mushroom:
            <input
            type='checkbox'
            name='mushroom'
            checked={values.toppings.mushroom}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Pepperoni:
            <input
            type='checkbox'
            name='pepperoni'
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Extra Cheese:
            <input
            type='checkbox'
            name='extracheese'
            checked={values.toppings.extracheese}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Pineapple:
            <input
            type='checkbox'
            name='pineapple'
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Green Peppers:
            <input
            type='checkbox'
            name='peppers'
            checked={values.toppings.peppers}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Onions:
            <input
            type='checkbox'
            name='onions'
            checked={values.toppings.onions}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Sweet Peppers:
            <input
            type='checkbox'
            name='sweet'
            checked={values.toppings.sweet}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Bacon:
            <input
            type='checkbox'
            name='bacon'
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Chicken:
            <input
            type='checkbox'
            name='chicken'
            checked={values.toppings.chicken}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Ham:
            <input
            type='checkbox'
            name='ham'
            checked={values.toppings.ham}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Sausage:
            <input
            type='checkbox'
            name='sausage'
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Black Olives:
            <input
            type='checkbox'
            name='olives'
            checked={values.toppings.olives}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        </div>

        <label>Gluten Free:
            <input
            type='checkbox'
            name='glutenfree'
            checked={values.glutenfree}
            onChange={onCheckboxChange}
            >
            </input>
        </label>

        <label>Special Instructions:
          <input
            type='text'
            placeholder='Need something else?'
            name='special'
            value={values.special}
            onChange={onInputChange}
          ></input>
        </label>

        <button disabled={disabled}>Order</button>

        <div >
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
        <div>{errors.glutenfree}</div>
        <div>{errors.special}</div>
        </div>
        
      </div>
    </form>
  )
}


export default OrderForm