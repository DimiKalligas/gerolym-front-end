import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { moter } from '../../pinakes/moter'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Moter = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown MOTEP
    const moterValues = (moter, col) => {
        let allValues = []

        moter.forEach(m =>
            allValues.push(m[col])
        )

        return allValues
    }
    const moterList = moterValues(moter, 1).map(m => <option key={m}>{m}</option>)

    // ΑΛΛΑΓΗ κωδικού MOTEP
    useEffect(() => {
        let x = vlookup2(stoixeiaState.moter, moter, 0)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'moterKwd',
            payload: x
        })
    }, [stoixeiaState.moter])

    return (
        <>
            {moterList}
        </>
    )
}

export default Moter

