// import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const RoloModal = ({ show, handleEktypwsh, handleRepeat, handleNewRolo }) => {
    // const [show, setShow] = useState(props.on);

    // const handleNewRolo = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleNewRolo}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>Η εγγραφή έγινε επιτυχώς</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleEktypwsh}>
                        Σχέδιο
                    </Button>
                    <Button variant="primary" onClick={handleRepeat}>
                        {/* Μένουν όλα τα πεδία ίδια, αυξάνει το orderNo */}
                        Επανάληψη
                    </Button>
                    <Button variant="primary" onClick={handleNewRolo}>
                        {/* Reset ολα τα πεδία, αυξάνει το orderNo */}
                        Νέα Εγγραφή
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RoloModal