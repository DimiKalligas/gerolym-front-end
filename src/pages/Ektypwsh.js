import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import { useStoixeiaContext } from '../context/StoixeiaContext'
import { Container, Row, Form, Col, Button, Table } from 'react-bootstrap'
import SxedioMonofasiko from './SxedioMonofasiko'
import SxedioBiomhxaniko from './SxedioBiomhxaniko'
import '../ektypwsh.css'

const Ektypwsh = ({ sxedio, setSxedio }) => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()
    const [showModal, setShowModal] = useState(false)
    const [idiaEggrafh, setidiaEggrafh] = useState(false)

    // let history = useHistory();

    return (
        <>
            {sxedio === 'ΜΟΝΟΦΑΣΙΚΟ' && <SxedioMonofasiko setSxedio={setSxedio} setShowModal={setShowModal} setidiaEggrafh={setidiaEggrafh} />}
            {sxedio === 'ΒΙΟΜΗΧΑΝΙΚΟ' && <SxedioBiomhxaniko setSxedio={setSxedio} setShowModal={setShowModal} setidiaEggrafh={setidiaEggrafh} />}
            {
                sxedio === '' &&
                <Container style={{ marginTop: 80 }} className='g'>
                    <Row className="justify-content-md-center" xs={8} md={8} lg={10}>
                        <Form>

                            {/* ΠΕΛΑΤΗΣ */}
                            <Form.Group as={Row} controlId="formCustomerList">
                                {/* <Form.Control  className='myPlaceholder' placeholder="Πελάτης" /> */}
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΕΛΑΤΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='customer' className='myPlaceholder' placeholder={stoixeiaState.customer} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΑΥΞΩΝ ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ */}
                            <Form.Group as={Row} controlId="orderNo" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>
                                    ΑΡ. ΠΑΡΑΓΓΕΛΙΑΣ
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='lastOrderNo' className='myPlaceholder' placeholder={stoixeiaState.orderNo} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΓΓΕΛΙΑΣ */}
                            <Form.Group as={Row} controlId="orderDate" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΜ/ΝΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Form.Label>
                                {/* <Form.Control type="text"  className='myPlaceholder' placeholder="Επωνυμία" onChange={CustomerChange} /> */}
                                <Col sm={6}>
                                    <Form.Control type="text" name='orderDate' className='myPlaceholder' placeholder={new Date(stoixeiaState.orderDate).toLocaleDateString('el-GR')} readOnly />
                                </Col>
                                {/* {stoixeiaState.orderDate
                            ?
                            <Col sm={6}>
                                <Form.Control type="text" name='lastOrderNo'  className='myPlaceholder' placeholder={new Date(stoixeiaState.orderDate).toLocaleDateString('el-GR')} readOnly />
                            </Col>
                            :
                            <Col sm={6}>
                                <Form.Control
                                    type="date"
                                    // onblur="if(!this.value)this.type='text'"
                                    // onfocus="(this.type='date')"
                                    id="date"
                                    name='orderDate'
                                    selected={stoixeiaState.orderDate}
                                     className='myPlaceholder' placeholder={stoixeiaState.orderDate}
                                    value={stoixeiaState.orderDate}
                                    readOnly
                                />
                            </Col>
                        } */}
                            </Form.Group>

                            {/* ΠΙΘΑΝΗ ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ</Form.Label>
                                {/* <Form.Control type="text"  className='myPlaceholder' placeholder="Επωνυμία" onChange={CustomerChange} /> */}
                                <Col sm={6}>
                                    <Form.Control
                                        type="date"
                                        id="date"
                                        name='pithaniDeliveryDate'
                                        className='myPlaceholder' placeholder={(stoixeiaState.pithaniDeliveryDate)}
                                        readOnly
                                    />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΡΑΙΟΤΗΤΑ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΡΟΤΕΡΑΙΟΤΗΤΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='proteraiothta'
                                        className='myPlaceholder' placeholder={stoixeiaState.proteraiothta}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΗΜΕΡΟΜΗΝΙΕΣ ΕΠΙΣΤΡΟΦΗΣ */}
                            <Form.Group as={Row} controlId="hmEpistr" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Table striped bordered hover style={{ marginTop: 10 }} className='myTable'>
                                        <thead>
                                            <tr>
                                                <th>ΤΜΗΜΑ</th>
                                                <th>ΗΜΕΡΟΜΗΝΙΑ ΕΠΙΣΤΡΟΦΗΣ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ΤΜΗΜΑ 1</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 2</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 3</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 4</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 5</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 6</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 7</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 8</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 9</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>ΤΜΗΜΑ 10</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Form.Group>

                            {/* ΣΤΟΙΧΕΙΑ ΡΟΛΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                {/* <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>Πλάτος mm</Form.Label> */}
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder myHeading' placeholder='ΡΟΛΟ 1' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΦΙΛ */}
                            <Form.Group as={Row} controlId="formProfil" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΡΟΦΙΛ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='profil' className='myPlaceholder' placeholder={stoixeiaState.profil} readOnly />
                                </Col>
                                {/* ΚΩΔΙΚΟΣ ΠΡΟΦΙΛ */}
                                {/* <Col sm={{ span: 2, offset: 1 }} className='myLabel'>
                                    <Form.Control type="text"  className='myPlaceholder' placeholder={stoixeiaState.profilKwd} readOnly />
                                </Col> */}
                            </Form.Group>

                            {/* ΤΥΠΟΣ ΡΟΛΟΥ */}
                            <Form.Group as={Row} controlId="typosRolou" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΤΥΠΟΣ ΡΟΛΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='typosRolou' className='myPlaceholder' placeholder={stoixeiaState.typosRolou} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΤΥΛΙΓΜΑ */}
                            <Form.Group as={Row} controlId="tyligma" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΤΥΛΙΓΜΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type='text' name='tyligma' className='myPlaceholder' placeholder={stoixeiaState.tyligma} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ */}
                            <Form.Group as={Row} controlId="thesi" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΘΕΣΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type='text' name='thesi' className='myPlaceholder' placeholder={stoixeiaState.thesi} readOnly />
                                </Col >
                            </Form.Group >

                            {/* ΑΝΟΙΓΜΑ ΧΩΡΟΥ */}
                            <Form.Group as={Row} controlId="anoigmaXwrou" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΝΟΙΓΜΑ ΧΩΡΟΥ</Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="number" name='anoigmaXwrou' className='myPlaceholder' placeholder={stoixeiaState.anoigmaXwrou} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΥΨΟΣ ΧΩΡΟΥ */}
                            <Form.Group as={Row} controlId="ypsosXwrou" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΥΨΟΣ ΧΩΡΟΥ</Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="number" name='ypsosXwrou' className='myPlaceholder' placeholder={stoixeiaState.ypsosXwrou} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ */}
                            {/* <Form.Group as={Row} controlId="proteinomenosOdhgos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ</Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="text" name='proteinomenosOdhgos'  className='myPlaceholder' placeholder={stoixeiaState.proteinomenosOdhgos} readOnly />
                                </Col>
                            </Form.Group> */}

                            {/* ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10, color: 'red' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='aerasProfilOdhgou'
                                        className='myPlaceholder' placeholder={stoixeiaState.aerasProfilOdhgou}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΑΡΑΘΥΡΑΚΙ ΣΤΟ ΠΡΟΦΙΛ */}
                            <Form.Group as={Row} style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΑΡΑΘΥΡΑΚΙ ΣΤΟ ΠΡΟΦΙΛ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='parathyraki'
                                        className='myPlaceholder' placeholder={stoixeiaState.parathyraki}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>


                            {/* ΑΓΚΥΡΙΑ */}
                            {stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && <Form.Group as={Row} controlId='ΑΓΓΥΡΙΑ' style={{ marginTop: 10 }}>
                                {/* <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>Πλάτος mm</Form.Label> */}
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΑΓΚΥΡΙΑ' readOnly />
                                </Col>
                            </Form.Group>}

                            {/* ΑΓΓΥΡΙΑ */}
                            {stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΓΚΥΡΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='agyria'
                                        className='myPlaceholder' placeholder={stoixeiaState.agyria}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ  */}
                            {stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='plithosAgyriwn'
                                        className='myPlaceholder' placeholder={stoixeiaState.plithosAgyriwn}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΟΔΗΓΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ marginTop: 8, textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΟΔΗΓΟΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΟΔΗΓΟΣ */}
                            <Form.Group as={Row} controlId="odhgos" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΟΔΗΓΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type='text' name='odhgos' className='myPlaceholder' placeholder={stoixeiaState.odhgos} readOnly />
                                </Col >
                                {/* ΚΩΔΙΚΟΣ ΟΔΗΓΟΥ */}
                                {/* <Col sm={{ span: 2, offset: 1 }} className='myLabel'>
                                    <Form.Control type="text"  className='myPlaceholder' placeholder={stoixeiaState.odhgosKwd} readOnly />
                                </Col> */}
                            </Form.Group >

                            {/* ΒΑΣΗ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟY */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΒΑΣΗ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟY</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='vashSthrijhs'
                                        className='myPlaceholder' placeholder={stoixeiaState.vashSthrijhs}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='thikesSthrijhsOdhgwn'
                                        className='myPlaceholder' placeholder={stoixeiaState.thikesSthrijhsOdhgwn}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}


                            {/* ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='diastashThikisSthrijhsOdhgwn'
                                        className='myPlaceholder' placeholder={stoixeiaState.diastashThikisSthrijhsOdhgwn}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='kolonaSthrijhsOdhgwn'
                                        className='myPlaceholder' placeholder={stoixeiaState.kolonaSthrijhsOdhgwn}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='diastashKolonasSthrijhsOdhgwn'
                                        className='myPlaceholder' placeholder={stoixeiaState.diastashKolonasSthrijhsOdhgwn}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΣΤΡΑΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ */}
                            <Form.Group as={Row} controlId="ΣΤΡΑΤΖΑΡΙΣΤΑ-ΚΟΙΛΟΔΟΚΟΙ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΣΤΡΑΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΣΤΡΑΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ */}
                            < Form.Group as={Row} controlId="strantzarista" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΣΤΡΑΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type='text' name='strantzarista' className='myPlaceholder' placeholder={stoixeiaState.strantzarista} readOnly />
                                </Col >
                                {/* ΚΩΔΙΚΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                                {/* < Col sm={{ span: 2, offset: 1 }} >
                                    <Form.Control type="text"  className='myPlaceholder' placeholder={vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 0)} readOnly />
                                </Col > */}
                            </Form.Group >

                            {/* ΘΕΣΗ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΘΕΣΗ ΣΤΡΑΤΖΑΡΙΣΤΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='thesiStrantzaristou'
                                        className='myPlaceholder' placeholder={stoixeiaState.thesiStrantzaristou}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='gwniesSthrijhs'
                                        className='myPlaceholder' placeholder={stoixeiaState.gwniesSthrijhs}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΞΟΝΑΣ */}
                            <Form.Group as={Row} controlId="ΑΞΟΝΑΣ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΑΞΟΝΑΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΑΞΟΝΕΣ */}
                            < Form.Group as={Row} controlId="aksonas" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΞΟΝΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type='text' name='aksonas' className='myPlaceholder' placeholder={stoixeiaState.aksonas} readOnly />
                                </Col>

                            </Form.Group >

                            {/* ΑΞΟΝAKI ΜΟΤΕΡ */}
                            < Form.Group as={Row} controlId="aksonaki" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΞΟΝAKI ΜΟΤΕΡ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type='text' name='aksonaki' className='myPlaceholder' placeholder={stoixeiaState.aksonaki} readOnly />
                                </Col>
                            </Form.Group >

                            {/* ΑΞΟΝAKI KOYZINETOY */}
                            < Form.Group as={Row} controlId="aksonakiKouzinetou" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΞΟΝAKI KOYZINETOY</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type='text' name='aksonakiKouzinetou' className='myPlaceholder' placeholder={stoixeiaState.aksonakiKouzinetou} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΕΛΑΤΗΡΙΑ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} controlId="ΕΛΑΤΗΡΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΕΛΑΤΗΡΙΑ' readOnly />
                                </Col>
                            </Form.Group>}

                            {/* ΕΛΑΤΗΡΙΟ Α */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3} className='myLabel'>{stoixeiaState.elathrioA}</Form.Label>
                                <Col sm={2}>
                                    <Form.Control
                                        type="number"
                                        name='elathrioAtem'
                                        className='myPlaceholder' placeholder={stoixeiaState.elathrioAtem}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΕΛΑΤΗΡΙΟ Β */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3} className='myLabel'>{stoixeiaState.elathrioB}</Form.Label>
                                <Col sm={2}>
                                    <Form.Control
                                        type="number"
                                        name='elathrioBtem'
                                        className='myPlaceholder' placeholder={stoixeiaState.elathrioBtem}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΕΛΑΤΗΡΙΟ Γ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3} className='myLabel'>{stoixeiaState.elathrioC}</Form.Label>
                                <Col sm={2}>
                                    <Form.Control
                                        type="number"
                                        name='elathrioCtem'
                                        className='myPlaceholder' placeholder={stoixeiaState.elathrioCtem}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΣΗΜΑΙΕΣ */}
                            <Form.Group as={Row} controlId="ΣΗΜΑΙΕΣ" style={{ marginTop: 10 }}>
                                {/* offset: 1 */}
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΣΗΜΑΙΕΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΣΗΜΑΙΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΣΗΜΑΙΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='shmaies'
                                        className='myPlaceholder' placeholder={stoixeiaState.shmaies}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΕΞΩΤΕΡΙΚΗ ΔΙΑΣΤΑΣΗ ΠΕΡΙΕΛΙΞΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΕΞΩΤΕΡΙΚΗ ΔΙΑΣΤΑΣΗ ΠΕΡΙΕΛΙΞΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='perieliksi'
                                        className='myPlaceholder' placeholder={Math.round(stoixeiaState.perieliksi * 100) / 100}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΛΑΔΕΣ */}
                            <Form.Group as={Row} controlId="ΤΑΜΠΛΑΔΕΣ" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΤΑΜΠΛΑΔΕΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΛΑΔΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΤΑΜΠΛΑΔΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='tablades'
                                        className='myPlaceholder' placeholder={stoixeiaState.tablades}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='steganopoihshTampla'
                                        className='myPlaceholder' placeholder={stoixeiaState.steganopoihshTampla}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΑΛΥΨΕΙΣ / ΚΟΥΤΙΑ */}
                            <Form.Group as={Row} controlId="ΚΑΛΥΨΕΙΣ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΚΑΛΥΨΕΙΣ / ΚΟΥΤΙΑ' readOnly />
                                </Col>
                            </Form.Group>
                            {/* KOYTIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>KOYTIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='koutia'
                                        className='myPlaceholder' placeholder={stoixeiaState.koutia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΑΠΑΚΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΚΑΠΑΚΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='kapakia'
                                        className='myPlaceholder' placeholder={stoixeiaState.kapakia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='lamakiaMonofKoutiou'
                                        className='myPlaceholder' placeholder={stoixeiaState.lamakiaMonofKoutiou}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='koutiaXwrisSkotia'
                                        className='myPlaceholder' placeholder={stoixeiaState.koutiaXwrisSkotia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΦΑΣΕΣ - ΤΖΑΜΑΚΙΑ */}
                            <Form.Group as={Row} controlId="ΦΑΣΕΣ-ΤΖΑΜΑΚΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΦΑΣΕΣ - ΤΖΑΜΑΚΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΦΑΣΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΦΑΣΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='fases'
                                        className='myPlaceholder' placeholder={stoixeiaState.fases}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* TZAMAKIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>TZAMAKIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='tzamakia'
                                        className='myPlaceholder' placeholder={stoixeiaState.tzamakia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* TZAMAKIA ΠΛΗΘΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>TZAMAKIA ΠΛΗΘΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="number" name='tzamakiaPlithos' className='myPlaceholder' placeholder={stoixeiaState.tzamakiaPlithos} readOnly />
                                </Col>
                            </Form.Group>


                            {/* ΥΠΟΔΙΑΙΡΕΣΗ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} controlId="ΥΠΟΔΙΑΙΡΕΣΗ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΥΠΟΔΙΑΙΡΕΣΗ' readOnly />
                                </Col>
                            </Form.Group>}

                            {/* ΥΠΟΔΙΑΙΡΕΣΗ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} controlId="ypodiairesh" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='ypodiairesh'
                                        className='myPlaceholder' placeholder={stoixeiaState.ypodiairesh}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='eidikhSthrijh'
                                        className='myPlaceholder' placeholder={stoixeiaState.eidikhSthrijh}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΔΙΑΣΤΑΣΗ ΓΩΝΙΑΣ ΣΤΗΡΙΞΗΣ 80Χ80 mm */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΔΙΑΣΤΑΣΗ ΓΩΝΙΑΣ ΣΤΗΡΙΞΗΣ 80Χ80 mm</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='gwniaSthrijhs80x80'
                                        className='myPlaceholder' placeholder={stoixeiaState.gwniaSthrijhs80x80}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΔΙΑΣΤΑΣΗ ΛΑΜΑΣ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='lamaSthrijhs80x10'
                                        className='myPlaceholder' placeholder={stoixeiaState.lamaSthrijhs80x10}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΜΟΤΕΡ */}
                            <Form.Group as={Row} controlId="ΜΟΤΕΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΜΟΤΕΡ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* MOTEP */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>MOTEP</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='moter'
                                        className='myPlaceholder' placeholder={stoixeiaState.moter}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ ΜΟΤΕΡ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΘΕΣΗ MOTEP</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='moterThesi'
                                        className='myPlaceholder' placeholder={stoixeiaState.moterThesi}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='thesiParoxhsReumatos'
                                        className='myPlaceholder' placeholder={stoixeiaState.thesiParoxhsReumatos}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΑΡΑΣΟΥΤΕΡ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} controlId="ΠΑΡΑΣΟΥΤΕΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΠΑΡΑΣΟΥΤΕΡ' readOnly />
                                </Col>
                            </Form.Group>}

                            {/* ΠΑΡΑΣΟΥΤΕΡ */}
                            {stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΠΑΡΑΣΟΥΤΕΡ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='kouzineto'
                                        className='myPlaceholder' placeholder={stoixeiaState.kouzineto}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>}

                            {/* ΑΞΕΣΟΥΑΡ */}
                            <Form.Group as={Row} controlId="ΑΞΕΣΟΥΑΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΑΞΕΣΟΥΑΡ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='kleidariaAsfaleias'
                                        className='myPlaceholder' placeholder={stoixeiaState.kleidariaAsfaleias}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1 */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='ilektrologikhEgatastash1'
                                        className='myPlaceholder' placeholder={stoixeiaState.ilektrologikhEgatastash1}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2 */}
                            {stoixeiaState.ilektrologikhEgatastash1 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='ilektrologikhEgatastash2'
                                            className='myPlaceholder' placeholder={stoixeiaState.ilektrologikhEgatastash2}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3 */}
                            {stoixeiaState.ilektrologikhEgatastash2 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='ilektrologikhEgatastash3'
                                            className='myPlaceholder' placeholder={stoixeiaState.ilektrologikhEgatastash3}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4 */}
                            {stoixeiaState.ilektrologikhEgatastash3 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='ilektrologikhEgatastash4'
                                            className='myPlaceholder' placeholder={stoixeiaState.ilektrologikhEgatastash4}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5 */}
                            {stoixeiaState.ilektrologikhEgatastash4 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='ilektrologikhEgatastash5'
                                            className='myPlaceholder' placeholder={stoixeiaState.ilektrologikhEgatastash5}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ANTIANEMIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ANTIANEMIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='antianemia'
                                        className='myPlaceholder' placeholder={stoixeiaState.antianemia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* STOP ΡΟΛΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>STOP ΡΟΛΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='stopRolou'
                                        className='myPlaceholder' placeholder={stoixeiaState.stopRolou}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΧΕΙΡΟΛΑΒΗ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΧΕΙΡΟΛΑΒΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='xeirolavh'
                                        className='myPlaceholder' placeholder={stoixeiaState.xeirolavh}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΥΣΚΕΥΑΣΙΑ */}
                            <Form.Group as={Row} controlId="ΣΥΣΚΕΥΑΣΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΣΥΣΚΕΥΑΣΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* PACKAGING */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>PACKAGING </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='packaging'
                                        value={stoixeiaState.packaging}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='tainiaSyskevasias'
                                        value={stoixeiaState.tainiaSyskevasias}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='tampelaSimansis'
                                        value={stoixeiaState.tampelaSimansis}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΟΠΟΘΕΤΗΣΗ */}
                            <Form.Group as={Row} controlId="ΤΟΠΟΘΕΤΗΣΗ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 6, offset: 3 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} className='myPlaceholder' placeholder='ΤΟΠΟΘΕΤΗΣΗ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='epifaneiaEgatastashs'
                                        className='myPlaceholder' placeholder={stoixeiaState.epifaneiaEgatastashs}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1 */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='anypsotikoMeso1'
                                        className='myPlaceholder' placeholder={stoixeiaState.anypsotikoMeso1}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2 */}
                            {stoixeiaState.anypsotikoMeso1 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='anypsotikoMeso2'
                                            className='myPlaceholder' placeholder={stoixeiaState.anypsotikoMeso2}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3 */}
                            {stoixeiaState.anypsotikoMeso2 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='anypsotikoMeso3'
                                            className='myPlaceholder' placeholder={stoixeiaState.anypsotikoMeso3}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4 */}
                            {stoixeiaState.anypsotikoMeso3 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }} className='myLabel'>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name='anypsotikoMeso4'
                                            className='myPlaceholder' placeholder={stoixeiaState.anypsotikoMeso4}
                                            readOnly
                                        >
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* <div style={{ marginBottom: 60 }}></div> */}
                        </Form >
                    </Row >
                </Container >
            }
        </>
    )
}

export default Ektypwsh
