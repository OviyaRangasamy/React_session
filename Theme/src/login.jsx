import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./App";
import Button from "./button";
import InputBox from "./InputBox";

const LoginForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { ChangeTheme,ThemeEffect,darkButton,lightButton,dark } = useContext(ThemeContext);

  const submit = () => {
    console.log("Mail is", mail);
    console.log("Password is", password);
  };
  return (
    <>
      <div style={ThemeEffect} className="containerOut">
      <div>
        <Button name="Theme Change" functionality={ChangeTheme} theme = {dark}/>
      </div>
        <div className="Container" style={{backgroundColor:dark?"grey":"thistle"}}>
          <div>
          <InputBox
            type="text"
            placeholder="Enter your mail"
            value={mail}
            handleChange={(e) => setMail(e.target.value)}
            theme = {dark}
          />
        </div>

        <div>
          <InputBox
            type="password"
            placeholder="Enter your password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            theme = {dark}
          />
        </div>
        <div>
          <Button name="Submit" functionality={submit} theme = {dark}/>
        </div>
        <div>
          <button style={dark?darkButton:lightButton}>
            {" "}
            <Link to="/SignUp">SignUp</Link>
          </button>
        </div>
        </div>
       
      </div>
      
    </>
  );
};

export default LoginForm;

// input box - mail and password
