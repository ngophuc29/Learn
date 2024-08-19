import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteUser } from '../../../services/apiservice';
import {   toast } from 'react-toastify';
const ModalDeleteUser=(props)=> {
  // const [show, setShow] = useState(false);
  const {show, setShow,dataDeleteUser} = props
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handelConfirmDelete = async () =>{
    let data= await DeleteUser(dataDeleteUser.id )
    console.log(">> check respone từ modal :  ",data  )
    if( data &&  data.EC===0){
      toast.success( data.EM)
      handleClose()
      // await props.getDataUser();
      await props.getDataUserWithPaginate(1)
      props.setCurrentPage(1)
  }
  if( data &&  data.EC!==0){
      toast.error( data.EM)
      
  }
  }

  return (
    <>
      

      <Modal show={show} onHide={handleClose}
      size='xl'
                backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ban co chac muon xoa nguoi dung nay k . <b>email={dataDeleteUser && dataDeleteUser.email ? dataDeleteUser.email : ""}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handelConfirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;