import React, { useState, useEffect, useReducer } from 'react'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import StoixeiaContext from '../context/StoixeiaContext'
import { Container, Card, ListGroup, Button, Tabs, Tab } from 'react-bootstrap'
// import { getProduct } from '../functions/product'
import Card2 from './Card2'
// import image1 from '../images/image1.GIF'
import image1 from '../images/MonEntos1.png'
import image2 from '../images/image2.GIF'
import '../custom.css'

const DisplayProduct = ({ product }) => {
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, product)

    const providerState = {
        stoixeiaState,
        dispatch
    }

    useEffect(() => {
        console.log('in DisplayProduct received', product)
    }, [])
    // useEffect(() => {
    //     loadSingleProduct()
    // }, [no])

    // const loadSingleProduct = () => getProduct(no)
    //     .then(res => {
    //         setProduct(res.data)
    //         console.log(res.data)
    //         // var response = JSON.parse(JSON.stringify(res.data))
    //         // let myAr = Object.entries(res.data);

    //         // const myAr = Object.entries(res.data);

    //         // myAr.forEach(([key, value]) => {
    //         //     console.log(key); // 'one'
    //         //     console.log(value); // 1
    //         // });
    //         // console.log('in SingleProduct got back', myAr)
    //     })

    return (
        <StoixeiaContext.Provider value={providerState} >
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{ marginTop: 30 }}>
                <Tab eventKey="home" title="ΜΟΝΟΦΑΣΙΚΟ ΕΝΤΟΣ">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Ημ/νία Παραγγελίας: {new Date(product.orderDate).toLocaleDateString('el-GR')}</ListGroup.Item>
                                <ListGroup.Item>Αριθμός Παραγγελίας {product.orderNo}</ListGroup.Item>
                                <ListGroup.Item>Οδηγίες εκτύπωσης</ListGroup.Item>
                            </ListGroup>
                            <Container>
                                <figure className='position-relative'>
                                    <Card.Img variant="bottom" className="photo" src={image1} />
                                </figure>
                                {/* <figcaption>
                                    Here I am
                                </figcaption> */}
                                <div className='diatomh'>Φ-76</div>
                                <div className="elathrio">ΕΛΑΤΗΡΙΟ 40ρι</div>
                                <div className="platos">πλάτος</div>
                            </Container>
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => window.print()}>Εκτύπωση </Button>
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="profile" title="ΜΟΝΟΦΑΣΙΚΟ ΕΚΤΟΣ">
                    <Card className='mt30'>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Lorem Ipsum dolor sit amet</ListGroup.Item>
                                <ListGroup.Item>consectetur adipiscing elit</ListGroup.Item>
                                <ListGroup.Item>sed do eiusmod tempor incididunt</ListGroup.Item>
                            </ListGroup>
                            {/* <Container>  */}
                            <Card.Img variant="bottom" className="photo" src={image2} />
                            {/* </Container> */}
                        </Card.Body>
                        <div>
                            <Button style={{ marginLeft: 10, marginBottom: 10 }} onClick={() => window.print()}>Εκτύπωση </Button>
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="contact" title="ΒΙΟΜΗΧΑΝΙΚΟ ΕΝΤΟΣ" disabled>
                    <Card2 />
                </Tab>
                <Tab eventKey="contact" title="ΒΙΟΜΗΧΑΝΙΚΟ ΕΚΤΟΣ" disabled>
                    <Card2 />
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
        </StoixeiaContext.Provider >
    )
}

export default DisplayProduct
