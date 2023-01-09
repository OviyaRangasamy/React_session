import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const RepoDescription = () => {
  const params = useParams();
  console.log(params);
  const { name, reponame } = params;
  console.log(name, reponame);
  const [dataVal, setDataVal] = useState([]);

  if (name !== null) {
    useEffect(() => {
    //   console.log("username", userName);
      console.log("count1");
      fetch(`https://api.github.com/repos/${name}/${reponame}`)
        .then((data) => data.json())
        .then((data) => {
          console.log("data", data);
          
            setDataVal(data)
        });
       

    }, [name,reponame]);
  }

  console.log("dataVal",dataVal)

  return (
    <>
      {/* {console.log(dataVal.itemValue.id)} */}
      {dataVal .length !== 0 ? (
        <>
          <div className="cardDisplay">
            <div className="viewCard">
              <img
                className="image"
                src={dataVal.owner.avatar_url}
                alt={dataVal.owner.login}
              />
              <p>{dataVal.id}</p>
              <p>{dataVal.name}</p>
              <p>{dataVal.description}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default RepoDescription;
