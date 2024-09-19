import React from 'react'
import {useState,useEffect} from 'react'
import useCounter from './useCounter'

function Component2() {
    const [count,setCount]=useState(0)
   useCounter(count)
  return (
    <div>
        <p>Count  {count}</p>
      <button onClick={()=>setCount(count+1)}>increase count</button>
    </div>
  )
}

export default Component2
