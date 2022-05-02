import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { aksones } from '../../pinakes/aksones'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Aksonas = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown Άξονες
    const aksonesValues = (aksones, col) => {
        let allValues = []

        aksones.forEach(a =>
            allValues.push(a[col])
        )

        return allValues
    }
    const aksonesList = aksonesValues(aksones, 1).map(a => <option key={a}>{a}</option>)

    useEffect(() => {
        // console.log('ALLAZW ton aksonasKwd', stoixeiaState.aksonas, 'se', x)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonasKwd',
            payload: vlookup2(stoixeiaState.aksonas, aksones, 0)
        })
    }, [stoixeiaState.aksonas])


    // ΑΛΛΑΓΗ κωδικού ΆΞΟΝΑ
    useEffect(() => {
        // console.log(stoixeiaState.aksonas)

        // αλλαγή Index ΑΞΟΝΑ
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonasIndex',
            payload: vlookup2(stoixeiaState.aksonas, aksones, 6)
        })
        // αλλαγή Πάχους ΑΞΟΝΑ
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonasPahos',
            payload: vlookup2(stoixeiaState.aksonas, aksones, 2)
        })
    }, [stoixeiaState.aksonas])

    return (
        <>
            {aksonesList}
        </>
    )
}

export default Aksonas
