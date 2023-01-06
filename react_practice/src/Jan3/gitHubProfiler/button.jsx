const ButtonComponent = ({ functionality, tagName }) => {
    return (
        <>
            <button className="button" onClick={functionality}>{tagName}</button>
        </>
    )
}

export default ButtonComponent;