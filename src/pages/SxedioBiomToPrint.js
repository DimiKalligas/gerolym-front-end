import React, { useEffect, useReducer } from 'react'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import { Container, Card, ListGroup, Button, Tabs, Tab } from 'react-bootstrap'
import { SxedioFooter } from './SxedioFooter'
import { SxedioDiergasies } from './SxedioDiergasies'
import image1 from '../images/Biomhxaniko1.png'
import image2 from '../images/selida2.png'
import image3 from '../images/Biomhxaniko3.png'
import image4 from '../images/Biomhxaniko4.png'
import image5 from '../images/selida4.png'
import image6 from '../images/Biomhxaniko6.png'
import image7 from '../images/selida6.png'
import image8 from '../images/Biomhxaniko8.png'
import image9 from '../images/Biomhxaniko9All.png'
import page1 from '../images/page1.png'
import page2 from '../images/page2.png'
import page3 from '../images/page3.png'
import page4 from '../images/page4.png'
import page5 from '../images/page5.png'
import page6 from '../images/page6.png'
import page7 from '../images/page7.png'
import page8 from '../images/page8.png'
import page9 from '../images/page9.png'
import '../print.css'

const SxedioBiomToPrint = () => {
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, {})

    const pageStartStyle = { position: 'relative', breakBefore: 'page' }

    useEffect(() => {
        window.scrollTo(0, 0)
        let allData = JSON.parse(localStorage.getItem('stoixeiastate'))
        // console.log(stoixeiaState)
        dispatch({
            type: 'LOAD WHOLE OBJECT',
            payload: allData
        })

        setTimeout(function () { window.print() }, 22);
    }, [])

    let sxoliaSel5
    stoixeiaState.ypsosOdhgou >= 5000 ? sxoliaSel5 = "Σχίσιμο στο πάνω μέρος του Οδηγού" : sxoliaSel5 = "ΟΧΙ Σχίσιμο στο πάνω μέρος του Οδηγού"

    return (
        <Container style={{ marginTop: 50 }} className='print-width'>
            {/* PAGE 1 */}
            <ListGroup variant="flush" style={{ position: 'relative' }}>
                <ListGroup horizontal>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '25rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '25rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '25rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '2rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.8rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '16rem', marginTop: '-1.2rem' }} >
                    <figure className='position-absolute'>
                        <Card.Img variant="bottom" className="photo2" src={image1} style={{ paddingTop: '40px' }} />
                    </figure>
                    <figure>
                        <img src={page1} style={{ position: 'absolute', top: 490, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P2biom1PahosYlikou'>{stoixeiaState.aksonasPahos}&nbsp;</div>
                    <div className="P2biom1MhkosYlikou">{stoixeiaState.aksonasMhkos}&nbsp;</div>
                    <div className="P2biom1Diametros">{stoixeiaState.aksonasIndex}&nbsp;</div>
                    <div className="P2biom1Aksonaki">{stoixeiaState.aksonakiIndex}&nbsp;</div>
                    <div className="P2biom1Aksonaki2">{stoixeiaState.aksonakiIndex}&nbsp;</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΞΟΝΑΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasIndex}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΑΧΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasPahos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΞΟΝΑΚΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonakiIndex}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΗΚΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' ? stoixeiaState.aksonasMhkos - 1 : stoixeiaState.aksonasMhkos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '13.3rem' }}>{Math.round(stoixeiaState.varosKourtinas * 100) / 100}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 2 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '5rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoBiom2" src={image2} />
                    </figure>
                    <figure>
                        <img src={page2} style={{ position: 'absolute', top: 350, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P2mhkosProfilKophs'>{stoixeiaState.mhkosProfilKophs}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-37rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΗΘΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.plithosProfil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>MHKOΣ ΚΟΠΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.mhkosProfilKophs - 1)}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '12.3rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 3 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem', paddingTop: '0.8rem', display: 'flex' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo" src={image3} />
                    </figure>
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo" src={image3} />
                    </figure>
                    <figure>
                        <img src={page3} style={{ position: 'absolute', top: 500, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <div className='P2moter'>MOTEΡ</div>
                    <div className='P2Kouzineto'>ΚΟΥΖΙΝΕΤΟ</div>
                    <div className='P2mhkosMeiwthra'>{stoixeiaState.mhkosMeiwthra}&nbsp;</div>
                    <div className='P2ypsosMeiwthraSel3'>{stoixeiaState.ypsosMeiwthra}&nbsp;</div>
                    <div className='P2ypsosDokou'>{stoixeiaState.ypsosDokou}&nbsp;</div>
                    <div className='P2ypsosDokou2'>{stoixeiaState.ypsosDokou}&nbsp;</div>
                    <div className='P2biom3platos'>{stoixeiaState.platosStrantzaristou}&nbsp;</div>
                    <div className='P2biom3vathos'>{stoixeiaState.vathosStrantzaristou}&nbsp;</div>
                    <div className='P2biom3platos2'>{stoixeiaState.platosStrantzaristou}</div>
                    <div className='P2biom3vathos2'>{stoixeiaState.vathosStrantzaristou}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-30rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΒΟΛΟΣ ΜΕΙΩΤHPA</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.mhkosMeiwthra}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΒΟΛΟΣ ΚΟΥΖΙΝETOY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosMeiwthra}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΜΕ ΛΑΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosDokou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΠΟΔΙΑΙΡΕΣΗ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypodiairesh}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ / ΘΕΣΗ ΜΟΤΕΡ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '10.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.moterThesi}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 4 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" style={{ paddingTop: '2rem' }} src={image4} />
                    </figure>
                    <figure>
                        <img src={page4} style={{ position: 'absolute', top: 585, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='sel4MhkosMeiwthra'>{stoixeiaState.mhkosMeiwthra}</div>
                    <div className='ypsosMeiwthraDia2'>{stoixeiaState.ypsosMeiwthra / 2}</div> {/* Epanw Kentro */}
                    <div className='ypsosMeiwthraDia2Aristera'>{stoixeiaState.ypsosMeiwthra / 2}</div> {/* Epanw Kentro */}
                    <div className='biom4ypodiaireshDeksia'>{stoixeiaState.ypodiairesh}</div> {/* J156 */}
                    <div className='biom4ypodiairesh'>{stoixeiaState.ypodiairesh}</div>
                    {/* <div className='ypsosMeiwthraDeksia'>F{stoixeiaState.ypsosMeiwthra}</div> */}
                    <div className='ypsosMeiwthraKatw'>{stoixeiaState.ypsosMeiwthra}</div>
                    {/* <div className='ypsosMeiwthraKatwDeksia'>FF{stoixeiaState.ypsosMeiwthra}</div> */}

                    <div className='biom4ypodiairesh2'>{stoixeiaState.ypodiairesh}</div> {/* katw sxedia deksia */}
                    <div className='P2biom4ypodiairesh3'>{stoixeiaState.ypodiairesh}</div>
                    {/* <div className='ypsosMeiwthraLigoKatw'>F{stoixeiaState.ypsosMeiwthra / 2}</div>  */}

                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-35rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΠΟΔΙΑΙΡΕΣΗ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypodiairesh}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΧΕΣΗ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.sxesh}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΗΚΟΣ ΥΠΟΔΙΑΙΡΕΣΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.mhkosMeiwthra)}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΥΠΟΔΙΑΙΡΕΣΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosMeiwthra}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΗΚΟΣ ΚΟΥΖΙΝΕΤΟΥ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.ypsosMeiwthra)}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΚΟΥΖΙΝΕΤΟΥ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '10.3rem' }}>{stoixeiaState.ypsosMeiwthra}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 5 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image5} />
                    </figure>
                    <figure>
                        <img src={page5} style={{ position: 'absolute', top: 530, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P2ypsosOdhgou'>{stoixeiaState.ypsosOdhgou}</div>
                    {/* =IF ypsosOdhgou>="5000");"Σχίσιμο στο πάνω μέρος του Οδηγού";IF katharoAnoigma<="5000");"ΟΧΙ Σχίσιμο στο πάνω μέρος του Οδηγού";" ")) */}
                    <div className='sxolia' style={{ zIndex: '1', position: 'absolute', top: 810, fontWeight: "bold" }}>{sxoliaSel5}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-35rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.odhgos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosOdhgou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΗΚΕΣ ΟΔΗΓΩΝ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thikesSthrijhsOdhgwn}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '12.3rem' }}>{stoixeiaState.diastashThikisSthrijhsOdhgwn}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
                {/* <SxedioFooter style={{ marginTop: '5rem' }} /> */}
            </ListGroup>

            {/* PAGE 6 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image6} />
                    </figure>
                    <figure>
                        <img src={page6} style={{ position: 'absolute', top: 510, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='ypsosDokariou2'>{stoixeiaState.ypsosDokariou}</div>
                    <div className='P2ypsosXwrou2'>{stoixeiaState.ypsosXwrou2}</div>
                    <div className='P2anoigmaXwrou2'>{stoixeiaState.anoigmaXwrou2}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-37rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.epifaneiaEgatastashs}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΝΥΨ. ΜΕΣΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.anypsotikoMeso1}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.anypsotikoMeso2}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.anypsotikoMeso3}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.anypsotikoMeso4}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 7 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo" src={image7} />
                    </figure>
                    <figure>
                        <img src={page7} style={{ position: 'absolute', top: 510, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P2platosMeTapes'>{(stoixeiaState.mhkosProfilKophs + stoixeiaState.pahosTapas * 2) || ''}</div>
                    <div className='P2telikoYpsosKourtinas'>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-30rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΑΤΟΣ ΜΕ ΤΑΠΕΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{(stoixeiaState.mhkosProfilKophs + stoixeiaState.pahosTapas * 2) || '-'}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΧΩΡΙΣ ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.telikoYpsosKourtinas}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.fases}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΖΑΜΑΚΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tzamakia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΕΙΡΕΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tzamakiaPlithos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΛΑΜΑΚΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.lamakiaMonofKoutiou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ / ΘΕΣΗ ΜΟΤΕΡ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.moterThesi}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΟΠ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.stopRolou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΛΕΙΔΑΡΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.kleidariaAsfaleias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΙΝΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.tainiaSyskevasias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΡΟΥΛΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.xeirolavh}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΕΛΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.tampelaSimansis}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 8 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem', paddingTop: '1rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image8} />
                    </figure>
                    <figure>
                        <img src={page8} style={{ position: 'absolute', top: 550, left: 300, zIndex: 1, opacity: 0.2 }} />
                    </figure>

                    <div className='epanwTetragwnoAristera'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='epanwTetragwnoEpanw'>{stoixeiaState.ypsosMeiwthra - 1.5}</div>
                    <div className='twoPointFive1'>2.5</div>
                    <div className='twoPointFive2'>2.5</div>
                    <div className='twoPointFive3'>2.5</div>
                    <div className='twoPointFive4'>2.5</div>
                    <div className='oneTwenty'>120</div>
                    <div className='katwTetragwno8Epanw'>{stoixeiaState.ypsosMeiwthra - 1.5}</div>
                    <div className='katwTetragwno8Aristera'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='katwTetragwno8Deksia'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='katwTetragwno8Katw'>{stoixeiaState.ypsosMeiwthra - 118}</div>
                    <div className='biom8TermaKatw'>{(stoixeiaState.anoigmaXwrou - 2) * (stoixeiaState.platosStrantzaristou - 5)}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-35rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΟΥΤΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΛΑΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tablades}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΕ ΣΚΟΤΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutiaXwrisSkotia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', marginBottom: '14rem' }}>{stoixeiaState.steganopoihshTampla}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 9 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem', paddingTop: '0.5rem', display: 'flex' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image9} />
                    </figure>
                    <figure>
                        <img src={page9} style={{ position: 'absolute', top: 340, left: 270, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='sel9TetragwnoEpanw'>{stoixeiaState.ypsosMeiwthra - 1.5}</div>
                    <div className='sel9TetragwnoDeksia'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='sel9TetragwnoAristera'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='sel9TetragwnoKatw'>{stoixeiaState.ypsosMeiwthra - 118}</div>
                    <div className='biom9EpanwDeksia'>{(stoixeiaState.anoigmaXwrou - 2) * (stoixeiaState.platosStrantzaristou - 5)}</div>
                    <div className='sel9ypsosMeiwthra'>{stoixeiaState.ypsosMeiwthra}</div>
                    <div className='moterKouzineto2' style={{ fontWeight: 'bold' }}>MOTEΡ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ΚΟΥΖΙΝΕΤΟ</div>
                    <div className='mhkosMeiwthra9'>{stoixeiaState.mhkosMeiwthra}</div>
                    <div className='biom9vathos'>{stoixeiaState.vathosStrantzaristou}</div>
                    <div className='biom9vathos2'>{stoixeiaState.vathosStrantzaristou}</div>
                    <div className='biom9platos'>{stoixeiaState.platosStrantzaristou}</div>
                    <div className='biom9platos2'>{stoixeiaState.platosStrantzaristou}</div>
                    <div className='P2ypsosOdhgou9'>{stoixeiaState.ypsosOdhgou}</div>
                    {/* <div className='mhkosProfilKophs'>{stoixeiaState.mhkosProfilKophs}</div> */}
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-34rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΠΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.typosRolou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΖΑΜΑΚΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tzamakia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΕΙΡΕΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tzamakiaPlithos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.eidikhSthrijh}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.kolonaSthrijhsOdhgwn}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΗΜΑΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.shmaies}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΡΑΝΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '4rem' }}>{stoixeiaState.strantzarista}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΦΑΣΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.fases}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΓΚΥΡΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.agyria}</ListGroup.Item>

                <Container style={{ paddingLeft: '17rem', marginTop: '-27rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.odhgos}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosOdhgou}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΗΚΕΣ ΟΔΗΓΩΝ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thikesSthrijhsOdhgwn}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.diastashThikisSthrijhsOdhgwn}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΧΩΡΙΣ ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100}</ListGroup.Item>
                </Container>

                <Container style={{ paddingLeft: '35rem', marginTop: '-24.4rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΟΥΤΙ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutia}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΑΠΑΚΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.kapakia}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΛΑΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tablades}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΕ ΣΚΟΤΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutiaXwrisSkotia}</ListGroup.Item>
                </Container>

                <Container style={{ paddingLeft: '52rem', marginTop: '-19.5rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΛΕΙΔΑΡΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.kleidariaAsfaleias}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>PACKAGING</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.packaging}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>STOP ΡΟΛΟΥ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '12.3rem' }}>{stoixeiaState.stopRolou}</ListGroup.Item>
                </Container>
            </ListGroup>

            {/* <div>
                <Button style={{ marginLeft: 10, marginBottom: 10, marginTop: 90 }} className='d-print-none' onClick={() => window.print()}>Εκτύπωση </Button>
            </div> */}
        </Container>
    )
}

export default SxedioBiomToPrint
