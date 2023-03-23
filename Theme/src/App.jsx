import { createContext, useState } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./register";

export const ThemeContext = createContext(null);
const ThemeProvider = ThemeContext.Provider;

function App() {
  const [dark, setDark] = useState(false);

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const lightTheme = {
    backgroundColor: "pink",
    color: "green",
  };

  const darkButton = {
    backgroundColor: "lightblue",
    color: "darkgreen",
  };

  const lightButton = {
    backgroundColor: "crimson",
    color: "bisque",
  };

  const lightInput = {
    backgroundColor: "",
    color: "red",
  };

  const darkInput = {
    backgroundColor: "thistle",
    color: "darkblue",
  };

  const ChangeTheme = () => {
    setDark(!dark);
  };

  let ThemeEffect = dark ? darkTheme : lightTheme;

  const themeRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/SignUp",
      element: <RegisterForm />,
    },
  ]);

  return (
    <ThemeProvider
      value={{
        dark,
        setDark,
        ChangeTheme,
        ThemeEffect,
        darkButton,
        lightButton,
        darkInput,
        lightInput
      }}
    >
      <div>
        <RouterProvider router={themeRouter} />
      </div>
    </ThemeProvider>
  );
}

export default App;
