const ButtonComponent = ({onClick,tagName})=>{
    return(
        <>
        <button onClick={onClick}>{tagName}</button>
        </>
    )
}

export default ButtonComponent;