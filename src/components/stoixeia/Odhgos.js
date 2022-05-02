import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { odhgos } from '../../pinakes/odhgos'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Odhgos = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // ΑΛΛΑΓΗ κωδικού ΟΔΗΓΟΥ
    useEffect(() => {
        let x = vlookup2(stoixeiaState.odhgos, odhgos, 0)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'odhgosKwd',
            payload: x
        })
    }, [stoixeiaState.odhgos])

    const odhgosValues = (odhgos, col) => {
        let allValues = []

        odhgos.forEach(o =>
            allValues.push(o[col])
        )

        return allValues
    }
    // const odhgosList = odhgosValues(odhgos, 1).map(o => <option>{o}</option>)

    // ΑΛΛΑΓΗ index ΟΔΗΓΟΥ
    useEffect(() => {
        let x = vlookup2(stoixeiaState.odhgos, odhgos, 3)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'odhgosIndex',
            payload: x
        })
    }, [stoixeiaState.odhgos])


    return (
        <>
            {odhgosValues(odhgos, 1).map(o => <option key={o}>{o}</option>)}
        </>
    )
}

export default Odhgos
