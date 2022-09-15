import React, {useState} from 'react';

import './counter.css';

export const Counter = ( {title} ) =>{

    const [counter, setCounter] = useState(0); 

    const incrementarContador = () =>{
        setCounter(counter + 1)
    }

    const decrementarContador = () =>{
        if(counter>0){
            setCounter(counter - 1)
        }
        else{
            alert("No se puede descontar!")
        }
    }

    const resetContador = () =>{
        setCounter(0)
    }

    return(
        <div>
            <h1>{ title }</h1>
            <h2>{ counter }</h2>
            <button onClick={incrementarContador}>+1</button>
            <button onClick={decrementarContador}>-1</button>
            <button onClick={resetContador}>Reset</button>
        </div>
    )
}