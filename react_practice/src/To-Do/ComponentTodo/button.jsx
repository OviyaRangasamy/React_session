const  Button = ({tagname,functionality})=>{
    return(<>
    <button onClick={functionality}>{tagname}</button>
    </>)
// tagname = {tagname},
// functionality = {functionality}
}

export default Button;

