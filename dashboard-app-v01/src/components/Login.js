import { Link } from "react-router-dom";

function Login()
{
    return (
        <>
            <p>Login</p>
            <p></p>
            <form>
                <label>UserName: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <button>Submit</button>
            </form>
            <p></p>
            <Link to="/register">Register</Link>
            <p></p>
            <Link to="/">Home</Link>
        </>
    )
}

export default Login;
