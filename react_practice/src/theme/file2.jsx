import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserThemeContext } from "../App";


const File2 = ()=>{
    const {display,dark,light,changeTheme} = useContext(UserThemeContext);
    return(
        <>
     
        <div className="" style={display === "dark"?dark:light}>
        <button onClick={changeTheme}>{display}</button>
            <h1>Page2</h1>
            <div><Link to="/">Page1</Link></div>
        <div><Link to="/page3">Page3</Link></div>
        </div>
      
        </>
    )
}

export default File2;
