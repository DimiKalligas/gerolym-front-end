const formReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE TEXT':
            return {
                ...state,
                [action.field]: action.payload
            }
        // case "CLEAR_FORM":
        //     return {
        //         customer: "",
        //         orderDate: "",
        //     }
        default: return state
    }
}

export default formReducer


