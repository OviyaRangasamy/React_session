// Parent Component

import { useCallback } from "react"
import { useState } from "react"
import { UCBChildComponent } from "./useCallBackChild"

export const UCBParentComponent = ()=>{
    const[counter1,setCounter1] = useState(0)
    const[counter2,setCounter2] = useState(0)

    const UpdateCounter1 = useCallback(()=>{
        console.log("Counter1",counter1)
        return setCounter1(()=>counter1+1)
        
    },[counter1])
    const UpdateCounter2 = ()=>{
        console.log("Counter2",counter2)
        return setCounter2(()=>counter2+1)
    }

    console.log("Parent Re-render")

    return(
        <>
{/* <button onClick={UpdateCounter1}>Increment Counter 1</button>
<p>Counter 1 :{counter1}</p> */}
<UCBChildComponent IncreaseCount={UpdateCounter1} Count1={counter1}/>
<button onClick={UpdateCounter2}>Increment Counter 2</button>
<p>Counter 2:{counter2}</p>

        </>
    )
}