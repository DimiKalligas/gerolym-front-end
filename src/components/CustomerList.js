import React, { useState, useEffect, useMemo } from 'react'
import { Container, Table } from 'react-bootstrap'
import Pagination from './Pagination';
import '../functions/pagination.scss';
import axios from 'axios'

let PageSize = 20;
let currentItems = [];

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        const getCustomers = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}/customers`);
            setCustomers(response.data);
            setLoading(false);
        }

        getCustomers();
    }, [])

    const currentItems = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return customers.slice(firstPageIndex, lastPageIndex);
    }, [customers, currentPage]);

    return (
        <Container style={{ marginTop: 80 }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Επωνυμία</th>
                        <th>Επαφή</th>
                        <th>Τηλέφωνο</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(cus => <tr key={cus.cname}>
                        <td>{cus.cname}</td>
                        <td>{cus.contact}</td>
                        <td>{cus.phone}</td>
                        <td>{cus.email}</td>
                    </tr>)}
                </tbody>
            </Table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={customers.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </Container>
    )
}

export default CustomerList
