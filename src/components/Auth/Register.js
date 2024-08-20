import { useState } from 'react';
import './Login.scss'
import { postLogin, postSignUp } from '../../services/apiservice'
import { set } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [hidePassword, setHidePassword] = useState(false)
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignUp = async () => {

        //validate

        //validate
        const isValid = validateEmail(email)


        if (!isValid) {
            // alert("Please enter a valid email")
            toast.error("Please enter a valid email")
            return;
        }
        //submit API
        let data = await postSignUp(email, password, userName)
        console.log(data)

        if (data && data.EC === 0) {
            toast.success(data.EM)

            navigate("/login")
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)

        }
    }
    return (<div className="login-container ">
        <div className="header ">
            co acc r thi login nha <button onClick={() => navigate('/login')}> Login</button>
        </div>
        <div className="title col-4 mx-auto">
            Hoi Phuc di
        </div>
        <div className="welcome col-4 mx-auto">
            Đăng Ký
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
                <input type={hidePassword ? "text" : 'password'} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={() => setHidePassword(!hidePassword)}> Xem mk</button>
            </div>

            <div className="form-group">
                <label for="">User Name</label>
                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

            </div>


            <div>
                <button className='btn-submit'
                    onClick={() => handleSignUp()}
                >Sign Up</button>
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

export default Register;