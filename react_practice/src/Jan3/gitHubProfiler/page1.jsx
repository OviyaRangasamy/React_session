// Input page - to get the user name
//  submit button -to get the details of the user from api
// states - 2: * to get the user name
//             * to store the details of the user 

import { useEffect } from "react"
import { useState } from "react"
import ButtonComponent from "./button"
import InputComponent from "./inputBox"
import { Link } from "react-router-dom"



const HomePage = () => {
    const [userName, setUserName] = useState("")
    const [details, setDetails] = useState([])
    // const [storeData, setStoreData] = useState([])

    const fetchProfile = (name) => {
        console.log("user name", name)
        console.log("count1");
        fetch(`https://api.github.com/users/${name}/repos`, {
            headers: {
                Authorization:
                    "Bearer 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 ",
            },
        })
            .then((data) => data.json())
            .then((data) => setDetails(data));

        setUserName("")
    }
    console.log("name", userName)
    console.log("detail", details)

    return (
        <>
            <h1>GitHub Profiler</h1>
            <div>
                <InputComponent
                    name="UserName"
                    type="text"
                    value={userName}
                    onChange={(name, value) => setUserName(value)}
                />
                <ButtonComponent
                    onClick={() => { fetchProfile(userName) }}
                    tagName="Submit"
                />
            </div>
            <div >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    // columnGap:"30px",
                    flexWrap: "wrap"
                }} >
                    {details.map((item) => {
                        return (
                            <>
                                <div style={{
                                    width: "50%",
                                    // display:"flex",
                                    // flexDirection:"row",
                                    // textAlign:"center"
                                }}
                                >
                                    <Link className="link" to="/page2" state={{"itemValue":item }}>
                                    <img style={{
                                        width: "100px",
                                        heigth: "100px",
                                        margin: "10px"
                                    }}
                                        src={item.owner.avatar_url} alt={item.name} />
                                    <p>{item.name}</p>
                                  
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage;