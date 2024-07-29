import { Component } from "react";

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state={username:'dummy',password:'dummy',status:'', uvalid:true,pvalid:true,countChar:'0'};
        this.fnUpdate=this.fnUpdate.bind(this);
        this.fnLogin=this.fnLogin.bind(this);
        this.fnValidateUser=this.fnValidateUser.bind(this);
        this.fnValidatePass=this.fnValidatePass.bind(this);
    }
    
    fnLogin()
    {
        if(this.state.username==this.state.password)
        {
            this.setState({status:'Login Success'})
        }else{
            
            this.setState({status:'Login failed'})
        }
    }
    fnValidateUser()
    {
        if(this.state.username.length<3)
        {
            this.setState({uvalid:false})
        }else
        {
            this.setState({uvalid:true})
        }
    }

    fnValidatePass()
    {
        if(this.state.password.length<8 || this.state.password.length>15)
            {
                this.setState({pvalid:false})
            }else
            {
                this.setState({pvalid:true})
            }
    }

    fnUpdate(event)
    {
        this.setState({[event.target.name]:event.target.value})
       
    }
    render()
    {
        let class1="form-control";
        if(this.state.uvalid==false)
        {
            class1+=" is-invalid";
        }else
        {
            class1+=" is-valid";
        }
        let class2="form-control";
        if(this.state.pvalid==false)
        {
            class2+=" is-invalid";
        }else
        {
            class2+=" is-valid";
        }
            
        return <div>            
            Username:<input type="text" name="username" className={class1} onChange={this.fnUpdate} onKeyUp={this.fnValidateUser}/>
            { !this.state.uvalid && <p style={{color:'red'}}>Username is Invalid</p>}
            { this.state.uvalid && <p style={{color:'green'}}>Username is valid</p>}
            Password:<input type="password" name="password" className={class2} onChange={this.fnUpdate} onKeyUp={this.fnValidatePass}/>
            { !this.state.pvalid && <p style={{color:'red'}}>Minimum Characters should be 8 and Maximum should be 15</p>}
            { this.state.pvalid && <p style={{color:'green'}}>Password is Valid</p>}
            <br/>
            <input type="button" value={'Login'} className="btn btn-info" onClick={this.fnLogin}/>
            <br/>
            <br/>
            Username : {this.state.username} <br/>
            Password : {this.state.password} <br/>
            <br/>
            <div>
                {this.state.status}
            </div>
        </div>
    }
}
export default Login;