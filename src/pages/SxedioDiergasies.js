import { ListGroup } from 'react-bootstrap'

export const SxedioDiergasies = () => {
    return (
        <>
            <ListGroup.Item style={{ backgroundColor: 'lightGray', width: '15rem', fontWeight: 'bold', marginTop: '1rem' }}>ΔΙΕΡΓΑΣΙΕΣ</ListGroup.Item>

            <ListGroup horizontal>
                <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold', textAlign: 'left' }}>1</ListGroup.Item>
                <ListGroup.Item style={{ width: '53.3rem' }}>&nbsp;</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>2</ListGroup.Item>
                <ListGroup.Item style={{ width: '53.3rem' }}>&nbsp;</ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item style={{ width: '15rem', fontWeight: 'bold' }}>3</ListGroup.Item>
                <ListGroup.Item style={{ width: '53.3rem' }}>&nbsp;</ListGroup.Item>
            </ListGroup>
        </>
    )
}
