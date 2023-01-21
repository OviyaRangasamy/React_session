import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { useContext,useState } from "react";
import Parent from "./parent";
import { ContextProvider } from "./Context/context";
import A from './pageA';
import './App.css'

function App() {
  const [userProfile, setUserProfile] = useState({});
  const [isAuthDone, setAuthDone] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
    },
    {
      path: "/A",
      element:<A/>
    },
  ]);

  return (
   
      <ContextProvider
        value={{ userProfile, setUserProfile, isAuthDone, setAuthDone }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>

  );
}

export default App;
