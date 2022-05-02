// έχοντας το col (... το 'Α1')
// βρίσκει αρ. στήλης ανάλογα το header (πχ. το 'Α1'=1)
// same as EXCEL INDEX
// π.χ. testVal = getCellValue(headers, data, 'B1', 1)
export const getCellValue = (headers, table, col, row) => {
    const myColumn = headers.indexOf(col)
    const myCell = table[row][myColumn]

    return myCell
}

// same as EXCEL MATCH
export const valueIsAt = (table, val) => {
    for (var i = 0; i < table.length; i++) {
        // βρες αν σε αυτή τη γραμμή υπάρχει και φέρε πίσω θέση: indexOf
        // return table[i].indexOf(val);

        // This loop is for inner-arrays
        for (var j = 0, l2 = table[i].length; j < l2; j++) {
            if (table[i][j] === val) {
                // console.log(i, j)
                return [j, i]
            }
        }
    }
    return ([-1, -1])
}

// σαν vlookup, κάνει match στη στήλη 0
export const vlookup = (val, table, colNo) => {
    for (var i = 0; i < table.length; i++) {
        // console.log(table[i][0])
        let match = String(val).localeCompare(table[i][0])
        if (match === 0) return (table[i][colNo])
    }
    return -1
}

// ψάχνει για τιμή σε ΟΛΟ τον πίνακα
export const vlookup2 = (val, table, colNo) => {
    for (var i = 0; i < table.length; i++) {

        // This loop is for inner-arrays
        for (var j = 0, l2 = table[i].length; j < l2; j++) {
            if (table[i][j] === val) {
                // console.log('returning', table[i][colNo])
                return (table[i][colNo])
            }
        }
        // let match = String(val).localeCompare(table[i][0])
        // if (match === 0) return (table[i][colNo])
    }
    return ' '
}

// παρόμοια με vlookup2, αντί για ισότητα ψάχνει για substring
// export const vlookupIncludes = (val, table, colNo) => {
//     for (var i = 0; i < table.length; i++) {

//         // console.log('looking for', val, typeof (val))
//         // This loop is for inner-arrays
//         for (var j = 0, l2 = table[i].length; j < l2; j++) {
//             let cellVal = toString(table[i][j])
//             console.log('looking for', val, 'in', cellVal, typeof (cellVal))
//             let success = cellVal.includes(val)
//             if (success) {
//                 console.log('ekana match sto', table[i][j])
//                 return (table[i][colNo])
//             }
//         }
//     }
//     return ' '
// }

export const vlookupIncludes = (val, table, colNo) => {
    let success, myCell

    for (var i = 0; i < table.length; i++) {
        // console.log(table[i][colNo])
        myCell = toString(table[i][colNo])
        success = myCell.indexOf(val)
        // console.log('looking for', val, 'in', table[i][colNo], success)
        // success = table[i].findIndex(e => e.includes(val))
        // if (success) return (table[i][colNo])
    }
    return ' '
}

// επιστρέφει την αμέσως επόμενη τιμή από πίνακα που πρέπει να είναι sorted
export const nextValue = (val, table) => {
    let l = 0
    let x

    // console.log('O Pinakas ', table, ' exei mhkos ', table.length)
    while (l < table.length) {
        if (!(val > parseInt(table[l][0]))) {
            // console.log(')(&)(&)(&)(&)(&)(&)(&')
            // console.log('returning', table[l][0])
            return (table[l][0])
        }
        // console.log('*(*(*(*(*(*(*(*(*(*(*(*(*(*(*(*(*(*(')
        // console.log('Looking for ', val, ' in ', table[l][0])
        l++
    }

    return 0
}

// export const vlookup2 = (val, table, colNo) => {
//     for (var i = 0; i < table.length; i++) {

//         // This loop is for inner-arrays
//         for (var j = 0, l2 = table[i].length; j < l2; j++) {
//             // if (table[i][j] === val) {
//             let match = String(val).localeComparetable(table[i][j])
//             if (match === 0) return (table[i][colNo])
//         }
//     }
//     // let match = String(val).localeCompare(table[i][0])
//     // if (match === 0) return (table[i][colNo])
//     return -1
// }

// JSON in this table, look for val1, and return
// export const jsonLookup = (table, val1, val2) => {
//     table.entries(jsonObj).forEach(([key, value]) => {
//         // do something with key and val
//     });
// }
// so, MATCH returns WHERE a value is at, and INDEX gets that value that is in the same position ON ANOTHER table

// for ARRAY of OBJECTS
// check https://parsebox.io/dthree/ftwbkpzhrzyv
// return input.find(x => x.id === '45').foo;
// return input.findIndex(x => x.id === '455');
// return input.filter(x => x.id === '45');
// return input.filter(x => x.id === '45').map(x => x.foo);



// var myApp = myApp || {};
// myApp.arrayObj = {
//     indexOf: function (myArray, searchTerm, property) {
//         for (var i = 0; i < myArray.length; i++) {
//             if (myArray[i][property] === searchTerm) return i;
//         }
//         return -1;
//     },
//     indexAllOf: function (myArray, searchTerm, property) {
//         var ai = [];
//         for (var i = 0; i < myArray.length; i++) {
//             if (myArray[i][property] === searchTerm) ai.push(i);
//         }
//         return ai;
//     },
//     lookup: function (myArray, searchTerm, property, firstOnly) {
//         var found = [];
//         var i = myArray.length;
//         while (i--) {
//             if (myArray[i][property] === searchTerm) {
//                 found.push(myArray[i]);
//                 if (firstOnly) break; //if only the first 
//             }
//         }
//         return found;
//     },
//     lookupAll: function (myArray, searchTerm, property) {
//         return this.lookup(myArray, searchTerm, property, false);
//     },
//     remove: function (myArray, searchTerm, property, firstOnly) {
//         for (var i = myArray.length - 1; i >= 0; i--) {
//             if (myArray[i][property] === searchTerm) {
//                 myArray.splice(i, 1);
//                 if (firstOnly) break; //if only the first term has to be removed
//             }
//         }
//     },
//     removeByIndex: function (myArray, index) {
//         myArray.splice(index, 1);
//     }
// };