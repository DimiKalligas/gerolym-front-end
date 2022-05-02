import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../../print.css'

const Header = () => {
    const [showPelates, setShowPelates] = useState(false);
    // const [showRolo, setShowRolo] = useState(false);

    return (
        <Navbar fixed="top" bg="myLightBlue" variant="dark" expand="sm" className='d-print-none'>
            <LinkContainer to="/">
                <Navbar.Brand>Γερολυμάτος</Navbar.Brand>
            </LinkContainer>
            <Nav className='ml30'>
                <NavDropdown
                    title="ΠΕΛΑΤΕΣ"
                    id="Pelates-dropdown"
                    show={showPelates}
                    onMouseEnter={() => setShowPelates(true)}
                    onMouseLeave={() => setShowPelates(false)}
                >
                    <LinkContainer to="/customer">
                        <NavDropdown.Item>Εγγραφή Πελάτη</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/customerList">
                        <NavDropdown.Item>Λίστα Πελατών</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/productions">
                        <NavDropdown.Item>Παραγωγές ανά Πελάτη</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                {/* <NavDropdown
                    title="ΡΟΛΟ"
                    id="Rolo-dropdown"
                    show={showRolo}
                    onMouseEnter={() => setShowRolo(true)}
                    onMouseLeave={() => setShowRolo(false)}
                >
                    <LinkContainer to="/rolo">
                        <NavDropdown.Item>Νέα Εισαγωγή</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/rolo">
                        <NavDropdown.Item>Καθαρισμός</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown> */}

                <LinkContainer to="/rolo">
                    <Nav.Link>NEO ΡΟΛΟ</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/displaystate">
                    <Nav.Link>ΙΔΙΟ ΡΟΛΟ</Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to="/stoixeia">
                    <Nav.Link lg={6}>ΕΙΣΑΓΩΓΗ ΔΕΔΟΜΕΝΩΝ</Nav.Link>
                </LinkContainer> */}
            </Nav>
            {/* <Nav className="justify-content-end mr30" style={{ width: "100%" }}>
                <Nav.Link href="#">ΕΙΣΟΔΟΣ</Nav.Link>
                <Nav.Link href="#">ΕΓΓΡΑΦΗ</Nav.Link>
            </Nav> */}
        </Navbar>
    );
}

export default Header


