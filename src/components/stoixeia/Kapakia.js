import React from 'react'
import { tablasKoutiKapaki } from '../../pinakes/tablasKoutiKapaki'
import { useStoixeiaContext } from '../../context/StoixeiaContext'

const Kapakia = () => {
    // const { stoixeiaState, dispatch } = useStoixeiaContext()

    // Dropdown Καπάκια
    const kapakiaValues = (tablasKoutiKapaki, col) => {
        let allValues = []

        tablasKoutiKapaki.forEach(k => // να το κάνω με reduce!
            k[col].includes("ΚΑΠΑΚΙ") && allValues.push(k[col])
        )

        return allValues
    }
    const kapakiaList = kapakiaValues(tablasKoutiKapaki, 1).map(k => <option key={k}>{k}</option>)


    return (
        <>
            {kapakiaList}
        </>
    )
}

export default Kapakia
