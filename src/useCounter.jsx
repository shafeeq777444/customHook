import React from 'react'
import {useEffect} from 'react'

function useCounter(count) {
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])
}

export default useCounter
