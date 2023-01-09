import { Link, useParams } from "react-router-dom";

const About = ()=>{
    let params = useParams();
    console.log(params)

    return(
        <>
        <Link to="/">Home Page</Link>
        <p>About display</p>
        </>
    )
}
export default About;