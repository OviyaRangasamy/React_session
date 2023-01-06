import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import ButtonComponent from "./button"


const FollowerDisplay = () => {
    const location = useLocation();
    const [displayList, setDisplayList] = useState([])
    console.log(location.state)
    if (location.state !== null) {
        useEffect(() => {
            setDisplayList(location.state.followers)
        }, [])
    }
    console.log("list", displayList)


    return (
        <>
            <div><h1 className="fontColor">Followers:{displayList.length}</h1></div>
            <div className="cardDisplay">

                {displayList.length > 0 ? (<>
                    {displayList.map((item) => {
                        return (<>
                            <div className="card">
                                <img className="image"
                                    src={item.avatar_url} alt={item.login} />
                                <p>{item.login}</p>
                                <Link to="/" state={{ userDetail: item.login }}>
                                    <ButtonComponent
                                        tagName="View Profile"
                                    />
                                </Link>
                            </div>
                        </>)
                    })}
                </>) : (<>
                   <h2 className="fontColor">No Following</h2>
                </>)}


            </div>
        </>

    )
}

export default FollowerDisplay;
