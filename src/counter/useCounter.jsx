import {useState} from 'react'

function useCounter(initial=0,value=2) {  /* default parameter */
    const [count,setCount]=useState(initial)
    function increment(){
        setCount(count+value)
    }
    function decrement(){
        setCount(count-value)
    }
    function reset(){
        setCount(initial)
    }
    return[increment,decrement,reset,count]
}

export default useCounter

/*  */