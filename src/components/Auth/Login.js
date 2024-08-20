import { useState } from 'react';
import './Login.scss'
import { postLogin } from '../../services/apiservice'
import { set } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';


const Login = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch=useDispatch()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };





    const handleLogin = async () => {

        //validate
        const isValid = validateEmail(email)


        if (!isValid) {
            // alert("Please enter a valid email")
            toast.error("Please enter a valid email")
            return;
        }
        //submit API
        let data = await postLogin(email, password)
        console.log(data)

        if (data && data.EC === 0) {
            toast.success(data.EM)

            navigate("/")

            dispatch( doLogin(data))
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)

        }
    }
    return (<div className="login-container ">
        <div className="header ">
            <span> Dont have an account yet?

                <button onClick={() => navigate("/register")}>Sign Up</button>
            </span>
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
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>
            <div className="form-group">
                <label for="">Password</label>
                <input type="password" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>
            <span>Forgot password?</span>

            <div>
                <button className='btn-submit'
                    onClick={() => handleLogin()}
                >Login</button>
            </div>

            <div>
                <span style={{ cursor: "pointer" }} className='text-center' onClick={() => navigate("/")}>
                    &#60;
                    &#60;
                    Go to Home Page
                </span>
            </div>
        </div>

    </div>);
}

export default Login;