import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "./button";

const FollowerDisplay = () => {
  const params = useParams();
  const { name } = params;
  console.log(name);
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/followers`)
      .then((res) => res.json())
      .then((data) => setDisplayList(data));
  }, [name]);


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
                
export default FollowerDisplay;
