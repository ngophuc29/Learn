import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
const ManagerUser = () => {

    const [showModelCreateUser, setShowModelCreateUser]=useState(false)
    return (<div className="manager-user-container">

        <div className="title">

            Manage User
        </div>
        <div className="user-content"
        >

            <div className="btn-add-new">

                <button type="button" className=" btn btn-primary" onClick={()=>setShowModelCreateUser(!showModelCreateUser)}> <FaPlusCircle/> Add New User </button>
            </div>
            <div className="table-users-container">
                Tablde User
            </div>
                {/* <ModelCreateUser showModelCreateUser={showModelCreateUser} setShowModelCreateUser={setShowModelCreateUser}></ModelCreateUser> */}
                <ModelCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser}></ModelCreateUser>
                
        </div>
    </div>);
}

export default ManagerUser;