import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import {   toast } from 'react-toastify';
import _ from 'lodash';
import { PutUpdateUser } from '../../../services/apiservice';
const ModelViewUser = (props) => {
    const { show, setShow,dataViewUser,resetViewDate } = props;
    // const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setpassword("");
        setusername("");
        setimage("");
        setrole("");
        setPriviewImage("");
        resetViewDate()
    };
    const handleShow = () => setShow(true);


    useEffect(()=>{
        if(!_.isEmpty(dataViewUser)){
            setEmail(dataViewUser.email);
            
            setusername(dataViewUser.username);
            setimage(dataViewUser.image);
            setrole(dataViewUser.role);
            setimage("");

            setPriviewImage(`data:image/jpeg;base64,${dataViewUser.image}`);
        }
    },[dataViewUser])

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [role, setrole] = useState("USER");
    const [image, setimage] = useState("");
    const [previewImage, setPriviewImage] = useState("");


    //nhap props tu cha
    // const {showModelCreateUser,setShowModelCreateUser}=props;
    // const falseShow=() => {
    //     setShowModelCreateUser(!showModelCreateUser)
    // }

    const handleUpload = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {

            setPriviewImage(URL.createObjectURL(e.target.files[0]))
            setimage(e.target.files[0])
            console.log("upload", e.target.files[0])
        }
        else {
            // setPriviewImage("")

        }
    }
     
    const HandelsubmitCreateUser = async() => {

        // chưa dùng intercepter để can thiệp middelware
            // let res= await PostCreatUser(email, password,username,role,image)
            // console.log(">> check respone từ modal :  ",res.data )

            // if(res.data && res.data.EC===0){
            //     toast.success(res.data.EM)
            //     handleClose()
            // }
            // if(res.data && res.data.EC!==0){
            //     toast.error(res.data.EM)
                
            // }

   // sau khi dùng intercepter
   let data= await PutUpdateUser( dataViewUser.id,username,role,image)
        console.log(">> check respone từ modal :  ",data  )

        if( data &&  data.EC===0){
            toast.success( data.EM)
            handleClose()
            await props.getDataUser();
        }
        if( data &&  data.EC!==0){
            toast.error( data.EM)
            
        }


    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size='xl'
                backdrop="static"
                className='model-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" disabled className="form-control" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" disabled className="form-control" value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(e) => setusername(e.target.value)}

                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(e) => setrole(e.target.value)}
                                value={role}
                            >
                                <option selected value="USER"> USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div className='col-md-12'>
                            <label className="form-label lable-upload" htmlFor="labelUpload">
                                <FaPlusCircle color='green'></FaPlusCircle>
                                Image
                            </label>
                            <input type="file" className="form-control" hidden id='labelUpload'
                                onChange={(e) => handleUpload(e)}
                            />

                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                previewImage
                                    ?
                                    <img src={previewImage}></img>
                                    :
                                    <span>Preview Image</span>
                            }
                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModelViewUser