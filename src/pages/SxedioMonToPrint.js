import React, { useEffect, useReducer } from 'react'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import { Container, Card, ListGroup, Button, Tabs, Tab } from 'react-bootstrap'
import { SxedioFooter } from './SxedioFooter'
import { SxedioDiergasies } from './SxedioDiergasies'
import image1 from '../images/selida1_1.png'
// import image1L from '../images/selida1L.png'
import image2 from '../images/selida2.png'
import image3 from '../images/selida3.png'
import image4 from '../images/selida4.png'
import image5 from '../images/selida5.png'
import image6 from '../images/selida6.png'
import image7 from '../images/selida7.png'
import image81 from '../images/selida8-1.png'
import image82 from '../images/selida8-2.png'
import image83 from '../images/selida8-3.png'
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

const SxedioToPrint = () => {
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, {})

    let J321 = (stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ' ? 0 : stoixeiaState.ypsosShmaias + 30)

    let G315
    let kouti = stoixeiaState.koutia || 'ΧΩΡΙΣ ΚΟΥΤΙΑ'
    // ΝΑ ΤΟ ΕΠΙΒΕΒΑΙΩΣΩ
    if (kouti.includes('Γ') || kouti === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') G315 = 0
    else if (J321 === 0) G315 = stoixeiaState.mhkosShmaias + 20
    else G315 = stoixeiaState.mhkosShmaias + 40

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
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem', paddingTop: '1rem' }} >
                    <figure className='position-absolute'>
                        <Card.Img variant="bottom" src={image1} className="photoMon1" style={{ paddingTop: '40px' }} />
                    </figure>
                    <figure>
                        <img src={page1} style={{ position: 'absolute', top: 490, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1aksonas'>{stoixeiaState.aksonas}&nbsp;</div>
                    <div className="P1elathrioA">{stoixeiaState.elathrioA}&nbsp;</div>
                    <div className="P1elathrioB">{stoixeiaState.elathrioB}&nbsp;</div>
                    <div className="P1elathrioC">{stoixeiaState.elathrioC}&nbsp;</div>
                    <div className="P1elathrioAtem">{stoixeiaState.elathrioAtem}&nbsp;</div>
                    <div className="P1elathrioBtem">{stoixeiaState.elathrioBtem}&nbsp;</div>
                    <div className="P1elathrioCtem">{stoixeiaState.elathrioCtem}&nbsp;</div>
                    <div className="P1mhkos">{stoixeiaState.aksonasMhkos}&nbsp;</div>
                    <div className="P1platos">{stoixeiaState.aksonasMhkos}&nbsp;</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΞΟΝΑΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '4.3rem' }}>{stoixeiaState.aksonas}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΑΧΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasPahos || ''}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ A</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioA}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioAtem}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ B</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioB}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioBtem}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ Γ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioC}</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioCtem}</ListGroup.Item>

                {/* , marginBottom: '23.0rem' */}
                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΗΚΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasMhkos}</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem', marginTop: '-9.4rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΟΤΕΡ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.moter}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΑΛΩΔΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thesiParoxhsReumatos}</ListGroup.Item>
                </Container>

                <Container style={{ marginLeft: '40rem', marginTop: '-9.0rem', marginBottom: '3.0rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.varosKourtinas * 100) / 100}</ListGroup.Item>
                </Container>

                {/* <div style={{ marginTop: '2.0rem' }}><hr /></div> */}

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>

            {/* PAGE 2 */}
            <Container variant="flush" style={pageStartStyle}>
                <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>

                <ListGroup.Item style={{ position: 'relative', backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '5rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo2" src={image2} />
                    </figure>
                    <figure>
                        <img src={page2} style={{ position: 'absolute', top: 650, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1mhkosProfilKophs'>{stoixeiaState.mhkosProfilKophs}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-44rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΗΘΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.plithosProfil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>MHKOΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.mhkosProfilKophs - 1)}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                <ListGroup.Item style={{ width: '15rem', height: '31.3rem' }}>&nbsp;</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </Container>

            {/* PAGE 3 */}
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
                        <Card.Img variant="bottom" className="photoL" src={image3} />
                    </figure>
                    <figure>
                        <img src={page3} style={{ position: 'absolute', top: 575, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1ypsosStrantzaristou'>{stoixeiaState.ypsosStrantzaristou === '0 ' ? 'ΧΩΡΙΣ ΣΤΡΑΝΤΖΑΡΙΣΤΑ' : stoixeiaState.ypsosStrantzaristou}</div>
                    {<div className='P1platosStrantzaristouF127'>{stoixeiaState.platosStrantzaristou}</div>}
                    {<div className='P1vathosStrantzaristouF127'>{stoixeiaState.vathosStrantzaristou}</div>}
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-37rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΗΜΑΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.proteinomenhShmaia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΣΗΜAIAΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosShmaias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΘΟΣ ΣΗΜAIAΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.mhkosShmaias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΡΑΝΤΖΑΡΙΣΤΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.strantzarista}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΑΤΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.platosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΘΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.vathosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΛΑΜΑΚΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.lamakiaMonofKoutiou}</ListGroup.Item>

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
                        <Card.Img variant="bottom" className="photoL" src={image4} />
                    </figure>
                    <figure>
                        <img src={page4} style={{ position: 'absolute', top: 515, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1ypsosOdhgou'>{stoixeiaState.ypsosOdhgou}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-35rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.odhgos}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosOdhgou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΗΚΕΣ ΟΔΗΓΩΝ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thikesSthrijhsOdhgwn}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.diastashThikisSthrijhsOdhgwn}</ListGroup.Item>

                <ListGroup.Item style={{ width: '15rem', height: '22.3rem' }}>&nbsp;</ListGroup.Item>


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

                <Container style={{ paddingLeft: '18.3rem', marginTop: '-1.2rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo" src={image5} />
                    </figure>
                    <figure>
                        <img src={page5} style={{ position: 'absolute', top: 475, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1ypsosDokariou'>{stoixeiaState.ypsosDokariou}</div>
                    <div className='P1ypsosXwrou'>{stoixeiaState.ypsosXwrou}</div>
                    <div className='P1anoigmaXwrou'>{stoixeiaState.anoigmaXwrou}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-28.5rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΠΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.typosRolou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thesi}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.epifaneiaEgatastashs}</ListGroup.Item>

                <ListGroup.Item style={{ width: '15rem', height: '25rem' }}>&nbsp;</ListGroup.Item>

                <SxedioFooter />
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

                <Container style={{ paddingLeft: '19rem', marginTop: '5rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image6} />
                    </figure>
                    <figure>
                        <img src={page6} style={{ position: 'absolute', top: 650, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    <div className='P1platosMeTapes'>{(stoixeiaState.mhkosProfilKophs + stoixeiaState.pahosTapas * 2) || ''}</div>
                    <div className='P1telikoYpsosKourtinas'>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100 || 0}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-41.5rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΑΤΟΣ ΜΕ ΤΑΠΕΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{(stoixeiaState.mhkosProfilKophs + stoixeiaState.pahosTapas * 2) || '-'}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΧΩΡΙΣ ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100 || 0}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '4.9rem' }}>{stoixeiaState.fases}</ListGroup.Item>

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

                <Container style={{ paddingLeft: '20rem', marginTop: '-9.4rem' }} >
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΡΟΥΛΙ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.xeirolavh}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΕΛΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.tampelaSimansis}</ListGroup.Item>
                </Container>

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

                <Container style={{ paddingLeft: '18.3rem', marginTop: '5.6rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photoL" src={image7} />
                    </figure>
                    <figure>
                        <img src={page7} style={{ position: 'absolute', top: 650, left: 242, zIndex: 1, opacity: 0.2 }} />
                    </figure>
                    {/* if koutia=ΧΩΡΙΣ ΚΟΥΤΙΑ return 0, else anoigmaXwrou-10*/}
                    {<div className='P1sel7panw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.anoigmaXwrou - 10}</div>}
                    {/* {stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='G311'>{stoixeiaState.G311}</div>} */}

                    {/* Kouti Deksia */}
                    <div className='P1J321'>{J321}</div>
                    {/* Kouti Epanw */}
                    <div className='P1G315'>{G315}</div>

                    {/* =IF(J322=0;"I";"~") */}
                    <div className='P1tilda'>{stoixeiaState.J322 === '0' ? 'I' : '~'}</div>
                    {/* =IF(TABLE!$BH$6=DATA!$BM$52;0;TABLE!$BB$6+20-90)*/}
                    <div className='P1sel7katw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.mhkosShmaias - 70}</div>
                    {/* =IF(TABLE!$BH$6=DATA!$BM$52;0;TABLE!$BA$6+30+30) */}
                    <div className='P1sel7aristera'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.ypsosShmaias + 60}</div>
                    {/* stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && */}

                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-46.5rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΟΥΤΙ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΑΠΑΚΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.kapakia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΛΑΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tablades}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΕ ΣΚΟΤΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutiaXwrisSkotia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΕΓΑΝOΠΟΙΗΣΗ ΤΑΜΠΛΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.steganopoihshTampla}</ListGroup.Item>

                <ListGroup.Item style={{ width: '15rem', height: '25rem' }}>&nbsp;</ListGroup.Item>

                <SxedioFooter />
            </ListGroup>

            {/* PAGE 8 */}
            <ListGroup variant="flush" style={pageStartStyle}>
                <Container style={{ paddingBottom: '150px' }}>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                    <Container style={{ paddingLeft: '15.5rem', marginTop: '-1.6rem', display: 'flex' }} >
                        <figure >
                            <Card.Img variant="bottom" className="photoMon8_1" src={image81} />
                        </figure>
                        <figure>
                            <Card.Img variant="bottom" className="photoMon8_2" style={{ marginLeft: '3rem' }} src={image82} />
                        </figure>
                        <figure>
                            <Card.Img variant="bottom" className="photoMon8_3" src={image83} />
                        </figure>
                        <figure>
                            <img src={page8} style={{ position: 'absolute', top: 550, left: 300, zIndex: 1, opacity: 0.2 }} />
                        </figure>
                        <div className='P1ypsosOdhgouSel8'>{stoixeiaState.ypsosOdhgou}</div>
                        <div className='P1ypsosShmaiasSel8'>{stoixeiaState.ypsosShmaias}</div>
                        <div className='P1sel8G315'>{G315}</div>
                        <div className='P1sel8MesiEpanw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.anoigmaXwrou - 10}</div>
                        {stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='P1ypsosStrantzaristouL358'>{stoixeiaState.ypsosStrantzaristou}</div>}
                        {(stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ' || stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') ? <div className='P1I363'>0</div> : <div className='P1I363'>{stoixeiaState.ypsosShmaias + 30}</div>}
                        {stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? <div className='P1E364'>0</div> : <div className='P1E364'>{stoixeiaState.ypsosShmaias + 60}</div>}
                        {/* {stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? <div className='I364'>0</div> : <div className='I364'>AAA{stoixeiaState.ypsosShmaias + 30}</div>} */}
                        {/* =IF(TABLE!$BH$6=DATA!$BM$52;0;TABLE!$BB$6+20-90) = if koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' return 0 else mhkosShmaias-70 */}
                        {stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? <div className='P1369'>0</div> : <div className='P1369'>{stoixeiaState.ypsosShmaias + 60}</div>}
                    </Container>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '4rem' }}>{stoixeiaState.profil}</ListGroup.Item>

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

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΡΑΝΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '4rem' }}>{stoixeiaState.strantzarista}</ListGroup.Item>

                    <ListGroup horizontal style={{ position: 'absolute', marginLeft: '20rem' }}>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΦΑΣΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '4rem' }}>{stoixeiaState.fasa}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΓΚΥΡΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.agyria}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.odhgos}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΣΗΜAIAΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosShmaias}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΗΚΕΣ ΟΔΗΓΩΝ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thikesSthrijhsOdhgwn}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.diastashThikisSthrijhsOdhgwn}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΧΩΡΙΣ ΤΕΡΜΑΤΙΚΟ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100 || 0}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΟΥΤΙ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutia}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΑΠΑΚΙΑ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.kapakia}</ListGroup.Item>

                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΛΑΣ</ListGroup.Item>
                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tablades}</ListGroup.Item>

                    <Container style={{ marginLeft: '20rem', marginTop: '-19.4rem' }} >
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΕ ΣΚΟΤΙΑ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.koutiaXwrisSkotia}</ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΕΓΑΝOΠΟΙΗΣΗ ΤΑΜΠΛΑ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.steganopoihshTampla}</ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΛΕΙΔΑΡΙΑ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.kleidariaAsfaleias}</ListGroup.Item>
                    </Container>

                    <Container style={{ marginTop: '-14.4rem', marginLeft: '40rem' }} >
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>PACKAGING</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.packaging}</ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΟΛΑΒΗ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xeirolavh}</ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>STOP ΡΟΛΟΥ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.stopRolou}</ListGroup.Item>
                    </Container>
                </Container>
            </ListGroup>

            {/* PAGE 9 */}
            <Container style={{ marginTop: 155 }}>
                <ListGroup variant="flush" style={pageStartStyle}>
                    <ListGroup horizontal style={{ position: 'relative', marginLeft: '5rem', marginBottom: '5rem' }}>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '18rem', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΕΛΕΓΧΟΣ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΚΑΤΑΣΚΕΥΗ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold', marginLeft: '9rem', paddingLeft: '6.5rem' }}>ΒΑΦΗ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold', paddingLeft: '6.5rem' }}>ΠΑΚΕΤΑΡΙΣΜΑ</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΑΞΟΝΑΣ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΒΑΣΕΙΣ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΥΠΟΔ / ΚΟΥΖΙΝ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΙ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΚΟΥΡΤΙΝΑ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΚΟΥΤΙΑ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <ListGroup horizontal style={{ marginTop: 5 }}>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΑΞΕΣΟΥΑΡ</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', marginLeft: '9rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                        <ListGroup.Item style={{ width: '15rem', paddingLeft: '6.5rem' }}>&nbsp;</ListGroup.Item>
                    </ListGroup>

                    <Container style={{ paddingLeft: '15.5rem', marginTop: '-1.6rem', display: 'flex' }} >
                        <figure>
                            <img src={page9} style={{ position: 'absolute', top: 440, left: 270, zIndex: 1, opacity: 0.2 }} />
                        </figure>
                    </Container >
                </ListGroup>
            </Container>

            {/* <div>
                <Button style={{ marginLeft: 10, marginBottom: 10, marginTop: 140 }} className='d-print-none' onClick={() => window.print()}>Εκτύπωση </Button>
            </div> */}
        </Container >
    )
}

export default SxedioToPrint
