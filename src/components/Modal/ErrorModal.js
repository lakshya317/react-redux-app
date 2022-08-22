import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./CustomModal.css"

function ErrorModal(props) {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        if(props.errormessage !== ""){
            setShow(true)
        }
        else if(props.errormessage === ""){
            setShow(false)
        }
    },[props.errormessage])

    return (
        <Modal
            {...props}
            show={show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className='custom-modal-title'>
                    Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>{props.errormessage}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modal-close" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;