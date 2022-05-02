import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Card, Container, Col, Row, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import axios from 'axios'
import { BsFillXCircleFill } from 'react-icons/bs';
import './cardItem.css'

const Productions = () => {
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState('')
    const [productions, setProductions] = useState([])

    let history = useHistory();

    // φορτώνω στο state ολους τους customers για να τους δείξω στο dropdown
    useEffect(() => {
        // AUTO PAIZEI
        const getCustomers = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}/customers`);
            setCustomers(response.data);
        }
        getCustomers();
        // loadAllCustomers()
    }, [])

    // οταν επιλέγω customer, τότε φορτώνω τα products του πελάτη
    useEffect(() => {
        // φέρε όλα τα product του customer
        const loadProducts = async () => {
            // console.log('looking for customer', customer)
            if (customer) {

                const res = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/products`,
                    headers: { // again, we need to be authorized
                        // Authorization: `Bearer ${token}`
                        lookingFor: 'love'
                    },
                    data: { customer: customer }
                })
                // console.log(res)
                // setProductions(res.data)
                return await res
                // .json()
            }
        }

        if (customer) {
            try {
                loadProducts()
                    // .then(what => console.log('Return from loadProducts', what))
                    .then(what => {
                        if (what.data.length > 0) {
                            setProductions(what.data)
                        }
                    })
            }
            catch (err) {
                console.log('error in function', err);
                // if (err.response.status === 400) toast(err.response.data)
            }
        }
    }, [customer])

    const handleDelete = async (no) => {
        console.log('You are deleting record no.', no)
        const res = await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}/product`,
            headers: { // again, we need to be authorized
                // Authorization: `Bearer ${token}`
                lookingFor: 'love'
            },
            data: { orderNo: no }
        })
        console.log('Result from delete', res.data)
        toast.success('Έγινε διαγραφή της παραγγελίας ', no)
        history.push(`/`)
    }

    const handleChange = async (e) => {
        // Να πάει σε useEffect, για να ενημερώνει το state αμέσως
        setCustomer(e.target.value)
    }

    const cusList = customers.map(cus => <option key={cus.cname}>{cus.cname}</option>)

    return (
        <div>
            <Container style={{ marginTop: 80 }}>
                <Row className="justify-content-md-center" xs={2} md={2} lg={2}>
                    <Form>
                        {/* controlId ensures accessibility */}
                        <Form.Group controlId="formCustomerList">
                            <Form.Label>Πελάτης</Form.Label>
                            {/* <Form.Control type="text" placeholder="Επωνυμία" onChange={CustomerChange} /> */}
                            <Form.Control
                                as="select"
                                name='customer'
                                value={customer}
                                onChange={(e) => handleChange(e)}>
                                <option>Επιλογή...</option>
                                {cusList}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Row>

                {productions.length > 0 &&
                    <Row className="justify-content-md-center mt30" xs={2} md={2} lg={2}>
                        <Card border="light" >
                            <ul className='card-list'>
                                {productions.map(prod =>
                                    <li key={prod.orderNo} className='no-underline'>
                                        {/* <Link to='/maPage'> */}
                                        <Card as={Link} to={`/SingleProduct/${prod.orderNo}`} className='card-item'>
                                            <div className='card-item__description'>
                                                <h2>{prod.orderNo}</h2>
                                                <h2>{new Date(prod.orderDate).toLocaleDateString('el-GR')}</h2>
                                                {/* <Link to={`/delete/${prod.orderNo}` > */}
                                                <span onClick={() =>
                                                    // console.log('You are deleting record no.', prod.orderNo)}
                                                    handleDelete(prod.orderNo)}
                                                > <BsFillXCircleFill /></span>
                                            </div>
                                        </Card>
                                        {/* </Link> */}
                                    </li>
                                )}
                            </ul>
                        </Card>
                    </Row>
                }

            </Container>
        </div>
    )
}

export default Productions
