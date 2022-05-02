import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { profil } from '../../pinakes/profil'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Profil = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // ΑΛΛΑΓΗ κωδικού ΠΡΟΦΙΛ
    useEffect(() => {
        let x = vlookup2(stoixeiaState.profil, profil, 0)
        dispatch({ //  useEffect updates it's internal state, causes a rerender of the component, and then returns the new state value
            type: 'HANDLE TEXT',
            field: 'profilKwd',
            payload: x
        })
    }, [stoixeiaState.profil])

    // Dropdown ΠΡΟΦΙΛ
    const profilValues = (profil, col) => {
        let allValues = []

        profil.forEach(p =>
            allValues.push(p[col])
        )

        return allValues
    }
    // const profilsList = profilValues(profil, 1).map(p => <option>{p}</option>)

    return (
        <>
            {profilValues(profil, 1).map(p => <option key={p}>{p}</option>)}
        </>
    )
}

export default Profil
