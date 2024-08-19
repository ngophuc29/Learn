import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"
import { FaPlusCircle } from "react-icons/fa";
 
import { getAllUser,getAllUserWithPaginate  } from "../../../services/apiservice";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import ModelUpdateUser from "./ModelUpdateUser";
import { set } from "lodash";
import ModelViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModelDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManagerUser = () => {

    const [showModelCreateUser, setShowModelCreateUser]=useState(false)
    const [showModelUpdateUser, setshowModelUpdateUser]=useState(false)
    const [showModelViewUser, setshowModelViewUser]=useState(false)

    const [showModelDeleteUser, setshowModelDeleteUser]=useState(false)


    const [dataUpdateUser,setDataUpdateUser]=useState({})

     const [dataDeleteUser,setDataDeleteUser]=useState({})

    const [dataViewUser,setDataViewUser]=useState({})
    const [pageCount, setPageCount] = useState(0);

    const [listUser, setListUser] = useState([

    ])

    const [currentPage,setCurrentPage] = useState(1)
    useEffect(  ()=>{


        // getDataUser()
        getDataUserWithPaginate(1)
         
    },[])
    const getDataUser= async ()=>{


        let res= await getAllUser()
        console.log(res)
         if(res.EC===0){
            setListUser(res.DT)
         }
    }

    const limitUser=3
    const getDataUserWithPaginate= async (page)=>{


        let res= await getAllUserWithPaginate (page,limitUser)
        console.log(res)
         if(res.EC===0){
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
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
                {/* <TableUser listUser={listUser}  handelUpdateUser={handelUpdateUser} handelViewUser={handelViewUser}   
                  handelCloseDeleteModel={handelDeleteModel}
                ></TableUser> */}

                <TableUserPaginate 
                listUser={listUser}  
                handelUpdateUser={handelUpdateUser} 
                handelViewUser={handelViewUser}   
                handelCloseDeleteModel={handelDeleteModel}
                getDataUserWithPaginate={getDataUserWithPaginate}
                pageCount={pageCount}

                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ></TableUserPaginate>
            </div>
                {/* <ModelCreateUser showModelCreateUser={showModelCreateUser} setShowModelCreateUser={setShowModelCreateUser}></ModelCreateUser> */}
                <ModelCreateUser 
                show={showModelCreateUser} 
                setShow={setShowModelCreateUser}
                 getDataUser={getDataUser}
                getDataUserWithPaginate={getDataUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                 ></ModelCreateUser>
                <ModelUpdateUser 
                show ={showModelUpdateUser} setShow={setshowModelUpdateUser} 

                //dataUserUpdate
                dataUpdateUser = {dataUpdateUser}
                getDataUser={getDataUser}
                resetUpdateDate={resetUpdateDate}
                getDataUserWithPaginate={getDataUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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

                getDataUser={getDataUser}
                getDataUserWithPaginate={getDataUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                ></ModalDeleteUser>
        </div>
    </div>);
}

export default ManagerUser;