import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserThemeContext } from "../App"


const File1 = ()=>{

    const {display,dark,light,changeTheme} = useContext(UserThemeContext);
    return(
        <>
       
        <div className="" style={display === "dark"?dark:light}>
        <button onClick={changeTheme}>{display}</button>
            
<h1>Page1</h1>
            <div><Link to="/page2">Page2</Link></div>
            <div><Link to="/page3">Page3</Link></div>
        </div>
        </>
    )
}

export default File1;