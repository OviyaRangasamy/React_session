import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./button";
import FollowerDisplay from "./followerDisplay";


const Followers = (props) => {
    console.log(props.followerList)
    const userName = props.followerList
    const [followers, setfollowers] = useState([])
    // const followerDisplay = () => {
    console.log("entered")
    console.log("u", userName)
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/followers`)
            .then((res) => res.json())
            .then((data) => setfollowers(data))
    }
        , [userName])

    // }
    console.log("u2", userName)
    console.log("1", followers)

    return (
        <>
            {console.log("2", followers)}
            <Link className="link" to="/followers" state={{ "followers": followers }}>
                {console.log("3", followers)}
                <ButtonComponent
                    // functionality={followerDisplay}
                    tagName="Followers"
                />
            </Link>

        </>
    )
}

export default Followers;