import React, { useState, useReducer } from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import formReducer from '../reducers/formReducer'
import { createCustomer } from '../functions/customer'

function Customer() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const [showError, setShowError] = useState({
    //     on: false,
    //     message: ''
    // });
    const [cnameErr, setCnameErr] = useState('')
    // const [showErr, setShowErr] = useState(false)

    const initialState = {
        cname: '',
        contact: '',
        phone: '',
        email: ''
    }

    const [cusFormState, dispatch] = useReducer(formReducer, initialState);

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('1. Customer in handleSubmit', cusFormState)
        try {
            await createCustomer({ ...cusFormState })
            toast.success('Επιτυχής Εγγραφή.');
            setTimeout(function () { history.push('/') }, 2000);
        }
        catch (err) {
            // console.log('ERROR from Controller', err.response.data)
            if (err.response.status === 405) toast.warning(err.response.data)
            else if (err.response.status === 400) {
                toast.warning('Προέκυψε Σφάλμα.');
                let error = err.response.data.err
                let y = error.split(':')[1].trim()
                let errMessage = error.split(':')[2].trim()
                if (y === 'cname') setCnameErr(errMessage)
                // console.log('whole error', err.response.data.err)
                // console.log('Problem in field:', error.split(':')[1].trim(), error.split(':')[2].trim())
                // console.log('State error', cnameErr)
            }
        }
    }

    const handleChange = (e) => {
        dispatch({
            type: 'HANDLE TEXT',
            field: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <Container>
            <Row className="justify-content-md-center" xs={2} md={2} lg={2} style={{ marginTop: 80 }}>
                {/* <Form onSubmit={handleSubmit}> */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Επωνυμία</Form.Label>
                        {/* <Form.Control type="text" placeholder="Επωνυμία" onChange={CustomerChange} /> */}
                        <Form.Control
                            type="text"
                            name='cname'
                            // {...register("cname", { required: 'Παρακαλώ επιλέξτε όνομα.' })}
                            value={cusFormState.customer}
                            onChange={(e) => {
                                handleChange(e)
                                setCnameErr('')
                            }} />
                        {cnameErr &&
                            <Form.Text className="text-danger" style={{ fontSize: '1rem' }}>
                                {cnameErr}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Πρόσωπο Επικοινωνίας</Form.Label>
                        <Form.Control
                            type="text"
                            id="contact"
                            name='contact'
                            placeholder=""
                            value={cusFormState.contact}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Τηλέφωνο</Form.Label>
                        <Form.Control
                            type="text"
                            id="phone"
                            name='phone'
                            placeholder=""
                            value={cusFormState.phone}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label>Αριθμός</Form.Label>
                        <Form.Control
                            as="select"
                            id="mam"
                            name='mam'
                            {...register("mam", { required: 'Παρακαλώ επιλέξτε αριθμό.' })}
                        >
                            <option value=''>choose</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                        {errors.mam &&
                            <Form.Text className="text-danger">
                                {errors.mam.message}
                            </Form.Text>
                        }
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            type="text"
                            id="email"
                            name='email'
                            placeholder=""
                            //     pattern: {
                            //     value: /\S+@\S+\.\S+/,
                            // message: "Entered value does not match email format"
                            //   }
                            value={cusFormState.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>

                    <hr />
                    <Button variant="primary" type="submit">
                        Εγγραφή
                    </Button>
                </Form>
            </Row>
        </Container >
        // </div >
    )
}

export default Customer

