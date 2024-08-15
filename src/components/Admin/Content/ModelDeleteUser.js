import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDeleteUser=(props)=> {
  // const [show, setShow] = useState(false);
  const {show, setShow,dataDeleteUser} = props
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handelConfirmDelete = () =>{
    
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
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;