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

    const [details, setDetails] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [showData, setShowData] = useState(false)

    const location = useLocation();

    // console.log(location.state.userDetail)
    useEffect(() => {
        if (location.state && location.state.userDetail) {
            console.log(location.state.userDetail)
            if (userName !== null) {
                // console.log(location.state.userDetail)
                setUserName(location.state.userDetail)
            }
        } else {
            setUserName("")
        }
    }, [])

    console.log("loc", userName)



    const fetchProfile = () => {
        console.log("username", userName)
        console.log("count1");
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then((data) => data.json())
            .then((data) => {
                setDetails(data);
                setCurrentUser((data[0].owner))
            }
            )
        setShowData(true);


    }


    console.log("name", userName)
    console.log("detail", details)
    console.log("owner", currentUser)

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
                <ButtonComponent
                    functionality={() => { fetchProfile(userName) }}
                    tagName="Submit"
                />
            </div>
            <div>
                {showData && <><img className="image"
                    src={currentUser.avatar_url} alt={currentUser.login} />
                    <div><Followers followerList={currentUser.login} /></div> </>}
            </div>
            <div >
                <div className="cardDisplay">
                    {details.map((item) => {
                        return (
                            <>

                                <div className="card">
                                    <Link className="link" to="/page2" state={{ "itemValue": item }}>
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