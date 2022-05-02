import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ConfirmModal = ({ show, handleDelete, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>Τι, θες να το σβήσεις?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleDelete}>
                        Σχέδιο
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Όχι, όχι!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ConfirmModal

