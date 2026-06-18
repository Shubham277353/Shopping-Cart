import { Link } from "react-router"

export default function ErrorPage(){
    return(
        <div>
            <h1>Whoops</h1>
            <h2>Page not available</h2>
            <Link to="/home">Click Here</Link>
            <h3>to go to the home page</h3>
        </div>
    )
}