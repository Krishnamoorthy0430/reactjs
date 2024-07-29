import { useState } from "react";

const Login=()=>
{
    const [username, setUsername]=useState();
    const [password, setPassword]=useState();
    const [status, setStatus]=useState();

    function fnLogin()
    {
        var uname=username;
        var pwd=password;
        if(uname==pwd)
        {
            setStatus("Login Failed")
        }else{
            setStatus("Login success")
        }
        
    }
    let x='';
    if(status=="Login success")
        x="alert alert-success";
    else if(status=="Login Failed")
        x="alert alert-danger";
    else
        x="invisible";
    return (
        
    <div>
        {username}:{password}<br/>
    Username:<input type="text" id="username" className="form-control" onChange={(event)=>{ setUsername(event.target.value) }} />
    Password:<input type="password" id="password" className="form-control" onChange={(event)=>{ setPassword(event.target.value) }} />
    <br/>
    <input type="button" value="Login" className="btn btn-info" onClick={fnLogin} />
    <br/><br/>
    <div className={x}>{status}</div>
    
</div>)
}
export default Login;