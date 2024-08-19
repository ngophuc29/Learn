import { useState } from 'react';
import './Login.scss'
import { set } from 'lodash';
const Login = (props) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const handleLogin=()=>{
        alert(email+password)
    }
    return (<div className="login-container ">
        <div className="header ">
            Dont have an account yet?
        </div>
        <div className="title col-4 mx-auto">
            Hoi Phuc di
        </div>
        <div className="welcome col-4 mx-auto">
            Hello, who's this
        </div>
        <div className="content-form col-4 mx-auto">
            <div className="form-group">
                <label for="">Email</label>
                <input type="email" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
           
            </div>
            <div className="form-group">
                <label for="">Password</label>
                <input type="password" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                 value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
           
            </div>
            <span>Forgot password?</span>

            <div>
                <button className='btn-submit'
                onClick={()=>handleLogin()}
                >Login</button>
            </div>
        </div>

    </div>);
}

export default Login;