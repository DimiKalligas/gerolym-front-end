* Input select field, values depending on another field 
* αντί κάθε form control να έχει δικό του changeHandler, να πάει σε reducer 
* Να γίνει HEADER με logo, ΠΕΛΑΤΕΣ (Νέος, Ιστορικό πελάτη, λίστα), ΕΙΣΑΓΩΓΗ, Login/Register 
* Να συνδεθεί με back-end 
* Να κάνουμε save ενα προϊόν
* Να γίνει Dropdown με hover
* Tα LOGIN κλπ να πάνε δεξιά
* remove mm/dd/yyyy from date input OK σε Edge!
* Να βρω πως βάζω css στο bootstrap
* Οταν γίνεται Εγγραφή του προϊόντος, να υπάρχει επιλογή 'Εκτυπώσεις / Επιστροφή' με Modal
* στο ΠΕΛΑΤΗΣ να γίνεται add και να σώζεται στη βάση
* Sτο προϊόν να επιλέγεται πελάτης από τους υπάρχοντες
* το useState ΔΕΝ ενημερώνει όταν επιλέγουμε πελάτη -> να γίνει με useEffect
* Να το κάνω αλά expenses-list, με <Card> <Filter /> <List /> </Card> ???
* να φαίνεται σωστά η Ημ/νία: <h2>{new Date(prod.orderDate).toLocaleDateString('el-GR')}</h2>
* Αύξοντα αριθμό στο orderNo -> https://github.com/ramiel/mongoose-sequence / το κατήργησα
* Link με full details
* Από τη λίστα προϊόντων να μπορεί να γίνει εκτύπωση (σελίδα με γραφικά)
* Να φτιαχτεί το Εκτυπώσεις μετά από την εισαγωγή προϊόντος
* Να παίξουν όλα τα φύλλα του DisplayProduct Card
* το orderNo σωστά γίνεται increment στη βάση, στο state είναι πάντα 1! 
* Παραγωγές ανά πελάτη να βγει το underline (css: no-underline)
* να αδειάζουν τα πεδία μετά από Εγγραφή!
* ΝΑ ΚΑΝΩ VLOOKUP & INDEX/MATCH ΣΕ ΠΙΝΑΚΕΣ ΠΟΥ ΘΑ ΜΕΤΑΤΡΕΨΩ ΣΕ OBJECTS = vlookup2
* Να κάνω re-factor τα components με useContext
* ΠΩΣ κάνω persistent το state σε περίπτωση refresh?
    από https://stackoverflow.com/questions/64547044/persist-localstorage-with-usereducer
      const [cart, cartDispatch] = useReducer(
        cartReducer,
        [],
        // So we only have to pull from localStorage one time - Less file IO
        (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
      );
      useEffect(() => {
        // This is a side-effect and belongs in an effect
        localStorage.setItem(storageKey, JSON.stringify(cart));
      }, [cart]);
      
* το Product να μπει στο stoixeiaState!
* το Product να γίνει Rola
* Context: για να βλέπω Context και άρα να είμαι consumer, πρέπει να είμαι child του provider!!!
* Το μενου να γίνει fixed position
* Nα μπει το orderNo σε localStorage (καλύτερα cookie), και να διαβάζεται από db μόνο την πρώτη φορά
* οταν ζητάω παραγωγή Πελάτη να εμφανίζει όλο το state στις υπάρχουσες οθόνες
* η SingleProduct να πάρει όλο το data και να το ρίξει στο state OK
  && να το περάσει στη DisplayProduct για να το εμφανίσει!!!
* To Rolo να αλλάξει σε ΝΕΟ ΡΟΛΟ
* Οταν κάνω Επιστροφή από το Σχέδιο, να μην μπορώ να κάνω Εγγραφή
* Toast:   <ToastContainer autoClose={3000} /> στο App.js & import {toast} from 'react-toastify' & css 
* Λίστα Πελατών
* στο Πελάτες μετά την Εγγραφή -> μήνυμα & επιστροφή OK
* Form Validation & defaults στα Ρολά!
* Σελίδα Εκτυπώσεων Σχεδίων
* να ευθυγραμμιστεί το ΟΛΟΚΛΗΡΩΣΗ
* μπήκε pagination hook από https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
* να εκτυπώνονται σωστά τα Σχέδια
* να εκτυπώνονται και τα 'Σελίδα 1' με opacity
* Όταν χτυπάει λάθος, να κάνει focus στο element -> με useRef

# Rolo Form Validation
- στέλνω τη φόρμα στο back-end, από το μοντέλο, ότι σφάλμα μου το γυρίζει ως err.response.data.errField & err.response.data.errMessage
- αφού ξέρω ποιό πεδίο έχει σφάλμα, πάω εκεί μέσω ref, και τυπώνω το σφάλμα!

# Μένει:
0. Τεχνικό Εγχειρίδιο!
1. Bιομηχανικό σχέδιο toPrint fine-tuning BIOMp9 & αρ. παραγγελίας σε κάθε σελίδα χωρίς να παίρνει χώρο
2. η deleted να σώζεται κάπου..
3. η handleNeοRolo αυξάνει το orderNo, ενώ πριν δεν έχει σώσει! η setidiaEggrafh τι κάνει?
    Πότε επιτρέπεται να κάνουμε νέα παραγγελία?
5. Εύρεση Παραγωγών & με άλλα κριτήρια -> Ημ/νία & μέσω Πελάτη
6. check for memory leaks
7. optimization! να αποφύγω όλο το re-rendering στα Ρολά! & lazy loading όπως quotes-finished/App.js
7.1 σε ποιό child component να χρησιμοποιήσω useMemo?
8. backup, see: https://levelup.gitconnected.com/how-to-set-up-scheduled-mongodb-backups-with-a-bit-of-node-js-b81abebfa20
9. 2 manual, ένα τεχνικό, ένα για τον πελάτη
10. να μπει endless scroll στις Παραγωγές ανά Πελάτη
11. Να δοκιμάσω να κάνω wrap ολο το App.js με ένα Layout component, που ΑΥΤΟ θα έχει το Header, και τα props.children για πιο σωστά

# στον Product Controller να δοκιμάσω να επιστρέψω όλα τα errors

# το Kouti να το κάνω με reduce

# στο Git!

# Deployment!

# pagination & re-factor στο Productions

# στο model product να γυρίσω τον customer σε ObjectId

# Models: 
    Customer, OK
    Product (with link to Customer), OK
    User

# Authentication με JWT / OAuth

..
_BUGS_
# Aλλιώς εκτυπώνει το SingleProduct o Firefox και αλλιώς ο Edge..

# να κάνω την επιλογή πελάτη re-factor
γιατί δεν παίζει η loadAllCustomers στο Product.js? μπερδεύεται με τη function

# Το default του δεύτερου select δεν το γράφει στη βάση
να έχει το state το default?

# για να αναπτυχθεί το 'ΕΙΣΟΔΟΣ ΔΕΔΟΜΕΝΩΝ' πρέπει να τα έχω σε columns?


## ΠΩΣ ΜΕΤΑΤΡΕΠΩ TABLE
1. BeautifyTools.com, save to .json
2. convert to .js, add headers
3. μπορώ να ψάξω για τιμή σε όλο τον πίνακα με vlookup2

DYNAMIC Select values

 createSelectItems() {
     let items = [];         
     for (let i = 0; i <= this.props.maxValue; i++) {             
          items.push(<option key={i} value={i}>{i}</option>);   
          //here I will be creating my options dynamically based on
          //what props are currently passed to the parent component
     }
     return items;
 }  

onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}


  <Input type="select" onChange={this.onDropdownSelected} label="Multiple Select" multiple>
       {this.createSelectItems()}
  </Input>
