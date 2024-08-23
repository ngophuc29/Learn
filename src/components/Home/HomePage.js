import videoHomepage from "../../assests/video-homepage.mp4"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = () => {

    const account = useSelector(state => state.user.account)
    const isauthenticated = useSelector(state => state.user.isauthenticated)
const navigate=useNavigate()

    console.log(account, isauthenticated)
    return (<div className="homepage-container">
        <video autoPlay muted loop>
            <source src={videoHomepage} type="" />
        </video>

        <div className="homepage-content"       >
            <div className="title1">There's a better way to ask</div>
            <div className="title2">Collect more and better data. Embed forms where people see them, from web to email.
                Ask the right follow-up question at the right time to reveal deeper insights.</div>
            <div className="title3">
                {isauthenticated ?
                    <button onClick={() => navigate("/user")}>
                        Làm Bài Thôi Nhóc 
                    </button>    

                    :
                    <button onClick={()=>navigate("/login")}>
                    Get started is free 
                </button>
            }
            </div>

        </div>
    </div>
    );
}

export default HomePage;