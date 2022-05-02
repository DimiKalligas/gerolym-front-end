// import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ProductModal = ({ show, handleGoToProduct, handleClose }) => {
    // const [show, setShow] = useState(props.on);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>Η εγγραφή έγινε επιτυχώς</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleGoToProduct}>
                        Εκτυπώσεις
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Επιστροφή
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal