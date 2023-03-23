import { useContext } from "react";
import { ThemeContext } from "./App";

const Button = ({name,functionality,theme})=>{
const {darkButton,lightButton} = useContext(ThemeContext)
    console.log(theme)
return(
    <>
    <button onClick={functionality} style={theme?darkButton:lightButton}>{name}</button>
    </>
)
}

export default Button;