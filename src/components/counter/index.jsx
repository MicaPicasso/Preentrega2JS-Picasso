import "./style.css"
import { useState } from 'react'

export function Counter(){
    const [counter, setCounter]= useState(0);
    const incrementCounter = ()=>{
      setCounter((prevCounter) => prevCounter+1);
    };
    const decrementCounter = ()=>{
      if(counter==0)return;
      setCounter((prevCounter)=> prevCounter-1);
    };
  
    return(
        <div className='counterContainer'>
            <h2>Counter</h2>
            <div className='buttonContainer'>
                <button type="button" className='counterButton' onClick={decrementCounter}>-</button>
                <p className='counterText'>{counter}</p>
                <button type="button" className='counterButton' onClick={incrementCounter}>+</button>
            </div>
        </div>
    )
}