import { useState } from "react";
import { createContext } from "react";
import B from "./compB"

export const Useprovidercontext = createContext(null)
const UseProvider = Useprovidercontext.Provider;
const A = ()=>{
const [userName,setUserName] = useState("")
    return(
        
        <>
        <UseProvider value={userName}>
        <input value={userName} placeholder="Enter Value" onChange={(e)=>setUserName(e.target.value)}/>
        <p>A Component</p>
        <B/>
        </UseProvider>
        </>
    )
}

export default A;