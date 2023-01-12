import { useContext } from "react";
import { Useprovidercontext } from "./compA";


const E= ()=>{
    const userName = useContext(Useprovidercontext);
    return(
        <>
        <p>E Component</p>
        <p>Name:{userName}</p>
        </>
        

    )
}

export default E;