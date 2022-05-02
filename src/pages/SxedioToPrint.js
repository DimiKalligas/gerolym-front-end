import React, { useEffect, useReducer } from 'react'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
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
import '../print.css'

const SxedioToPrint = () => {
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, {})
    // const { no } = match.params

    // const loadSingleProduct = () => getProduct(no)
    //     .then(res => {
    //         // setProduct(res.data)
    //         dispatch({
    //             type: 'LOAD WHOLE OBJECT',
    //             payload: res.data
    //         })
    //     })

    // useEffect(() => {
    //     loadSingleProduct()
    //     // history.push(`/ektypwsh`)
    // }, [no])

    useEffect(() => {
        let allData = JSON.parse(localStorage.getItem('stoixeiastate'))
        // console.log(stoixeiaState)
        dispatch({
            type: 'LOAD WHOLE OBJECT',
            payload: allData
        })
    }, [])

    return (
        <Container style={{ marginTop: 80 }}>
            {/* PAGE 1 */}
            <ListGroup variant="flush" style={{ position: 'relative' }}>
                <ListGroup horizontal>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingLeft: '2rem', fontWeight: 'bold' }}>Πελάτης {stoixeiaState.customer} </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingLeft: '2rem', fontWeight: 'bold' }}>Κωδ. Παραγγελίας {stoixeiaState.orderNo}</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: 'lightGray', paddingRight: '2rem', fontWeight: 'bold' }}>Προτεραιότητα {stoixeiaState.proteraiothta}</ListGroup.Item>
                </ListGroup>
                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '2rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-absolute'>
                        <Card.Img variant="bottom" className="photo1" src={image1} />
                    </figure>
                    <div className='P1aksonas'>{stoixeiaState.aksonas}</div>
                    <div className="P1elathrioA">{stoixeiaState.elathrioA}</div>
                    <div className="P1elathrioB">{stoixeiaState.elathrioB}</div>
                    <div className="P1elathrioC">{stoixeiaState.elathrioC}</div>
                    <div className="P1elathrioAtem">{stoixeiaState.elathrioAtem}</div>
                    <div className="P1elathrioBtem">{stoixeiaState.elathrioBtem}</div>
                    <div className="P1elathrioCtem">{stoixeiaState.elathrioCtem}</div>
                    <div className="P1mhkos">{stoixeiaState.aksonasMhkos}</div>
                    <div className="P1platos">{stoixeiaState.aksonasMhkos}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

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

            {/* PAGE 2 */}
            <Container variant="flush" style={{ position: 'relative' }}>
                <ListGroup.Item style={{ position: 'relative', backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '20rem' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo2" src={image2} />
                    </figure>
                    <div className='P1mhkosProfilKophs'>{stoixeiaState.mhkosProfilKophs}</div>
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-44rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΡΟΦΙΛ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.profil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΗΘΟΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.plithosProfil}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>MHKOΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{Math.round(stoixeiaState.mhkosProfilKophs - 1)}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΧΡΩΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.xrwma}</ListGroup.Item>

                <ListGroup.Item style={{ width: '15rem', height: '14.3rem' }}>&nbsp;</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </Container>

            {/* PAGE 3 */}
            <ListGroup variant="flush" style={{ position: 'relative', backgroundColor: 'Pink' }}>
                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΘΕΣΗ ΝΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

                <Container style={{ paddingLeft: '20rem' }} >
                    <figure className='position-relative'>
                        <Card.Img variant="bottom" className="photo" src={image3} />
                    </figure>
                    <div className='ypsosStrantzaristou'>{stoixeiaState.ypsosStrantzaristou === '0 ' ? 'ΧΩΡΙΣ ΣΤΡΑΝΤΖΑΡΙΣΤΑ' : stoixeiaState.ypsosStrantzaristou}</div>
                    {stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='platosStrantzaristouF127'>{stoixeiaState.platosStrantzaristou}</div>}
                    {stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ' && <div className='vathosStrantzaristouF127'>{stoixeiaState.vathosStrantzaristou}</div>}
                </Container>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '-25rem' }}>ΧΕΙΡΙΣΤΗΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>&nbsp;</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΗΜΑΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.proteinomenhShmaia}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΣΗΜAIAΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.ypsosShmaias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΘΟΣ ΣΗΜAIAΣ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.mhkosShmaias}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΣΤΡΑΝΤΖΑΡΙΣΤΟ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.strantzarista}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΥΨΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.ypsosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΠΛΑΤΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.platosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΒΑΘΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟY</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.vathosStrantzaristou}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΤΥΛΙΓΜΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.tyligma}</ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold' }}>ΛΑΜΑΚΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '15rem' }}>{stoixeiaState.lamakiaMonofKoutiou}</ListGroup.Item>

                <SxedioDiergasies />
                <SxedioFooter />
            </ListGroup>
            <div>
                <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => window.print()}>Εκτύπωση </Button>

            </div>
        </Container >
    )
}

export default SxedioToPrint
