import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./button";
import FollowerDisplay from "./followerDisplay";


const Followers = (props) => {
    console.log(props.followerList)
    const userName = props.followerList
    return (
        <>     
            <Link className="link" to={`/followers/${userName}`} >
                <ButtonComponent
                    tagName="Followers"
                />
            </Link>

        </>
    )
}

export default Followers;