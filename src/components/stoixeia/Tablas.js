import React from 'react'
import { tablasKoutiKapaki } from '../../pinakes/tablasKoutiKapaki'

const Tablas = () => {
    // Dropdown Ταμπλάς
    const tablasValues = (tablasKoutiKapaki, col) => {
        let allValues = []

        // OG
        tablasKoutiKapaki.forEach(s => // να το κάνω με reduce!
            s[col].includes("ΤΑΜΠΛΑ") && allValues.push(s[col])
        )

        return allValues
    }
    const tablasList = tablasValues(tablasKoutiKapaki, 1).map(s => <option key={s}>{s}</option>)


    return (
        <>
            {tablasList}
        </>
    )
}

export default Tablas

// check Map and filter an array at the same time
// var reduced = myArray.reduce(function(filtered, option) {
// if (option.assigned) {
//     var someNewValue = { name: option.name, newProperty: 'Foo' }
//     filtered.push(someNewValue);
// }
// return filtered;
// }, []);
