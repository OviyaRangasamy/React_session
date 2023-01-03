import { memo } from "react";

 const ChildComponent =  (props) =>{
console.log("I am a child")
    return(
        <>
        <p>I am a child {props.counter}</p>
        </>
    )
}

export default memo (ChildComponent);