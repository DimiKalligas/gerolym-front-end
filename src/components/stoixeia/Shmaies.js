import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { shmaiesRolou } from '../../pinakes/shmaiesRolou'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Shmaies = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    useEffect(() => {

        // ΑΛΛΑΓΗ κωδικού ΠΡΟΦΙΛ
        dispatch({
            type: 'HANDLE TEXT',
            field: 'shmaiesKwd',
            payload: vlookup2(stoixeiaState.shmaies, shmaiesRolou, 0)
        })

        // Αλλαγή Ύψος Σημαίας mm
        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypsosShmaias',
            payload: vlookup2(stoixeiaState.shmaies, shmaiesRolou, 2)
        })

        // Αλλαγή Μήκος Σημαίας mm
        dispatch({
            type: 'HANDLE TEXT',
            field: 'mhkosShmaias',
            payload: vlookup2(stoixeiaState.shmaies, shmaiesRolou, 3)
        })

        // console.log('ΣΗΜΑΙΕΣ')
        // console.log('Σημαία έχουμε', stoixeiaState.shmaies)

    }, [stoixeiaState.shmaies])

    // Dropdown Σημαίες
    const shmaiesValues = (shmaiesRolou, col) => {
        let allValues = []

        shmaiesRolou.forEach(s =>
            allValues.push(s[col])
        )

        return allValues
    }
    const shmaiesList = shmaiesValues(shmaiesRolou, 1).map(s => <option key={s}>{s}</option>)

    return (
        <>
            {shmaiesList}
        </>
    )
}

export default Shmaies

