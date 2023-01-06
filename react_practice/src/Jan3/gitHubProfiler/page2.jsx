import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const RepoDescription = () => {
  const [dataVal, setDataVal] = useState({})
  const location = useLocation();
  console.log("hi", location.state);
  useEffect(() => {
    setDataVal(location.state)
  }, [])
  console.log(dataVal)
  //  const{item,data}=props
  return <>
    {/* {console.log(dataVal.itemValue.id)} */}
    {dataVal.hasOwnProperty("itemValue") ? (<>
      <div className="cardDisplay">
        <div className="viewCard">
          <img className="image"
            src={dataVal.itemValue.owner.avatar_url} alt={dataVal.itemValue.owner.login} />
          <p>{dataVal.itemValue.id}</p>
          <p>{dataVal.itemValue.name}</p>
          <p>{dataVal.itemValue.description}</p>
        </div>
      </div>
    </>) : (<></>)}
  </>;
};
export default RepoDescription;