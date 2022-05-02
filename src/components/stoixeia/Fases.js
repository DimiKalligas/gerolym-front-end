import React from 'react'
import { fasaTelikouProfil } from '../../pinakes/fasaTelikouProfil'

const Fasa = () => {

    // Dropdown Ταμπλάς
    const fasesValues = (fasaTelikouProfil, col) => {
        let allValues = []

        // OG
        fasaTelikouProfil.forEach(f => // να το κάνω με reduce!
            allValues.push(f[col])
        )

        return allValues
    }
    const fasesList = fasesValues(fasaTelikouProfil, 1).map(f => <option key={f}>{f}</option>)


    return (
        <>
            {fasesList}
        </>
    )
}

export default Fasa