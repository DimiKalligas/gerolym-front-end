import React, { useReducer, useEffect } from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'
import { vlookup2, nextValue } from '../functions/tables'
// import formReducer from '../reducers/formReducer'
import stoixeiaReducer from '../reducers/stoixeiaReducer'
import StoixeiaContext from '../context/StoixeiaContext'
import Profil from './stoixeia/Profil'
import Odhgos from './stoixeia/Odhgos'
import Strantzarista from './stoixeia/Strantzarista'
import Aksonas from './stoixeia/Aksonas'
import Shmaies from './stoixeia/Shmaies'
import Tablas from './stoixeia/Tablas'
import Kouti from './stoixeia/Kouti'
import Kapakia from './stoixeia/Kapakia'
import Fasa from './stoixeia/Fases'
import Ypodiairesh from './stoixeia/Ypodiairesh'
import Moter from './stoixeia/Moter'
import Kouzineto from './stoixeia/Kouzineto'
import VasiSthrijhs from './stoixeia/VasiSthrijhs'
import { profil } from '../pinakes/profil'
import { odhgos } from '../pinakes/odhgos'
import { strantzarista } from '../pinakes/strantzarista'
import { aksones } from '../pinakes/aksones'
import { aksonakiaFlantzes } from '../pinakes/aksonakiaFlantzes'
import { elathrioF60 } from '../pinakes/elathrioF60'
import { shmaiesRolou } from '../pinakes/shmaiesRolou'
import { tablasKoutiKapaki } from '../pinakes/tablasKoutiKapaki'
// import { odhgoiStrantzes } from '../pinakes/odhgoiStrantzes'
import { fasaTelikouProfil } from '../pinakes/fasaTelikouProfil'
import { tzamakiParathyro } from '../pinakes/tzamakiParathyro'
import { ypodiaireshPinakas } from '../pinakes/ypodiaireshPinakas'
import { ypodiaireshKouti } from '../pinakes/ypodiaireshKouti'
import { agyria } from '../pinakes/agyria'
import { apasfaliseis } from '../pinakes/apasfaliseis'
import { antianemio } from '../pinakes/antianemio'
import { xeirolavi } from '../pinakes/xeirolavi'
import { elathrioAjonasF602 } from '../pinakes/elathrioAjonasF60-2'
import { elathrioAjonasF762 } from '../pinakes/elathrioAjonasF76-2'

