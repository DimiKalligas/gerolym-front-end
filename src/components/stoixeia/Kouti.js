import React from 'react'
import { tablasKoutiKapaki } from '../../pinakes/tablasKoutiKapaki'

const Kouti = () => {
    // Dropdown Κουτιά
    const koutiaValues = (tablasKoutiKapaki, col) => {
        let allValues = []

        // OG
        tablasKoutiKapaki.forEach(s => // να το κάνω με reduce!
            s[col].includes("ΚΟΥΤΙ ") && allValues.push(s[col])
        )
        allValues.push('ΧΩΡΙΣ ΚΟΥΤΙΑ')

        return allValues
    }
    const koutiaList = koutiaValues(tablasKoutiKapaki, 1).map(k => <option key={k}>{k}</option>)


    return (
        <>
            {koutiaList}
        </>
    )
}


export default Kouti
