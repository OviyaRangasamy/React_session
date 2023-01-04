import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";



const RepoDescription = () => {

const [dataVal,setDataVal] = useState({})

  const location = useLocation();




  console.log("hi", location.state);

  useEffect(()=>{

   setDataVal(location.state)

  },[])

 

  console.log(dataVal)



  //  const{item,data}=props



  return <>

  {/* {console.log(dataVal.itemValue.id)} */}

  {dataVal.hasOwnProperty("itemValue")?(<>

   <p>{dataVal.itemValue.id}</p>

   <p>{dataVal.itemValue.name}</p>

   <p>{dataVal.itemValue.description}</p>



  </>):(<></>)}

  </>;
};

export default RepoDescription;