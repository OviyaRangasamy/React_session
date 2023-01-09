import { memo, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Followers from "./follower";

const RepoDisplay = () => {
  const [details, setDetails] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [showData, setShowData] = useState(false);

  const params = useParams();
  // console.log(params.name)
  const { name } = params;
  console.log("name",name);

  if (name !== null) {
    useEffect(() => {
    //   console.log("username", userName);
      fetch(`https://api.github.com/users/${name}/repos`)
        .then((data) => data.json())
        .then((data) => {
          console.log("data", data);
            setDetails(data);
            setCurrentUser(data[0].owner); 
        });
        setShowData(true);
       
    }, [name]);
  }
  console.log("detail", details);
  return (
    <>
      <div>
        {showData && (
          <>
            <img
              className="image"
              src={currentUser.avatar_url}
              alt={currentUser.login}
            />
            <div>
              <Followers followerList={currentUser.login} />
            </div>{" "}
          </>
        )}
      </div>
      <div>
        <div className="cardDisplay">
          {console.log("detsils", details)}
          {details.map((item) => {
            return (
              <>
                <div className="card">
                  <Link
                    className="link"
                    to={`/repositorydetail/${item.owner.login}/${item.name}`}
                  >
                    <p>{item.name}</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RepoDisplay;
