
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManagerUser from './components/Admin/Content/ManagarUser';
import DashBoard from './components/Admin/Content/DashBoard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Auth/Login'; const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App></App>}>
                    <Route index element={<HomePage></HomePage>}></Route>

                    <Route path='/user' element={<User></User>}></Route>


                </Route>
                <Route path='/admin' element={<Admin></Admin>}>
                    <Route index element={<DashBoard></DashBoard>}></Route>

                    <Route path='managerUser' element={<ManagerUser></ManagerUser>} />

                </Route>
                <Route path='/login' element={<Login></Login>}></Route>


            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </>


    );
}

export default Layout; 