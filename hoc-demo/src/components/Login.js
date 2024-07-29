import Pass from './Pass';
import Username from './Username';

const Login =(props)=><div>
    <Username/>
    <Pass/>
    <input type="button" value={'Login'} className="btn btn-info" />
    </div>    

export default Login;