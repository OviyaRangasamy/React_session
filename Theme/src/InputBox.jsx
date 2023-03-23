import { useContext } from "react";
import { ThemeContext } from "./App";

const InputBox = ({ type, placeholder, handleChange, value, theme }) => {
  const {darkInput,lightInput} = useContext(ThemeContext)

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={theme ? darkInput : lightInput}
      />
    </>
  );
};

export default InputBox;
// text, placeholder, onchange val
