// Input page - to get the user name
//  submit button -to get the details of the user from api
// states - 2: * to get the user name
//             * to store the details of the user 



import { useEffect } from "react"
import { useState } from "react"
import ButtonComponent from "./button"
import InputComponent from "./inputBox"
import { Link, useLocation } from "react-router-dom"
import Followers from "./follower"



const HomePage = () => {

    const [userName, setUserName] = useState("")
    console.log("name", userName)  
    return (
        <>
            <h1 className="fontColor">GitHub Profiler</h1>
            <div>
                <InputComponent
                    name="UserName"
                    type="text"
                    value={userName}
                    onChange={(name, value) => setUserName(value)}
                />
                <Link to = {`/repos/${userName}`} >
                <ButtonComponent
                    tagName="Submit"
                />
                </Link>
            </div>
            
        </>
    )
}

export default HomePage;
