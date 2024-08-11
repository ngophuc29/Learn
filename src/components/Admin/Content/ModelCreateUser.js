import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
const ModelCreateUser = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [role, setrole] = useState( "USER");
    const [image, setimage] = useState("");
   const [previewImage,setPriviewImage] = useState("");
    const handleUpload=(e)=>{
        if(e.target && e.target.files && e.target.files[0]){

            setPriviewImage(URL.createObjectURL(e.target.files[0]))
            setimage( e.target.files) 
            console.log("upload",e.target.files[0])
        }
        else{
            // setPriviewImage("")

        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size='xl'
                backdrop="static"
                className='model-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={(e)=> setpassword(e.target.value)}
                                />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(e)=> setusername(e.target.value)}
                            
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                onChange={(e)=> setrole(e.target.value)}
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
                            <input type="file" className="form-control" hidden  id='labelUpload'
                            onChange={(e)=>handleUpload(e)}
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
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModelCreateUser