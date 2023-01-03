import { memo } from "react";

export const UCBChildComponent = memo((props)=>{
    console.log("Child re-rendering")
    console.log("updated value",props.Count1)
    return(
    <>
    <button onClick={props.IncreaseCount}>Increase count 1</button>
    <p>Counter1: {props.Count1}</p>
    </>
    )
})