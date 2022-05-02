import axios from 'axios'

export const makeContact = async () =>
    await axios.get(`${process.env.REACT_APP_API}/product`)

// export const createProduct = async (product, authtoken) =>
//     await axios.post(`${process.env.REACT_APP_API}/product`, product, {
//         headers: {
//             authtoken,
//         }
//     })

// export const createProduct = async (product) => await axios.post(`${process.env.REACT_APP_API}/product`, product);

export const getProduct = async (no) =>
    await axios.get(`${process.env.REACT_APP_API}/product/${no}`)

export const getLastOrderNo = async () =>
    await axios.get(`${process.env.REACT_APP_API}/lastOrder`)

export const createProduct = async (product) => {
    // console.log('Sending product:', product) 
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/product`,
        headers: { // again, we need to be authorized
            // Authorization: `Bearer ${token}`
            myNameIs: 'Jo'
        },
        data: { ...product }
    })
    // .then(response => {
    //     console.log('function success ', response)
    //     // updateUser(response, () => {
    //     //     setValues({ ...values, buttonText: 'Submitted' })
    //     //     toast.success('Profile updated successfully')
    //     // })
    // })
    // .catch(error => {
    //     console.log('function error', error.response.data)
    //     // setValues({ ...values, buttonText: 'Submit' })
    //     // toast.error(error.response.data.error)
    // })
}

export const getProductsOfCus = async (cname) => {
    // console.log('axios for cname:', cname) OK
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}/products`,
        headers: { // again, we need to be authorized
            // Authorization: `Bearer ${token}`
            lookingFor: 'love'
        },
        data: { customer: cname }
    })
}
// const handleQuery = async (req, res, query) => {
//     // text-based search
//     const products = await Product.find({ $text: { $search: query } })
//         .populate('category', '_id name')
//         .populate('subs', '_id name')
//         // .populate('postedBy', '_id name')
//         .exec()

//     res.json(products)
// }

// const handlePrice = async (req, res, price) => {
//     try {
//         let products = await Product.find({
//             price: {
//                 $gte: price[0],
//                 $lte: price[1],
//             },
//         })
//             .populate("category", "_id name")
//             .populate("subs", "_id name")
//             .populate("postedBy", "_id name")
//             .exec();

//         res.json(products);
//     } catch (err) {
//         console.log(err);
//     }
// };

// exports.searchFilters = async (req, res) => {
//     const { query, price } = req.body;

//     if (query) {
//         console.log("query --->", query);
//         await handleQuery(req, res, query);
//     }


