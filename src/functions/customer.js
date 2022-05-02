import axios from 'axios'

// export const makeContact = async () =>
//     await axios.get(`${process.env.REACT_APP_API}/customer`)

export const createCustomer = async (customer) => {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/customer`,
        headers: { // again, we need to be authorized
            // Authorization: `Bearer ${token}`
            myNameIs: 'Jo'
        },
        data: { ...customer }
    })
}

export const getAllCustomers = async () => {
    await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API}/customers`,
    })
}

