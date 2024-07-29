import { Component } from "react";

class Login extends Component
{
    render()
    {
        return <div>
            <form>
            <div>
            <div className="form-group" align = "left">
                <label htmlFor="username">Username : </label><br></br>
                <input type="username" className="form-control" id="username"></input>
            </div><br></br>
            <div className="form-group" align = "left">
                <label htmlFor="pwd">Password:</label><br></br>
                <input type="password" className="form-control" id="pwd"></input>
            </div><br></br>
            <button type="submit" className="btn btn-primary">Log in</button>
            </div>
            </form>            
        </div>
    }
}
export default Login;