import { useState } from "react";
import ChildComponent from "./childComponent";

const ParentComponent = ()=>{
    const [counter,setCounter] = useState(0)
console.log("I am a Parent")
    return(
        <>
        <ChildComponent counter= "0"/>
        <ChildComponent counter={counter}/>

        <button onClick={()=>{setCounter(()=>counter+1)}}>Click me {counter}</button>
        </>
    )
}

export default ParentComponent;