import React, { useState, useReducer, useEffect, useRef } from 'react'
import axios from 'axios'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { getLastOrderNo, createProduct } from '../functions/product'
import { vlookup2, nextValue } from '../functions/tables'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import StoixeiaContext from '../context/StoixeiaContext'
import RoloModal from './UI/RoloModal'
import SxedioMonofasiko from '../pages/SxedioMonofasiko'
import SxedioBiomhxaniko from '../pages/SxedioBiomhxaniko'
import Profil from './stoixeia/Profil'
import Odhgos from './stoixeia/Odhgos'
import VasiSthrijhs from './stoixeia/VasiSthrijhs'
import Strantzarista from './stoixeia/Strantzarista'
import Ypodiairesh from './stoixeia/Ypodiairesh'
import Shmaies from './stoixeia/Shmaies'
import Tablas from './stoixeia/Tablas'
import Kouti from './stoixeia/Kouti'
import Kapakia from './stoixeia/Kapakia'
import Fasa from './stoixeia/Fases'
import Aksonas from './stoixeia/Aksonas'
import Moter from './stoixeia/Moter'
import Kouzineto from './stoixeia/Kouzineto'
import { profil } from '../pinakes/profil'
import { odhgos } from '../pinakes/odhgos'
import { strantzarista } from '../pinakes/strantzarista'
import { aksones } from '../pinakes/aksones'
import { aksonakiaFlantzes } from '../pinakes/aksonakiaFlantzes'
import { shmaiesRolou } from '../pinakes/shmaiesRolou'
import { plastikesTapes } from '../pinakes/plastikesTapes'
import { ypodiaireshPinakas } from '../pinakes/ypodiaireshPinakas'
import { ypodiaireshKouti } from '../pinakes/ypodiaireshKouti'
import { agyria } from '../pinakes/agyria'
import { elathrioAjonasF602 } from '../pinakes/elathrioAjonasF60-2'
import { elathrioAjonasF762 } from '../pinakes/elathrioAjonasF76-2'
import { epiloghKoutiTabla } from '../pinakes/epiloghKoutiTabla'