const Stoixeia = () => {
    // const initialState = {
    //     customer: '',
    //     orderDate: '', //Date.now(),
    //     deliveryDate: '',
    //     pithaniDeliveryDate: '',
    //     orderNo: 1,
    //     profil: '',
    //     profilKwd: '',
    //     typosRolou: 'ΜΟΝΟΦΑΣΙΚΟ',
    //     tyligma: 'ΚΑΝΟΝΙΚΟ',
    //     thesi: 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ',
    //     anoigmaXwrou: 1,
    //     ypsosXwrou: 1,
    //     proteinomenosOdhgos: '',
    //     odhgos: '',
    //     odhgosKwd: '',
    //     odhgosIndex: 0,
    //     strantzarista: '',
    //     strantzaristaKwd: '',
    //     thesiStrantzaristou: '',
    //     gwniesSthrijhs: 'ΟΧΙ',
    //     platosStrantzaristou: '',
    //     vathosStrantzaristou: '',
    //     katharoAnoigma: 1, // R6
    //     katharoYpsos: 0,
    //     proteinomenoiAksones: '',
    //     aksonas: '',
    //     aksonasKwd: '',
    //     aksonasIndex: '',
    //     aksonasPahos: 0,
    //     aksonasMhkos: 0,
    //     aksonaki: '',
    //     aksonakiKwd: '',
    //     aksonakiIndex: '',
    //     aksonakiKouzinetou: '',
    //     aksonakiKouzinetouKwd: '',
    //     aksonakiKouzinetouIndex: '',
    //     ypsosSimaias: 0,
    //     maxIndexF60: 41,
    //     maxIndexF76: '',
    //     proteinomenaElathria: '',
    //     elathrioA: '',
    //     elathrioAkwd: '',
    //     elathrioAtem: '',
    //     elathrioB: '',
    //     elathrioBkwd: '',
    //     elathrioBtem: '',
    //     elathrioC: '',
    //     elathrioCkwd: '',
    //     elathrioCtem: '',
    //     shmaies: '',
    //     shmaiesKwd: '',
    //     ypsosShmaias: '',
    //     mhkosShmaias: '',
    //     proteinomenoKouti: '',
    //     tablades: '',
    //     tabladesKwd: '',
    //     koutia: '',
    //     koutiaKwd: '',
    //     lamakiaMonofKoutiou: '',
    //     telikoYpsosRolou: 0,
    //     fases: '',
    //     tzamakia: '',
    //     perieliksi: 0,
    //     mhkosProfilKophs: 0,
    //     plithosAgyriwn: 0,
    //     resultHook: 0,
    //     agyria: '',
    //     agyriaKwd: '',
    //     resultGuideOverSide: '',
    //     thikesSthrijhsOdhgwn: 'OXI',
    //     ypodiairesh: '',
    //     ypodiaireshKwd: '',
    //     ypsosMeiwthra: 0,
    //     arhikoYpsosKourtinas: 0,
    //     plithosProfil: '',
    //     varosKourtinas: 0,
    //     sxesh: '',
    //     moter: '',
    //     moterKwd: '',
    //     moterThesi: '',
    //     thesiParoxhsReumatos: '',
    //     proteinomenoKouzineto: '',
    //     kouzineto: '',
    //     kouzinetoKwd: '',
    //     apasfaliseis: '',
    //     apasfaliseisKwd: '',
    //     packaging: '',
    //     koutiaXwrisSkotia: '',
    //     steganopoihshTampla: '',
    //     anypsotikoMeso1: '',
    //     anypsotikoMeso2: '',
    //     anypsotikoMeso3: '',
    //     anypsotikoMeso4: '',
    //     ilektrologikhEgatastash1: '',
    //     ilektrologikhEgatastash2: '',
    //     ilektrologikhEgatastash3: '',
    //     ilektrologikhEgatastash4: '',
    //     ilektrologikhEgatastash5: '',
    //     tainiaSyskevasias: '',
    //     tampelaSimansis: '',
    //     kleidariaAsfaleias: '',
    //     antianemia: '',
    //     stopRolou: '',
    //     xeirolavh: '',
    //     vashSthrhjis: '',
    //     vashSthrijhsKwd: '',
    //     plithosVasewnSthrijhsOdhgou: 0,
    //     xrwma: 0,
    //     proteraiothta: '',
    //     diastashThikisSthrijhsOdhgwn: '',
    //     kolonaSthrijhsOdhgwn: '',
    //     ypsosOdhgou: 0,
    //     epipleonYpsos: 0,
    //     diastashKolonasSthrijhsOdhgwn: '',
    //     lamaSthrijhs80x10: 0,
    //     gwniaSthrijhs80x10: 0,
    //     gwniaSthrijhs80x80: 0,
    //     aerasProfilOdhgou: 0,
    //     arParaggelias2: 0,
    //     ypsosDokariou: 0,
    //     parasouter: '',
    //     parathyraki: '',
    //     proteinomenhShmaia: '',
    //     kwdikosProteinomenhsShmaias: '',
    //     indexProteinomenhsShmaias: '',
    //     proteinomenesFases: '',
    //     ypsosDokou: 0,
    //     ypsosStrantzaristou: 0,
    //     monviom: '' // ΜΟΝΟΦΑΣΙΚΟ ή ΒΙΟΜΗΧΑΝΙΚΟ
    // }

    // const [formState, formdispatch] = useReducer(formReducer, initialState);
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, // να μη χάνεται το state στο refresh
        // initialState
        [],
        (initialState) => JSON.parse(localStorage.getItem('stoixeiastate')) || initialState
    );
    const providerState = {
        stoixeiaState,
        dispatch
    }

    // useEffect(() => {
    //     // This is a side-effect and belongs in an effect
    //     localStorage.setItem('stoixeiastate', JSON.stringify(stoixeiaState));
    // }, [stoixeiaState]);

    // // ΑΛΛΑΓΗ Κωδ. ΑΞΟΝΑΚΙ
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 0)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonakiKwd',
    //         payload: x
    //     })
    //     // ΑΛΛΑΓΗ ΑΞΟΝΑΚΙ index
    //     let y = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 2)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonakiIndex',
    //         payload: y
    //     })
    // }, [stoixeiaState.aksonaki])

    // // // TABLE I - ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ
    // useEffect(() => {
    //     let x;

    //     console.log('stoixeiaState.katharoAnoigma', stoixeiaState.katharoAnoigma)
    //     if ((stoixeiaState.katharoAnoigma / 1000 > 0) && (stoixeiaState.katharoAnoigma / 1000 > 4.5)) { x = 'ΟΔΗΓΟΣ 7cm' }// return 'ΟΔΗΓΟΣ 7cm'
    //     else if ((stoixeiaState.katharoAnoigma / 1000 >= 4.50) && (stoixeiaState.katharoAnoigma / 1000 < 8)) { x = 'ΟΔΗΓΟΣ 12cm' }
    //     else { x = "Εκτός ορίων !" }
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenosOdhgos',
    //         payload: x
    //     })
    // }, [stoixeiaState.katharoAnoigma])

    // // // TABLE R - ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ
    // useEffect(() => {
    //     let x, y;
    //     x = vlookup2(stoixeiaState.odhgosKwd, odhgos, 3) // FULL
    //     y = vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4) // ΒΑΘΟΣ mm

    //     if (stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') {
    //         x = stoixeiaState.anoigmaXwrou - (2 * vlookup2(stoixeiaState.odhgosKwd, odhgos, 3))
    //             - (2 * vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4))
    //     }

    //     // ΘΕΛΕΙ ΤΙΜΗ ΣΤΟΝ ΟΔΗΓΟ
    //     // console.log('Anoigma xwrou:', stoixeiaState.anoigmaXwrou) // OK
    //     // console.log('Odhgos Full', vlookup2(stoixeiaState.odhgosKwd, odhgos, 3)) // ΟΚ
    //     // console.log('Strantzarista Vathos', vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4)) // OK
    //     // console.log('Bazw sto katharo anoigma thn timh', parseInt(x)) // OK

    //     console.log('ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ', stoixeiaState.katharoAnoigma)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'katharoAnoigma',
    //         payload: parseInt(x)
    //     })

    // }, [stoixeiaState.thesi, stoixeiaState.anoigmaXwrou, stoixeiaState.odhgosKwd, stoixeiaState.strantzaristaKwd])

    // // // TABLE S - ΚΑΘΑΡΟ ΥΨΟΣ 
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' && stoixeiaState.thesi === 'ΕΚΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') { x = stoixeiaState.telikoYpsosRolou }
    //     else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && stoixeiaState.thesi === 'ΕKΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') { x = stoixeiaState.telikoYpsosRolou - stoixeiaState.ypsosSimaias }
    //     else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ' && stoixeiaState.thesi === 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ') { x = stoixeiaState.telikoYpsosRolou }
    //     else { x = "Προσοχή!" }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'katharoYpsos',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.thesi, stoixeiaState.telikoYpsosRolou, stoixeiaState.ypsosSimaias]) // to telikoYpsosRolou einai sto telos!

    // // // ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         if ((vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou < 700)
    //             && (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou >= 300)) {
    //             x = 'ΑΞΟΝΑΣ Φ219-ΧΩΡΙΣ ΕΛΑΤΗΡΙΟ - ΒΑΜΜΕΝΟΣ'
    //         }

    //     } else
    //         if (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 300) { x = 'ΑΞΟΝΑΣ Φ159 - ΧΩΡΙΣ ΕΛΑΤΗΡΙΟ - ΒΑΜΜΕΝΟΣ' }
    //         else if (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 <= 350) {
    //             if ((stoixeiaState.anoigmaXwrou / 1000 < 4, 7) && (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 160)) {
    //                 x = 'ΑΞΟΝΑΣ Φ60-ΜΕ ΕΛΑΤΗΡΙΟ - ΓΑΛΒΑΝΙΖΕ'
    //             }
    //             else { x = 'ΑΞΟΝΑΣ Φ76 - ΜΕ ΕΛΑΤΗΡΙΟ - ΓΑΛΒΑΝΙΖΕ' }
    //         }

    //     // console.log(vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou) OK
    //     // console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou)) OK

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenoiAksones',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.profilKwd, stoixeiaState.anoigmaXwrou, stoixeiaState.ypsosXwrou])

    // // ΠΑΧΟΣ & MHKOΣ ΑΞΟΝΑ
    // useEffect(() => {
    //     let m
    //     let p = vlookup2(stoixeiaState.aksonasKwd, aksones, 2)
    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         m = stoixeiaState.mhkosProfilKophs - 2 * 30 + 2 * vlookup2(stoixeiaState.profilKwd, profil, 12)
    //     }
    //     else if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //         m = stoixeiaState.mhkosProfilKophs - stoixeiaState.aerasProfilOdhgou - 10 + (2 * vlookup2(stoixeiaState.profilKwd, profil, 12))
    //     }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonasPahos',
    //         payload: p
    //     })
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonasMhkos',
    //         payload: m
    //     })
    // }, [stoixeiaState.aksonasKwd])

    // {/* ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ */ }
    // useEffect(() => {
    //     let ak = stoixeiaState.aksonas || ' ' // μπορεί να είναι undefined
    //     let MaxIndexF60 = 41
    //     let x

    //     console.log('in Stoixeia, aksonas=', stoixeiaState.aksonas)
    //     if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //         if (ak.includes('Φ60')) {
    //             x = vlookup2(MaxIndexF60, elathrioAjonasF602, 7)
    //         }
    //         else if (ak.includes('Φ60')) {
    //             x = vlookup2(MaxIndexF60, elathrioAjonasF762, 7)
    //         }
    //     }
    //     else if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') { x = 0 }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenaElathria',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou])

    // {/* MaxIndex Φ60 */ }
    // useEffect(() => {
    //     let x = nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF602)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'maxIndexF60',
    //         payload: x
    //     })
    // }, [stoixeiaState.varosKourtinas])

    // {/* MaxIndex Φ76 */ }
    // useEffect(() => {
    //     let x = nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF762)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'maxIndexF76',
    //         payload: x
    //     })
    // }, [stoixeiaState.varosKourtinas])

    // // useEffect(() => {
    // //     console.log(typeof (stoixeiaState.anoigmaXwrou))
    // //     console.log('katharo anoigma:', typeof (stoixeiaState.katharoAnoigma)) // 
    // //     console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 6)))
    // //     console.log(typeof (vlookup2(stoixeiaState.aksonasKwd, aksones, 5)))
    // //     console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 3)))
    // //     console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 3)))


    // // }, [stoixeiaState.typosRolou])

    // // ΠΕΡΙΕΛΙΞΗ
    // useEffect(() => {
    //     let x = Math.sqrt((stoixeiaState.katharoAnoigma * vlookup2(stoixeiaState.profilKwd, profil, 6) * 0.4 * 3.14) +
    //         vlookup2(stoixeiaState.aksonasKwd, aksones, 5) +
    //         Math.sqrt(vlookup2(stoixeiaState.profilKwd, profil, 3) / 2)) +
    //         vlookup2(stoixeiaState.profilKwd, profil, 3)

    //     console.log('ΠΕΡΙΕΛΙΞΗ', stoixeiaState.perieliksi, typeof (stoixeiaState.perieliksi))
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'perieliksi',
    //         payload: x
    //     })
    // }, [stoixeiaState.katharoAnoigma, stoixeiaState.profilKwd, stoixeiaState.aksonasKwd])

    // // RESULT GUIDE / SIDE
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.odhgosKwd, odhgos, 2)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'resultGuideOverSide',
    //         payload: x
    //     })
    // }, [stoixeiaState.odhgosKwd])

    // // ΜΗΚΟΣ ΠΡΟΦΙΛ ΚΟΠΗΣ
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.thikesSthrijhsOdhgwn === 'NAI') {
    //         if (stoixeiaState.plithosAgyriwn === 0) {
    //             x = stoixeiaState.katharoAnoigma + 2 * stoixeiaState.resultGuideOverSide - 2 * vlookup2(stoixeiaState.profilKwd, profil, 12) - stoixeiaState.aerasProfilOdhgou
    //         }
    //     } else {
    //         x = stoixeiaState.katharoAnoigma + 2 * stoixeiaState.resultGuideOverSide - stoixeiaState.aerasProfilOdhgou - 2 * stoixeiaState.aerasProfilOdhgou
    //     }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'mhkosProfilKophs',
    //         payload: x
    //     })
    // }, [stoixeiaState.thikesSthrijhsOdhgwn, stoixeiaState.plithosAgyriwn, stoixeiaState.katharoAnoigma, stoixeiaState.resultGuideOverSide, stoixeiaState.profilKwd, stoixeiaState.aerasProfilOdhgou])

    // // ΥΨΟΣ ΜΕΙΩΤHΡΑ = TABLE!BW6, ΥΠΟΔΙΑΙΡΕΣΗ Κωδικός
    // useEffect(() => {
    //     let ypodiaireshKwd = vlookup2(stoixeiaState.ypodiairesh, ypodiaireshPinakas, 0)
    //     let ypsosMeiwthra = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 3)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypodiaireshKwd',
    //         payload: ypodiaireshKwd
    //     })
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosMeiwthra',
    //         payload: ypsosMeiwthra
    //     })
    // }, [stoixeiaState.ypodiaireshKwd, stoixeiaState.ypodiairesh])

    // // ΑΡΧΙΚΟ ΥΨΟΣ ΚΟΥΡΤΙΝΑΣ - ΑΠΟΤΕΛΕΣΜΑΤΑ!D6
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         x = (stoixeiaState.katharoYpsos + stoixeiaState.ypsosMeiwthra / 2 + 200 + stoixeiaState.ypodiaireshKwd)
    //     } else
    //         if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //             x = (stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias)
    //         }
    //         else x = "Προσοχή!"

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'arhikoYpsosKourtinas',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.ypsosMeiwthra, stoixeiaState.ypodiaireshKwd, stoixeiaState.ypsosShmaias])

    // // ΠΛΗΘΟΣ ΠΡΟΦΙΛ - ΑΠΟΤΕΛΕΣΜΑΤΑ!G6
    // useEffect(() => {
    //     let plithosProfil = Math.ceil(vlookup2(stoixeiaState.profilKwd, profil, 5))

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'plithosProfil',
    //         payload: plithosProfil
    //     })
    // }, [stoixeiaState.profilKwd])

    // // ΒΑΡΟΣ ΚΟΥΡΤΙΝΑΣ - ΑΠΟΤΕΛΕΣΜΑΤΑ!M6
    // useEffect(() => {
    //     let varosKourtinas = stoixeiaState.mhkosProfilKophs * stoixeiaState.plithosProfil * vlookup2(stoixeiaState.profilKwd, profil, 7) / 1000

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'varosKourtinas',
    //         payload: varosKourtinas
    //     })
    // }, [stoixeiaState.mhkosProfilKophs, stoixeiaState.plithosProfil, stoixeiaState.profilKwd])

    // // ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRoloy === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[0][5]) { x = ypodiaireshKouti[0][3] } else
    //             if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[1][5]) { x = ypodiaireshKouti[1][3] } else
    //                 if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[2][5]) { x = ypodiaireshKouti[2][3] } else
    //                     if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[3][5]) { x = ypodiaireshKouti[3][3] } else
    //                         if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[4][5]) { x = ypodiaireshKouti[4][3] } else
    //                             if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[5][5]) { x = ypodiaireshKouti[5][3] } else
    //                                 x = "Εκτός ορίων !"

    //     }
    //     else x = "ΜΟΝΟΦΑΣΙΚΟ ΡΟΛΟ !"

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenhYpodiairesh',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.varosKourtinas, stoixeiaState.perieliksi, stoixeiaState.typosRoloy])

    // // // ΥΠΟΔΙΑΙΡΕΣΗ ΚΩΔΙΚΑΣ
    // // useEffect(() => {
    // //     let x = vlookup2(stoixeiaState.proteinomenhYpodiairesh, ypodiaireshPinakas, 0)

    // //     dispatch({
    // //         type: 'HANDLE TEXT',
    // //         field: 'ypodiaireshKwd',
    // //         payload: x
    // //     })
    // // }, [stoixeiaState.proteinomenhYpodiairesh])

    // // ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 2)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'mhkosMeiwthra',
    //         payload: x
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // // ΥΨΟΣ ΜΕΙΩΤΗΡΑ
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 3)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosMeiwthra',
    //         payload: x
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // // ΣΧΕΣΗ
    // useEffect(() => {
    //     // console.log('Ψαχνω για', stoixeiaState.ypodiaireshKwd)
    //     let sxesh = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 4)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'sxesh',
    //         payload: sxesh
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // {/* ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */ }
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.profilKwd, profil, 14)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenesFases',
    //         payload: x
    //     })
    // }, [stoixeiaState.profilKwd])


    // // ΑΓΚΥΡΙΑ, plithosAgyriwn, ypodiairesh από Visual Basic
    // useEffect(() => {
    //     if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //         let ak = stoixeiaState.aksonas
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'agyria',
    //             payload: 'ΧΩΡΙΣ ΑΓΚΥΡΙΑ'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'plithosAgyriwn',
    //             payload: 0
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'ypodiairesh',
    //             payload: 'ΧΩΡΙΣ ΥΠΟΔΙΑΙΡΕΣΗ'
    //         })
    //     }
    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'shmaies',
    //             payload: 0
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioA',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioB',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioC',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioAtem',
    //             payload: '0'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioBtem',
    //             payload: '0'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'elathrioCtem',
    //             payload: '0'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'proteinomenaElathria',
    //             payload: '0'
    //         })
    //     }
    // }, [stoixeiaState.typosRolou])

    // // MaxIndexΦ60
    // // = MIN(IF('ΕΛΑΤΗΡΙΑ (2)'!$G$4: $G$34 >= ΑΠΟΤΕΛΕΣΜΑΤΑ!$M6; 'ΕΛΑΤΗΡΙΑ (2)'!$G$4: $G$34))
    // // if varosKourtinas<=160 then maxIndexF60=160 

    // // ΑΓΓΥΡΙΑ ΚΩΔ. agyria
    // useEffect(() => {
    //     let agyriaKwd = vlookup2(stoixeiaState.agyria, agyria, 0)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'agyriaKwd',
    //         payload: agyriaKwd
    //     })
    // }, [stoixeiaState.agyria])

    // // ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ 
    // useEffect(() => {
    //     let proteinomenoKouzineto;

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         if (stoixeiaState.varosKourtinas <= 700 && stoixeiaState.varosKourtinas > 550) proteinomenoKouzineto = 'Παρασούτερ Φ50'
    //         else if (stoixeiaState.varosKourtinas <= 550 && stoixeiaState.varosKourtinas > 0) proteinomenoKouzineto = 'Παρασούτερ Φ40'
    //         else if (stoixeiaState.varosKourtinas > 700) proteinomenoKouzineto = 'Εκτός ορίων!'
    //     }
    //     else proteinomenoKouzineto = 'ΜΟΝΟΦΑΣΙΚΟ ΡΟΛΟ!'

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenoKouzineto',
    //         payload: proteinomenoKouzineto
    //     })
    // }, [stoixeiaState.varosKourtinas])

    // {/* ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ */ }
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.vashSthrhjisKwd == '00.00.00.00.000') x = 0
    //     else x = stoixeiaState.profil

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'plithosVasewnSthrijhsOdhgou',
    //         payload: x
    //     })
    // }, [stoixeiaState.vashSthrhjisKwd])

    // // ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ 
    // useEffect(() => {
    //     let x = parseInt(stoixeiaState.telikoYpsosRolou) + parseInt(stoixeiaState.epipleonYpsos) // γιατί τα έκανε string?

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'diastashKolonasSthrijhsOdhgwn',
    //         payload: x
    //     })
    // }, [stoixeiaState.telikoYpsosRolou, stoixeiaState.epipleonYpsos])

    // // ΤΑΜΠΛΑΔΕΣ
    // useEffect(() => {
    //     if (stoixeiaState.tablades === 'ΧΩΡΙΣ ΤΑΜΠΛΑ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'steganopoihshTampla',
    //             payload: 'OXI'
    //         })
    //     }
    // }, [stoixeiaState.tablades])

    // // ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         x = vlookup2(stoixeiaState.indexProteinomenhsShmaias, shmaiesRolou, 1)
    //     } else x = '-'

    //     // console.log('indexProteinomenhsShmaias', stoixeiaState.indexProteinomenhsShmaias)
    //     // console.log('proteinomenoKouti', x)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenoKouti',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.indexProteinomenhsShmaias])

    // // ΘΗΚΕΣ ΣΤΗΡΙΞΗ ΟΔΗΓΩΝ
    // useEffect(() => {
    //     if (stoixeiaState.thikesSthrijhsOdhgwn === 'ΝΑΙ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'diastashThikisSthrijhsOdhgwn',
    //             payload: stoixeiaState.ypsosOdhgou
    //         })
    //     }
    //     if (stoixeiaState.thikesSthrijhsOdhgwn === 'OXI') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'diastashThikisSthrijhsOdhgwn',
    //             payload: '0'
    //         })
    //     }
    // }, [stoixeiaState.thikesSthrijhsOdhgwn])

    // // ΚΟΥΤΙΑ
    // useEffect(() => {
    //     let koutia = stoixeiaState.koutia || 'ΧΩΡΙΣ ΚΟΥΤΙΑ'
    //     var matches = koutia.match(/(\d+)/) || 0
    //     let kouti = matches[0] || 0

    //     if (stoixeiaState.koutia === 'ΧΩΡΙΣ ΚΟΥΤΙΑ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'kapakia',
    //             payload: 'ΧΩΡΙΣ ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ'
    //         })
    //     } else
    //         if (kouti === '30') {
    //             dispatch({
    //                 type: 'HANDLE TEXT',
    //                 field: 'kapakia',
    //                 payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 30CM'
    //             })
    //         } else
    //             if (kouti === '35') {
    //                 dispatch({
    //                     type: 'HANDLE TEXT',
    //                     field: 'kapakia',
    //                     payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 35CM'
    //                 })
    //             } else
    //                 if (kouti === '40') {
    //                     dispatch({
    //                         type: 'HANDLE TEXT',
    //                         field: 'kapakia',
    //                         payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 40CM'
    //                     })
    //                 } else
    //                     if (kouti === '45') {
    //                         dispatch({
    //                             type: 'HANDLE TEXT',
    //                             field: 'kapakia',
    //                             payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 45CM'
    //                         })
    //                     } else
    //                         if (kouti === '50') {
    //                             dispatch({
    //                                 type: 'HANDLE TEXT',
    //                                 field: 'kapakia',
    //                                 payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 50CM'
    //                             })
    //                         } else
    //                             if (kouti === '55') {
    //                                 dispatch({
    //                                     type: 'HANDLE TEXT',
    //                                     field: 'kapakia',
    //                                     payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 55CM'
    //                                 })
    //                             } else
    //                                 if (kouti === '60') {
    //                                     dispatch({
    //                                         type: 'HANDLE TEXT',
    //                                         field: 'kapakia',
    //                                         payload: 'ΚΑΠΑΚΙ ΚΟΥΤΙΟΥ ΡΟΛΟΥ 60CM'
    //                                     })
    //                                 }

    // }, [stoixeiaState.koutia])

    // // ΤΖΑΜΑΚΙΑ
    // useEffect(() => {
    //     if (stoixeiaState.tzamakia === 'ΧΩΡΙΣ ΤΖΑΜΑΚΙΑ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'tzamakiaPlithos',
    //             payload: 0
    //         })
    //     }
    // }, [stoixeiaState.tzamakia])

    // // ΠΑΡΑΣΟΥΤΕΡ
    // useEffect(() => {
    //     if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'parasouter',
    //             payload: 'ΧΩΡΙΣ ΚΟΥΖΙΝΕΤΟ'
    //         })
    //     }
    // }, [stoixeiaState.typosRolou])

    // // ΠΑΡΑΣΟΥΤΕΡ - ΑΞΟΝΑΚΙ ΜΟΤΕΡ
    // useEffect(() => {
    //     // console.log(stoixeiaState.typosRolou)
    //     if (stoixeiaState.typosRolou === 'ΜΟΝΟΦΑΣΙΚΟ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'moterThesi',
    //             payload: 'ΚΕΝΤΡΙΚΟ'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'aksonaki',
    //             payload: 'ΧΩΡΙΣ ΑΞΟΝΑΚΙΑ'
    //         })
    //     }
    // }, [stoixeiaState.typosRolou])

    // // PACKAGING
    // useEffect(() => {
    //     if (stoixeiaState.packaging !== 'ΙΔΙΑ ΕΓΚΑΤΑΣΤΑΣΗ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'epifaneiaEgatastashs',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'anypsotikoMeso1',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'anypsotikoMeso2',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'anypsotikoMeso3',
    //             payload: '-'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'anypsotikoMeso4',
    //             payload: '-'
    //         })
    //     }
    // }, [stoixeiaState.packaging])

    // // ΚΟΛΩΝΑ ΣΤΗΡΙΞΗΣ
    // useEffect(() => {
    //     if (stoixeiaState.kolonaSthrijhsOdhgwn === 'ΧΩΡΙΣ ΚΟΛΟΝΑ ΟΔΗΓΩΝ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'diastashKolonasSthrijhsOdhgwn',
    //             payload: 0
    //         })
    //     } else {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'diastashKolonasSthrijhsOdhgwn',
    //             payload: stoixeiaState.ypsosOdhgou
    //         })
    //     }
    // }, [stoixeiaState.kolonaSthrijhsOdhgwn])

    // // ΣΤΡΑΝΤΖΑΡΙΣΤΑ
    // useEffect(() => {
    //     if (stoixeiaState.strantzarista === 'ΧΩΡΙΣ ΣΤΡΑΤΖΑΡΙΣΤΟ - ΚΟΙΛΟΔΟΚΟ') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'thesiStrantzaristou',
    //             payload: 'ΟΧΙ ΣΤΡΑΤΖΑ'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'gwniesSthrijhs',
    //             payload: 'ΟΧΙ'
    //         })
    //     }
    // }, [stoixeiaState.strantzarista])

    // // ΚΩΔΙΚΟΣ & INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ
    // useEffect(() => {
    //     let kwd, ind

    //     if (stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ') {
    //         if ((stoixeiaState.perieliksi > 0) && (stoixeiaState.perieliksi <= 350)) {
    //             kwd = '08.01.03.35.000'
    //             ind = '35X35'
    //         }
    //         else if (stoixeiaState.perieliksi > 350 && stoixeiaState.perieliksi <= 400) {
    //             kwd = '08.01.03.40.000'
    //             ind = '40X40'
    //         }
    //         else if (stoixeiaState.perieliksi > 400 && stoixeiaState.perieliksi <= 450) {
    //             kwd = '08.01.03.45.000'
    //             ind = '45X45'
    //         }
    //         else if (stoixeiaState.perieliksi > 450 && stoixeiaState.perieliksi <= 500) {
    //             kwd = '08.01.03.50.000'
    //             ind = '50X50'
    //         }
    //         else if (stoixeiaState.perieliksi > 500 && stoixeiaState.perieliksi <= 550) {
    //             kwd = '08.01.03.55.000'
    //             ind = '55X55'
    //         }
    //     }
    //     else {
    //         kwd = '-'
    //         ind = 0
    //     }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'kwdikosProteinomenhsShmaias',
    //         payload: kwd
    //     })
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'indexProteinomenhsShmaias',
    //         payload: ind
    //     })
    // }, [stoixeiaState.perieliksi])

    // // ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.kwdikosProteinomenhsShmaias, shmaiesRolou, 1)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenhShmaia',
    //         payload: x
    //     })
    // }, [stoixeiaState.kwdikosProteinomenhsShmaias])

    // // ΥΨΟΣ ΔΟΚΟΥ
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.typosRolou = 'ΒΙΟΜΗΧΑΝΙΚΟ') x = stoixeiaState.katharoYpsos + stoixeiaState.epipleonYpsos
    //     else if (stoixeiaState.typosRolou = 'ΜΟΝΟΦΑΣΙΚΟ') x = stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosDokou',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.epipleonYpsos, stoixeiaState.ypsosShmaias])

    // // ΥΨΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.strantzarista === 'ΧΩΡΙΣ ΣΤΡΑΤΖΑΡΙΣΤΟ - ΚΟΙΛΟΔΟΚΟ') x = 0
    //     else x = stoixeiaState.ypsosDokou

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosStrantzaristou',
    //         payload: x
    //     })
    // }, [stoixeiaState.strantzarista])

    const handleChange = (e) => {
        dispatch({
            type: 'HANDLE TEXT',
            field: e.target.name,
            payload: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log('Hello from Stoixeia')
    }

    return (
        <StoixeiaContext.Provider value={providerState} >
            <Container style={{ marginTop: 80 }}>
                <Row className="justify-content-md-center" xs={8} md={8} lg={10}>
                    <Form onSubmit={handleSubmit}>

                        {/* ΠΡΟΦΙΛ
                        <Form.Group as={Row} controlId="formProfil">
                            <Form.Label column sm={3}>ΠΡΟΦΙΛ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='profil'
                                    value={stoixeiaState.profil}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>Επιλογή...</option>
                                    <Profil />
                                </Form.Control>
                            </Col>
                            {/* ΚΩΔΙΚΟΣ ΠΡΟΦΙΛ */}
                        {/* {stoixeiaState.profilKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.profilKwd} readOnly />
                            </Col>}
                        </Form.Group> */}
                        {/* 
                        ΤΥΠΟΣ ΡΟΛΟΥ
                        <Form.Group as={Row} controlId="typosRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΥΠΟΣ ΡΟΛΟΥ</Form.Label>
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
                        </Form.Group> */}

                        {/* ΤΥΛΙΓΜΑ */}
                        {/* <Form.Group as={Row} controlId="tyligma" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΥΛΙΓΜΑ</Form.Label>
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
                        </Form.Group> */}

                        {/* ΘΕΣΗ */}
                        {/* <Form.Group as={Row} controlId="thesi" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΘΕΣΗ</Form.Label>
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
                        </Form.Group> */}

                        {/* ΑΝΤΙΓΡΑΦΕΙ ΤΟΝ ΤΥΠΟ ΡΟΛΟΥ 
                        <Form.Group as={Row} controlId="monviom" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΜΟΝΟΦΑΣΙΚΟ - ΒΙΟΜΗΧΑΝΙΚΟ</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    as="select"
                                    name='monviom'
                                    value={stoixeiaState.monviom}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {stoixeiaState.typosRolou === 'ΒΙΟΜΗΧΑΝΙΚΟ' ? <option>ΒΙΟΜΗΧΑΝΙΚΟ</option> : <option>ΜΟΝΟΦΑΣΙΚΟ</option>}
                                    {/* <option>ΒΙΟΜΗΧΑΝΙΚΟ</option>
                                    <option>ΜΟΝΟΦΑΣΙΚΟ</option> */}
                        {/* </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΑΝΟΙΓΜΑ ΧΩΡΟΥ */}
                        {/* <Form.Group as={Row} controlId="anoigmaXwrou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΟΙΓΜΑ ΧΩΡΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='anoigmaXwrou'
                                    maxLength='4'
                                    value={stoixeiaState.anoigmaXwrou}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΥΨΟΣ ΧΩΡΟΥ */}
                        {/* <Form.Group as={Row} controlId="ypsosXwrou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΨΟΣ ΧΩΡΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='ypsosXwrou'
                                    maxLength='4'
                                    value={stoixeiaState.ypsosXwrou}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ */}
                        {/* <Form.Group as={Row} controlId="proteinomenosOdhgos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟΣ ΟΔΗΓΟΣ</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" name='proteinomenosOdhgos' placeholder={stoixeiaState.proteinomenosOdhgos} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΟΔΗΓΟΣ */}
                        {/* <Form.Group as={Row} controlId="odhgos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΟΔΗΓΟΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='odhgos'
                                    value={stoixeiaState.odhgos}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>Επιλογή...</option>
                                    <Odhgos />
                                    {/* {odhgosList} */}
                        {/* </Form.Control>
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΟΔΗΓΟΥ */}
                        {/* {stoixeiaState.odhgosKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.odhgosKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΟΔΗΓΟΣ INDEX */}
                        {/* <Form.Group as={Row} controlId="odhgosIndex" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>INDEX</Form.Label>
                            {stoixeiaState.odhgosKwd !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.odhgosIndex} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΣΤΡΑΝΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ */}
                        {/* <Form.Group as={Row} controlId="strantzarista" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΣΤΡΑΝΤΖΑΡΙΣΤΑ ΚΟΙΛΟΔΟΚΟΙ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                        {/* <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 0)} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΘΕΣΗ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                        {/* <Form.Group as={Row} controlId="thesiStrantzaristou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΘΕΣΗ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='thesiStrantzaristou'
                                    value={stoixeiaState.thesiStrantzaristou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>{stoixeiaState.thesiStrantzaristou}</option>
                                    <option>ΑΡΙΣΤΕΡΑ ΜΟΝΟ</option>
                                    <option>ΔΕΞΙΑ ΜΟΝΟ</option>
                                    <option>ΑΡΙΣΤΕΡΑ & ΔΕΞΙΑ</option>
                                    <option>ΟΧΙ ΣΤΡΑΤΖΑ</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΠΛΑΤΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                        {/* <Form.Group as={Row} controlId="platosStrantzaristou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>Πλάτος mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='platosStrantzaristou' placeholder={stoixeiaState.platosStrantzaristou} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΒΑΘΟΣ ΣΤΡΑΝΤΖΑΡΙΣΤΟΥ */}
                        {/* <Form.Group as={Row} controlId="vathosStrantzaristou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>Βάθος mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='vathosStrantzaristou' placeholder={stoixeiaState.vathosStrantzaristou} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ */}
                        {/* <Form.Group as={Row} controlId="katharoAnoigma" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΑΘΑΡΟ ΑΝΟΙΓΜΑ mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='katharoAnoigma' placeholder={stoixeiaState.katharoAnoigma} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΚΑΘΑΡΟ ΥΨΟΣ */}
                        {/* <Form.Group as={Row} controlId="katharoYpsos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΑΘΑΡΟ ΥΨΟΣ mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='katharoYpsos' placeholder={stoixeiaState.katharoYpsos} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΕΠΙΠΛΕΟΝ ΥΨΟΣ */}
                        {/* <Form.Group as={Row} controlId="epipleonYpsos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΠΙΠΛΕΟΝ ΥΨΟΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" name='epipleonYpsos' value={stoixeiaState.epipleonYpsos} onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ */}
                        {/* <Form.Group as={Row} controlId="proteinomenoiAksones" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟΙ ΑΞΟΝΕΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='proteinomenoiAksones' placeholder={stoixeiaState.proteinomenoiAksones} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΑΞΟΝΕΣ */}
                        {/* <Form.Group as={Row} controlId="aksonas" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΞΟΝΕΣ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΑΞΟΝA */}
                        {/* {stoixeiaState.aksonasKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΑΞΟΝAΣ INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonasIndex" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>INDEX</Form.Label>
                            {stoixeiaState.aksonas !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasIndex} readOnly />
                            </Col>}
                            <Form.Label column sm={3}>Πάχος Άξονα</Form.Label>
                            {stoixeiaState.aksonas !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasPahos} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΑΞΟΝAKI ΜΟΤΕΡ */}
                        {/* <Form.Group as={Row} controlId="aksonaki" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΞΟΝAKI ΜΟΤΕΡ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΑΞΟΝAKI */}
                        {/* {stoixeiaState.aksonakiKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonakiKwd} readOnly />
                            </Col>} */}

                        {/* ΑΞΟΝAKI INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonakiIndex" style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>INDEX</Form.Label>
                                {stoixeiaState.aksonakiIndex !== -1 && <Col sm={1}>
                                    <Form.Control type="text" style={{ marginLeft: 6 }} placeholder={stoixeiaState.aksonakiIndex} readOnly />
                                </Col>}
                            </Form.Group>
                        </Form.Group> */}

                        {/* ΑΞΟΝAKI KOYZINETOY */}
                        {/* <Form.Group as={Row} controlId="aksonakiKouzinetou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΞΟΝAKI KOYZINETOY</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΑΞΟΝAKI KOYZINETOY */}
                        {/* {stoixeiaState.aksonakiKouzinetouKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.aksonakiKouzinetou, aksonakiaFlantzes, 0)} readOnly />
                            </Col>} */}

                        {/* ΑΞΟΝAKI KOYZINETOY INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonakiKouzinetouIndex" style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>INDEX</Form.Label>
                                {stoixeiaState.aksonakiKouzinetouIndex !== -1 && <Col sm={1}>
                                    <Form.Control type="text" style={{ marginLeft: 6 }} placeholder={vlookup2(stoixeiaState.aksonakiKouzinetou, aksonakiaFlantzes, 2)} readOnly />
                                </Col>}
                            </Form.Group>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ
                        <Form.Group as={Row} controlId="ΕΛΑΤΗΡΙΑ" style={{ marginTop: 10 }}>
                            <Col sm={{ span: 8, offset: 1 }}>
                                <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ ΝΑ ΜΠΕΙ' readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝA ΕΛΑΤΗΡΙΑ */}
                        {/* <Form.Group as={Row} controlId="proteinomenaElathria" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΑ ΕΛΑΤΗΡΙΑ</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" name='proteinomenaElathria' placeholder={stoixeiaState.proteinomenaElathria} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* MaxIndex Φ60 */}
                        {/* <Form.Group as={Row} controlId="MaxIndexΦ60" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MaxIndex Φ60</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.maxIndexF60} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* MaxIndex Φ76 */}
                        {/* <Form.Group as={Row} controlId="MaxIndexΦ76" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MaxIndex Φ76</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.maxIndexF76} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΕΛΑΤΗΡΙΟ Α */}
                        {/* <Form.Group as={Row} controlId="elathrioA" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Α</Form.Label>
                            <Col sm={6}>
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
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΕΛΑΤΗΡΙΟ Α*/}
                        {/* {stoixeiaState.elathrioAkwd !== -1 && <Col sm={3}>
                            <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioA, elathrioF60, 0)} readOnly />
                        </Col>}
                        </Form.Group> */}

                        {/* ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟ Α */}
                        {/* <Form.Group as={Row} controlId="elathrioAtem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟΥ Α</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioAtem'
                                    value={stoixeiaState.elathrioAtem}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>0</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΕΛΑΤΗΡΙΟ Β */}
                        {/* <Form.Group as={Row} controlId="elathrioΒ" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Α</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioΒ'
                                    value={stoixeiaState.elathrioΒ}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>Επιλογή...</option>
                                    <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
                                    <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
                                    <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
                                    <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
                                </Form.Control>
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΕΛΑΤΗΡΙΟ Β */}
                        {/* {stoixeiaState.elathrioΒkwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioΒ, elathrioF60, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟ Β */}
                        {/* <Form.Group as={Row} controlId="elathrioΒtem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟΥ Β</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioΒtem'
                                    value={stoixeiaState.elathrioΒtem}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>0</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΕΛΑΤΗΡΙΟ Γ */}
                        {/* <Form.Group as={Row} controlId="elathrioC" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Γ</Form.Label>
                            <Col sm={6}>
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
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΕΛΑΤΗΡΙΟ Γ*/}
                        {/* {stoixeiaState.elathrioCkwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioC, elathrioF60, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟ Γ */}
                        {/* <Form.Group as={Row} controlId="elathrioCtem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟΥ Γ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioCtem'
                                    value={stoixeiaState.elathrioCtem}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>0</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ */}
                        {/* <Form.Group as={Row} controlId="kwdikosProteinomenhsShmaias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    name='tablades'
                                    value={stoixeiaState.kwdikosProteinomenhsShmaias}
                                    readOnly
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ */}
                        {/* <Form.Group as={Row} controlId="proteinomenhShmaia" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    style={{ color: 'red' }}
                                    type="text"
                                    name='proteinomenhShmaia'
                                    value={stoixeiaState.proteinomenhShmaia}
                                    readOnly
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ */}
                        {/* <Form.Group as={Row} controlId="indexProteinomenhsShmaias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    name='tablades'
                                    value={stoixeiaState.indexProteinomenhsShmaias}
                                    readOnly
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΣΗΜΑΙΕΣ */}
                        {/* <Form.Group as={Row} controlId="shmaies" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΣΗΜΑΙΕΣ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ Σημαίας*/}
                        {/* {stoixeiaState.shmaiesKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.shmaiesKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* 'Ύψος & Μήκος Σημαίας mm */}
                        {/* <Form.Group as={Row} controlId="ypsosShmaias" style={{ marginTop: 10 }}>
                            {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>ΥΨΟΣ ΣΗΜΑΙΑΣ</Form.Label>}
                            {stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypsosShmaias} readOnly />
                            </Col>}

                            {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>ΜΗΚΟΣ ΣΗΜΑΙΑΣ</Form.Label>}
                            {stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.mhkosShmaias} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΤΑΜΠΛΑΔΕΣ */}
                        {/* <Form.Group as={Row} controlId="tablades" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΑΜΠΛΑΔΕΣ</Form.Label>
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
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΤΑΜΠΛΑ */}
                        {/* {stoixeiaState.tablasKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tablades, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ */}
                        {/* <Form.Group as={Row} controlId="proteinomenoKouti" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ</Form.Label>
                            {<Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouti} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* KOYTIA */}
                        {/* <Form.Group as={Row} controlId="koutia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΚΑΛΥΨΕΙΣ: ΚΟΥΤΙΑ</Form.Label>
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
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΤΑΜΠΛΑ */}
                        {/* {stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.koutia, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ */}
                        {/* <Form.Group as={Row} controlId="lamakiaMonofKoutiou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ </Form.Label>
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
                        </Form.Group> */}

                        {/* ΚΑΠΑΚΙΑ */}
                        {/* <Form.Group as={Row} controlId="kapakia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΚΑΠΑΚΙΑ</Form.Label>
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
                            </Col> */}

                        {/* ΚΩΔΙΚΟΣ ΚΑΠΑΚΙΑ */}
                        {/* {stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.kapakia, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */}
                        {/* <Form.Group as={Row} controlId="proteinomenesFases" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 14)} readOnly />
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */}
                        {/* <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 12)} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΦΑΣΕΣ */}
                        {/* <Form.Group as={Row} controlId="fases" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΦΑΣΕΣ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΚΑΠΑΚΙΑ */}
                        {/* {stoixeiaState.fases !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.fases, fasaTelikouProfil, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* TZAMAKIA */}
                        {/* <Form.Group as={Row} controlId="tzamakia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>TZAMAKIA</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ TZAMAKIA */}
                        {/* {stoixeiaState.tzamakia !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tzamakia, tzamakiParathyro, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* TZAMAKIA ΠΛΗΘΟΣ */}
                        {/* <Form.Group as={Row} controlId="tzamakiaPlithos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>TZAMAKIA ΠΛΗΘΟΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" value={stoixeiaState.tzamakiaPlithos} />
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ */}
                        {/* <Form.Group as={Row} controlId="proteinomenhYpodiairesh" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" style={{ color: 'red' }} placeholder={stoixeiaState.proteinomenhYpodiairesh} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΥΠΟΔΙΑΙΡΕΣΗ */}
                        {/* <Form.Group as={Row} controlId="ypodiairesh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
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
                            </Col> */}
                        {/* ΚΩΔΙΚΟΣ ΥΠΟΔΙΑΙΡΕΣΗS */}
                        {/* {stoixeiaState.proteinomenhYpodiairesh !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypodiaireshKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ */}
                        {/* <Form.Group as={Row} controlId="mhkosMeiwthra" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.mhkosMeiwthra} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΥΨΟΣ ΜΕΙΩΤΗΡΑ */}
                        {/* <Form.Group as={Row} controlId="ypsosMeiwthra" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΨΟΣ ΜΕΙΩΤΗΡΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypsosMeiwthra} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ΣΧΕΣΗ - BX */}
                        <Form.Group as={Row} controlId="sxesh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΣΧΕΣΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.sxesh} readOnly />
                            </Col>
                        </Form.Group>

                        {/* ΑΓΚΥΡΙΑ */}
                        <Form.Group as={Row} controlId="agyria" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΓΚΥΡΙΑ</Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ΑΓΚΥΡΙΑ */}
                            {stoixeiaState.agyria !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ */}
                        <Form.Group as={Row} controlId="proteinomenoPlithosAgyriwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd === '-' ? '-' : Math.ceil(stoixeiaState.katharoYpsos / 750)} readOnly />
                            </Col>
                        </Form.Group>

                        {/* ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ  */}
                        <Form.Group as={Row} controlId="plithosAgyriwn" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='plithosAgyriwn'
                                    value={stoixeiaState.plithosAgyriwn}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28].map(n => (<option>{n}</option>))}
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* MOTEP */}
                        <Form.Group as={Row} controlId="moter" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MOTEP </Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ MOTEP  */}
                            {stoixeiaState.moter !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.moterKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΘΕΣΗ ΜΟΤΕΡ */}
                        <Form.Group as={Row} controlId="moterThesi" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΘΕΣΗ MOTEP</Form.Label>
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
                        <Form.Group as={Row} controlId="thesiParoxhsReumatos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ </Form.Label>
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

                        {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ  */}
                        {/* <Form.Group as={Row} controlId="proteinomenoKouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ </Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouzineto} readOnly >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΚΟΥΖΙΝΕΤΟ ΑΣΦΑΛΕΙΑΣ */}
                        <Form.Group as={Row} controlId="kouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΟΥΖΙΝΕΤΟ ΑΣΦΑΛΕΙΑΣ </Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ΚΟΥΖΙΝΕΤΟ  */}
                            {stoixeiaState.kouzineto !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.kouzinetoKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΑΠΑΣΦΑΛΙΣΕΙΣ */}
                        <Form.Group as={Row} controlId="apasfaliseis" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΠΑΣΦΑΛΙΣΕΙΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='apasfaliseis'
                                    value={stoixeiaState.apasfaliseis}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>Επιλογή...</option>
                                    <option>ΕΞΩΤΕΡΙΚΗ ΑΠΑΣΦΑΛΙΣΗ ΡΟΛΟΥ</option>
                                    <option>BLINDOOR GEROLIMATOS</option>
                                    <option>ΕΣΩΤΕΡΙΚΗ ΔΙΠΛΗ ΑΠΑΣΦΑΛΙΣΗ ΡΟΛΟΥ</option>
                                </Form.Control>
                            </Col>
                            {/* ΚΩΔΙΚΟΣ MOTEP  */}
                            {stoixeiaState.apasfaliseis !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.apasfaliseis, apasfaliseis, 0)} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* PACKAGING */}
                        <Form.Group as={Row} controlId="packaging" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>PACKAGING </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='packaging'
                                    value={stoixeiaState.packaging}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {/* <option>Επιλογή...</option> */}
                                    <option>ΙΔΙΑ ΕΓΚΑΤΑΣΤΑΣΗ</option>
                                    <option>ΠΑΡΑΛΑΒΗ ΑΠΟ ΕΡΓΟΣΤΑΣΙΟ</option>
                                    <option>ΠΑΡΑΔΟΣΗ ΣΕ ΜΕΤΑΦΟΡΙΚΗ</option>
                                    <option>ΕΞΑΓΩΓΗ (ΞΥΛΟΚΙΒΩΤΙΟ)</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ */}
                        <Form.Group as={Row} controlId="koutiaXwrisSkotia" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ </Form.Label>
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

                        {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ */}
                        <Form.Group as={Row} controlId="steganopoihshTampla" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ</Form.Label>
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

                        {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΑΝΟΙΓΜΑ ΣΤΟ ΠΡΟΦΙΛ */}
                        <Form.Group as={Row} controlId="anoigmaStoProfil" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΑΝΟΙΓΜΑ ΣΤΟ ΠΡΟΦΙΛ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='anoigmaStoProfil'
                                    value={stoixeiaState.anoigmaStoProfil}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>OXI</option>
                                    <option>NAI</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ */}
                        <Form.Group as={Row} controlId="epifaneiaEgatastashs" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</Form.Label>
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
                        <Form.Group as={Row} controlId="anypsotikoMeso1" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1</Form.Label>
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
                        <Form.Group as={Row} controlId="anypsotikoMeso2" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2</Form.Label>
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

                        {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso3" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3</Form.Label>
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

                        {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso4" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4</Form.Label>
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

                        {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash1" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1</Form.Label>
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
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2</Form.Label>
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

                        {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash3" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3</Form.Label>
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

                        {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash4" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4</Form.Label>
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

                        {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash5" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5</Form.Label>
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

                        {/* ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ */}
                        <Form.Group as={Row} controlId="tainiaSyskevasias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ </Form.Label>
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
                        <Form.Group as={Row} controlId="tampelaSimansis" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ</Form.Label>
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

                        {/* ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ */}
                        <Form.Group as={Row} controlId="kleidariaAsfaleias" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ </Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ΚΛΕΙΔΑΡΙΑS ΑΣΦΑΛΕΙΑΣ  */}
                            {stoixeiaState.kleidariaAsfaleias == 'NAI' && <Col sm={3}>
                                <Form.Control type="text" placeholder='07.01.00.00.000' readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ANTIANEMIA */}
                        <Form.Group as={Row} controlId="antianemia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ANTIANEMIA</Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ANTIANEMIA */}
                            {stoixeiaState.antianemia !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.antianemia, antianemio, 0)} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* STOP ΡΟΛΟΥ */}
                        <Form.Group as={Row} controlId="stopRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>STOP ΡΟΛΟΥ</Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ STOP ΡΟΛΟΥ */}
                            {stoixeiaState.stopRolou == 'ΜΕΤΑΛΛΙΚΟ STOP ΡΟΛΟΥ' && <Col sm={3}>
                                <Form.Control type="text" placeholder='08.01.07.00.001' readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΧΕΙΡΟΛΑΒΗ */}
                        <Form.Group as={Row} controlId="xeirolavh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΧΕΙΡΟΛΑΒΗ</Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ΧΕΙΡΟΛΑΒΗS */}
                            {stoixeiaState.xeirolavh !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.xeirolavh, xeirolavi, 0)} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΒΑΣΗ ΣΤΗΡΙΞΗΣ */}
                        <Form.Group as={Row} controlId="vashSthrijhs" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΒΑΣΗ ΣΤΗΡΙΞΗΣ</Form.Label>
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
                            {/* ΚΩΔΙΚΟΣ ΒΑΣΗS ΣΤΗΡΙΞΗΣ */}
                            {stoixeiaState.vashSthrijhs !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.vashSthrijhsKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ */}
                        <Form.Group as={Row} controlId="plithosVasewnSthrijhsOdhgou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder={stoixeiaState.plithosVasewnSthrijhsOdhgou}
                                // readOnly ??
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΧΡΩΜΑ */}
                        <Form.Group as={Row} controlId="xrwma" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΧΡΩΜΑ</Form.Label>
                            <Col sm={4}>
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

                        {/* ΠΕΛΑΤΗΣ
                        <Form.Group as={Row} controlId="customer" >
                            <Form.Label column sm={3}>ΠΕΛΑΤΗΣ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    name='customer'
                                    maxLength='4'
                                    value={stoixeiaState.customer}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ΠΡΟΤΕΡΑΙΟΤΗΤΑ */}
                        <Form.Group as={Row} controlId="proteraiothta" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΠΡΟΤΕΡΑΙΟΤΗΤΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='proteraiothta'
                                    value={stoixeiaState.proteraiothta}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>OXI</option>
                                    <option>NAI</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */}
                        <Form.Group as={Row} controlId="thikesSthrijhsOdhgwn" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ </Form.Label>
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
                        <Form.Group as={Row} controlId="diastashThikisSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
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
                        <Form.Group as={Row} controlId="kolonaSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
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
                        <Form.Group as={Row} controlId="diastashKolonasSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='diastashKolonasSthrijhsOdhgwn'
                                    placeholder={stoixeiaState.diastashKolonasSthrijhsOdhgwn}
                                    readOnly
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ */}
                        <Form.Group as={Row} controlId="gwniesSthrijhs" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ </Form.Label>
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

                        {/* ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ */}
                        <Form.Group as={Row} controlId="eidikhSthrijh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</Form.Label>
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

                        {/* ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */}
                        <Form.Group as={Row} controlId="lamaSthrijhs80x10" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
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

                        {/* ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */}
                        <Form.Group as={Row} controlId="gwniaSthrijhs80x10" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='gwniaSthrijhs80x10'
                                    value={stoixeiaState.gwniaSthrijhs80x10}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80 mm */}
                        <Form.Group as={Row} controlId="gwniaSthrijhs80x80" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80 mm</Form.Label>
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

                        {/* ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm */}
                        <Form.Group as={Row} controlId="aerasProfilOdhgou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='aerasProfilOdhgou'
                                    value={stoixeiaState.aerasProfilOdhgou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {[20, 25, 30, 35, 40, 45, 50].map(n => (<option>{n}</option>))}
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΑΡ.ΠΑΡΑΓΓΕΛΙΑΣ - 2 */}
                        <Form.Group as={Row} controlId="arParaggelias2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΡ.ΠΑΡΑΓΓΕΛΙΑΣ - 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='arParaggelias2'
                                    value={stoixeiaState.arParaggelias2}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΥΨΟΣ ΔΟΚΑΡΙΟΥ */}
                        <Form.Group as={Row} controlId="ypsosDokariou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΨΟΣ ΔΟΚΑΡΙΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='ypsosDokariou'
                                    value={stoixeiaState.ypsosDokariou}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ΤΕΛΙΚΟ ΥΨΟΣ ΡΟΛΟΥ - EF */}
                        <Form.Group as={Row} controlId="telikoYpsosRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΕΛΙΚΟ ΥΨΟΣ ΡΟΛΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='telikoYpsosRolou'
                                    maxLength='4'
                                    value={stoixeiaState.telikoYpsosRolou}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>




                        <div style={{ marginBottom: 60 }}></div>

                        {/* <Form.Control type="text" placeholder="Επωνυμία" value={stoixeiaState.profilKwd} /> */}

                        {/* <Button variant="primary" type="submit" style={{ marginTop: 40 }}>
                            Εγγραφή
                        </Button> */}

                    </Form>
                </Row>
            </Container>
        </StoixeiaContext.Provider >
    )
}

export default Stoixeia
