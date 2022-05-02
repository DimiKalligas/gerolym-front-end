import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { kouzineto } from '../../pinakes/kouzineto'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Kouzineto = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown Kouzineto
    const kouzinetoValues = (kouzineto, col) => {
        let allValues = []

        kouzineto.forEach(k =>
            allValues.push(k[col])
        )

        return allValues
    }
    const kouzinetoList = kouzinetoValues(kouzineto, 1).map(k => <option key={k}>{k}</option>)

    // ΑΛΛΑΓΗ κωδικού Kouzineto
    useEffect(() => {
        let x = vlookup2(stoixeiaState.kouzineto, kouzineto, 0)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'kouzinetoKwd',
            payload: x
        })
    }, [stoixeiaState.kouzineto])

    return (
        <>
            {kouzinetoList}
        </>
    )
}

export default Kouzineto
