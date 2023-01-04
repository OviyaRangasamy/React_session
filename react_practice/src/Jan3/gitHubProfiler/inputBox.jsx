const InputComponent = ({name,type,value,onChange})=>{
    return(
        <>
        <input 
        name ={name}
        type={type} 
        value = {value}
        onChange = {(e)=>{onChange(name,e.target.value)}}
        />
        </>
    )
}

export default InputComponent;