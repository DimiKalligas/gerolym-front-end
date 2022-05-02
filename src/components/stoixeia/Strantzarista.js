import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { strantzarista } from '../../pinakes/strantzarista'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Strantzarista = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // ΑΛΛΑΓΗ κωδικού ΣΤΡΑΝΤΖΑΡΙΣΤΑ
    useEffect(() => {

        dispatch({
            type: 'HANDLE TEXT',
            field: 'strantzaristaKwd',
            payload: vlookup2(stoixeiaState.strantzarista, strantzarista, 0)
        })

        // 2oν Άλλαξε το Πλάτος mm
        dispatch({
            type: 'HANDLE TEXT',
            field: 'platosStrantzaristou',
            payload: vlookup2(stoixeiaState.strantzarista, strantzarista, 3)
        })

        // 3ον Άλλαξε το Βάθος mm
        dispatch({
            type: 'HANDLE TEXT',
            field: 'vathosStrantzaristou',
            payload: vlookup2(stoixeiaState.strantzarista, strantzarista, 3)
        })

        if (stoixeiaState.strantzarista === "ΧΩΡΙΣ ΣΤΡΑΤΖΑΡΙΣΤΟ - ΚΟΙΛΟΔΟΚΟ") {
            // 4. Άλλαξε τη Θέση Στραντζαριστού
            // console.log('Θέση Στραντζαριστού πριν', stoixeiaState.thesiStrantzaristou)
            dispatch({
                type: 'HANDLE TEXT',
                field: 'thesiStrantzaristou',
                payload: "ΟΧΙ ΣΤΡΑΝΤΖΑ"
            })
            // console.log('Θέση Στραντζαριστού μετά', stoixeiaState.thesiStrantzaristou)
            // 5. Άλλαξε και τις γωνίες στήριξης
            dispatch({
                type: 'HANDLE TEXT',
                field: 'gwniesSthrijhs',
                payload: "ΟΧΙ"
            })
        }
    }, [stoixeiaState.strantzarista])

    // Dropdown ΣΤΡΑΝΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ
    const strantzaristaValues = (strantzarista, col) => {
        let allValues = []

        strantzarista.forEach(S =>
            allValues.push(S[col])
        )

        return allValues
    }
    const strantzaristaList = strantzaristaValues(strantzarista, 1).map(s => <option key={s}>{s}</option>)

    return (
        <>
            {strantzaristaList}
        </>
    )
}

export default Strantzarista
