import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FaPlusCircle } from "react-icons/fa";
 
import { getAllUser } from "../../../services/apiservice";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
const ManagerUser = () => {

    const [showModelCreateUser, setShowModelCreateUser]=useState(false)
    const [listUser, setListUser] = useState([

    ])
    useEffect(  ()=>{


        getDataUser()
         
    },[])
    const getDataUser= async ()=>{


        let res= await getAllUser()
        console.log(res)
         if(res.EC===0){
            setListUser(res.DT)
         }
    }
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
                <TableUser listUser={listUser}></TableUser>
            </div>
                {/* <ModelCreateUser showModelCreateUser={showModelCreateUser} setShowModelCreateUser={setShowModelCreateUser}></ModelCreateUser> */}
                <ModelCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} getDataUser={getDataUser}></ModelCreateUser>
                
        </div>
    </div>);
}

export default ManagerUser;