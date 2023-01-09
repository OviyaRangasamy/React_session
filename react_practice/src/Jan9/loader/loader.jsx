// import { useEffect, useState } from "react";
// import { getUserProfile } from "../utils";

// const MultiRenderingIssue = () => {
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     const userProfile = getUserProfile();
//     setProfile(userProfile);
//   }, []);

//   console.log("Re-render");

//   return (
//     <>
//       <p>Profile Details</p>
//       <p>
//         {profile.id}-{profile.name}
//       </p>
//     </>
//   );
// };

// export default MultiRenderingIssue;


/**************************************************************/

// import { useLoaderData } from "react-router-dom";

// const MultiRenderingIssueFix = () => {
//   const profile = useLoaderData();

//   console.log("Re-render");

//   return (
//     <>
//       <p>Profile Details</p>
//       <p>
//         {profile.id}-{profile.name}
//       </p>
//     </>
//   );
// };

// export default MultiRenderingIssueFix;

/**************************************************************/



//   {
//     path: "/",
//     element: <MultiRenderingIssueFix />,
//     loader: () => {
//       const profile = getUserProfile();
//       return profile;
//     },
//   }


/********************************************************************/ 
// npm install axios
//  import axios from axios

// {
//     path: "/",
//     element: <MultiRenderingIssueAsyncFix />,
//     loader: async () => {
//       const profile = await axios.get(
//         "https://jsonplaceholder.typicode.com/users/1"
//       );
//       return profile.data;
//     },
//   },
    
    
    /*****************************************************************/
    
    
    
//     import { useLoaderData } from "react-router-dom";

// const MultiRenderingIssueAsyncFix = () => {
//   const profile = useLoaderData();
//   console.log("Re-render");

//   return (
//     <>
//       <p>Profile Details</p>
//       <p>
//         {profile.id}-{profile.name}
//       </p>
//     </>
//   );
// };

// export default MultiRenderingIssueAsyncFix;


/*********************************************************************************/

import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const SearchQueryParams = () => {
  const [searchQueryParams] = useSearchParams();

  const queryParams = useMemo(() => {
    const params = {};
    searchQueryParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }, [searchQueryParams]);

  console.log("QueryParams: ", queryParams);

  return (
    <>
      <p>
        I'm a search component {searchQueryParams.get("name")}{" "}
        {searchQueryParams.get("city")}
      </p>
    </>
  );
};

export default SearchQueryParams;


