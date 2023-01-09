import { Link } from "react-router-dom"

const Home = () => {
    const id = 24
    return (<>
     <p>Home Page</p>
        <Link to ={ `/about/${id}`}> About</Link>
        <div>Home home display</div>
    </>)
}
export default Home;