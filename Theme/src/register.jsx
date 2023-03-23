import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./App";
import Button from "./button";
import InputBox from "./InputBox";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const {dark,ChangeTheme,ThemeEffect,darkButton,lightButton} =  useContext(ThemeContext);

  


  const submit = ()=>{
    console.log("Name is", name)
    console.log("Mail id",mail)
    console.log("Password",password)
    console.log("Mobile Number is", mobileNumber)
  }

  return (
    <>
    
      <div style={ThemeEffect} className="containerOut" >
      <div>
        <Button name="Theme Change" functionality={ChangeTheme} theme={dark}/>
      </div>
        <div className="Container" style={{backgroundColor:dark?"grey":"thistle"}}>
          <div>
          <InputBox
            type="text"
            placeholder="Enter Name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            theme = {dark}
          />
        </div>
        <div>
          {" "}
          <InputBox
            type="mail"
            placeholder="Enter mail id"
            value={mail}
            handleChange={(e) => setMail(e.target.value)}
            theme = {dark}
          />
        </div>
        <div>
          <InputBox
            type="password"
            placeholder="Enter password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            theme = {dark}
          />
        </div>
        <div>
          <InputBox
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            handleChange={(e) => setMobileNumber(e.target.value)}
            theme = {dark}
          />
        </div>
        <div>
            <Button name="Submit" functionality={submit}  theme = {dark}/>
        </div>
        <div>
        <button style={dark?darkButton:lightButton}><Link to = "/">Login</Link></button>
        </div>
        </div>
        
      </div>

      
    </>
  );
};

export default RegisterForm;
