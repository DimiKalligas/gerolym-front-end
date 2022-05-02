import { ListGroup } from 'react-bootstrap'
import '../print.css'

export const SxedioFooter = () => {
    return (
        <>
            <ListGroup horizontal style={{ marginBottom: '0.2rem', position: 'relative', width: '95%' }}>
                <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>ΣΧΟΛΙΑ</ListGroup.Item>
                <ListGroup.Item style={{ width: '39.2rem', height: '10rem', fontWeight: 'bold' }}>&nbsp;</ListGroup.Item>
                <ListGroup.Item style={{ width: '14rem', fontWeight: 'bold', textAlign: 'right' }}>ΠΑΡΑΛΑΒΗ</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal style={{ marginBottom: '0.2rem', position: 'relative', width: '95%' }}>
                <ListGroup.Item style={{ width: '68.2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'right' }}>ΟΛΟΚΛΗΡΩΣΗ</ListGroup.Item>
            </ListGroup>
        </>
    )
}
