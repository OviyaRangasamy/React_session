import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "./button";

const FollowerDisplay = () => {
  //   const location = useLocation();
  const params = useParams();
  const { name } = params;
  console.log(name);
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/followers`)
      .then((res) => res.json())
      .then((data) => setDisplayList(data));
  }, [name]);

<<<<<<< HEAD
  return (
    <>
      <div>
        <h1 className="fontColor">Followers:{displayList.length}</h1>
      </div>
      <div className="cardDisplay">
        {displayList.length > 0 ? (
          <>
            {displayList.map((item) => {
              return (
                <>
                  <div className="card">
                    <img
                      className="image"
                      src={item.avatar_url}
                      alt={item.login}
                    />
                    <p>{item.login}</p>
                    <Link to={`/repos/${item.login}`}>
                      <ButtonComponent
                        // functionality={() => { console.log("butterfly",item.id) }}
                        tagName="View Profile"
                      />
                    </Link>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <h2 className="fontColor">No Following</h2>
          </>
        )}
      </div>
    </>
  );
};
=======

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
>>>>>>> 0ec58b3fecb6db59561724a4f8dcf7f86271909e

export default FollowerDisplay;
