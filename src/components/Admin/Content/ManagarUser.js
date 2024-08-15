import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FaPlusCircle } from "react-icons/fa";
 
import { getAllUser } from "../../../services/apiservice";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import ModelUpdateUser from "./ModelUpdateUser";
import { set } from "lodash";
import ModelViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModelDeleteUser";
const ManagerUser = () => {

    const [showModelCreateUser, setShowModelCreateUser]=useState(false)
    const [showModelUpdateUser, setshowModelUpdateUser]=useState(false)
    const [showModelViewUser, setshowModelViewUser]=useState(false)

    const [showModelDeleteUser, setshowModelDeleteUser]=useState(false)


    const [dataUpdateUser,setDataUpdateUser]=useState({})

     const [dataDeleteUser,setDataDeleteUser]=useState({})

    const [dataViewUser,setDataViewUser]=useState({})


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

    const handelUpdateUser =(user)=>{
        setshowModelUpdateUser(true)
        setDataUpdateUser(user)
        console.log(user)
    }
    const handelViewUser =(user)=>{
        setshowModelViewUser(true)
        setDataViewUser(user)
        console.log(user)
    }

    const resetUpdateDate=()=>{
        setDataUpdateUser()
    }

    const resetViewDate=()=>{
        setDataViewUser()
    }
    const handelDeleteModel =(user)=>{
        setshowModelDeleteUser(!showModelUpdateUser)
        setDataDeleteUser(user)
        console.log(user)

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
                <TableUser listUser={listUser}  handelUpdateUser={handelUpdateUser} handelViewUser={handelViewUser}   
                  handelCloseDeleteModel={handelDeleteModel}
                ></TableUser>
            </div>
                {/* <ModelCreateUser showModelCreateUser={showModelCreateUser} setShowModelCreateUser={setShowModelCreateUser}></ModelCreateUser> */}
                <ModelCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} getDataUser={getDataUser}></ModelCreateUser>
                <ModelUpdateUser 
                show ={showModelUpdateUser} setShow={setshowModelUpdateUser} 

                //dataUserUpdate
                dataUpdateUser = {dataUpdateUser}
                getDataUser={getDataUser}
                resetUpdateDate={resetUpdateDate}
                ></ModelUpdateUser>

                <ModelViewUser
                 show ={showModelViewUser} setShow={setshowModelViewUser} 
                dataViewUser = {dataViewUser}

                getDataUser={getDataUser}
                resetViewDate={resetViewDate}
                >

                    
                </ModelViewUser>


                <ModalDeleteUser
                show={showModelDeleteUser}
                setShow={setshowModelDeleteUser}
                handelCloseDeleteModel={handelDeleteModel}
                dataDeleteUser={dataDeleteUser}
                ></ModalDeleteUser>
        </div>
    </div>);
}

export default ManagerUser;