function Rolo() {
    const [showModal, setShowModal] = useState(false);
    const [customers, setCustomers] = useState([])
    const [sxedio, setSxedio] = useState('')
    const [testing, settesting] = useState(false)
    const [idiaEggrafh, setidiaEggrafh] = useState(false)
    const [customerError, setCustomerError] = useState('')
    const [profilError, setProfilError] = useState('')
    const [anoigmaError, setAnoigmaError] = useState('')
    const [ypsosError, setYpsosError] = useState('')
    const customerRef = useRef()
    const profilRef = useRef()
    const anoigmaRef = useRef()
    const ypsosRef = useRef()

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const [odhgosColor, setodhgosColor] = useState([{ title: 'red', button: "false" }])
    // const [aksonasColor, setaksonasColor] = useState([{ title: "red", button: "false" }])
    // const [ypodiaireshColor, setypodiaireshColor] = useState([{ title: "red", button: "false" }])
    // const [varosKourtinasColor, setvarosKourtinasColor] = useState('red')
    // const [shmaiaColor, setshmaiaColor] = useState([{ title: 'red', button: "false" }])
    // const [tablasColor, settablasColor] = useState([{ title: "red", button: "false" }])
    // const [ejwterikhDiastashPerieliksisColor, setejwterikhDiastashPerieliksisColor] = useState('red')
    // const [koutiaColor, setkoutiaColor] = useState([{ title: 'red', button: "false" }])
    // const [plithosAgyriwnColor, setplithosAgyriwnColor] = useState([{ title: 'red', button: "false" }])
    // const [fasesColor, setfasesColor] = useState([{ title: 'red', button: "false" }])
    // const [kouzinetoColor, setkouzinetoColor] = useState('red')

    const initialState = {
        customer: '',
        orderDate: Date.now(),
        deliveryDate: '',
        pithaniDeliveryDate: '',
        orderNo: 1,
        profil: '',
        profilKwd: '',
        typosRolou: 'ΜΟΝΟΦΑΣΙΚΟ',
        tyligma: 'ΚΑΝΟΝΙΚΟ',
        thesi: 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ',
        anoigmaXwrou: 0,
        ypsosXwrou: 0,
        proteinomenosOdhgos: '',
        odhgos: '',
        odhgosKwd: '',
        odhgosIndex: 0,
        strantzarista: '',
        strantzaristaKwd: '',
        thesiStrantzaristou: '',
        gwniesSthrijhs: 'ΟΧΙ',
        platosStrantzaristou: '',
        vathosStrantzaristou: '',
        katharoAnoigma: 0,
        katharoYpsos: 0,
        proteinomenoiAksones: '',
        aksonas: '',
        aksonasKwd: '',
        aksonasIndex: '',
        aksonasPahos: 0,
        aksonasMhkos: 0,
        aksonaki: '',
        aksonakiKwd: '',
        aksonakiIndex: '',
        aksonakiKouzinetou: '',
        aksonakiKouzinetouKwd: '',
        aksonakiKouzinetouIndex: '',
        ypsosShmaias: 0,
        maxIndexF60: 0,
        maxIndexF76: '',
        proteinomenaElathria: '',
        elathrioA: '',
        elathrioAkwd: '',
        elathrioAtem: 2,
        elathrioB: '',
        elathrioBkwd: '',
        elathrioBtem: 2,
        elathrioC: '',
        elathrioCkwd: '',
        elathrioCtem: 2,
        shmaies: '',
        shmaiesKwd: '',
        mhkosShmaias: '',
        proteinomenoKouti: '',
        proteinomenosTablas: '',
        tablades: '',
        tabladesKwd: '',
        koutia: 'ΧΩΡΙΣ ΚΟΥΤΙΑ',
        koutiaKwd: '',
        lamakiaMonofKoutiou: '',
        telikoYpsosRolou: 0,
        fases: '',
        tzamakia: '',
        perieliksi: 0,
        mhkosProfilKophs: 0,
        plithosAgyriwn: 0,
        proteinomenoPlithosAgyriwn: 0,
        resultHook: 0,
        agyria: '',
        agyriaKwd: '',
        resultGuideOverSide: '',
        thikesSthrijhsOdhgwn: 'OXI',
        ypodiairesh: '',
        ypodiaireshKwd: '',
        ypsosMeiwthra: 0,
        arhikoYpsosKourtinas: 0,
        varosKourtinas: 0,
        sxesh: '',
        moter: '',
        moterKwd: '',
        moterThesi: '',
        thesiParoxhsReumatos: '',
        proteinomenoKouzineto: '',
        kouzineto: '',
        kouzinetoKwd: '',
        apasfaliseis: '',
        apasfaliseisKwd: '',
        packaging: '',
        koutiaXwrisSkotia: '',
        steganopoihshTampla: '',
        anypsotikoMeso1: '',
        anypsotikoMeso2: '',
        anypsotikoMeso3: '',
        anypsotikoMeso4: '',
        ilektrologikhEgatastash1: '',
        ilektrologikhEgatastash2: '',
        ilektrologikhEgatastash3: '',
        ilektrologikhEgatastash4: '',
        ilektrologikhEgatastash5: '',
        tainiaSyskevasias: '',
        tampelaSimansis: '',
        kleidariaAsfaleias: '',
        antianemia: '',
        stopRolou: '',
        xeirolavh: '',
        vashSthrhjis: '',
        vashSthrijhsKwd: '',
        plithosVasewnSthrijhsOdhgou: 0,
        xrwma: 0,
        proteraiothta: 'ΚΑΝΟΝΙΚΗ',
        diastashThikisSthrijhsOdhgwn: 0,
        kolonaSthrijhsOdhgwn: '',
        ypsosOdhgou: 0,
        epipleonYpsos: 0,
        diastashKolonasSthrijhsOdhgwn: 0,
        lamaSthrijhs80x10: 0,
        gwniaSthrijhs80x10: 0,
        gwniaSthrijhs80x80: 0,
        aerasProfilOdhgou: 30,
        arParaggelias2: 0,
        ypsosDokariou: 0,
        parasouter: '',
        parathyraki: '',
        proteinomenhShmaia: '',
        kwdikosProteinomenhsShmaias: '',
        indexProteinomenhsShmaias: '',
        proteinomenesFases: '',
        ypsosDokou: 0,
        ypsosStrantzaristou: 0,
        plastikesTapesKwd: '',
        pahosTapas: 0,
        plithosProfil: 0,
        telikoYpsosKourtinas: 0,
        epifaneiaEgatastashs: '',
        J322: 0,
        G311: 0,
        mhkosSpiral: 0,
        monviom: '' // ΜΟΝΟΦΑΣΙΚΟ ή ΒΙΟΜΗΧΑΝΙΚΟ
    }
    // const [loading, setLoading] = useState(false)

    // const history = useHistory();

    ////////////////////////////////////////////////////
    // const [stoixeiaState, formdispatch] = useReducer(formReducer, initialState);

    // σε περίπτωση που δεν θέλουμε να χάνεται το state στο refresh
    // έτσι όμως πως μπορούμε να ξεκινήσουμε νέο State?
    // const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer,
    //     // initialState
    //     [],
    //     (initialState) => JSON.parse(localStorage.getItem('stoixeiastate')) || initialState
    // );

    // Ή να διαβάζει πάντα στο state από το localStorage, και να μπορεί να το μηδενίσει με button
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, initialState)
    const providerState = {
        stoixeiaState,
        dispatch
    }

    //// 2 USEEFFECT ------ ΝΑ ΔΙΟΡΘΩΘΕΙ!!!!!!!
    // ΠΡΩΤΑ ΠΡΕΠΕΙ ΝΑ ΔΙΑΒΑΖΕΙ ΑΠΟ ΤΗ ΒΑΣΗ
    // Ή θα διαβάζει το state από το localStorage (και θα μπορούμε να το μηδενίζουμε)
    // Ή θα πρέπει να ξεκινάει το orderNo από το 1 και να αρχικοποιεί το state (με CLEAR_FORM?)
    useEffect(() => {
        setSxedio('')
        setShowModal(false)
        window.scrollTo(0, 0)
        // ΔΗΜΙΟΥΡΓΩ ΛΙΣΤΑ ΑΠΟ ΠΕΛΑΤΕΣ
        const getCustomers = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}/customers`);
            setCustomers(response.data);
        }
        getCustomers();

        // let allData = JSON.parse(localStorage.getItem('stoixeiastate'))
        // ΒΡΙΣΚΩ ΤΟ orderNo ΑΠΟ ΤΗ ΒΑΣΗ
        try {
            getLastOrderNo()
                .then(lastRec => {
                    // console.log('ΞΕΚΙΝΑΕΙ ΤΟ APP, last orderNo is:', lastRec.data)
                    localStorage.setItem('lastOrderNo', lastRec.data)
                    dispatch({
                        type: 'HANDLE TEXT',
                        field: 'orderNo',
                        payload: lastRec.data + 1
                    })
                    // setLastOrderNo(lastRec.data[0].orderNo + 1)
                })
        }
        catch (err) {
            console.log('In UseEffect error:', err)
        }

        testing && console.log('Elathria A', stoixeiaState.elathrioAtem)
        testing && console.log('Elathrio B', stoixeiaState.elathrioB)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try { // const res = 
            testing && console.log('Stelnw sthn createProduct:', stoixeiaState)
            await createProduct({ ...stoixeiaState })
            localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
            localStorage.setItem('lastOrderNo', JSON.stringify(stoixeiaState.orderNo));
            setShowModal(true)
        }
        catch (err) {
            console.log(err.response.status)
            if (err.response.status === 400) {
                toast.warning('Προέκυψε Σφάλμα.');

                // Πως θα πάρω όλη τη λίστα με τα errors? controller line #310
                // let errList = []
                // errList = err.response.data.err
                // console.log(err.response.data.err)
                // errList.forEach(e => console.log(e))
                console.log(err.response.data.errField, err.response.data.errMessage)
                let errField = err.response.data.errField
                let errMessage = err.response.data.errMessage

                // let error = err.response.data.err
                // let errorField = error.split(':')[1].trim()
                // let errMessage = error.split(',')[1].trim()
                console.log('Error field:', errField)
                console.log('Error message:', errMessage)

                switch (errField) {
                    case ('customer'): setCustomerError(errMessage)
                        setTimeout(function () { customerRef.current.focus() }) // hack to allow Chrome default scroll before our scroll
                        // window.scrollBy(0, -60) firefox hack
                        break;
                    case ('profil'): setProfilError(errMessage)
                        setTimeout(function () { profilRef.current.focus() })
                        break;
                    case ('anoigmaXwrou'): setAnoigmaError(errMessage)
                        setTimeout(function () { anoigmaRef.current.focus() })
                        break;
                    case ('ypsosXwrou'): setYpsosError(errMessage)
                        setTimeout(function () { ypsosRef.current.focus() })
                        break;
                    default: console.log('Αλλο πρόβλημα..')
                }


                // console.log('whole error', err.response.data.err)
                // console.log('Problem in field:', error.split(':')[1].trim(), error.split(':')[2].trim())
            }
        }

        // let x = err.response.data.err + ''
        // let errorField = x.split(',')[0]
        // console.log(errorField)
        // // console.log('error in function', x.split(',')[0]);
        // toast.warning(errorField.split(':')[2]);
    }
    // finally {
    //     console.log('in handleSubmit')
    // }
    // console.log('Apo Stoixeia:', stoixeiaState.anoigmaXwrou) OK!

    // console.log('Sth HandleSubmit paw na swsw:', e.target.name)
    // dispatch({  // AKYRO????????
    //     type: 'HANDLE TEXT',
    //     field: e.target.name,
    //     payload: e.target.value
    // })
    // }

    // useEffect(() => {
    //     // // NA ΔΟΚΙΜΑΣΩ ΝΑ ΠΑΕΙ ΠΑΛΙ ΣΤΑ functions...
    //     // const getCustomers = async () => {
    //     //     const response = await axios.get(`${process.env.REACT_APP_API}/customer`);
    //     //     setCustomers(response.data);
    //     // }
    //     // getCustomers();

    //     // // const getLastRec = async () => {
    //     // //     const lastOrder = await axios.get(`${process.env.REACT_APP_API}/lastOrder`);
    //     // //     // .sort([['orderNo', 'asc']])
    //     // //     // .exec()
    //     // //     setLastOrderNo(lastOrder.orderNo + 1)
    //     // //     console.log('In controller, latest orderNo:', lastOrderNo)
    //     // // }
    //     // getLastOrderNo()
    //     //     .then(lastRec => {
    //     //         // console.log('got back lastrec', lastRec.data[0].orderNo)
    //     //         // setLastOrderNo(lastRec.data[0].orderNo + 1)
    //     //         console.log('************************')
    //     //         console.log('In getLastOrder, received', lastRec.data[0])
    //     //         console.log('************************')
    //     //         dispatch({
    //     //             type: 'HANDLE TEXT',
    //     //             field: 'orderNo',
    //     //             payload: lastRec.data[0].orderNo + 1
    //     //         })
    //     //         localStorage.setItem('lastOrderNo', JSON.stringify(stoixeiaState.orderNo));
    //     //     })

    // }, [])

    // useEffect(() => {
    //     // This is a side-effect and belongs in an effect
    //     localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
    // }, [stoixeiaState]);

    ///////////////////////////////////////////////////////////////////////////

    // ΑΛΛΑΓΗ Κωδ. ΑΞΟΝΑΚΙ
    useEffect(() => {
        let x = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 0)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonakiKwd',
            payload: x
        })
        // ΑΛΛΑΓΗ ΑΞΟΝΑΚΙ index
        let y = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 2)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonakiIndex',
            payload: y
        })
    }, [stoixeiaState.aksonaki])

    // // TABLE I - ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ
    useEffect(() => {
        let x;

        if (stoixeiaState.katharoAnoigma > 0 && stoixeiaState.katharoAnoigma < 4500) x = 'ΟΔΗΓΟΣ 7cm'
        else if (stoixeiaState.katharoAnoigma >= 4500 && stoixeiaState.katharoAnoigma < 8000) x = 'ΟΔΗΓΟΣ 12cm'
        else x = "Εκτός ορίων !"

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenosOdhgos',
            payload: x
        })
    }, [stoixeiaState.katharoAnoigma])

    // // TABLE R - ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ
    useEffect(() => {
        let x, y;
        let FULL = vlookup2(stoixeiaState.odhgosKwd, odhgos, 3) // FULL
        let PLATOS = vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 3) // PLATOS mm

        // testing &&  console.log('ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ')
        // testing &&  console.log('1. odhgosKwd', stoixeiaState.odhgosKwd)
        // testing &&  console.log('2. anoigmaXwrou', stoixeiaState.anoigmaXwrou)
        // testing &&  console.log('3. FULL', FULL)
        // testing &&  console.log('4. VATHOS', PLATOS)
        // testing &&  console.log('5. Varos Kourtinas', stoixeiaState.varosKourtinas)

        if (stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') {
            x = stoixeiaState.anoigmaXwrou - (2 * FULL)
                - (2 * PLATOS)
        }
        else x = stoixeiaState.anoigmaXwrou

        // ΘΕΛΕΙ ΤΙΜΗ ΣΤΟΝ ΟΔΗΓΟ
        // testing &&  console.log('Anoigma xwrou:', stoixeiaState.anoigmaXwrou) // OK
        // testing &&  console.log('Odhgos Full', vlookup2(stoixeiaState.odhgosKwd, odhgos, 3)) // ΟΚ
        // testing &&  console.log('Strantzarista Vathos', vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4)) // OK
        // testing &&  console.log('Bazw sto katharo anoigma thn timh', parseInt(x)) // OK

        testing && console.log('ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ', stoixeiaState.katharoAnoigma)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'katharoAnoigma',
            payload: parseInt(x)
        })
    }, [stoixeiaState.thesi, stoixeiaState.anoigmaXwrou, stoixeiaState.odhgosKwd, stoixeiaState.strantzaristaKwd])

    // ΤΕΛΙΚΟ ΚΑΘΑΡΟ ΥΨΟΣ ΡΟΛΟΥ
    useEffect(() => {
        let x;
        let ypsosShmaias = vlookup2(stoixeiaState.shmaies, shmaiesRolou, 2)

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou - stoixeiaState.ypsosMeiwthra
        else if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou - stoixeiaState.ypsosMeiwthra - stoixeiaState.ypsosDokariou
        else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') x = stoixeiaState.ypsosXwrou - stoixeiaState.ypsosShmaias - stoixeiaState.ypsosDokariou

        testing && console.log('ΤΕΛΙΚΟ ΥΨΟΣ ΡΟΛΟΥ ', x, ' ypsosXwrou - ypsosShmaias - ypsosDokariou')
        testing && console.log(' 1. ypsosXwrou', stoixeiaState.ypsosXwrou)
        // testing &&  console.log(' 2. ypsosShmaias', stoixeiaState.ypsosShmaias)
        testing && console.log(' 2.1. ypsosShmaias', stoixeiaState.shmaies, ypsosShmaias)
        testing && console.log(' 3. ypsosDokariou', stoixeiaState.ypsosDokariou)
        testing && console.log(' 4. ypsosMeiwthra', stoixeiaState.ypsosMeiwthra)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'telikoYpsosRolou',
            payload: x
        })
        // dispatch({
        //     type: 'HANDLE TEXT',
        //     field: 'ypsosShmaias',
        //     payload: ypsosShmaias
        // })
    }, [stoixeiaState.typosRolou, stoixeiaState.thesi, stoixeiaState.ypsosXwrou, stoixeiaState.ypsosShmaias, stoixeiaState.ypsosDokariou, stoixeiaState.ypsosMeiwthra])

    // TABLE S - ΚΑΘΑΡΟ ΥΨΟΣ 
    useEffect(() => {
        let x;

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou
        else if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou - stoixeiaState.ypsosMeiwthra
        else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou
        else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') x = stoixeiaState.ypsosXwrou - stoixeiaState.ypsosShmaias
        else x = "Προσοχή!"

        // console.log('stoixeiaState.typosRolou', stoixeiaState.typosRolou)
        // console.log('stoixeiaState.thesi', stoixeiaState.thesi)

        testing && console.log('ΚΑΘΑΡΟ ΥΨΟΣ', x)
        testing && console.log(' 1. ypsosXwrou', stoixeiaState.ypsosXwrou)
        testing && console.log(' 2. ypsosShmaias', stoixeiaState.ypsosShmaias)
        testing && console.log(' 3. ypsosMeiwthra', stoixeiaState.ypsosMeiwthra)

        // testing &&  console.log('Allazw to katharo ypsos se', x)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'katharoYpsos',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.thesi, stoixeiaState.ypsosXwrou, stoixeiaState.ypsosShmaias, stoixeiaState.ypsosMeiwthra])

    // // ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ
    useEffect(() => {
        let x;

        let kgm2 = vlookup2(stoixeiaState.profilKwd, profil, 8)

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            testing && console.log('ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ')
            testing && console.log(' 1. AnoigmaXwrou', stoixeiaState.anoigmaXwrou)
            testing && console.log(' 2. YpsosXwrou', stoixeiaState.ypsosXwrou)
            testing && console.log(' 3. kgm2', kgm2)

            if ((kgm2 * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 700)
                && (kgm2 * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 >= 300)) {
                x = 'ΑΞΟΝΑΣ Φ219-ΧΩΡΙΣ ΕΛΑΤΗΡΙΟ-ΒΑΜΜΕΝΟΣ'
            } else
                if (kgm2 * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 300) { x = 'ΑΞΟΝΑΣ Φ159-ΧΩΡΙΣ ΕΛΑΤΗΡΙΟ-ΒΑΜΜΕΝΟΣ' }
        } else { // if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ'
            // testing &&  console.log('Kg/m2', vlookup2(stoixeiaState.profilKwd, profil, 8))
            // testing &&  console.log('Olo to Vlookup2', vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000)

            if (kgm2 * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 <= 350) {
                if ((stoixeiaState.anoigmaXwrou < 4700) && (kgm2 * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 160)) {
                    x = 'ΑΞΟΝΑΣ Φ60-ΜΕ ΕΛΑΤΗΡΙΟ-ΓΑΛΒΑΝΙΖΕ'
                }
                else x = 'ΑΞΟΝΑΣ Φ76-ΜΕ ΕΛΑΤΗΡΙΟ-ΓΑΛΒΑΝΙΖΕ'
            }
        }
        // testing &&  console.log(vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou) OK
        // testing &&  console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou)) OK

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenoiAksones',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.profilKwd, stoixeiaState.anoigmaXwrou, stoixeiaState.ypsosXwrou])

    // ΜΗΚΟΣ ΣΠΙΡΑΛ mm
    useEffect(() => {
        // =F6-(VLOOKUP(B6;DATA!$D$3:$K$75;3;0)*2)
        let YPSOS = vlookup2(stoixeiaState.profilKwd, profil, 2)
        let x = stoixeiaState.telikoYpsosKourtinas - (YPSOS * 2)

        testing && console.log('ΜΗΚΟΣ ΣΠΙΡΑΛ ', x, 'telikoYpsosKourtinas - (YPSOS * 2)')
        testing && console.log(' 1. Tελικό Ύψος Κουρτίνας', stoixeiaState.telikoYpsosKourtinas)
        testing && console.log(' 2. YPSOS', YPSOS)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'mhkosSpiral',
            payload: x
        })
    }, [stoixeiaState.telikoYpsosKourtinas, stoixeiaState.profilKwd])

    // ΠΑΧΟΣ & MHKOΣ ΑΞΟΝΑ
    useEffect(() => {
        let m
        let p = vlookup2(stoixeiaState.aksonasKwd, aksones, 2)
        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            m = stoixeiaState.mhkosProfilKophs - 2 * 30 + 2 * vlookup2(stoixeiaState.profilKwd, profil, 12)
        }
        else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            m = stoixeiaState.mhkosProfilKophs - stoixeiaState.aerasProfilOdhgou - 10 + (2 * vlookup2(stoixeiaState.profilKwd, profil, 12))
        }

        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonasPahos',
            payload: p
        })
        dispatch({
            type: 'HANDLE TEXT',
            field: 'aksonasMhkos',
            payload: m
        })
    }, [stoixeiaState.aksonasKwd, stoixeiaState.typosRolou, stoixeiaState.mhkosProfilKophs, stoixeiaState.profilKwd, stoixeiaState.aerasProfilOdhgou])

    {/* ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ */ }
    useEffect(() => {
        let ak = stoixeiaState.aksonas //|| stoixeiaState.proteinomenoiAksones // μπορεί να είναι undefined
        // let MaxIndexF60 = 41
        let x


        // testing &&  console.log('στα ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ aksonas=', stoixeiaState.aksonas)
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            if (ak.includes('Φ60')) {
                // δεν μπορούσε να υπολογίσει το MaxIndexF60, προτού κάνει kick-in η useEffect του
                x = vlookup2(nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF602), elathrioAjonasF602, 7)
            }
            else if (ak.includes('Φ76')) {
                // testing &&  console.log('ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ stoixeiaState.varosKourtinas', stoixeiaState.varosKourtinas)
                x = vlookup2(nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF762), elathrioAjonasF762, 7)
            }
            else {
                // testing &&  console.log('Eisai sto else1')
                x = 0
            }
        }
        else if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') x = 0

        testing && console.log('ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ ', x)
        testing && console.log(' 1. stoixeiaState.typosRolou', stoixeiaState.typosRolou)
        testing && console.log(' 2. stoixeiaState.varosKourtinas', stoixeiaState.varosKourtinas)
        testing && console.log(' 3. stoixeiaState.aksonas', stoixeiaState.aksonas)
        testing && console.log(' 4. Epomenh timh', nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF762))

        // testing &&  console.log('ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ ', x)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenaElathria',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.aksonas, stoixeiaState.varosKourtinas])

    {/* MaxIndex Φ60 */ }
    useEffect(() => {
        let x = nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF602)

        // testing &&  console.log('BAROS KOURTINAS', stoixeiaState.varosKourtinas)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'maxIndexF60',
            payload: x
        })
        testing && console.log('maxIndexF60', x)
    }, [stoixeiaState.varosKourtinas])

    {/* MaxIndex Φ76 */ }
    useEffect(() => {
        let x = nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF762)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'maxIndexF76',
            payload: x
        })
    }, [stoixeiaState.varosKourtinas])

    // useEffect(() => {
    //     testing &&  console.log(typeof (stoixeiaState.anoigmaXwrou))
    //     testing &&  console.log('katharo anoigma:', typeof (stoixeiaState.katharoAnoigma)) // 
    //     testing &&  console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 6)))
    //     testing &&  console.log(typeof (vlookup2(stoixeiaState.aksonasKwd, aksones, 5)))
    //     testing &&  console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 3)))
    //     testing &&  console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 3)))


    // }, [stoixeiaState.typosRolou])

    // ΠΕΡΙΕΛΙΞΗ
    useEffect(() => {
        //* (stoixeiaState.katharoAnoigma
        let PITCH = vlookup2(stoixeiaState.profilKwd, profil, 6)
        let DIAMETROS = vlookup2(stoixeiaState.aksonasKwd, aksones, 5)
        let PLATOS = vlookup2(stoixeiaState.profilKwd, profil, 3)

        let x = Math.sqrt((stoixeiaState.mhkosSpiral) * PITCH * 0.4 * 3.14 + Math.pow(DIAMETROS + (PLATOS / 2), 2)) + PLATOS


        testing && console.log('ΠΕΡΙΕΛΙΞΗ')
        testing && console.log('0. Mhkos Spiral', stoixeiaState.mhkosSpiral, ' =telikoYpsosKourtinas - (YPSOS * 2)')
        testing && console.log(' 0.1.telikoYpsosKourtinas', stoixeiaState.telikoYpsosKourtinas)
        testing && console.log(' 0.2. YPSOS', vlookup2(stoixeiaState.profilKwd, profil, 2))
        testing && console.log('1. Πλήθος Προφίλ', stoixeiaState.plithosProfil, ' = arhikoYpsosKourtinas / Math.ceil(PLATOS)')
        testing && console.log(' 1.1. Αρχικό Ύψος Κουρτίνας', stoixeiaState.arhikoYpsosKourtinas)
        testing && console.log(' 1.2. Πλάτος', Math.ceil(vlookup2(stoixeiaState.profilKwd, profil, 5)))
        testing && console.log('2. katharoAnoigma', stoixeiaState.katharoAnoigma)
        testing && console.log('3. PITCH * 0.4 * 3.14', PITCH * 0.4 * 3.14)
        testing && console.log('3. PITCH', PITCH)
        testing && console.log('4. stoixeiaState.aksonasKwd', stoixeiaState.aksonasKwd, typeof (stoixeiaState.aksonasKwd))
        testing && console.log('5. DIAMETROS', vlookup2(stoixeiaState.aksonasKwd, aksones, 5))
        testing && console.log('6. PLATOS', PLATOS)

        if (isNaN(x)) x = 0

        dispatch({
            type: 'HANDLE TEXT',
            field: 'perieliksi',
            payload: x
        })

    }, [stoixeiaState.mhkosSpiral, stoixeiaState.katharoAnoigma, stoixeiaState.profilKwd, stoixeiaState.aksonasKwd])

    // RESULT GUIDE / SIDE
    useEffect(() => {
        let x = vlookup2(stoixeiaState.odhgosKwd, odhgos, 2)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'resultGuideOverSide',
            payload: x
        })
    }, [stoixeiaState.odhgosKwd])

    // resultHook
    useEffect(() => {
        let x = vlookup2(stoixeiaState.agyriaKwd, agyria, 2)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'resultHook',
            payload: x
        })
    }, [stoixeiaState.agyriaKwd])

    // ΜΗΚΟΣ ΠΡΟΦΙΛ ΚΟΠΗΣ
    useEffect(() => {
        let x;

        testing && console.log('ΜΗΚΟΣ ΠΡΟΦΙΛ ΚΟΠΗΣ')
        testing && console.log('1. katharoAnoigma', stoixeiaState.katharoAnoigma)
        testing && console.log('2. resultGuideOverSide', stoixeiaState.resultGuideOverSide)
        testing && console.log('3. aerasProfilOdhgou', stoixeiaState.aerasProfilOdhgou)

        if (stoixeiaState.thikesSthrijhsOdhgwn === 'NAI') {
            if (stoixeiaState.plithosAgyriwn === 0) {
                x = stoixeiaState.katharoAnoigma + 2 * stoixeiaState.resultGuideOverSide - 2 * vlookup2(stoixeiaState.profilKwd, profil, 12) - stoixeiaState.aerasProfilOdhgou - 10
            }
        } else {
            x = stoixeiaState.katharoAnoigma + 2 * stoixeiaState.resultGuideOverSide - stoixeiaState.aerasProfilOdhgou - 2 * stoixeiaState.resultHook
        }

        dispatch({
            type: 'HANDLE TEXT',
            field: 'mhkosProfilKophs',
            payload: x
        })
    }, [stoixeiaState.thikesSthrijhsOdhgwn, stoixeiaState.plithosAgyriwn, stoixeiaState.katharoAnoigma, stoixeiaState.resultGuideOverSide, stoixeiaState.profilKwd, stoixeiaState.aerasProfilOdhgou, stoixeiaState.resultHook])


    // ΥΨΟΣ ΜΕΙΩΤHΡΑ = TABLE!BW6, ΥΠΟΔΙΑΙΡΕΣΗ Κωδικός
    useEffect(() => {
        let ypodiaireshKwd = vlookup2(stoixeiaState.ypodiairesh, ypodiaireshPinakas, 0)
        let ypsosMeiwthra = vlookup2(stoixeiaState.ypodiairesh, ypodiaireshPinakas, 3)

        testing && console.log('ΥΠΟΔΙΑΙΡΕΣΗ')
        testing && console.log(' 1.', stoixeiaState.ypodiairesh)
        testing && console.log(' 2. ypsosMeiwthra', ypsosMeiwthra)
        testing && console.log(' 3. ypodiaireshKwd', ypodiaireshKwd)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypodiaireshKwd',
            payload: ypodiaireshKwd
        })
        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypsosMeiwthra',
            payload: ypsosMeiwthra
        })
    }, [stoixeiaState.ypodiairesh])

    // ΑΡΧΙΚΟ ΥΨΟΣ ΚΟΥΡΤΙΝΑΣ - ΑΠΟΤΕΛΕΣΜΑΤΑ!D6
    useEffect(() => {
        let x;

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            x = (stoixeiaState.katharoYpsos + (stoixeiaState.ypsosMeiwthra / 2) + 200 + stoixeiaState.epipleonYpsos)
        } else
            if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
                x = (stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias)
            }
            else x = "Προσοχή!"

        testing && console.log('ΑΡΧΙΚΟ ΥΨΟΣ ΚΟΥΡΤΙΝΑΣ ', x, ' katharoYpsos + ypsosShmaias')
        testing && console.log(' 1. arhikoYpsosKourtinas orismos', x)
        testing && console.log(' 2. katharoYpsos', stoixeiaState.katharoYpsos)
        testing && console.log(' 3. ypsosShmaias', stoixeiaState.ypsosShmaias)
        testing && console.log(' 4. ypsosMeiwthra', stoixeiaState.ypsosMeiwthra)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'arhikoYpsosKourtinas',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.ypsosMeiwthra, stoixeiaState.ypsosShmaias, stoixeiaState.epipleonYpsos])

    // ΠΛΗΘΟΣ ΠΡΟΦΙΛ - ΑΠΟΤΕΛΕΣΜΑΤΑ!G6
    useEffect(() => {
        let BHMA = vlookup2(stoixeiaState.profilKwd, profil, 5)
        let plithosProfil = Math.ceil(stoixeiaState.arhikoYpsosKourtinas / BHMA)

        testing && console.log('ΠΛΗΘΟΣ ΠΡΟΦΙΛ ', plithosProfil, ' = Αρχικό Ύψος Κουρτίνας / Βήμα')
        testing && console.log(' 1. Αρχικό Ύψος Κουρτίνας', stoixeiaState.arhikoYpsosKourtinas)
        testing && console.log(' 2. Βήμα', Math.ceil(BHMA))

        dispatch({
            type: 'HANDLE TEXT',
            field: 'plithosProfil',
            payload: plithosProfil
        })
    }, [stoixeiaState.profilKwd, stoixeiaState.arhikoYpsosKourtinas])

    // ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ - ΑΠΟΤΕΛΕΣΜΑΤΑ!M6
    useEffect(() => {
        let kgm2 = vlookup2(stoixeiaState.profilKwd, profil, 7)
        let varosKourtinas = stoixeiaState.mhkosProfilKophs * stoixeiaState.plithosProfil * kgm2 / 1000


        testing && console.log('ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ ', varosKourtinas, ' mhkosProfilKophs * stoixeiaState.plithosProfil * kgm2 / 1000')
        testing && console.log(' 1. mhkosProfilKophs ', stoixeiaState.mhkosProfilKophs)
        testing && console.log(' 2. plithosProfil', stoixeiaState.plithosProfil) // ?
        testing && console.log(' 3. kgm2', kgm2)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'varosKourtinas',
            payload: varosKourtinas
        })
    }, [stoixeiaState.mhkosProfilKophs, stoixeiaState.plithosProfil, stoixeiaState.profilKwd])

    // ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ
    useEffect(() => {
        let x;

        testing && console.log('ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ')
        testing && console.log('1. Varos Kourtinas', stoixeiaState.varosKourtinas)
        // testing &&  console.log('2. Περιέλιξη', stoixeiaState.perieliksi)
        // testing &&  console.log('3. ypodiaireshKouti[4][1]', ypodiaireshKouti[4][1])

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[0][4]) { x = ypodiaireshKouti[0][2] } else
                if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[1][4]) { x = ypodiaireshKouti[1][2] } else
                    if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[2][4]) { x = ypodiaireshKouti[2][2] } else
                        if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[3][4]) { x = ypodiaireshKouti[3][2] } else
                            if (stoixeiaState.varosKourtinas < ypodiaireshKouti[4][1] && stoixeiaState.perieliksi < ypodiaireshKouti[4][4]) { x = ypodiaireshKouti[4][2] } else
                                if (stoixeiaState.varosKourtinas < ypodiaireshKouti[5][1] && stoixeiaState.perieliksi < ypodiaireshKouti[5][4]) { x = ypodiaireshKouti[5][2] } else
                                    x = "Εκτός ορίων !"

        }
        else x = "ΜΟΝΟΦΑΣΙΚΟ ΡΟΛΟ !"

        // Οι τιμές μπήκαν καρφωτά λόγω προβλήματος στον Πίνακα (δεν μεταφραζόταν σε κώδικα)
        // if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
        //     if (stoixeiaState.varosKourtinas < 600 && stoixeiaState.perieliksi < 319) { x = ypodiaireshKouti[0][3] } else
        //         if (stoixeiaState.varosKourtinas < 600 && stoixeiaState.perieliksi < 399) { x = ypodiaireshKouti[1][3] } else
        //             if (stoixeiaState.varosKourtinas < 600 && stoixeiaState.perieliksi < 479) { x = ypodiaireshKouti[2][3] } else
        //                 if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[3][5]) { x = ypodiaireshKouti[3][3] } else
        //                     if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[4][5]) { x = ypodiaireshKouti[4][3] } else
        //                         if (stoixeiaState.varosKourtinas < 700 && stoixeiaState.perieliksi < ypodiaireshKouti[5][5]) { x = ypodiaireshKouti[5][3] } else
        //                             x = "Εκτός ορίων !"

        // }
        // else x = "ΜΟΝΟΦΑΣΙΚΟ ΡΟΛΟ !"

        testing && console.log('3. Προτεινόμενη υποδιαίρεση', x)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenhYpodiairesh',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.varosKourtinas, stoixeiaState.perieliksi])

    // ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ - ΥΨΟΣ ΜΕΙΩΤΗΡΑ - ΣΧΕΣΗ
    useEffect(() => {
        // let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 2)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'mhkosMeiwthra',
            payload: vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 2)
        })

        // dispatch({
        //     type: 'HANDLE TEXT',
        //     field: 'ypsosMeiwthra',
        //     payload: vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 3)
        // })

        dispatch({
            type: 'HANDLE TEXT',
            field: 'sxesh',
            payload: vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 4)
        })
    }, [stoixeiaState.ypodiaireshKwd])

    // // ΥΨΟΣ ΜΕΙΩΤΗΡΑ
    // useEffect(() => {
    //     // let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 3)

    // }, [stoixeiaState.ypodiaireshKwd])

    // // ΣΧΕΣΗ
    // useEffect(() => {
    //     // testing &&  console.log('Ψαχνω για', stoixeiaState.ypodiaireshKwd)
    //     // let sxesh = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 4)

    // }, [stoixeiaState.ypodiaireshKwd])

    {/* ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */ }
    useEffect(() => {

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenesFases',
            payload: vlookup2(stoixeiaState.profilKwd, profil, 14)
        })
    }, [stoixeiaState.profilKwd])


    // ΑΓΚΥΡΙΑ, plithosAgyriwn, ypodiairesh από Visual Basic
    useEffect(() => {
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            // let ak = stoixeiaState.aksonas
            dispatch({
                type: 'HANDLE TEXT',
                field: 'agyria',
                payload: 'ΧΩΡΙΣ ΑΓΚΥΡΙΑ'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'plithosAgyriwn',
                payload: 0
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'ypodiairesh',
                payload: 'ΧΩΡΙΣ ΥΠΟΔΙΑΙΡΕΣΗ'
            })
        }
        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'shmaies',
                payload: 0
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioA',
                payload: '-'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioB',
                payload: '-'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioC',
                payload: '-'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioAtem',
                payload: '0'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioBtem',
                payload: '0'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'elathrioCtem',
                payload: '0'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'proteinomenaElathria',
                payload: '0'
            })
        }
    }, [stoixeiaState.typosRolou])

    useEffect(() => {
        let x

        if (stoixeiaState.agyriaKwd === '-') x = 0
        else x = Math.ceil(stoixeiaState.katharoYpsos / 1500) * 2

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenoPlithosAgyriwn',
            payload: x
        })
    }, [stoixeiaState.agyriaKwd, stoixeiaState.katharoYpsos])

    // MaxIndexΦ60
    // = MIN(IF('ΕΛΑΤΗΡΙΑ (2)'!$G$4: $G$34 >= ΑΠΟΤΕΛΕΣΜΑΤΑ!$M6; 'ΕΛΑΤΗΡΙΑ (2)'!$G$4: $G$34))
    // if varosKourtinas<=160 then maxIndexF60=160 

    // ΑΓΓΥΡΙΑ ΚΩΔ. agyria
    useEffect(() => {

        dispatch({
            type: 'HANDLE TEXT',
            field: 'agyriaKwd',
            payload: vlookup2(stoixeiaState.agyria, agyria, 0)
        })
    }, [stoixeiaState.agyria])

    // ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ 
    useEffect(() => {
        let proteinomenoKouzineto;

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            if (stoixeiaState.varosKourtinas <= 700 && stoixeiaState.varosKourtinas > 550) proteinomenoKouzineto = 'Παρασούτερ Φ50'
            else if (stoixeiaState.varosKourtinas <= 550 && stoixeiaState.varosKourtinas > 0) proteinomenoKouzineto = 'Παρασούτερ Φ40'
            else if (stoixeiaState.varosKourtinas > 700) proteinomenoKouzineto = 'Εκτός ορίων!'
        }
        else proteinomenoKouzineto = 'ΜΟΝΟΦΑΣΙΚΟ ΡΟΛΟ!'

        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenoKouzineto',
            payload: proteinomenoKouzineto
        })
    }, [stoixeiaState.varosKourtinas, stoixeiaState.typosRolou])

    {/* ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ */ }
    useEffect(() => {
        let x

        if (stoixeiaState.vashSthrhjisKwd == '00.00.00.00.000') x = 0
        else x = stoixeiaState.proteinomenoPlithosAgyriwn

        dispatch({
            type: 'HANDLE TEXT',
            field: 'plithosVasewnSthrijhsOdhgou',
            payload: x
        })
    }, [stoixeiaState.vashSthrhjisKwd, stoixeiaState.profil])

    // ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ 
    useEffect(() => {
        let x = parseInt(stoixeiaState.telikoYpsosRolou) + parseInt(stoixeiaState.epipleonYpsos) // γιατί τα έκανε string?

        // testing &&  console.log('stoixeiaState.telikoYpsosRolou', stoixeiaState.telikoYpsosRolou, typeof (stoixeiaState.telikoYpsosRolou), 'stoixeiaState.epipleonYpsos', stoixeiaState.epipleonYpsos, typeof (stoixeiaState.epipleonYpsos))
        // testing &&  console.log('ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ x', x, typeof (x))
        dispatch({
            type: 'HANDLE TEXT',
            field: 'diastashKolonasSthrijhsOdhgwn',
            payload: x
        })
    }, [stoixeiaState.telikoYpsosRolou, stoixeiaState.epipleonYpsos])

    // ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑΔΕΣ
    useEffect(() => {
        if (stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'steganopoihshTampla',
                payload: 'OXI'
            })
        }
    }, [stoixeiaState.tablades])

    // ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ / ΤΑΜΠΛΑΣ
    useEffect(() => {
        let kouti
        let tablas

        // testing &&  console.log('ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ / ΤΑΜΠΛΑΣ')
        // testing &&  console.log('1. indexProteinomenhsShmaias', stoixeiaState.indexProteinomenhsShmaias)
        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
            kouti = 'ΒΙΟΜΗΧΑΝΙΚΟ'
        } else kouti = vlookup2(stoixeiaState.indexProteinomenhsShmaias, epiloghKoutiTabla, 1)
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            tablas = vlookup2(stoixeiaState.indexProteinomenhsShmaias, epiloghKoutiTabla, 2)
        } else tablas = 'ΒΙΟΜΗΧΑΝΙΚΟ'

        // testing &&  console.log('indexProteinomenhsShmaias', stoixeiaState.indexProteinomenhsShmaias)
        // testing &&  console.log('proteinomenoKouti', x)
        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenoKouti',
            payload: kouti
        })
        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenosTablas',
            payload: tablas
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.indexProteinomenhsShmaias])

    // ΥΨΟΣ ΟΔΗΓΟΥ
    useEffect(() => {
        let x;

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') x = stoixeiaState.telikoYpsosRolou + stoixeiaState.epipleonYpsos
        else x = stoixeiaState.telikoYpsosRolou + stoixeiaState.epipleonYpsos

        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypsosOdhgou',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.telikoYpsosRolou, stoixeiaState.epipleonYpsos])

    // ΘΗΚΕΣ ΣΤΗΡΙΞΗ ΟΔΗΓΩΝ
    useEffect(() => {
        if (stoixeiaState.thikesSthrijhsOdhgwn === 'ΝΑΙ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'diastashThikisSthrijhsOdhgwn',
                payload: stoixeiaState.ypsosOdhgou
            })
        }
        if (stoixeiaState.thikesSthrijhsOdhgwn === 'OXI') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'diastashThikisSthrijhsOdhgwn',
                payload: '0'
            })
        }
    }, [stoixeiaState.thikesSthrijhsOdhgwn])

    // ΚΟΥΤΙΑ
    useEffect(() => {
        let koutia = stoixeiaState.koutia || 'ΧΩΡΙΣ ΚΟΥΤΙΑ'
        var matches = koutia.match(/(\d+)/) || 0  // Matches any digit. Equivalent to [0-9]
        let kouti = matches[0] || 0

        testing && console.log('KOUTIA ', stoixeiaState.koutia, typeof (stoixeiaState.koutia))

        if (stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'kapakia',
                payload: 'ΧΩΡΙΣ ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ'
            })
        } else
            if (kouti === '30') {
                dispatch({
                    type: 'HANDLE TEXT',
                    field: 'kapakia',
                    payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 30CM'
                })
            } else
                if (kouti === '35') {
                    dispatch({
                        type: 'HANDLE TEXT',
                        field: 'kapakia',
                        payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 35CM'
                    })
                } else
                    if (kouti === '40') {
                        dispatch({
                            type: 'HANDLE TEXT',
                            field: 'kapakia',
                            payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 40CM'
                        })
                    } else
                        if (kouti === '45') {
                            dispatch({
                                type: 'HANDLE TEXT',
                                field: 'kapakia',
                                payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 45CM'
                            })
                        } else
                            if (kouti === '50') {
                                dispatch({
                                    type: 'HANDLE TEXT',
                                    field: 'kapakia',
                                    payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 50CM'
                                })
                            } else
                                if (kouti === '55') {
                                    dispatch({
                                        type: 'HANDLE TEXT',
                                        field: 'kapakia',
                                        payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 55CM'
                                    })
                                } else
                                    if (kouti === '60') {
                                        dispatch({
                                            type: 'HANDLE TEXT',
                                            field: 'kapakia',
                                            payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 60CM'
                                        })
                                    }

    }, [stoixeiaState.koutia])

    // ΤΖΑΜΑΚΙΑ
    useEffect(() => {
        if (stoixeiaState.tzamakia === 'ΧΩΡΙΣ ΤΖΑΜΑΚΙΑ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'tzamakiaPlithos',
                payload: 0
            })
        }
    }, [stoixeiaState.tzamakia])

    // ΠΑΡΑΣΟΥΤΕΡ
    useEffect(() => {
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'parasouter',
                payload: 'ΧΩΡΙΣ ΚΟΥΖΙΝΕΤΟ'
            })
        }
    }, [stoixeiaState.typosRolou])

    // ΠΑΡΑΣΟΥΤΕΡ - ΑΞΟΝΑΚΙ ΜΟΤΕΡ
    useEffect(() => {
        // testing &&  console.log(stoixeiaState.typosRolou)
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'moterThesi',
                payload: 'ΚΕΝΤΡΙΚΟ'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'aksonaki',
                payload: 'ΧΩΡΙΣ ΑΞΟΝΑΚΙΑ'
            })
        }
    }, [stoixeiaState.typosRolou])

    // PACKAGING
    useEffect(() => {
        if (stoixeiaState.packaging !== 'ΙΔΙΑ ΕΓΚΑΤΑΣΤΑΣΗ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'epifaneiaEgatastashs',
                payload: '-'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'anypsotikoMeso1',
                payload: ''
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'anypsotikoMeso2',
                payload: ''
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'anypsotikoMeso3',
                payload: ''
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'anypsotikoMeso4',
                payload: ''
            })
        }
    }, [stoixeiaState.packaging])

    // ΚΟΛΩΝΑ ΣΤΗΡΙΞΗΣ
    useEffect(() => {
        if (stoixeiaState.kolonaSthrijhsOdhgwn === 'ΧΩΡΙΣ ΚΟΛΟΝΑ ΟΔΗΓΩΝ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'diastashKolonasSthrijhsOdhgwn',
                payload: 0
            })
        } else {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'diastashKolonasSthrijhsOdhgwn',
                payload: stoixeiaState.ypsosOdhgou
            })
        }
    }, [stoixeiaState.kolonaSthrijhsOdhgwn])

    // ΣΤΡΑΝΤΖΑΡΙΣΤΑ
    useEffect(() => {
        if (stoixeiaState.strantzarista === 'ΧΩΡΙΣ ΣΤΡΑΤΖΑΡΙΣΤΟ - ΚΟΙΛΟΔΟΚΟ') {
            dispatch({
                type: 'HANDLE TEXT',
                field: 'thesiStrantzaristou',
                payload: 'ΟΧΙ ΣΤΡΑΤΖΑ'
            })
            dispatch({
                type: 'HANDLE TEXT',
                field: 'gwniesSthrijhs',
                payload: 'ΟΧΙ'
            })
        }
    }, [stoixeiaState.strantzarista])

    // ΚΩΔΙΚΟΣ & INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ
    useEffect(() => {
        let kwd, ind

        testing && console.log('ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ')

        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
            if ((stoixeiaState.perieliksi > 0) && (stoixeiaState.perieliksi <= 350)) {
                kwd = '08.01.03.35.000'
                ind = '35X35'
            }
            else if (stoixeiaState.perieliksi > 350 && stoixeiaState.perieliksi <= 400) {
                kwd = '08.01.03.40.000'
                ind = '40X40'
            }
            else if (stoixeiaState.perieliksi > 400 && stoixeiaState.perieliksi <= 450) {
                kwd = '08.01.03.45.000'
                ind = '45X45'
            }
            else if (stoixeiaState.perieliksi > 450 && stoixeiaState.perieliksi <= 500) {
                kwd = '08.01.03.50.000'
                ind = '50X50'
            }
            else if (stoixeiaState.perieliksi > 500 && stoixeiaState.perieliksi <= 550) {
                kwd = '08.01.03.55.000'
                ind = '55X55'
            }
        }
        else {
            kwd = '-'
            ind = 0
        }

        testing && console.log('1. Kωδικός προτ. σημαίας', kwd)
        testing && console.log('2. Περιέλιξη', stoixeiaState.perieliksi)
        testing && console.log('3. Προτεινόμενη σημαία', vlookup2(kwd, shmaiesRolou, 1))

        dispatch({
            type: 'HANDLE TEXT',
            field: 'kwdikosProteinomenhsShmaias',
            payload: kwd
        })
        dispatch({
            type: 'HANDLE TEXT',
            field: 'indexProteinomenhsShmaias',
            payload: ind
        })
        // ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ
        dispatch({
            type: 'HANDLE TEXT',
            field: 'proteinomenhShmaia',
            payload: vlookup2(kwd, shmaiesRolou, 1)
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.perieliksi])

    // // ΥΨΟΣ ΣΗΜΑΙΑΣ ????
    // useEffect(() => {
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosShmaias',
    //         payload: vlookup2(stoixeiaState.shmaiesKwd, shmaies, 2)
    //     })

    // }, [stoixeiaState.shmaiesKwd])

    // ΥΨΟΣ ΔΟΚΟΥ
    useEffect(() => {
        let x

        if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') x = stoixeiaState.katharoYpsos + stoixeiaState.epipleonYpsos
        else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') x = stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias

        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypsosDokou',
            payload: x
        })
    }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.epipleonYpsos, stoixeiaState.ypsosShmaias])

    // ΥΨΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ
    useEffect(() => {
        let x

        if (stoixeiaState.strantzarista === 'ΧΩΡΙΣ ΣΤΡΑΤΖΑΡΙΣΤΟ - ΚΟΙΛΟΔΟΚΟ') x = 0
        else x = stoixeiaState.ypsosDokou

        dispatch({
            type: 'HANDLE TEXT',
            field: 'ypsosStrantzaristou',
            payload: x
        })
    }, [stoixeiaState.strantzarista, stoixeiaState.ypsosDokou])

    // ΤΕΛΙΚΟ ΥΨΟΣ ΚΟΥΡΤΙΝΑΣ mm
    // = G6 * VLOOKUP(B6; DATA!$D$3: $K$75; 6; 0)
    useEffect(() => {
        let BHMA = vlookup2(stoixeiaState.profilKwd, profil, 5)
        let x = stoixeiaState.plithosProfil * BHMA

        testing && console.log('ΤΕΛΙΚΟ ΥΨΟΣ ΚΟΥΡΤΙΝΑΣ ', x, ' = Πλήθος Προφιλ * BHMA')
        testing && console.log('1. Πλήθος Προφιλ', stoixeiaState.plithosProfil)
        testing && console.log('2. BHMA', BHMA)

        dispatch({
            type: 'HANDLE TEXT',
            field: 'telikoYpsosKourtinas',
            payload: x
        })
    }, [stoixeiaState.profilKwd, stoixeiaState.plithosProfil])

    ///////////////////////////////////////////////////////////////////////////

    const handleRepeat = () => {
        setShowModal(false);

        // Repeat last order, so keep all data entered, only increase lastOrderNo
        dispatch({
            type: 'HANDLE TEXT',
            field: 'orderNo',
            payload: stoixeiaState.orderNo + 1
        })
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 2);
    }

    const handleNewRolo = () => {
        setShowModal(false);
        // localStorage.setItem('lastOrderNo', stoixeiaState.orderNo + 1)
        dispatch({
            type: "CLEAR_FORM",
            payload: stoixeiaState.orderNo + 1
        })
        setidiaEggrafh(false)
        setTimeout(function () { customerRef.current.focus() })
    }
    // const handleShow = () => setShowModal(true);
    const handleClearForm = () => {
        setShowModal(false);
        // localStorage.setItem('lastOrderNo', stoixeiaState.orderNo + 1)
        dispatch({
            type: "CLEAR_FORM",
            payload: stoixeiaState.orderNo
        })
        setidiaEggrafh(false)
        setTimeout(function () { customerRef.current.focus() })
    }

    const handleEktypwsh = () => {
        // testing &&  console.log(stoixeiaState.typosRolou, ' ', stoixeiaState.thesi)
        console.log('**************************')
        console.log('In handleEktypwsh, typosRolou is', stoixeiaState.typosRolou) // UNDEFINED!
        if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ')
            setSxedio('ΜΟΝΟΦΑΣΙΚΟ')
        else setSxedio('ΒΙΟΜΗΧΑΝΙΚΟ')
    }

    // ΠΛΑΣΤΙΚΕΣ ΤΑΠΕΣ ΚΩΔΙΚΟΣ
    useEffect(() => {
        dispatch({
            type: 'HANDLE TEXT',
            field: 'plastikesTapesKwd',
            payload: vlookup2(stoixeiaState.profilKwd, profil, 10)
        })
    }, [stoixeiaState.profilKwd])

    //  ΠΑΧΟΣ ΤΑΠΑΣ
    useEffect(() => {
        dispatch({
            type: 'HANDLE TEXT',
            field: 'pahosTapas',
            payload: vlookup2(stoixeiaState.plastikesTapesKwd, plastikesTapes, 3)
        })
    }, [stoixeiaState.plastikesTapesKwd])

    // ΕΚΤΥΠΩΣΕΙΣ J322
    useEffect(() => {
        // =IF(TABLE!$BE$6=DATA!$BM$22;0;TABLE!$BA$6+30)
        // = if tablades === ΧΩΡΙΣ ΤΑΜΠΛΑ return 0, else return ypsosShmaias+30
        let x;

        if (stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ') x = 0
        else x = stoixeiaState.ypsosShmaias + 30

        dispatch({
            type: 'HANDLE TEXT',
            field: 'J322',
            payload: x
        })
    }, [stoixeiaState.tablades, stoixeiaState.ypsosShmaias])

    // ΕΚΤΥΠΩΣΕΙΣ G311
    useEffect(() => {
        let x

        if (stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') x = 0
        else x = stoixeiaState.anoigmaXwrou + 40

        dispatch({
            type: 'HANDLE TEXT',
            field: 'G311',
            payload: x
        })
    }, [stoixeiaState.koutia, stoixeiaState.anoigmaXwrou])

    const handleChange = (e) => {
        dispatch({
            type: 'HANDLE TEXT',
            field: e.target.name,
            payload: e.target.value
        })
    }

    const cusList = customers.map(cus => <option key={cus.cname}>{cus.cname}</option>)

    return (
        <StoixeiaContext.Provider value={providerState} >
            {/* setShowModal={setShowModal} */}
            {sxedio === 'ΜΟΝΟΦΑΣΙΚΟ' && <SxedioMonofasiko setSxedio={setSxedio} setShowModal={setShowModal} setidiaEggrafh={setidiaEggrafh} />}
            {sxedio === 'ΒΙΟΜΗΧΑΝΙΚΟ' && <SxedioBiomhxaniko setSxedio={setSxedio} setShowModal={setShowModal} setidiaEggrafh={setidiaEggrafh} />}
            {sxedio === '' &&
                <Container style={{ marginTop: 80 }}>
                    <Row className="justify-content-md-center" xs={8} md={8} lg={8}>
                        <Form onSubmit={handleSubmit}>
                            {/* ΠΕΛΑΤΗΣ */}
                            <Form.Group as={Row}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΕΛΑΤΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='customer'
                                        ref={customerRef}
                                        // {...register("customer", { required: 'Παρακαλώ επιλέξτε όνομα.' })}
                                        value={stoixeiaState.customer}
                                        onChange={(e) => {
                                            setCustomerError('')
                                            handleChange(e)
                                        }}>
                                        <option value=''>Επιλογή...</option>
                                        {cusList}
                                    </Form.Control>
                                    {customerError &&
                                        <Form.Text className="text-danger" style={{ fontSize: '1rem' }}>
                                            {customerError}
                                        </Form.Text>
                                    }
                                </Col>
                            </Form.Group>

                            {/* ΑΥΞΩΝ ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>
                                    ΑΡ. ΠΑΡΑΓΓΕΛΙΑΣ
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='lastOrderNo' placeholder={stoixeiaState.orderNo} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΓΓΕΛΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΜ/ΝΙΑ ΠΑΡΑΓΓΕΛΙΑΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="date"
                                        // onBlur="if(!this.value)this.type='text'"
                                        // onFocus="(this.type='date')"
                                        // id="date"
                                        name='orderDate'
                                        placeholder={new Date(stoixeiaState.orderDate).toLocaleDateString('el-GR')}
                                        value={stoixeiaState.orderDate}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Col>
                            </Form.Group>

                            {/* ΠΙΘΑΝΗ ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ</Form.Label>
                                {/* <Form.Control type="text" placeholder="Επωνυμία" onChange={CustomerChange} /> */}
                                <Col sm={6}>
                                    <Form.Control
                                        type="date"
                                        // onBlur="if(!this.value)this.type='text'"
                                        // onfocus="(this.type='date')"
                                        id="date"
                                        name='pithaniDeliveryDate'
                                        // {new Date(prod.orderDate).toLocaleDateString('el-GR')}
                                        value={(stoixeiaState.pithaniDeliveryDate)}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Col>
                            </Form.Group>

                            {/* ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ */}
                            {/* <Form.Group as={Row} controlId="deliveryDate" style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΗMEΡΟΜΗΝΙΑ ΠΑΡΑΔΟΣΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="date"
                                        onBlur="if(!this.value)this.type='text'"
                                        // onfocus="(this.type='date')"
                                        id="date"
                                        name='deliveryDate'
                                        value={stoixeiaState.deliveryDate}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Col>
                            </Form.Group> */}

                            {/* ΠΡΟΤΕΡΑΙΟΤΗΤΑ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΡΟΤΕΡΑΙΟΤΗΤΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='proteraiothta'
                                        value={stoixeiaState.proteraiothta}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>ΚΑΝΟΝΙΚΗ</option>
                                        <option>ΕΠΕΙΓΟΝ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΤΟΙΧΕΙΑ ΡΟΛΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                {/* <Form.Label column sm={{ span: 2, offset: 1 }}>Πλάτος mm</Form.Label> */}
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΣΤΟΙΧΕΙΑ ΡΟΛΟΥ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΦΙΛ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΡΟΦΙΛ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='profil'
                                        ref={profilRef}
                                        // {...register("profil", { required: 'Παρακαλώ επιλέξτε Προφίλ.' })}
                                        value={stoixeiaState.profil}
                                        onChange={(e) => {
                                            setProfilError('')
                                            handleChange(e)
                                        }}
                                    >
                                        <option value=''>Επιλογή...</option>
                                        <Profil />
                                    </Form.Control>
                                    {profilError &&
                                        <Form.Text className="text-danger" style={{ fontSize: '1rem' }}>
                                            {profilError}
                                        </Form.Text>
                                    }
                                </Col>
                            </Form.Group>

                            {/* ΤΥΠΟΣ ΡΟΛΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΤΥΠΟΣ ΡΟΛΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='typosRolou'
                                        value={stoixeiaState.typosRolou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>ΜΟΝΟΦΑΣΙΚΟ</option>
                                        <option>ΒΙΟΜΗΧΑΝΙΚΟ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΥΛΙΓΜΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΤΥΛΙΓΜΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='tyligma'
                                        value={stoixeiaState.tyligma}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>ΚΑΝΟΝΙΚΟ</option>
                                        <option>ΑΝΑΠΟΔΟ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΘΕΣΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='thesi'
                                        value={stoixeiaState.thesi}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ</option>
                                        <option>ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΝΟΙΓΜΑ ΧΩΡΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΝΟΙΓΜΑ ΧΩΡΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='anoigmaXwrou'
                                        ref={anoigmaRef}
                                        maxLength='4'
                                        // {...register("anoigmaXwrou", { required: 'Παρακαλώ επιλέξτε ΑΝΟΙΓΜΑ ΧΩΡΟΥ .' })}
                                        value={stoixeiaState.anoigmaXwrou}
                                        onChange={(e) => {
                                            setAnoigmaError('')
                                            handleChange(e)
                                        }}
                                    >
                                    </Form.Control>
                                    {anoigmaError &&
                                        <Form.Text className="text-danger" style={{ fontSize: '1rem' }}>
                                            {anoigmaError}
                                        </Form.Text>
                                    }
                                </Col>
                            </Form.Group>

                            {/* ΥΨΟΣ ΧΩΡΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΥΨΟΣ ΧΩΡΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='ypsosXwrou'
                                        ref={ypsosRef}
                                        maxLength='4'
                                        value={stoixeiaState.ypsosXwrou}
                                        onChange={(e) => {
                                            setYpsosError('')
                                            handleChange(e)
                                        }}
                                    >
                                    </Form.Control>
                                    {ypsosError &&
                                        <Form.Text className="text-danger">
                                            {ypsosError}
                                        </Form.Text>
                                    }
                                </Col>
                            </Form.Group>

                            {/* ΥΨΟΣ ΔΟΚΑΡΙΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΥΨΟΣ ΔΟΚΑΡΙΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='ypsosDokariou'
                                        value={stoixeiaState.ypsosDokariou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='aerasProfilOdhgou'
                                        value={stoixeiaState.aerasProfilOdhgou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {[20, 25, 30, 35, 40, 45, 50].map(n => (<option key={n}>{n}</option>))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΕΠΙΠΛΕΟΝ ΥΨΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΕΠΙΠΛΕΟΝ ΥΨΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="number" name='epipleonYpsos' value={stoixeiaState.epipleonYpsos} onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>

                            {/* ΧΡΩΜΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΧΡΩΜΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='xrwma'
                                        maxLength='4'
                                        value={stoixeiaState.xrwma}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΑΡΑΘΥΡΑΚΙ ΣΤΟ ΠΡΟΦΙΛ */}
                            <Form.Group as={Row} style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΑΡΑΘΥΡΑΚΙ ΣΤΟ ΠΡΟΦΙΛ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='parathyraki'
                                        value={stoixeiaState.parathyraki}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΓΚΥΡΙΑ */}
                            <Form.Group as={Row} controlId='ΑΓΓΥΡΙΑ' style={{ marginTop: 10 }}>
                                {/* <Form.Label column sm={{ span: 2, offset: 1 }}>Πλάτος mm</Form.Label> */}
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΑΓΚΥΡΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΑΓΓΥΡΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΓΚΥΡΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='agyria'
                                        value={stoixeiaState.agyria}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΑΓΚΥΡΙΑ F140</option>
                                        <option>ΑΓΚΥΡΙΑ F100 ΠΑΧΟΣ 4mm</option>
                                        <option>ΑΓΚΥΡΙΑ ΓΙΑ ROLLING SYSTEM F100</option>
                                        <option>ΤΑΠΕΣ + ΠΡΙΤΣΙΝΙΑ ΓΙΑ ROL.SYSTEM F100 ΜΟΝΤΑΡΙΣΜΕΝΑ</option>
                                        <option>ΑΓΚΥΡΙΑ  + ΤΑΠΕΣ + ΠΡΙΤΣΙΝΙΑ ΓΙΑ ROL.SYSTEM F100 ΜΟΝΤΑΡΙΣΜΕΝΑ</option>
                                        <option>ΧΩΡΙΣ ΑΓΚΥΡΙΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd === '-' || stoixeiaState.katharoYpsos === 0 ? '0' : 2 * (Math.ceil(stoixeiaState.katharoYpsos / 1500))} readOnly />
                                    {/* <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd} readOnly /> */}
                                </Col>
                            </Form.Group>

                            {/* ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ  */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='plithosAgyriwn'
                                        value={stoixeiaState.plithosAgyriwn}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28].map(n => (<option key={n}>{n}</option>))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ 
                            <Form.Group as={Row} controlId="plithosAgyriwn2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${plithosAgyriwnColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='plithosAgyriwn'
                                        // value={stoixeiaState.plithosAgyriwn}
                                        onChange={(e) => handlePlithosAgyriwnChange(e)}
                                    >
                                        <option>{stoixeiaState.agyriaKwd === '-' ? 0 : Math.ceil(stoixeiaState.katharoYpsos / 750)}</option>
                                        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28].map(n => (<option>{n}</option>))}
                                    </Form.Control>
                                </Col>
                                <Col sm={1}>
                                    <Button
                                        variant='danger'
                                        disabled={plithosAgyriwnColor.button}
                                        style={{ backgroundColor: `${plithosAgyriwnColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.plithosAgyriwn = stoixeiaState.proteinomenoPlithosAgyriwn
                                            setplithosAgyriwnColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* ΟΔΗΓΟΣ */}
                            <Form.Group as={Row} controlId='ΟΔΗΓΟΣ' style={{ marginTop: 10 }}>
                                {/* <Form.Label column sm={{ span: 2, offset: 1 }}>Πλάτος mm</Form.Label> */}
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΟΔΗΓΟΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.proteinomenosOdhgos} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΟΔΗΓΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }} >
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΟΔΗΓΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='odhgos'
                                        value={stoixeiaState.odhgos}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Odhgos />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ - ΟΔΗΓΟΣ */}
                            {/* <Form.Group as={Row} controlId="odhgos2" style={{ marginTop: 5, display: 'flex', alignItems: 'center' }} >
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${odhgosColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='odhgos'
                                        onChange={(e) => handleOdhgosChange(e)}
                                    >
                                        <option>{stoixeiaState.proteinomenosOdhgos}</option>
                                        <Odhgos />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={odhgosColor.button}
                                        style={{ backgroundColor: `${odhgosColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.odhgos = stoixeiaState.proteinomenosOdhgos
                                            setodhgosColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* ΒΑΣΗ ΣΤΗΡΙΞΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΒΑΣΗ ΣΤΗΡΙΞΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='vashSthrijhs'
                                        value={stoixeiaState.vashSthrijhs}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <VasiSthrijhs />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='thikesSthrijhsOdhgwn'
                                        value={stoixeiaState.thikesSthrijhsOdhgwn}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        input="number"
                                        name='diastashThikisSthrijhsOdhgwn'
                                        value={stoixeiaState.diastashThikisSthrijhsOdhgwn}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='kolonaSthrijhsOdhgwn'
                                        value={stoixeiaState.kolonaSthrijhsOdhgwn}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΣΤΑΘΕΡΗ ΚΟΛΟΝΑ 80Χ40</option>
                                        <option>ΑΦΑΙΡΟΥΜΕΝΗ ΚΟΛΟΝΑ 80Χ40</option>
                                        <option>ΧΩΡΙΣ ΚΟΛΟΝΑ ΟΔΗΓΩΝ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='diastashKolonasSthrijhsOdhgwn'
                                        value={stoixeiaState.diastashKolonasSthrijhsOdhgwn}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΤΡΑΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ */}
                            <Form.Group as={Row} controlId="ΣΤΡΑΤΖΑΡΙΣΤΑ-ΚΟΙΛΟΔΟΚΟΙ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΣΤΡΑΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΣΤΡΑΝΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΣΤΡΑΤΖΑΡΙΣΤΑ - ΚΟΙΛΟΔΟΚΟΙ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='strantzarista'
                                        value={stoixeiaState.strantzarista}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Strantzarista />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΘΕΣΗ ΣΤΡΑΤΖΑΡΙΣΤΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='thesiStrantzaristou'
                                        value={stoixeiaState.thesiStrantzaristou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΑΡΙΣΤΕΡΑ ΜΟΝΟ</option>
                                        <option>ΔΕΞΙΑ ΜΟΝΟ</option>
                                        <option>ΑΡΙΣΤΕΡΑ & ΔΕΞΙΑ</option>
                                        <option>ΟΧΙ ΣΤΡΑΤΖΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='gwniesSthrijhs'
                                        value={stoixeiaState.gwniesSthrijhs}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΞΟΝΑΣ */}
                            <Form.Group as={Row} controlId="ΑΞΟΝΑΣ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΑΞΟΝΑΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='proteinomenoiAksones' placeholder={stoixeiaState.proteinomenoiAksones} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΑΞΟΝΕΣ*/}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΞΟΝAΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='aksonas'
                                        value={stoixeiaState.aksonas}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Aksonas />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ */}
                            {/* <Form.Group as={Row} controlId="aksonas2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${aksonasColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='aksonas'
                                        onChange={(e) => handleAksonasChange(e)}
                                        placeholder={stoixeiaState.proteinomenoiAksones}
                                    >
                                        <option>{stoixeiaState.proteinomenoiAksones}</option>
                                        <Aksonas />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={aksonasColor.button}
                                        style={{ backgroundColor: `${aksonasColor.title}` }}
                                        onClick={() => {
                                            console.log('OOOOOOOstoixeiaState.aksonas = stoixeiaState.proteinomenoiAksones', stoixeiaState.aksonas)
                                            stoixeiaState.aksonas = stoixeiaState.proteinomenoiAksones
                                            // handleAksonasChange2(stoixeiaState.proteinomenoiAksones)
                                            console.log('OOOOOOOstoixeiaState.aksonas = stoixeiaState.proteinomenoiAksones', stoixeiaState.aksonas)
                                            setaksonasColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* ΑΞΟΝAKI ΜΟΤΕΡ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΞΟΝAKI ΜΟΤΕΡ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='aksonaki'
                                        value={stoixeiaState.aksonaki}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΑΞΟΝΑΣ ΚΑΛΙΜΠΡΕ Φ42</option>
                                        <option>ΑΞΟΝΑΣ ΚΑΛΙΜΠΡΕ Φ52</option>
                                        <option>ΧΩΡΙΣ ΑΞΟΝΑΚΙΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΞΟΝAKI KOYZINETOY */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΞΟΝAKI KOYZINETOY</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='aksonakiKouzinetou'
                                        value={stoixeiaState.aksonakiKouzinetou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΑΞΟΝΑΣ ΚΑΛΙΜΠΡΕ Φ42</option>
                                        <option>ΑΞΟΝΑΣ ΚΑΛΙΜΠΡΕ Φ52</option>
                                        <option>ΧΩΡΙΣ ΑΞΟΝΑΚΙΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΕΛΑΤΗΡΙΑ */}
                            <Form.Group as={Row} controlId="ΕΛΑΤΗΡΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΕΛΑΤΗΡΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name='proteinomenaElathria' placeholder={stoixeiaState.proteinomenaElathria} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΕΛΑΤΗΡΙΟ Α */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Α</Form.Label>
                                <Col sm={3}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioA'
                                        value={stoixeiaState.elathrioA}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
                                    </Form.Control>
                                </Col>
                                {/* ΠΛΗΘΟΣ ΕΛΑΤΗΡΙA Α */}
                                <Col sm={1}>
                                    <Form.Label column >ΠΛΗΘΟΣ</Form.Label>
                                </Col>
                                <Col sm={2}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioAtem'
                                        value={stoixeiaState.elathrioAtem}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {[2, 4, 6, 8].map(n => (<option key={n}>{n}</option>))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΕΛΑΤΗΡΙΟ B */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ B</Form.Label>
                                <Col sm={3}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioB'
                                        value={stoixeiaState.elathrioB}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
                                    </Form.Control>
                                </Col>
                                {/* ΠΛΗΘΟΣ ΕΛΑΤΗΡΙA B */}
                                <Col sm={1}>
                                    <Form.Label column >ΠΛΗΘΟΣ</Form.Label>
                                </Col>
                                <Col sm={2}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioBtem'
                                        value={stoixeiaState.elathrioBtem}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {[2, 4, 6, 8].map(n => (<option key={n}>{n}</option>))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΕΛΑΤΗΡΙΟ Γ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Γ</Form.Label>
                                <Col sm={3}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioC'
                                        value={stoixeiaState.elathrioC}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
                                        <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
                                    </Form.Control>
                                </Col>
                                {/* ΠΛΗΘΟΣ ΕΛΑΤΗΡΙA Γ */}
                                <Col sm={1}>
                                    <Form.Label column >ΠΛΗΘΟΣ</Form.Label>
                                </Col>
                                <Col sm={2}>
                                    <Form.Control
                                        as="select"
                                        name='elathrioCtem'
                                        value={stoixeiaState.elathrioCtem}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {[2, 4, 6, 8].map(n => (<option key={n}>{n}</option>))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΥΠΟΔΙΑΙΡΕΣΗ */}
                            <Form.Group as={Row} controlId="ΥΠΟΔΙΑΙΡΕΣΗ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΥΠΟΔΙΑΙΡΕΣΗ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ */}
                            <Form.Group as={Row} controlId="proteinomenhYpodiairesh" style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" style={{ color: 'red', fontWeight: 'bold' }} placeholder={stoixeiaState.proteinomenhYpodiairesh} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΥΠΟΔΙΑΙΡΕΣΗ */}
                            <Form.Group as={Row} controlId="ypodiairesh" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='ypodiairesh'
                                        value={stoixeiaState.ypodiairesh}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Ypodiairesh />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΥΠΟΔΙΑΙΡΕΣΗ - ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ */}
                            {/* <Form.Group as={Row} controlId="ypodiairesh2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${ypodiaireshColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='ypodiairesh'
                                        // value={stoixeiaState.ypodiairesh}
                                        onChange={(e) => handleYpodiaireshChange(e)}
                                    >
                                        <option>{stoixeiaState.ypodiairesh}</option>
                                        <Ypodiairesh />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={ypodiaireshColor.button}
                                        style={{ backgroundColor: `${ypodiaireshColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.ypodiairesh = stoixeiaState.proteinomenhYpodiairesh
                                            setypodiaireshColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ  */}
                            {/* <Form.Group as={Row} controlId="varosKourtinas2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${varosKourtinasColor}` }}>ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"

                                        placeholder={(stoixeiaState.varosKourtinas)}
                                        onChange={(e) => handlevarosKourtinasChange(e)}
                                    />
                                </Col>
                            </Form.Group> */}

                            {/* ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ  */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} >ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ </Form.Label>
                                {/* <Col sm={2}>
                                    <Form.Control size="lg" type="text" placeholder="ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ " />
                                </Col> */}
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='varosKourtinas'
                                        value={Math.round(stoixeiaState.varosKourtinas * 100) / 100}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Col>
                            </Form.Group>

                            {/* ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='eidikhSthrijh'
                                        value={stoixeiaState.eidikhSthrijh}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10</option>
                                        <option>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80</option>
                                        <option>ΧΩΡΙΣ ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΔΙΑΣΤΑΣΗ ΓΩΝΙΑΣ ΣΤΗΡΙΞΗΣ 80Χ80 mm */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΔΙΑΣΤΑΣΗ ΓΩΝΙΑΣ ΣΤΗΡΙΞΗΣ 80Χ80 mm</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='gwniaSthrijhs80x80'
                                        value={stoixeiaState.gwniaSthrijhs80x80}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */}
                            <Form.Group as={Row} style={{ display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΔΙΑΣΤΑΣΗ ΛΑΜΑΣ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='lamaSthrijhs80x10'
                                        value={stoixeiaState.lamaSthrijhs80x10}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΗΜΑΙΕΣ */}
                            <Form.Group as={Row} controlId="ΣΗΜΑΙΕΣ" style={{ marginTop: 10 }}>
                                {/* offset: 1 */}
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΣΗΜΑΙΕΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='proteinomenhShmaia'
                                        value={stoixeiaState.proteinomenhShmaia}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΗΜΑΙΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΣΗΜΑΙΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='shmaies'
                                        value={stoixeiaState.shmaies}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Shmaies />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ - ΣΗΜΑΙΕΣ */}
                            {/* <Form.Group as={Row} controlId="shmaies2" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${shmaiaColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='shmaies'
                                        // value={stoixeiaState.shmaies}
                                        onChange={(e) => handleShmaiaChange(e)}
                                    >
                                        <option>{stoixeiaState.proteinomenhShmaia}</option>
                                        <Shmaies />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={shmaiaColor.button}
                                        style={{ backgroundColor: `${shmaiaColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.shmaies = stoixeiaState.proteinomenhShmaia
                                            setshmaiaColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* <Form.Group as={Row} controlId="ypodiairesh3" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${ypodiaireshColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    as="select"
                                    name='ypodiairesh'
                                    // value={stoixeiaState.ypodiairesh}
                                    onChange={(e) => handleYpodiaireshChange(e)}
                                >
                                    <option>{stoixeiaState.ypodiairesh}</option>
                                    <Ypodiairesh />
                                </Form.Control>
                            </Col>
                            <Col>
                                <Button
                                    variant="danger"
                                    disabled={ypodiaireshColor.button}
                                    style={{ backgroundColor: `${ypodiaireshColor.title}` }}
                                    onClick={() => {
                                        stoixeiaState.ypodiairesh = stoixeiaState.proteinomenhYpodiairesh
                                        setypodiaireshColor({ title: 'black', button: 'true' })
                                    }}>Αποδοχή</Button>
                            </Col>
                        </Form.Group> */}

                            {/* ΕΞΩΤΕΡΙΚΗ ΔΙΑΣΤΑΣΗ ΠΕΡΙΕΛΙΞΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΕΞΩΤΕΡΙΚΗ ΔΙΑΣΤΑΣΗ ΠΕΡΙΕΛΙΞΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='perieliksi'
                                        value={Math.ceil(stoixeiaState.perieliksi)}
                                        onChange={(e) => handleChange(e)}
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΛΑΔΕΣ */}
                            <Form.Group as={Row} controlId="ΤΑΜΠΛΑΔΕΣ" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΤΑΜΠΛΑΔΕΣ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* Προτεινόμενος Ταμπλάς */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝOΣ ΤΑΜΠΛΑΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name='proteinomenosTablas'
                                        value={stoixeiaState.proteinomenosTablas}
                                        readOnly
                                    >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΛΑΔΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΤΑΜΠΛΑΔΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='tablades'
                                        value={stoixeiaState.tablades}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Tablas />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΛΑΔΕΣ - ΠΡΟΤΕΙΝΟΜΕΝOΣ ΤΑΜΠΛΑΣ */}
                            {/* <Form.Group as={Row} controlId="tablades2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${tablasColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝOΣ ΤΑΜΠΛΑΣ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='tablades'
                                        // value={stoixeiaState.tablades}
                                        onChange={(e) => handleTablasChange(e)}
                                    >
                                        <option>{stoixeiaState.tablades}</option>
                                        <Tablas />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={tablasColor.button}
                                        style={{ backgroundColor: `${tablasColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.tablades = stoixeiaState.proteinomenosTablas
                                            settablasColor({ title: 'black', button: 'true' })
                                        }
                                        }>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}


                            {/* ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='steganopoihshTampla'
                                        value={stoixeiaState.steganopoihshTampla}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΑΛΥΨΕΙΣ / ΚΟΥΤΙΑ */}
                            <Form.Group as={Row} controlId="ΚΑΛΥΨΕΙΣ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΚΑΛΥΨΕΙΣ / ΚΟΥΤΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* KOYTIA */}
                            {/* <Form.Group as={Row} controlId="koutia" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${koutiaColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='koutia'
                                        // value={stoixeiaState.koutia}
                                        onChange={(e) => handleKoutiaChange(e)}
                                    >
                                        <option>{stoixeiaState.koutia}</option>
                                        <Kouti />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={koutiaColor.button}
                                        style={{ backgroundColor: `${koutiaColor.title}` }}
                                        onClick={() => {
                                            stoixeiaState.koutia = stoixeiaState.proteinomenoKouti
                                            setkoutiaColor({ title: 'black', button: 'true' })
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ */}
                            <Form.Group as={Row} controlId="proteinomenoKouti" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ</Form.Label>
                                {<Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouti} readOnly />
                                </Col>}
                            </Form.Group>

                            {/* KOYTIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>KOYTIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='koutia'
                                        value={stoixeiaState.koutia}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Kouti />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΑΠΑΚΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΚΑΠΑΚΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='kapakia'
                                        value={stoixeiaState.kapakia}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Kapakia />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='lamakiaMonofKoutiou'
                                        value={stoixeiaState.lamakiaMonofKoutiou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='koutiaXwrisSkotia'
                                        value={stoixeiaState.koutiaXwrisSkotia}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΦΑΣΕΣ - ΤΖΑΜΑΚΙΑ */}
                            <Form.Group as={Row} controlId="ΦΑΣΕΣ-ΤΖΑΜΑΚΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΦΑΣΕΣ - ΤΖΑΜΑΚΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΦΑΣΑ */}
                            <Form.Group as={Row} controlId="proteinomenesFases" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.proteinomenesFases} readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΦΑΣΕΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΦΑΣΕΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='fases'
                                        value={stoixeiaState.fases}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Fasa />
                                    </Form.Control>
                                </Col>
                            </Form.Group>


                            {/* ΦΑΣΕΣ - ΠΡΟΤΕΙΝΟΜΕΝΗ ΦΑΣΑ*/}
                            {/* <Form.Group as={Row} controlId="fases2" style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${fasesColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='fases'
                                        onChange={(e) => handleFasesChange(e)}
                                    >
                                        <option>{stoixeiaState.proteinomenesFases}</option>
                                        <Fasa />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={fasesColor.button}
                                        style={{ backgroundColor: `${fasesColor.title}` }}
                                        onClick={() => {
                                            setfasesColor({ title: 'black', button: 'true' })
                                            stoixeiaState.fases = stoixeiaState.proteinomenesFases
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* TZAMAKIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>TZAMAKIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='tzamakia'
                                        value={stoixeiaState.tzamakia}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΤΖΑΜΑΚΙ ΠΟΛΥΚΑΡΒΟΝΙΚΟ 100Χ50 ΜΟΝΤΑΡΙΣΜΕΝΟ</option>
                                        <option>ΣΕΤ ΠΑΡΑΘΥΡΟ ΕΠΟΠΤ. F100</option>
                                        <option>ΣΕΤ ΠΑΡΑΘΥΡΟ ΕΠΟΠΤ. F140</option>
                                        <option>ΧΩΡΙΣ ΤΖΑΜΑΚΙΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* TZAMAKIA ΠΛΗΘΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>TZAMAKIA ΠΛΗΘΟΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="number" name='tzamakiaPlithos' value={stoixeiaState.tzamakiaPlithos} onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>

                            {/* ΜΟΤΕΡ */}
                            <Form.Group as={Row} controlId="ΜΟΤΕΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΜΟΤΕΡ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ  */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} >ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="number"
                                        name='varosKourtinas'
                                        value={Math.round(stoixeiaState.varosKourtinas * 100) / 100}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Col>
                            </Form.Group>

                            {/* MOTEP */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>MOTEP</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='moter'
                                        value={stoixeiaState.moter}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Moter />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ ΜΟΤΕΡ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΘΕΣΗ MOTEP</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='moterThesi'
                                        value={stoixeiaState.moterThesi}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΕΣΩΤ. ΑΡΙΣΤΕΡΑ</option>
                                        <option>ΕΣΩΤ. ΔΕΞΙΑ</option>
                                        <option>ΕΞΩ ΔΕΞΙΑ</option>
                                        <option>ΕΞΩ ΑΡΙΣΤΕΡΑ</option>
                                        <option>ΕΣΩΤ. ΔΕΞΙΑ PYROL</option>
                                        <option>ΚΕΝΤΡΙΚΟ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='thesiParoxhsReumatos'
                                        value={stoixeiaState.thesiParoxhsReumatos}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΕΣΩ ΑΡΙΣΤΕΡΑ</option>
                                        <option>ΕΣΩ ΔΕΞΙΑ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΑΡΑΣΟΥΤΕΡ */}
                            <Form.Group as={Row} controlId="ΠΑΡΑΣΟΥΤΕΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΠΑΡΑΣΟΥΤΕΡ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* Προτεινόμενο παρασούτερ = κουζινετο */}
                            <Form.Group as={Row} controlId="proteinomenoKouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΑΡΑΣΟΥΤΕΡ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouzineto} readOnly >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΠΑΡΑΣΟΥΤΕΡ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΠΑΡΑΣΟΥΤΕΡ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='kouzineto'
                                        value={stoixeiaState.kouzineto}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Kouzineto />
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* Προτεινόμενο παρασούτερ = κουζινετο */}
                            {/* <Form.Group as={Row} controlId="kouzineto2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: `${kouzinetoColor.title || 'red'}` }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='kouzineto'
                                        // value={stoixeiaState.kouzineto}
                                        onChange={(e) => handleKouzinetoChange(e)}
                                    >
                                        <option>{stoixeiaState.proteinomenoKouzineto} </option>
                                        <Kouzineto />
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button
                                        variant="danger"
                                        disabled={kouzinetoColor.button}
                                        style={{ backgroundColor: `${kouzinetoColor.title}` }}
                                        onClick={() => {
                                            setkouzinetoColor({ title: 'black', button: 'true' })
                                            stoixeiaState.kouzineto = stoixeiaState.proteinomenoKouzineto
                                        }}>Αποδοχή</Button>
                                </Col>
                            </Form.Group> */}

                            {/* Προτεινόμενο παρασούτερ = κουζινετο */}
                            {/* <Form.Group as={Row} controlId="proteinomenoKouzineto2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} style={{ color: 'red', fontWeight: 'bold' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouzineto} readOnly >
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="kouzineto3" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }} >ΚΟΥΖΙΝΕΤΟ</Form.Label>
                                <Col sm={5}>
                                    <Form.Control
                                        as="select"
                                        name='kouzineto'
                                        value={stoixeiaState.kouzineto}
                                        onChange={(e) => handleKouzinetoChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <Kouzineto />
                                    </Form.Control>
                                </Col>
                            </Form.Group> */}

                            {/* ΑΞΕΣΟΥΑΡ */}
                            <Form.Group as={Row} controlId="ΑΞΕΣΟΥΑΡ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΑΞΕΣΟΥΑΡ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='kleidariaAsfaleias'
                                        value={stoixeiaState.kleidariaAsfaleias}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1 */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='ilektrologikhEgatastash1'
                                        value={stoixeiaState.ilektrologikhEgatastash1}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                        <option>ΦΑΡΟΣ</option>
                                        <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                        <option>ΔΙΑΚΟΠΤΗΣ</option>
                                        <option>BLINDOR GEROLIMATOS</option>
                                        <option>-</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2 */}
                            {stoixeiaState.ilektrologikhEgatastash1 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='ilektrologikhEgatastash2'
                                            value={stoixeiaState.ilektrologikhEgatastash2}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                            <option>ΦΑΡΟΣ</option>
                                            <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                            <option>ΔΙΑΚΟΠΤΗΣ</option>
                                            <option>BLINDOR GEROLIMATOS</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3 */}
                            {stoixeiaState.ilektrologikhEgatastash2 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='ilektrologikhEgatastash3'
                                            value={stoixeiaState.ilektrologikhEgatastash3}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                            <option>ΦΑΡΟΣ</option>
                                            <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                            <option>ΔΙΑΚΟΠΤΗΣ</option>
                                            <option>BLINDOR GEROLIMATOS</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4 */}
                            {stoixeiaState.ilektrologikhEgatastash3 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='ilektrologikhEgatastash4'
                                            value={stoixeiaState.ilektrologikhEgatastash4}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                            <option>ΦΑΡΟΣ</option>
                                            <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                            <option>ΔΙΑΚΟΠΤΗΣ</option>
                                            <option>BLINDOR GEROLIMATOS</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5 */}
                            {stoixeiaState.ilektrologikhEgatastash4 &&
                                <Form.Group as={Row} style={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='ilektrologikhEgatastash5'
                                            value={stoixeiaState.ilektrologikhEgatastash5}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                            <option>ΦΑΡΟΣ</option>
                                            <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                            <option>ΔΙΑΚΟΠΤΗΣ</option>
                                            <option>BLINDOR GEROLIMATOS</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ANTIANEMIA */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ANTIANEMIA</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='antianemia'
                                        value={stoixeiaState.antianemia}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΑΝΤΙΑΝΕΜΙΟ 0-5</option>
                                        <option>ΑΝΤΙΑΝΕΜΙΟ 5-7</option>
                                        <option>ΑΝΤΙΑΝΕΜΙΟ 7-10</option>
                                        <option>ΧΩΡΙΣ ΑΝΤΙΑΝΕΜΙΟ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* STOP ΡΟΛΟΥ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>STOP ΡΟΛΟΥ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='stopRolou'
                                        value={stoixeiaState.stopRolou}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΜΕΤΑΛΛΙΚΟ STOP ΡΟΛΟΥ</option>
                                        <option>ΠΛΑΣΤΙΚΟ STOP ΡΟΛΟΥ</option>
                                        <option>ΧΩΡΙΣ STOP</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΧΕΙΡΟΛΑΒΗ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΧΕΙΡΟΛΑΒΗ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='xeirolavh'
                                        value={stoixeiaState.xeirolavh}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΧΕΙΡΟΛΑΒΗ ΡΟΛΟΥ ΑΠΟ PVC</option>
                                        <option>ΧΕΙΡΟΛΑΒΗ ΜΕ ΕΣΟΧΗ ΡΟΛΟΥ ΑΠΟ PVC</option>
                                        <option>ΧΩΡΙΣ ΧΕΙΡΟΛΑΒΗ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΣΥΣΚΕΥΑΣΙΑ */}
                            <Form.Group as={Row} controlId="ΣΥΣΚΕΥΑΣΙΑ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΣΥΣΚΕΥΑΣΙΑ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* PACKAGING */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>PACKAGING </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='packaging'
                                        value={stoixeiaState.packaging}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>ΙΔΙΑ ΕΓΚΑΤΑΣΤΑΣΗ</option>
                                        <option>ΠΑΡΑΛΑΒΗ ΑΠΟ ΕΡΓΟΣΤΑΣΙΟ</option>
                                        <option>ΠΑΡΑΔΟΣΗ ΣΕ ΜΕΤΑΦΟΡΙΚΗ</option>
                                        <option>ΕΞΑΓΩΓΗ (ΞΥΛΟΚΙΒΩΤΙΟ)</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ </Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='tainiaSyskevasias'
                                        value={stoixeiaState.tainiaSyskevasias}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΓΕΡΟΛΥΜΑΤΟΣ</option>
                                        <option>ΚΑΦΕ</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10 }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='tampelaSimansis'
                                        value={stoixeiaState.tampelaSimansis}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>OXI</option>
                                        <option>NAI</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΤΟΠΟΘΕΤΗΣΗ */}
                            <Form.Group as={Row} controlId="ΤΟΠΟΘΕΤΗΣΗ" style={{ marginTop: 10 }}>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΤΟΠΟΘΕΤΗΣΗ' readOnly />
                                </Col>
                            </Form.Group>

                            {/* ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='epifaneiaEgatastashs'
                                        value={stoixeiaState.epifaneiaEgatastashs}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΜΠΕΤΟΝ</option>
                                        <option>ΤΟΥΒΛΟ</option>
                                        <option>ΜΕΤΑΛΛΙΚΟΣ ΣΚΕΛΕΤΟΣ</option>
                                        <option>ΓΥΨΟΣΑΝΙΔΑ</option>
                                        <option>ΞΥΛΟ</option>
                                        <option>ΑΛΛΟ</option>
                                        <option>-</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1 */}
                            <Form.Group as={Row} style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                                <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        as="select"
                                        name='anypsotikoMeso1'
                                        value={stoixeiaState.anypsotikoMeso1}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option>Επιλογή...</option>
                                        <option>ΓΕΡΑΝΟΣ</option>
                                        <option>KΛΑΡΚ</option>
                                        <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                        <option>ΣΚΑΛΑ</option>
                                        <option>-</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2 */}
                            {stoixeiaState.anypsotikoMeso1 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='anypsotikoMeso2'
                                            value={stoixeiaState.anypsotikoMeso2}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΓΕΡΑΝΟΣ</option>
                                            <option>KΛΑΡΚ</option>
                                            <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                            <option>ΣΚΑΛΑ</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3 */}
                            {stoixeiaState.anypsotikoMeso2 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='anypsotikoMeso3'
                                            value={stoixeiaState.anypsotikoMeso3}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΓΕΡΑΝΟΣ</option>
                                            <option>KΛΑΡΚ</option>
                                            <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                            <option>ΣΚΑΛΑ</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4 */}
                            {stoixeiaState.anypsotikoMeso3 &&
                                <Form.Group as={Row} style={{ marginTop: 10 }}>
                                    <Form.Label column sm={{ span: 2, offset: 1 }}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            as="select"
                                            name='anypsotikoMeso4'
                                            value={stoixeiaState.anypsotikoMeso4}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option>Επιλογή...</option>
                                            <option>ΓΕΡΑΝΟΣ</option>
                                            <option>KΛΑΡΚ</option>
                                            <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                            <option>ΣΚΑΛΑ</option>
                                            <option>-</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            }

                            <hr />
                            <Button variant="primary" type="submit" style={{ marginBottom: 50 }} disabled={idiaEggrafh}
                            // onClick={() => {
                            //     localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
                            //     setShowModal(true)
                            // }
                            // }
                            >
                                {/* {idiaEggrafh && <h2>ΙΔΙΑ ΕΓΓΡΑΦΗ!</h2>} */}
                                Εγγραφή
                            </Button>
                            <Button variant="primary" type="reset" style={{ marginBottom: 50, marginLeft: 5 }} disabled={idiaEggrafh}
                                onClick={() => {
                                    // console.log('Ζητάς Επαναφορά, με orderNo', stoixeiaState.orderNo)
                                    dispatch({
                                        type: "CLEAR_FORM",
                                        payload: stoixeiaState.orderNo
                                    })
                                    setidiaEggrafh(false)
                                    setTimeout(function () { window.scrollTo(0, 0); }, 2);
                                }}>
                                {/* Reset όλα τα πεδία, κρατάμε ίδιο orderNo */}
                                Επαναφορά
                            </Button>
                            <Button variant="primary" onClick={handleClearForm} style={{ marginBottom: 50, marginLeft: 5 }}>
                                {/* Reset ολα τα πεδία, ΔΕΝ αυξάνει το orderNo */}
                                Νέα Παραγγελία
                            </Button>
                            <RoloModal show={showModal} handleEktypwsh={handleEktypwsh} handleRepeat={handleRepeat} handleNewRolo={handleNewRolo} />
                        </Form>
                    </Row >
                </Container >
            }
        </StoixeiaContext.Provider >
    )
}

export default Rolo

