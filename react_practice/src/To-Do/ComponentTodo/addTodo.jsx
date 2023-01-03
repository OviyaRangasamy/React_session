import Button from "./button"
const InputBox = ({name,value,placeholder,type,onChange,onClick,tagname})=>{

    return(
     <>
     <input 
     name = {name}
     value = {value}
     placeholder = {placeholder}
     type = {type}
     onChange = {(e)=>{
        // console.log(name,e.target.value)
        return(
        onChange(name,e.target.value)
       
        )
    }}
     />
     

     <Button
     functionality={onClick}
     tagname = {tagname}
     ></Button>
     </>
    )
}

InputBox.defaultProps={
    type:"text",
    placeholder:"Enter task here...!"
}

export default InputBox;