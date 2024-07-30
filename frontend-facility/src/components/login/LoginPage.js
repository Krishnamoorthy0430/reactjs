import { useState } from "react";
import AuthService from "../../services/AuthService";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password);
        } catch (error) {
            console.error("Login failed, error");
        }
    };

    return (
        <div className="container" >
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />
                </div><br/><br/>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div><br/><br/>
                <button type="submit" className="btn-login" >Login</button><br/><br/>
            </form>
        </div>
    )
};
export default LoginPage;