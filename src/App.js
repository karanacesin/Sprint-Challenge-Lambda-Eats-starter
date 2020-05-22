import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Orders from './components/orders';
import OrderForm from './components/orderform';
import FormValidation from './validation/formvalidation';
import Home from './components/home'
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  toppings:'',
  glutenfree: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  toppings:'',
  glutenfree: false,
  special: '',
}

const initialDisabled = true
const orders = []

function App() {
  const [order, setOrder] = useState(orders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('http://reqres.in/api/order')
      .then(response => {
        setOrder(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewOrder = newOrder => {
    axios.post('http://reqres.in/api/order', newOrder)
      .then(response => {
        setOrder([response.data, ...order])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    yup
      .reach(FormValidation, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({ ...formValues, 
      glutenfree:{...formValues.glutenfree, [name]: checked},
      toppings:{...formValues.toppings, [name]: checked} })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    
    const newOrder = { 
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
      .filter(topping => formValues.toppings[topping] === true),
      glutenfree: formValues.glutenfree === true,
      special: formValues.special,
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    FormValidation.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div >
      <header><h1>Pizza!!</h1></header>
      
    <div>
      <Route path='/'>
        <Home />
      </Route>
    </div>

    <div>
      <Route path = '/pizza'>
        <OrderForm
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          onCheckboxChange={onCheckboxChange}
        />
      </Route>
    </div>
      

      {
        orders.map(items => {
          return (
            <Orders key={items.id} details={items} />
          )
        })
      }
    </div>
  )
}

export default App;
