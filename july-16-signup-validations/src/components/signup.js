import { useEffect, useRef, useState } from "react";

const Signup=()=>
{
    const [username, setUsername]=useState();
    const [password, setPassword]=useState();
    const [mobile, setMobile]=useState();
    const [userError, setUserError]=useState();
    const [passError, setPassError]=useState();
    const [mobileError, setMobileError]=useState();

    const classname=useRef();

    useEffect(()=>{
        classname.username="form-control";
        classname.password="form-control";
        classname.mobile="form-control";
       });

    function fnValidateUsername()
    {
        var first=username.charAt(0);
        
        if(first<'A' || first>'Z')
        {            
            setUserError("First letter must be capital")
            classname.username="form-control is-invalid"
        }else if(username.length<3)
            {
                setUserError("Name cannot be less than 3 characters")
                classname.username="form-control is-invalid"
            }
    }

    function fnValidateMobile()
    {
        var first = mobile.charAt(0);

        if(first==0)
        {
            setMobileError("First Digit Must not be 0");
            classname.mobile="form-control is-invalid";
        }else if(mobile.length>10)
        {
            setMobileError("Mobile number cannot have more than 10 digits")
            classname.mobile="form-control is-invalid";
        }
    }

    function fnvalidatePassword()
    {
        if(password.length<8 || password.length>15)
        {
            setPassError("Password must Atleast have 8 characters and Maximum of 15 Characters")
            classname.password="form-control is-invalid";
        }
    }


    return (
        
        <div>
            {username}:{password}:{mobile}<br/>
        Username : <input type="text" id="username" className={classname.username} onChange={(event)=>{ setUsername(event.target.value) }} onKeyUp={fnValidateUsername} />
        { userError && <div className="text-danger">{userError}</div>}
        <br/>
        Password : <input type="password" id="password" className={classname.password} onChange={(event)=>{ setPassword(event.target.value) }} onKeyUp={fnvalidatePassword}/>
        {passError && <div className="text-danger">{passError}</div>}
        <br/>
        Mobile Number: <input type="number" id="mobile" className={classname.mobile} onChange={(event)=>{ setMobile(event.target.value)}} onKeyUp={fnValidateMobile} />
        { mobileError && <div className="text-danger">{mobileError}</div>}
        <br/>
        <input type="button" value="SignUp" className="btn btn-info" />
        <br/><br/>
        
    </div>)
}
export default Signup;