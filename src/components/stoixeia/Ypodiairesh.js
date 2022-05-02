import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { ypodiaireshPinakas } from '../../pinakes/ypodiaireshPinakas'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Ypodiairesh = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown ΥΠΟΔΙΑΙΡΕΣΗ
    const ypodiaireshValues = (ypodiaireshPinakas, col) => {
        let allValues = []

        ypodiaireshPinakas.forEach(y =>
            allValues.push(y[col])
        )

        return allValues
    }
    const ypodiaireshList = ypodiaireshValues(ypodiaireshPinakas, 1).map(y => <option key={y}>{y}</option>)

    // ΥΠΟΔΙΑΙΡΕΣΗ ΚΩΔΙΚΑΣ
    useEffect(() => {
        let x = vlookup2(stoixeiaState.proteinomenhYpodiairesh, ypodiaireshPinakas, 0)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypodiaireshKwd',
            payload: x
        })
    }, [stoixeiaState.proteinomenhYpodiairesh])

    return (
        <>
            {ypodiaireshList}
        </>
    )
}

export default Ypodiairesh
