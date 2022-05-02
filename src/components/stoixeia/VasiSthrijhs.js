import React, { useEffect } from 'react'
import { vlookup2 } from '../../functions/tables'
import { vashSthrijhs } from '../../pinakes/vashSthrijhs'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const VasiSthrijhs = () => {
    const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown Βάσης Στήριξης
    const vasiValues = (vashSthrijhs, col) => {
        let allValues = []

        vashSthrijhs.forEach(a =>
            allValues.push(a[col])
        )

        return allValues
    }
    const vasiList = vasiValues(vashSthrijhs, 1).map(a => <option key={a}>{a}</option>)

    // ΑΛΛΑΓΗ κωδικού Βάσης Στήριξης
    useEffect(() => {
        let x = vlookup2(stoixeiaState.vashSthrijhs, vashSthrijhs, 0)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'vashSthrijhsKwd',
            payload: x
        })
    }, [stoixeiaState.vashSthrijhs])

    return (
        <>
            {vasiList}
        </>
    )
}

export default VasiSthrijhs


