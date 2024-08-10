import SideBar from "./SideBar";
import "./Admin.scss"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Admin = () => {
    const [collapsed,setcollapsed]=useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}></SideBar>
            </div>
            <div className="admin-content">
                <FaBars onClick={()=>{setcollapsed(!collapsed)}}></FaBars>
            </div>
    
        </div>);
}

export default Admin;