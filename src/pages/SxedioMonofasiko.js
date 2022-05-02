import React, { useRef, useEffect } from 'react'
import { useStoixeiaContext } from '../context/StoixeiaContext'
import { useHistory } from 'react-router-dom';
import { Container, Card, ListGroup, Button, Tabs, Tab } from 'react-bootstrap'
import { SxedioFooter } from './SxedioFooter'
import { SxedioDiergasies } from './SxedioDiergasies'
import image1 from '../images/selida1.png'
import image2 from '../images/selida2.png'
import image3 from '../images/selida3.png'
import image4 from '../images/selida4.png'
import image5 from '../images/selida5.png'
import image6 from '../images/selida6.png'
import image7 from '../images/selida7.png'
import image81 from '../images/selida8-1.png'
import image82 from '../images/selida8-2.png'
import image83 from '../images/selida8-3.png'
import '../custom.css'

const SxedioMonofasiko = ({ setSxedio, setShowModal, setidiaEggrafh }) => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()
    const myRef = useRef(null);

    let history = useHistory();

    // if tablades='ΧΩΡΙΣ ΤΑΜΠΛΑ' return 0 else return ypsosShmaias + 30
    let J321 = (stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ' ? 0 : stoixeiaState.ypsosShmaias + 30)

    let G315
    let kouti = stoixeiaState.koutia || 'ΧΩΡΙΣ ΚΟΥΤΙΑ'

    if (kouti.includes('Γ') || kouti === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') G315 = 0
    else if (J321 === 0) G315 = stoixeiaState.mhkosShmaias + 20
    else G315 = stoixeiaState.mhkosShmaias + 40

    const handlePrint = () => {
        history.push(`/sxedioMonToPrint`)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // const executeScroll = () => myRef.current.scrollIntoView() // στο περίπου...
        // console.log('Ref:', myRef.current); 
        // myRef.current.focus(); Γιατί δεν παίζει ?
        // executeScroll()
    }, [])

    return (
        <Container style={{ marginTop: 80 }}>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{ marginTop: 30 }}>
                <Tab eventKey="home" title="ΣΕΛΙΔΑ 1">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush" >
                                <ListGroup horizontal>
                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                                </ListGroup>
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '2rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΞΟΝΑΣ</ListGroup.Item>


                                <Container style={{ paddingLeft: '19rem', marginTop: '2rem' }} >
                                    <figure className='position-absolute'>
                                        <Card.Img variant="bottom" className="photo1" src={image1} />
                                    </figure>
                                    <div className='aksonas'>{stoixeiaState.aksonas}</div>
                                    <div className="elathrioA">{stoixeiaState.elathrioA}</div>
                                    <div className="elathrioB">{stoixeiaState.elathrioB}</div>
                                    <div className="elathrioC">{stoixeiaState.elathrioC}</div>
                                    {stoixeiaState.elathrioA && <div className="elathrioAtem">{stoixeiaState.elathrioAtem}</div>}
                                    {stoixeiaState.elathrioB && <div className="elathrioBtem">{stoixeiaState.elathrioBtem}</div>}
                                    {stoixeiaState.elathrioC && <div className="elathrioCtem">{stoixeiaState.elathrioCtem}</div>}
                                    <div className="mhkos">{stoixeiaState.aksonasMhkos}</div>
                                    <div className="platos">{stoixeiaState.aksonasMhkos}</div>
                                </Container>

                                <ListGroup.Item style={{ width: '15rem', height: '4.3rem', marginTop: '-2rem' }}>{stoixeiaState.aksonas}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΑΧΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasPahos || ''}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ A</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioA}</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioA && stoixeiaState.elathrioAtem}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ B</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioB}</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioB && stoixeiaState.elathrioBtem}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΛΑΤΗΡΙΑ Γ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioC}</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.elathrioC && stoixeiaState.elathrioCtem}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΗΚΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.aksonasMhkos}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΜΟΤΕΡ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.moter}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΑΛΩΔΙΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thesiParoxhsReumatos}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.varosKourtinas * 100) / 100}</ListGroup.Item>

                                <SxedioDiergasies />
                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            {/* <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => window.print()}>Εκτύπωση </Button> */}
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida2" title="ΣΕΛΙΔΑ 2">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '20rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image2} />
                                    </figure>
                                    <div className='mhkosProfilKophs'>{stoixeiaState.mhkosProfilKophs}</div>
                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '4.0rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΗΘΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.plithosProfil}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>MHKOΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{Math.round(stoixeiaState.mhkosProfilKophs - 1)}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                                <SxedioFooter />
                            </ListGroup>

                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida3" title="ΣΕΛΙΔΑ 3">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '20rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image3} />
                                    </figure>
                                    <div className='ypsosStrantzaristou'>{stoixeiaState.ypsosStrantzaristou === '0 ' ? 'ΧΩΡΙΣ ΣΤΡΑΝΤΖΑΡΙΣΤΑ' : stoixeiaState.ypsosStrantzaristou}</div>
                                    {stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='platosStrantzaristouF127'>{stoixeiaState.platosStrantzaristou}</div>}
                                    {stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='vathosStrantzaristouF127'>{stoixeiaState.vathosStrantzaristou}</div>}
                                    {/**/}
                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
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

                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida4" title="ΣΕΛΙΔΑ 4"> {/* disabled */}
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '20rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image4} />
                                    </figure>
                                    <div className='ypsosOdhgou'>{stoixeiaState.ypsosOdhgou}</div>
                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΟΔΗΓΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.odhgos}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.ypsosOdhgou}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΗΚΕΣ ΟΔΗΓΩΝ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thikesSthrijhsOdhgwn}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΟΔΗΓΩΝ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.diastashThikisSthrijhsOdhgwn}</ListGroup.Item>

                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida5" title="ΣΕΛΙΔΑ 5">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '18.3rem', marginTop: '-1.2rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image5} />
                                    </figure>
                                    <div className='ypsosDokariou'>{stoixeiaState.ypsosDokariou}</div>
                                    <div className='ypsosXwrou'>{stoixeiaState.ypsosXwrou}</div>
                                    <div className='anoigmaXwrou'>{stoixeiaState.anoigmaXwrou}</div>
                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΠΟΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.typosRolou}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.thesi}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.epifaneiaEgatastashs}</ListGroup.Item>

                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida6" title="ΣΕΛΙΔΑ 6">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '19rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image6} />
                                    </figure>
                                    <div className='platosMeTapes'>{(stoixeiaState.mhkosProfilKophs + stoixeiaState.pahosTapas * 2) || ''}</div>
                                    <div className='telikoYpsosKourtinas'>{Math.round(stoixeiaState.telikoYpsosKourtinas * 100) / 100 || 0}</div>
                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
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

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΡΟΥΛΙ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.xeirolavh}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΑΜΠΕΛΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.tampelaSimansis}</ListGroup.Item>

                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida7" title="ΣΕΛΙΔΑ 7">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '18.3rem', marginTop: '-1.6rem' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image7} />
                                    </figure>
                                    {/* if koutia=ΧΩΡΙΣ ΚΟΥΤΙΑ return 0, else anoigmaXwrou-10*/}
                                    {stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='sel7panw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.anoigmaXwrou - 10}</div>}
                                    {/* {stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='G311'>{stoixeiaState.G311}</div>} */}

                                    {/* Kouti Deksia */}
                                    <div className='J321'>{J321}</div>
                                    {/* Kouti Epanw */}
                                    <div className='G315'>{G315}</div>
                                    {/* J321MON_EKTOS να μπει */}
                                    {/* J322MON_ENTOS = ^ να μπει */}
                                    {/* G315MON_EKTOS να μπει */}
                                    {/* G316MON_ENTOS = ^ να μπει */}

                                    {/* =IF(J322=0;"I";"~") */}
                                    <div className='tilda'>{stoixeiaState.J322 === '0' ? 'I' : '~'}</div>
                                    {/* =IF(TABLE!$BH$6=DATA!$BM$52;0;TABLE!$BB$6+20-90)*/}
                                    <div className='sel7katw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.mhkosShmaias - 70}</div>
                                    {/* =IF(TABLE!$BH$6=DATA!$BM$52;0;TABLE!$BA$6+30+30) */}
                                    <div className='sel7aristera'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.ypsosShmaias + 60}</div>
                                    {/* stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && */}

                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
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

                                <SxedioFooter />
                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida8" title="ΣΕΛΙΔΑ 8">
                    <Card className='mt30' style={{ height: '1200px' }} >
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>&nbsp;</ListGroup.Item>

                                <Container style={{ paddingLeft: '16.5rem', marginTop: '-1.6rem', display: 'flex' }} >
                                    <figure className='position-relative'>
                                        <Card.Img variant="bottom" className="photo" src={image81} />
                                    </figure>
                                    <figure>
                                        <Card.Img variant="bottom" className="photo" src={image82} />
                                    </figure>
                                    <figure>
                                        <Card.Img variant="bottom" className="photo" src={image83} />
                                    </figure>
                                    <div className='ypsosOdhgouSel8'>{stoixeiaState.ypsosOdhgou}</div>
                                    <div className='ypsosShmaiasSel8'>{stoixeiaState.ypsosShmaias}</div>
                                    <div className='sel8G315'>{G315}</div>
                                    <div className='sel8MesiEpanw'>{stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? 0 : stoixeiaState.anoigmaXwrou - 10}</div>
                                    {stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='ypsosStrantzaristouL358'>{stoixeiaState.ypsosStrantzaristou}</div>}
                                    {stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ' ? <div className='I363'>0</div> : <div className='I363'>{stoixeiaState.ypsosShmaias + 30}</div>}
                                    {stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? <div className='E364'>0</div> : <div className='E364'>{stoixeiaState.ypsosShmaias + 60}</div>}
                                    {stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ' ? <div className='I364'>0</div> : <div className='I364'>{stoixeiaState.ypsosShmaias + 30}</div>}

                                </Container>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
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

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΦΑΣΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.fasa}</ListGroup.Item>

                                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΑΓΚΥΡΙΑ</ListGroup.Item>
                                <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.agyria}</ListGroup.Item>

                                <Container style={{ paddingLeft: '20rem', marginTop: '-25rem' }} >
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
                                </Container>

                                <Container style={{ marginTop: '-24.4rem', marginLeft: '40rem' }} >
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
                                </Container>

                                <Container style={{ marginTop: '-24.4rem', marginLeft: '60rem' }} >
                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΚΛΕΙΔΑΡΙΑ</ListGroup.Item>
                                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.kleidariaAsfaleias}</ListGroup.Item>

                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>PACKAGING</ListGroup.Item>
                                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.packaging}</ListGroup.Item>

                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΟΛΑΒΗ</ListGroup.Item>
                                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.xeirolavh}</ListGroup.Item>

                                    <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>STOP ΡΟΛΟΥ</ListGroup.Item>
                                    <ListGroup.Item style={{ width: '15rem', height: '2.3rem' }}>{stoixeiaState.tyligma + ' ' + stoixeiaState.stopRolou}</ListGroup.Item>
                                </Container>

                            </ListGroup>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>

                <Tab eventKey="selida9" title="ΣΕΛΙΔΑ 9">
                    <Card className='mt30'>
                        <Card.Body>
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

                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={handlePrint}>Εκτύπωση</Button>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => {
                                setSxedio('')
                                setShowModal(false)
                                setidiaEggrafh(true)
                            }}>Επιστροφή </Button>
                        </div>
                    </Card>
                </Tab>
            </Tabs>

            {/* <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Ημ/νία Παραγγελίας: {new Date(product.orderDate).toLocaleDateString('el-GR')}</ListGroup.Item>
                    <ListGroup.Item>Αριθμός Παραγγελίας {no}</ListGroup.Item>
                    <ListGroup.Item>Οδηγίες εκτύπωσης</ListGroup.Item>
                </ListGroup>
                <Card.Img variant="bottom" className="photo" src={image1} />
            </Card.Body>
            <div>
                <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => window.print()}>Εκτύπωση </Button>
            </div>
        </Card> */}
        </Container >
    )
}

export default SxedioMonofasiko

