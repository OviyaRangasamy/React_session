import { useState } from 'react'
import './App.css'
import { createContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import File1 from './theme/file1';
import File2 from './theme/file2';
import File3 from './theme/file3';


export const UserThemeContext = createContext();
const UserThemeProvider = UserThemeContext.Provider;

const dark ={
    backgroundColor:"black",
    color:"white",
    width:"100vw",
    height:"100vh",
  }
const light =   {
    // backgroundColor:"aliceblue",
    // color:"brown",
    width:"100vw",
    height:"100vh",
    
  }
function App() {
  const [display,setDisplay] = useState("light")

const changeTheme = ()=>{
    if(display === "light"){
        setDisplay("dark")
    }
    else{
        setDisplay ("light")
    }

    console.log(display)
}


const fileRouter = createBrowserRouter([
  {
    path:"/",
    element:<File1/>
  },
  {
    path:"/page2",
    element:<File2/>
  },
  {
    path:"/page3",
    element:<File3/>
  }
])

return(
  <UserThemeProvider value={{display,changeTheme,dark,light}}> 
  <RouterProvider router={fileRouter}/>
  </UserThemeProvider>
)
}

export default App
