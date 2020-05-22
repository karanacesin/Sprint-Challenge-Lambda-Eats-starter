import React from 'react'
import {useHistory} from 'react-router-dom'

function Home(){

    const rhome = useHistory()
    const rpizza = useHistory()
    const home = () => {
        rhome.push('/')
    }
    const pizza = () => {
        rpizza.push('/pizza')
    }

    return(
        <div>
            <button onClick={home}>Home</button>
            <button onClick={pizza}>Order</button>
        </div>
    )

}


export default Home