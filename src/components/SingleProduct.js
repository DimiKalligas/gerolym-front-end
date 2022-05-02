import React, { useState, useEffect, useReducer } from 'react'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import StoixeiaContext from '../context/StoixeiaContext'
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import { getProduct } from '../functions/product'
import Ektypwsh from '../pages/Ektypwsh'

// Η SingleProduct διαβάζει την παραγωγή έχοντας τον αριθμό της, και φορτώνει τον reducer με το state
const SingleProduct = ({ match }) => {
    // μπορούσαμε να πάρουμε την παράμετρο και με const {no} = useParams από το react-router-dom
    const { no } = match.params // no is #of Product
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, {})
    const providerState = {
        stoixeiaState,
        dispatch
    }
    const [sxedio, setSxedio] = useState('')

    let history = useHistory();

    const loadSingleProduct = () => getProduct(no)
        .then(res => {
            dispatch({
                type: 'LOAD WHOLE OBJECT',
                payload: res.data
            })
        })

    useEffect(() => {
        loadSingleProduct()
        // history.push(`/ektypwsh`)
    }, [no])

    useEffect(() => {
        // This is a side-effect and belongs in an effect
        localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
    }, [stoixeiaState]);

    const handleEktypwsh = () => {
        // το σώζω εδώ για να το βρώ στο SxedioToPrint
        localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
        // console.log(stoixeiaState.typosRolou, ' ', stoixeiaState.thesi)
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ')
            setSxedio('ΜΟΝΟΦΑΣΙΚΟ')
        else if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ')
            setSxedio('ΒΙΟΜΗΧΑΝΙΚΟ')
    }

    const handleEpanalipsi = () => {
        localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
        history.push('/rolo')
    }

    return (
        <StoixeiaContext.Provider value={providerState} >
            <Container style={{ marginTop: 100 }}>
                <Ektypwsh sxedio={sxedio} setSxedio={setSxedio} />

                {!sxedio && <div style={{ marginLeft: 10, marginTop: 30, marginBottom: 50 }}>
                    <Button className='d-print-none' onClick={() => window.print()}>Εκτύπωση </Button>
                    <Button className='d-print-none' style={{ marginLeft: 10 }} onClick={() => handleEktypwsh()}>Σχέδιο</Button>
                    <Button className='d-print-none' style={{ marginLeft: 10 }} onClick={() => handleEpanalipsi()}>Επανάληψη</Button>
                    <Button className='d-print-none' style={{ marginLeft: 10 }} onClick={() => history.push('/rolo')} >
                        {/* Reset ολα τα πεδία, αυξάνει το orderNo */}
                        Νέα Εγγραφή
                    </Button>
                </div>}
            </Container>
        </StoixeiaContext.Provider>
    )
}

export default SingleProduct
