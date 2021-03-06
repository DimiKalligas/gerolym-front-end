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
    //     typosRolou: '????????????????????',
    //     tyligma: '????????????????',
    //     thesi: '?????????? ????????????????????',
    //     anoigmaXwrou: 1,
    //     ypsosXwrou: 1,
    //     proteinomenosOdhgos: '',
    //     odhgos: '',
    //     odhgosKwd: '',
    //     odhgosIndex: 0,
    //     strantzarista: '',
    //     strantzaristaKwd: '',
    //     thesiStrantzaristou: '',
    //     gwniesSthrijhs: '??????',
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
    //     monviom: '' // ???????????????????? ?? ??????????????????????
    // }

    // const [formState, formdispatch] = useReducer(formReducer, initialState);
    const [stoixeiaState, dispatch] = useReducer(stoixeiaReducer, // ???? ???? ?????????????? ???? state ?????? refresh
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

    // // ???????????? ??????. ??????????????
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 0)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonakiKwd',
    //         payload: x
    //     })
    //     // ???????????? ?????????????? index
    //     let y = vlookup2(stoixeiaState.aksonaki, aksonakiaFlantzes, 2)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'aksonakiIndex',
    //         payload: y
    //     })
    // }, [stoixeiaState.aksonaki])

    // // // TABLE I - ?????????????????????????? ????????????
    // useEffect(() => {
    //     let x;

    //     console.log('stoixeiaState.katharoAnoigma', stoixeiaState.katharoAnoigma)
    //     if ((stoixeiaState.katharoAnoigma / 1000 > 0) && (stoixeiaState.katharoAnoigma / 1000 > 4.5)) { x = '???????????? 7cm' }// return '???????????? 7cm'
    //     else if ((stoixeiaState.katharoAnoigma / 1000 >= 4.50) && (stoixeiaState.katharoAnoigma / 1000 < 8)) { x = '???????????? 12cm' }
    //     else { x = "?????????? ?????????? !" }
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenosOdhgos',
    //         payload: x
    //     })
    // }, [stoixeiaState.katharoAnoigma])

    // // // TABLE R - ???????????? ??????????????
    // useEffect(() => {
    //     let x, y;
    //     x = vlookup2(stoixeiaState.odhgosKwd, odhgos, 3) // FULL
    //     y = vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4) // ?????????? mm

    //     if (stoixeiaState.thesi === '?????????? ????????????????????') {
    //         x = stoixeiaState.anoigmaXwrou - (2 * vlookup2(stoixeiaState.odhgosKwd, odhgos, 3))
    //             - (2 * vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4))
    //     }

    //     // ?????????? ???????? ???????? ??????????
    //     // console.log('Anoigma xwrou:', stoixeiaState.anoigmaXwrou) // OK
    //     // console.log('Odhgos Full', vlookup2(stoixeiaState.odhgosKwd, odhgos, 3)) // ????
    //     // console.log('Strantzarista Vathos', vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 4)) // OK
    //     // console.log('Bazw sto katharo anoigma thn timh', parseInt(x)) // OK

    //     console.log('???????????? ??????????????', stoixeiaState.katharoAnoigma)
    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'katharoAnoigma',
    //         payload: parseInt(x)
    //     })

    // }, [stoixeiaState.thesi, stoixeiaState.anoigmaXwrou, stoixeiaState.odhgosKwd, stoixeiaState.strantzaristaKwd])

    // // // TABLE S - ???????????? ???????? 
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === '??????????????????????' && stoixeiaState.thesi === '?????????? ????????????????????') { x = stoixeiaState.telikoYpsosRolou }
    //     else if (stoixeiaState.typosRolou === '????????????????????' && stoixeiaState.thesi === '??K?????? ????????????????????') { x = stoixeiaState.telikoYpsosRolou - stoixeiaState.ypsosSimaias }
    //     else if (stoixeiaState.typosRolou === '????????????????????' && stoixeiaState.thesi === '?????????? ????????????????????') { x = stoixeiaState.telikoYpsosRolou }
    //     else { x = "??????????????!" }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'katharoYpsos',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.thesi, stoixeiaState.telikoYpsosRolou, stoixeiaState.ypsosSimaias]) // to telikoYpsosRolou einai sto telos!

    // // // ?????????????????????????? ????????????
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === '??????????????????????') {
    //         if ((vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou < 700)
    //             && (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou >= 300)) {
    //             x = '???????????? ??219-?????????? ???????????????? - ????????????????'
    //         }

    //     } else
    //         if (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 300) { x = '???????????? ??159 - ?????????? ???????????????? - ????????????????' }
    //         else if (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 <= 350) {
    //             if ((stoixeiaState.anoigmaXwrou / 1000 < 4, 7) && (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou / 1000000 < 160)) {
    //                 x = '???????????? ??60-???? ???????????????? - ??????????????????'
    //             }
    //             else { x = '???????????? ??76 - ???? ???????????????? - ??????????????????' }
    //         }

    //     // console.log(vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou) OK
    //     // console.log(typeof (vlookup2(stoixeiaState.profilKwd, profil, 8) * stoixeiaState.anoigmaXwrou * stoixeiaState.ypsosXwrou)) OK

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenoiAksones',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.profilKwd, stoixeiaState.anoigmaXwrou, stoixeiaState.ypsosXwrou])

    // // ?????????? & MHKO?? ??????????
    // useEffect(() => {
    //     let m
    //     let p = vlookup2(stoixeiaState.aksonasKwd, aksones, 2)
    //     if (stoixeiaState.typosRolou === '??????????????????????') {
    //         m = stoixeiaState.mhkosProfilKophs - 2 * 30 + 2 * vlookup2(stoixeiaState.profilKwd, profil, 12)
    //     }
    //     else if (stoixeiaState.typosRolou === '????????????????????') {
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

    // {/* ???????????????????????? ???????????????? */ }
    // useEffect(() => {
    //     let ak = stoixeiaState.aksonas || ' ' // ???????????? ???? ?????????? undefined
    //     let MaxIndexF60 = 41
    //     let x

    //     console.log('in Stoixeia, aksonas=', stoixeiaState.aksonas)
    //     if (stoixeiaState.typosRolou === '????????????????????') {
    //         if (ak.includes('??60')) {
    //             x = vlookup2(MaxIndexF60, elathrioAjonasF602, 7)
    //         }
    //         else if (ak.includes('??60')) {
    //             x = vlookup2(MaxIndexF60, elathrioAjonasF762, 7)
    //         }
    //     }
    //     else if (stoixeiaState.typosRolou === '??????????????????????') { x = 0 }

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenaElathria',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou])

    // {/* MaxIndex ??60 */ }
    // useEffect(() => {
    //     let x = nextValue(stoixeiaState.varosKourtinas, elathrioAjonasF602)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'maxIndexF60',
    //         payload: x
    //     })
    // }, [stoixeiaState.varosKourtinas])

    // {/* MaxIndex ??76 */ }
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

    // // ??????????????????
    // useEffect(() => {
    //     let x = Math.sqrt((stoixeiaState.katharoAnoigma * vlookup2(stoixeiaState.profilKwd, profil, 6) * 0.4 * 3.14) +
    //         vlookup2(stoixeiaState.aksonasKwd, aksones, 5) +
    //         Math.sqrt(vlookup2(stoixeiaState.profilKwd, profil, 3) / 2)) +
    //         vlookup2(stoixeiaState.profilKwd, profil, 3)

    //     console.log('??????????????????', stoixeiaState.perieliksi, typeof (stoixeiaState.perieliksi))
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

    // // ?????????? ???????????? ??????????
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

    // // ???????? ??????????H???? = TABLE!BW6, ?????????????????????? ??????????????
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

    // // ???????????? ???????? ?????????????????? - ????????????????????????!D6
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRolou === '??????????????????????') {
    //         x = (stoixeiaState.katharoYpsos + stoixeiaState.ypsosMeiwthra / 2 + 200 + stoixeiaState.ypodiaireshKwd)
    //     } else
    //         if (stoixeiaState.typosRolou === '????????????????????') {
    //             x = (stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias)
    //         }
    //         else x = "??????????????!"

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'arhikoYpsosKourtinas',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.ypsosMeiwthra, stoixeiaState.ypodiaireshKwd, stoixeiaState.ypsosShmaias])

    // // ???????????? ???????????? - ????????????????????????!G6
    // useEffect(() => {
    //     let plithosProfil = Math.ceil(vlookup2(stoixeiaState.profilKwd, profil, 5))

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'plithosProfil',
    //         payload: plithosProfil
    //     })
    // }, [stoixeiaState.profilKwd])

    // // ?????????? ?????????????????? - ????????????????????????!M6
    // useEffect(() => {
    //     let varosKourtinas = stoixeiaState.mhkosProfilKophs * stoixeiaState.plithosProfil * vlookup2(stoixeiaState.profilKwd, profil, 7) / 1000

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'varosKourtinas',
    //         payload: varosKourtinas
    //     })
    // }, [stoixeiaState.mhkosProfilKophs, stoixeiaState.plithosProfil, stoixeiaState.profilKwd])

    // // ???????????????????????? ??????????????????????
    // useEffect(() => {
    //     let x;

    //     if (stoixeiaState.typosRoloy === '??????????????????????') {
    //         if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[0][5]) { x = ypodiaireshKouti[0][3] } else
    //             if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[1][5]) { x = ypodiaireshKouti[1][3] } else
    //                 if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[2][5]) { x = ypodiaireshKouti[2][3] } else
    //                     if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[3][5]) { x = ypodiaireshKouti[3][3] } else
    //                         if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[4][5]) { x = ypodiaireshKouti[4][3] } else
    //                             if (stoixeiaState.varosKourtinas < ypodiaireshKouti[0][0] && stoixeiaState.perieliksi < ypodiaireshKouti[5][5]) { x = ypodiaireshKouti[5][3] } else
    //                                 x = "?????????? ?????????? !"

    //     }
    //     else x = "???????????????????? ???????? !"

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenhYpodiairesh',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.varosKourtinas, stoixeiaState.perieliksi, stoixeiaState.typosRoloy])

    // // // ?????????????????????? ??????????????
    // // useEffect(() => {
    // //     let x = vlookup2(stoixeiaState.proteinomenhYpodiairesh, ypodiaireshPinakas, 0)

    // //     dispatch({
    // //         type: 'HANDLE TEXT',
    // //         field: 'ypodiaireshKwd',
    // //         payload: x
    // //     })
    // // }, [stoixeiaState.proteinomenhYpodiairesh])

    // // ?????????? ????????????????
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 2)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'mhkosMeiwthra',
    //         payload: x
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // // ???????? ????????????????
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 3)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosMeiwthra',
    //         payload: x
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // // ??????????
    // useEffect(() => {
    //     // console.log('?????????? ??????', stoixeiaState.ypodiaireshKwd)
    //     let sxesh = vlookup2(stoixeiaState.ypodiaireshKwd, ypodiaireshPinakas, 4)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'sxesh',
    //         payload: sxesh
    //     })
    // }, [stoixeiaState.ypodiaireshKwd])

    // {/* ?????????????????????????? ?????????? */ }
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.profilKwd, profil, 14)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenesFases',
    //         payload: x
    //     })
    // }, [stoixeiaState.profilKwd])


    // // ??????????????, plithosAgyriwn, ypodiairesh ?????? Visual Basic
    // useEffect(() => {
    //     if (stoixeiaState.typosRolou === '????????????????????') {
    //         let ak = stoixeiaState.aksonas
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'agyria',
    //             payload: '?????????? ??????????????'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'plithosAgyriwn',
    //             payload: 0
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'ypodiairesh',
    //             payload: '?????????? ??????????????????????'
    //         })
    //     }
    //     if (stoixeiaState.typosRolou === '??????????????????????') {
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

    // // MaxIndex??60
    // // = MIN(IF('???????????????? (2)'!$G$4: $G$34 >= ????????????????????????!$M6; '???????????????? (2)'!$G$4: $G$34))
    // // if varosKourtinas<=160 then maxIndexF60=160 

    // // ?????????????? ??????. agyria
    // useEffect(() => {
    //     let agyriaKwd = vlookup2(stoixeiaState.agyria, agyria, 0)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'agyriaKwd',
    //         payload: agyriaKwd
    //     })
    // }, [stoixeiaState.agyria])

    // // ???????????????????????? ?????????????????? 
    // useEffect(() => {
    //     let proteinomenoKouzineto;

    //     if (stoixeiaState.typosRolou === '??????????????????????') {
    //         if (stoixeiaState.varosKourtinas <= 700 && stoixeiaState.varosKourtinas > 550) proteinomenoKouzineto = '???????????????????? ??50'
    //         else if (stoixeiaState.varosKourtinas <= 550 && stoixeiaState.varosKourtinas > 0) proteinomenoKouzineto = '???????????????????? ??40'
    //         else if (stoixeiaState.varosKourtinas > 700) proteinomenoKouzineto = '?????????? ??????????!'
    //     }
    //     else proteinomenoKouzineto = '???????????????????? ????????!'

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenoKouzineto',
    //         payload: proteinomenoKouzineto
    //     })
    // }, [stoixeiaState.varosKourtinas])

    // {/* ???????????? ???????????? ???????????????? ???????????? */ }
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

    // // ???????????????? ?????????????? ???????????????? ???????????? 
    // useEffect(() => {
    //     let x = parseInt(stoixeiaState.telikoYpsosRolou) + parseInt(stoixeiaState.epipleonYpsos) // ?????????? ???? ?????????? string?

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'diastashKolonasSthrijhsOdhgwn',
    //         payload: x
    //     })
    // }, [stoixeiaState.telikoYpsosRolou, stoixeiaState.epipleonYpsos])

    // // ??????????????????
    // useEffect(() => {
    //     if (stoixeiaState.tablades === '?????????? ????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'steganopoihshTampla',
    //             payload: 'OXI'
    //         })
    //     }
    // }, [stoixeiaState.tablades])

    // // ???????????????????????? ??????????
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.typosRolou === '??????????????????????') {
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

    // // ?????????? ?????????????? ????????????
    // useEffect(() => {
    //     if (stoixeiaState.thikesSthrijhsOdhgwn === '??????') {
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

    // // ????????????
    // useEffect(() => {
    //     let koutia = stoixeiaState.koutia || '?????????? ????????????'
    //     var matches = koutia.match(/(\d+)/) || 0
    //     let kouti = matches[0] || 0

    //     if (stoixeiaState.koutia === '?????????? ????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'kapakia',
    //             payload: '?????????? ???????????? ??????????????'
    //         })
    //     } else
    //         if (kouti === '30') {
    //             dispatch({
    //                 type: 'HANDLE TEXT',
    //                 field: 'kapakia',
    //                 payload: '???????????? ?????????????? ?????????? 30CM'
    //             })
    //         } else
    //             if (kouti === '35') {
    //                 dispatch({
    //                     type: 'HANDLE TEXT',
    //                     field: 'kapakia',
    //                     payload: '???????????? ?????????????? ?????????? 35CM'
    //                 })
    //             } else
    //                 if (kouti === '40') {
    //                     dispatch({
    //                         type: 'HANDLE TEXT',
    //                         field: 'kapakia',
    //                         payload: '???????????? ?????????????? ?????????? 40CM'
    //                     })
    //                 } else
    //                     if (kouti === '45') {
    //                         dispatch({
    //                             type: 'HANDLE TEXT',
    //                             field: 'kapakia',
    //                             payload: '???????????? ?????????????? ?????????? 45CM'
    //                         })
    //                     } else
    //                         if (kouti === '50') {
    //                             dispatch({
    //                                 type: 'HANDLE TEXT',
    //                                 field: 'kapakia',
    //                                 payload: '???????????? ?????????????? ?????????? 50CM'
    //                             })
    //                         } else
    //                             if (kouti === '55') {
    //                                 dispatch({
    //                                     type: 'HANDLE TEXT',
    //                                     field: 'kapakia',
    //                                     payload: '???????????? ?????????????? ?????????? 55CM'
    //                                 })
    //                             } else
    //                                 if (kouti === '60') {
    //                                     dispatch({
    //                                         type: 'HANDLE TEXT',
    //                                         field: 'kapakia',
    //                                         payload: '???????????? ?????????????? ?????????? 60CM'
    //                                     })
    //                                 }

    // }, [stoixeiaState.koutia])

    // // ????????????????
    // useEffect(() => {
    //     if (stoixeiaState.tzamakia === '?????????? ????????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'tzamakiaPlithos',
    //             payload: 0
    //         })
    //     }
    // }, [stoixeiaState.tzamakia])

    // // ????????????????????
    // useEffect(() => {
    //     if (stoixeiaState.typosRolou === '????????????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'parasouter',
    //             payload: '?????????? ??????????????????'
    //         })
    //     }
    // }, [stoixeiaState.typosRolou])

    // // ???????????????????? - ?????????????? ??????????
    // useEffect(() => {
    //     // console.log(stoixeiaState.typosRolou)
    //     if (stoixeiaState.typosRolou === '????????????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'moterThesi',
    //             payload: '????????????????'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'aksonaki',
    //             payload: '?????????? ????????????????'
    //         })
    //     }
    // }, [stoixeiaState.typosRolou])

    // // PACKAGING
    // useEffect(() => {
    //     if (stoixeiaState.packaging !== '???????? ??????????????????????') {
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

    // // ???????????? ????????????????
    // useEffect(() => {
    //     if (stoixeiaState.kolonaSthrijhsOdhgwn === '?????????? ???????????? ????????????') {
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

    // // ??????????????????????????
    // useEffect(() => {
    //     if (stoixeiaState.strantzarista === '?????????? ???????????????????????? - ??????????????????') {
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'thesiStrantzaristou',
    //             payload: '?????? ??????????????'
    //         })
    //         dispatch({
    //             type: 'HANDLE TEXT',
    //             field: 'gwniesSthrijhs',
    //             payload: '??????'
    //         })
    //     }
    // }, [stoixeiaState.strantzarista])

    // // ?????????????? & INDEX ?????????????????????????? ??????????????
    // useEffect(() => {
    //     let kwd, ind

    //     if (stoixeiaState.typosRolou === '??????????????????????') {
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

    // // ???????????????????????? ????????????
    // useEffect(() => {
    //     let x = vlookup2(stoixeiaState.kwdikosProteinomenhsShmaias, shmaiesRolou, 1)

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'proteinomenhShmaia',
    //         payload: x
    //     })
    // }, [stoixeiaState.kwdikosProteinomenhsShmaias])

    // // ???????? ??????????
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.typosRolou = '??????????????????????') x = stoixeiaState.katharoYpsos + stoixeiaState.epipleonYpsos
    //     else if (stoixeiaState.typosRolou = '????????????????????') x = stoixeiaState.katharoYpsos + stoixeiaState.ypsosShmaias

    //     dispatch({
    //         type: 'HANDLE TEXT',
    //         field: 'ypsosDokou',
    //         payload: x
    //     })
    // }, [stoixeiaState.typosRolou, stoixeiaState.katharoYpsos, stoixeiaState.epipleonYpsos, stoixeiaState.ypsosShmaias])

    // // ???????? ????????????????????????????
    // useEffect(() => {
    //     let x

    //     if (stoixeiaState.strantzarista === '?????????? ???????????????????????? - ??????????????????') x = 0
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

                        {/* ????????????
                        <Form.Group as={Row} controlId="formProfil">
                            <Form.Label column sm={3}>????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='profil'
                                    value={stoixeiaState.profil}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Profil />
                                </Form.Control>
                            </Col>
                            {/* ?????????????? ???????????? */}
                        {/* {stoixeiaState.profilKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.profilKwd} readOnly />
                            </Col>}
                        </Form.Group> */}
                        {/* 
                        ?????????? ??????????
                        <Form.Group as={Row} controlId="typosRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????? ??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='typosRolou'
                                    value={stoixeiaState.typosRolou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>????????????????????</option>
                                    <option>??????????????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ?????????????? */}
                        {/* <Form.Group as={Row} controlId="tyligma" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='tyligma'
                                    value={stoixeiaState.tyligma}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>????????????????</option>
                                    <option>??????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ???????? */}
                        {/* <Form.Group as={Row} controlId="thesi" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='thesi'
                                    value={stoixeiaState.thesi}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>?????????? ????????????????????</option>
                                    <option>??K?????? ????????????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ???????????????????? ?????? ???????? ?????????? 
                        <Form.Group as={Row} controlId="monviom" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????????? - ??????????????????????</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    as="select"
                                    name='monviom'
                                    value={stoixeiaState.monviom}
                                    onChange={(e) => handleChange(e)}
                                >
                                    {stoixeiaState.typosRolou === '??????????????????????' ? <option>??????????????????????</option> : <option>????????????????????</option>}
                                    {/* <option>??????????????????????</option>
                                    <option>????????????????????</option> */}
                        {/* </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ?????????????? ?????????? */}
                        {/* <Form.Group as={Row} controlId="anoigmaXwrou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????? ??????????</Form.Label>
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

                        {/* ???????? ?????????? */}
                        {/* <Form.Group as={Row} controlId="ypsosXwrou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????? ??????????</Form.Label>
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

                        {/* ?????????????????????????? ???????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenosOdhgos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>?????????????????????????? ????????????</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" name='proteinomenosOdhgos' placeholder={stoixeiaState.proteinomenosOdhgos} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????? */}
                        {/* <Form.Group as={Row} controlId="odhgos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='odhgos'
                                    value={stoixeiaState.odhgos}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Odhgos />
                                    {/* {odhgosList} */}
                        {/* </Form.Control>
                            </Col> */}
                        {/* ?????????????? ???????????? */}
                        {/* {stoixeiaState.odhgosKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.odhgosKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ???????????? INDEX */}
                        {/* <Form.Group as={Row} controlId="odhgosIndex" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>INDEX</Form.Label>
                            {stoixeiaState.odhgosKwd !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.odhgosIndex} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????????????????? ???????????????????? */}
                        {/* <Form.Group as={Row} controlId="strantzarista" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ????????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='strantzarista'
                                    value={stoixeiaState.strantzarista}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Strantzarista />
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ???????????????????????????? */}
                        {/* <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.strantzaristaKwd, strantzarista, 0)} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????? ???????????????????????????? */}
                        {/* <Form.Group as={Row} controlId="thesiStrantzaristou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????? ????????????????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='thesiStrantzaristou'
                                    value={stoixeiaState.thesiStrantzaristou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>{stoixeiaState.thesiStrantzaristou}</option>
                                    <option>???????????????? ????????</option>
                                    <option>?????????? ????????</option>
                                    <option>???????????????? & ??????????</option>
                                    <option>?????? ??????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ???????????? ???????????????????????????? */}
                        {/* <Form.Group as={Row} controlId="platosStrantzaristou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????? mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='platosStrantzaristou' placeholder={stoixeiaState.platosStrantzaristou} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ?????????? ???????????????????????????? */}
                        {/* <Form.Group as={Row} controlId="vathosStrantzaristou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????? mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='vathosStrantzaristou' placeholder={stoixeiaState.vathosStrantzaristou} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????? ?????????????? */}
                        {/* <Form.Group as={Row} controlId="katharoAnoigma" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ?????????????? mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='katharoAnoigma' placeholder={stoixeiaState.katharoAnoigma} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????? ???????? */}
                        {/* <Form.Group as={Row} controlId="katharoYpsos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ???????? mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='katharoYpsos' placeholder={stoixeiaState.katharoYpsos} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????????? ???????? */}
                        {/* <Form.Group as={Row} controlId="epipleonYpsos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????? ????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" name='epipleonYpsos' value={stoixeiaState.epipleonYpsos} onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group> */}

                        {/* ?????????????????????????? ???????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenoiAksones" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>?????????????????????????? ????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" name='proteinomenoiAksones' placeholder={stoixeiaState.proteinomenoiAksones} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????? */}
                        {/* <Form.Group as={Row} controlId="aksonas" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='aksonas'
                                    value={stoixeiaState.aksonas}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Aksonas />
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ????????A */}
                        {/* {stoixeiaState.aksonasKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ????????A?? INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonasIndex" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>INDEX</Form.Label>
                            {stoixeiaState.aksonas !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasIndex} readOnly />
                            </Col>}
                            <Form.Label column sm={3}>?????????? ??????????</Form.Label>
                            {stoixeiaState.aksonas !== -1 && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonasPahos} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ????????AKI ?????????? */}
                        {/* <Form.Group as={Row} controlId="aksonaki" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????AKI ??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='aksonaki'
                                    value={stoixeiaState.aksonaki}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????????? ???????????????? ??42</option>
                                    <option>???????????? ???????????????? ??52</option>
                                    <option>?????????? ????????????????</option>
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ????????AKI */}
                        {/* {stoixeiaState.aksonakiKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.aksonakiKwd} readOnly />
                            </Col>} */}

                        {/* ????????AKI INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonakiIndex" style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>INDEX</Form.Label>
                                {stoixeiaState.aksonakiIndex !== -1 && <Col sm={1}>
                                    <Form.Control type="text" style={{ marginLeft: 6 }} placeholder={stoixeiaState.aksonakiIndex} readOnly />
                                </Col>}
                            </Form.Group>
                        </Form.Group> */}

                        {/* ????????AKI KOYZINETOY */}
                        {/* <Form.Group as={Row} controlId="aksonakiKouzinetou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????AKI KOYZINETOY</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='aksonakiKouzinetou'
                                    value={stoixeiaState.aksonakiKouzinetou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????????? ???????????????? ??42</option>
                                    <option>???????????? ???????????????? ??52</option>
                                    <option>?????????? ????????????????</option>
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ????????AKI KOYZINETOY */}
                        {/* {stoixeiaState.aksonakiKouzinetouKwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.aksonakiKouzinetou, aksonakiaFlantzes, 0)} readOnly />
                            </Col>} */}

                        {/* ????????AKI KOYZINETOY INDEX */}
                        {/* <Form.Group as={Row} controlId="aksonakiKouzinetouIndex" style={{ marginTop: 10 }}>
                                <Form.Label column sm={3}>INDEX</Form.Label>
                                {stoixeiaState.aksonakiKouzinetouIndex !== -1 && <Col sm={1}>
                                    <Form.Control type="text" style={{ marginLeft: 6 }} placeholder={vlookup2(stoixeiaState.aksonakiKouzinetou, aksonakiaFlantzes, 2)} readOnly />
                                </Col>}
                            </Form.Group>
                        </Form.Group> */}

                        {/* ???????????????????????? ????????????????
                        <Form.Group as={Row} controlId="????????????????" style={{ marginTop: 10 }}>
                            <Col sm={{ span: 8, offset: 1 }}>
                                <Form.Control type="text" style={{ textAlign: 'center', backgroundColor: 'LightCyan' }} placeholder='???????????????????????? ???????????????? ???? ????????' readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ??????????????????????A ???????????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenaElathria" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>???????????????????????? ????????????????</Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" name='proteinomenaElathria' placeholder={stoixeiaState.proteinomenaElathria} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* MaxIndex ??60 */}
                        {/* <Form.Group as={Row} controlId="MaxIndex??60" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MaxIndex ??60</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.maxIndexF60} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* MaxIndex ??76 */}
                        {/* <Form.Group as={Row} controlId="MaxIndex??76" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MaxIndex ??76</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.maxIndexF76} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrioA" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????? ??</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioA'
                                    value={stoixeiaState.elathrioA}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????????????? 40????</option>
                                    <option>???????????????? 45????</option>
                                    <option>???????????????? 50????</option>
                                    <option>???????????????? 55????</option>
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ???????????????? ??*/}
                        {/* {stoixeiaState.elathrioAkwd !== -1 && <Col sm={3}>
                            <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioA, elathrioF60, 0)} readOnly />
                        </Col>}
                        </Form.Group> */}

                        {/* ?????????????? ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrioAtem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????? ?????????????????? ??</Form.Label>
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

                        {/* ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrio??" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????? ??</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrio??'
                                    value={stoixeiaState.elathrio??}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????????????? 40????</option>
                                    <option>???????????????? 45????</option>
                                    <option>???????????????? 50????</option>
                                    <option>???????????????? 55????</option>
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ???????????????? ?? */}
                        {/* {stoixeiaState.elathrio??kwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrio??, elathrioF60, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????? ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrio??tem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????? ?????????????????? ??</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrio??tem'
                                    value={stoixeiaState.elathrio??tem}
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

                        {/* ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrioC" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????? ??</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='elathrioC'
                                    value={stoixeiaState.elathrioC}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????????????? 40????</option>
                                    <option>???????????????? 45????</option>
                                    <option>???????????????? 50????</option>
                                    <option>???????????????? 55????</option>
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ???????????????? ??*/}
                        {/* {stoixeiaState.elathrioCkwd !== -1 && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioC, elathrioF60, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????? ???????????????? ?? */}
                        {/* <Form.Group as={Row} controlId="elathrioCtem" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????? ?????????????????? ??</Form.Label>
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

                        {/* ?????????????? ?????????????????????????? ?????????????? */}
                        {/* <Form.Group as={Row} controlId="kwdikosProteinomenhsShmaias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????? ?????????????????????????? ?????????????? </Form.Label>
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

                        {/* ???????????????????????? ???????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenhShmaia" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>???????????????????????? ????????????</Form.Label>
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

                        {/* INDEX ?????????????????????????? ?????????????? */}
                        {/* <Form.Group as={Row} controlId="indexProteinomenhsShmaias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>INDEX ?????????????????????????? ?????????????? </Form.Label>
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

                        {/* ?????????????? */}
                        {/* <Form.Group as={Row} controlId="shmaies" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='shmaies'
                                    value={stoixeiaState.shmaies}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Shmaies />
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ??????????????*/}
                        {/* {stoixeiaState.shmaiesKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.shmaiesKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* '???????? & ?????????? ?????????????? mm */}
                        {/* <Form.Group as={Row} controlId="ypsosShmaias" style={{ marginTop: 10 }}>
                            {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>???????? ??????????????</Form.Label>}
                            {stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypsosShmaias} readOnly />
                            </Col>}

                            {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>?????????? ??????????????</Form.Label>}
                            {stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                                <Form.Control type="text" placeholder={stoixeiaState.mhkosShmaias} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????????? */}
                        {/* <Form.Group as={Row} controlId="tablades" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='tablades'
                                    value={stoixeiaState.tablades}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Tablas />
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ???????????? */}
                        {/* {stoixeiaState.tablasKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tablades, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ???????????????????????? ?????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenoKouti" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????????????????? ??????????</Form.Label>
                            {<Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouti} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* KOYTIA */}
                        {/* <Form.Group as={Row} controlId="koutia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>????????????????: ????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='koutia'
                                    value={stoixeiaState.koutia}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Kouti />
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ???????????? */}
                        {/* {stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.koutia, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????? ??????????.?????????????? */}
                        {/* <Form.Group as={Row} controlId="lamakiaMonofKoutiou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????? ??????????.?????????????? </Form.Label>
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

                        {/* ?????????????? */}
                        {/* <Form.Group as={Row} controlId="kapakia" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='kapakia'
                                    value={stoixeiaState.kapakia}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Kapakia />
                                </Form.Control>
                            </Col> */}

                        {/* ?????????????? ?????????????? */}
                        {/* {stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.kapakia, tablasKoutiKapaki, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????????????????????? ?????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenesFases" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>?????????????????????????? ??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 14)} readOnly />
                            </Col> */}
                        {/* ?????????????? ?????????????????????????? ?????????? */}
                        {/* <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 12)} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ?????????? */}
                        {/* <Form.Group as={Row} controlId="fases" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='fases'
                                    value={stoixeiaState.fases}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Fasa />
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ?????????????? */}
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
                                    <option>??????????????...</option>
                                    <option>?????????????? ?????????????????????????? 100??50 ????????????????????????</option>
                                    <option>?????? ???????????????? ??????????. F100</option>
                                    <option>?????? ???????????????? ??????????. F140</option>
                                    <option>?????????? ????????????????</option>
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? TZAMAKIA */}
                        {/* {stoixeiaState.tzamakia !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tzamakia, tzamakiParathyro, 0)} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* TZAMAKIA ???????????? */}
                        {/* <Form.Group as={Row} controlId="tzamakiaPlithos" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>TZAMAKIA ????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" value={stoixeiaState.tzamakiaPlithos} />
                            </Col>
                        </Form.Group> */}

                        {/* ???????????????????????? ?????????????????????? */}
                        {/* <Form.Group as={Row} controlId="proteinomenhYpodiairesh" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>???????????????????????? ??????????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" style={{ color: 'red' }} placeholder={stoixeiaState.proteinomenhYpodiairesh} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ?????????????????????? */}
                        {/* <Form.Group as={Row} controlId="ypodiairesh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ypodiairesh'
                                    value={stoixeiaState.ypodiairesh}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Ypodiairesh />
                                </Form.Control>
                            </Col> */}
                        {/* ?????????????? ??????????????????????S */}
                        {/* {stoixeiaState.proteinomenhYpodiairesh !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypodiaireshKwd} readOnly />
                            </Col>}
                        </Form.Group> */}

                        {/* ?????????? ???????????????? */}
                        {/* <Form.Group as={Row} controlId="mhkosMeiwthra" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????? ????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.mhkosMeiwthra} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ???????? ???????????????? */}
                        {/* <Form.Group as={Row} controlId="ypsosMeiwthra" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????? ????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypsosMeiwthra} readOnly />
                            </Col>
                        </Form.Group> */}

                        {/* ?????????? - BX */}
                        <Form.Group as={Row} controlId="sxesh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.sxesh} readOnly />
                            </Col>
                        </Form.Group>

                        {/* ?????????????? */}
                        <Form.Group as={Row} controlId="agyria" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='agyria'
                                    value={stoixeiaState.agyria}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????????????? F140</option>
                                    <option>?????????????? F100 ?????????? 4mm</option>
                                    <option>?????????????? ?????? ROLLING SYSTEM F100</option>
                                    <option>?????????? + ?????????????????? ?????? ROL.SYSTEM F100 ????????????????????????</option>
                                    <option>??????????????  + ?????????? + ?????????????????? ?????? ROL.SYSTEM F100 ????????????????????????</option>
                                    <option>?????????? ??????????????</option>
                                </Form.Control>
                            </Col>
                            {/* ?????????????? ?????????????? */}
                            {stoixeiaState.agyria !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ???????????????????????? ???????????? ???????????????? */}
                        <Form.Group as={Row} controlId="proteinomenoPlithosAgyriwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>???????????????????????? ???????????? ????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd === '-' ? '-' : Math.ceil(stoixeiaState.katharoYpsos / 750)} readOnly />
                            </Col>
                        </Form.Group>

                        {/* ???????????? ????????????????  */}
                        <Form.Group as={Row} controlId="plithosAgyriwn" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????? ????????????????</Form.Label>
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
                                    <option>??????????????...</option>
                                    <Moter />
                                </Form.Control>
                            </Col>
                            {/* ?????????????? MOTEP  */}
                            {stoixeiaState.moter !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.moterKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ???????? ?????????? */}
                        <Form.Group as={Row} controlId="moterThesi" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????? MOTEP</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='moterThesi'
                                    value={stoixeiaState.moterThesi}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????. ????????????????</option>
                                    <option>????????. ??????????</option>
                                    <option>?????? ??????????</option>
                                    <option>?????? ????????????????</option>
                                    <option>????????. ?????????? PYROL</option>
                                    <option>????????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????? ?????????????? ???????????????? */}
                        <Form.Group as={Row} controlId="thesiParoxhsReumatos" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????? ?????????????? ???????????????? </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='thesiParoxhsReumatos'
                                    value={stoixeiaState.thesiParoxhsReumatos}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????? ????????????????</option>
                                    <option>?????? ??????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????????????????????? ??????????????????  */}
                        {/* <Form.Group as={Row} controlId="proteinomenoKouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>???????????????????????? ?????????????????? </Form.Label>
                            <Col sm={4}>
                                <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouzineto} readOnly >
                                </Form.Control>
                            </Col>
                        </Form.Group> */}

                        {/* ?????????????????? ?????????????????? */}
                        <Form.Group as={Row} controlId="kouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????? ?????????????????? </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='kouzineto'
                                    value={stoixeiaState.kouzineto}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <Kouzineto />
                                </Form.Control>
                            </Col>
                            {/* ?????????????? ??????????????????  */}
                            {stoixeiaState.kouzineto !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.kouzinetoKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ???????????????????????? */}
                        <Form.Group as={Row} controlId="apasfaliseis" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????????????????? </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='apasfaliseis'
                                    value={stoixeiaState.apasfaliseis}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????????????????? ???????????????????? ??????????</option>
                                    <option>BLINDOOR GEROLIMATOS</option>
                                    <option>?????????????????? ?????????? ???????????????????? ??????????</option>
                                </Form.Control>
                            </Col>
                            {/* ?????????????? MOTEP  */}
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
                                    {/* <option>??????????????...</option> */}
                                    <option>???????? ??????????????????????</option>
                                    <option>???????????????? ?????? ????????????????????</option>
                                    <option>???????????????? ???? ????????????????????</option>
                                    <option>?????????????? (??????????????????????)</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????????? ?????????????????? - ???????????? ?????????? ???????????? */}
                        <Form.Group as={Row} controlId="koutiaXwrisSkotia" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ?????????????????? - ???????????? ?????????? ???????????? </Form.Label>
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

                        {/* ???????????? ?????????????????? - ?????????????????????????? ???????????? */}
                        <Form.Group as={Row} controlId="steganopoihshTampla" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ?????????????????? - ?????????????????????????? ????????????</Form.Label>
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

                        {/* ???????????? ?????????????????? - ?????????????? ?????? ???????????? */}
                        <Form.Group as={Row} controlId="anoigmaStoProfil" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ?????????????????? - ?????????????? ?????? ????????????</Form.Label>
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

                        {/* ?????????????????? ???????????????????????? */}
                        <Form.Group as={Row} controlId="epifaneiaEgatastashs" style={{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????? ????????????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='epifaneiaEgatastashs'
                                    value={stoixeiaState.epifaneiaEgatastashs}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????</option>
                                    <option>????????????</option>
                                    <option>???????????????????? ????????????????</option>
                                    <option>????????????????????</option>
                                    <option>????????</option>
                                    <option>????????</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????? ???????? 1 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso1" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????? ???????? 1</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='anypsotikoMeso1'
                                    value={stoixeiaState.anypsotikoMeso1}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>??????????????</option>
                                    <option>K????????</option>
                                    <option>??????. ??????????????????</option>
                                    <option>??????????</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????? ???????? 2 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso2" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????????? ???????? 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='anypsotikoMeso2'
                                    value={stoixeiaState.anypsotikoMeso2}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>??????????????</option>
                                    <option>K????????</option>
                                    <option>??????. ??????????????????</option>
                                    <option>??????????</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????? ???????? 3 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso3" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????????? ???????? 3</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='anypsotikoMeso3'
                                    value={stoixeiaState.anypsotikoMeso3}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>??????????????</option>
                                    <option>K????????</option>
                                    <option>??????. ??????????????????</option>
                                    <option>??????????</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????? ???????? 4 */}
                        <Form.Group as={Row} controlId="anypsotikoMeso4" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????????? ???????? 4</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='anypsotikoMeso4'
                                    value={stoixeiaState.anypsotikoMeso4}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>??????????????</option>
                                    <option>K????????</option>
                                    <option>??????. ??????????????????</option>
                                    <option>??????????</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????????????? ?????????????????????? 1 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash1" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ?????????????????????? 1</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ilektrologikhEgatastash1'
                                    value={stoixeiaState.ilektrologikhEgatastash1}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????????????</option>
                                    <option>??????????</option>
                                    <option>??????????????????????????</option>
                                    <option>??????????????????</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????????????? ?????????????????????? 2 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ?????????????????????? 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ilektrologikhEgatastash2'
                                    value={stoixeiaState.ilektrologikhEgatastash2}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????????????</option>
                                    <option>??????????</option>
                                    <option>??????????????????????????</option>
                                    <option>??????????????????</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????????????? ?????????????????????? 3 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash3" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ?????????????????????? 3</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ilektrologikhEgatastash3'
                                    value={stoixeiaState.ilektrologikhEgatastash3}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????????????</option>
                                    <option>??????????</option>
                                    <option>??????????????????????????</option>
                                    <option>??????????????????</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????????????? ?????????????????????? 4 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash4" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ?????????????????????? 4</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ilektrologikhEgatastash4'
                                    value={stoixeiaState.ilektrologikhEgatastash4}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????????????</option>
                                    <option>??????????</option>
                                    <option>??????????????????????????</option>
                                    <option>??????????????????</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????????????????? ?????????????????????? 5 */}
                        <Form.Group as={Row} controlId="ilektrologikhEgatastash5" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????????????????????? ?????????????????????? 5</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='ilektrologikhEgatastash5'
                                    value={stoixeiaState.ilektrologikhEgatastash5}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>????????????????????</option>
                                    <option>??????????</option>
                                    <option>??????????????????????????</option>
                                    <option>??????????????????</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????????? ?????????????????????? */}
                        <Form.Group as={Row} controlId="tainiaSyskevasias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ?????????????????????? </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='tainiaSyskevasias'
                                    value={stoixeiaState.tainiaSyskevasias}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>??????????????????????</option>
                                    <option>????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????????? ???????????????? */}
                        <Form.Group as={Row} controlId="tampelaSimansis" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????? ????????????????</Form.Label>
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

                        {/* ?????????????????? ?????????????????? */}
                        <Form.Group as={Row} controlId="kleidariaAsfaleias" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????????????? ?????????????????? </Form.Label>
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
                            {/* ?????????????? ??????????????????S ??????????????????  */}
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
                                    <option>??????????????...</option>
                                    <option>???????????????????? 0-5</option>
                                    <option>???????????????????? 5-7</option>
                                    <option>???????????????????? 7-10</option>
                                    <option>?????????? ????????????????????</option>
                                </Form.Control>
                            </Col>
                            {/* ?????????????? ANTIANEMIA */}
                            {stoixeiaState.antianemia !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.antianemia, antianemio, 0)} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* STOP ?????????? */}
                        <Form.Group as={Row} controlId="stopRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>STOP ??????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='stopRolou'
                                    value={stoixeiaState.stopRolou}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????????????????? STOP ??????????</option>
                                    <option>???????????????? STOP ??????????</option>
                                    <option>?????????? STOP</option>
                                </Form.Control>
                            </Col>
                            {/* ?????????????? STOP ?????????? */}
                            {stoixeiaState.stopRolou == '?????????????????? STOP ??????????' && <Col sm={3}>
                                <Form.Control type="text" placeholder='08.01.07.00.001' readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ?????????????????? */}
                        <Form.Group as={Row} controlId="xeirolavh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='xeirolavh'
                                    value={stoixeiaState.xeirolavh}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????????????????? ?????????? ?????? PVC</option>
                                    <option>?????????????????? ???? ?????????? ?????????? ?????? PVC</option>
                                    <option>?????????? ??????????????????</option>
                                </Form.Control>
                            </Col>
                            {/* ?????????????? ??????????????????S */}
                            {stoixeiaState.xeirolavh !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.xeirolavh, xeirolavi, 0)} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ???????? ???????????????? */}
                        <Form.Group as={Row} controlId="vashSthrijhs" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????? ????????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='vashSthrijhs'
                                    value={stoixeiaState.vashSthrijhs}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <VasiSthrijhs />

                                </Form.Control>
                            </Col>
                            {/* ?????????????? ????????S ???????????????? */}
                            {stoixeiaState.vashSthrijhs !== ' ' && <Col sm={3}>
                                <Form.Control type="text" placeholder={stoixeiaState.vashSthrijhsKwd} readOnly />
                            </Col>}
                        </Form.Group>

                        {/* ???????????? ???????????? ???????????????? ???????????? */}
                        <Form.Group as={Row} controlId="plithosVasewnSthrijhsOdhgou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ???????????? ???????????????? ????????????</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder={stoixeiaState.plithosVasewnSthrijhsOdhgou}
                                // readOnly ??
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ?????????? */}
                        <Form.Group as={Row} controlId="xrwma" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????</Form.Label>
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

                        {/* ??????????????
                        <Form.Group as={Row} controlId="customer" >
                            <Form.Label column sm={3}>??????????????</Form.Label>
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

                        {/* ?????????????????????????? */}
                        <Form.Group as={Row} controlId="proteraiothta" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>??????????????????????????</Form.Label>
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

                        {/* ?????????? ???????????????? ???????????? */}
                        <Form.Group as={Row} controlId="thikesSthrijhsOdhgwn" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>?????????? ???????????????? ???????????? </Form.Label>
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

                        {/* ???????????????? ?????????? ???????????????? ???????????? */}
                        <Form.Group as={Row} controlId="diastashThikisSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????????? ?????????? ???????????????? ????????????</Form.Label>
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

                        {/* ???????????? ???????????????? ???????????? */}
                        <Form.Group as={Row} controlId="kolonaSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ???????????????? ????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='kolonaSthrijhsOdhgwn'
                                    value={stoixeiaState.kolonaSthrijhsOdhgwn}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>?????????????? ???????????? 80??40</option>
                                    <option>?????????????????????? ???????????? 80??40</option>
                                    <option>?????????? ???????????? ????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????????????? ?????????????? ???????????????? ???????????? */}
                        <Form.Group as={Row} controlId="diastashKolonasSthrijhsOdhgwn" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????????? ?????????????? ???????????????? ????????????</Form.Label>
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

                        {/* ???????????? ???????????????? */}
                        <Form.Group as={Row} controlId="gwniesSthrijhs" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????????? ???????????????? </Form.Label>
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

                        {/* ???????????? ?????????????? */}
                        <Form.Group as={Row} controlId="eidikhSthrijh" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????? ??????????????</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    as="select"
                                    name='eidikhSthrijh'
                                    value={stoixeiaState.eidikhSthrijh}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option>??????????????...</option>
                                    <option>???????? ???????????????? 80??10</option>
                                    <option>?????????? ???????????????? 80??80</option>
                                    <option>?????????? ???????????? ??????????????</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* ???????? ???????????????? 80??10 mm */}
                        <Form.Group as={Row} controlId="lamaSthrijhs80x10" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>???????? ???????????????? 80??10 mm</Form.Label>
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

                        {/* ?????????? ???????????????? 80??10 mm */}
                        <Form.Group as={Row} controlId="gwniaSthrijhs80x10" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????? ???????????????? 80??10 mm</Form.Label>
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

                        {/* ?????????? ???????????????? 80??80 mm */}
                        <Form.Group as={Row} controlId="gwniaSthrijhs80x80" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????? ???????????????? 80??80 mm</Form.Label>
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

                        {/* ?????????? ???????????? ???????????? mm */}
                        <Form.Group as={Row} controlId="aerasProfilOdhgou" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>?????????? ???????????? ???????????? mm </Form.Label>
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

                        {/* ????.?????????????????????? - 2 */}
                        <Form.Group as={Row} controlId="arParaggelias2" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>????.?????????????????????? - 2</Form.Label>
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

                        {/* ???????? ???????????????? */}
                        <Form.Group as={Row} controlId="ypsosDokariou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????? ????????????????</Form.Label>
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

                        {/* ???????????? ???????? ?????????? - EF */}
                        <Form.Group as={Row} controlId="telikoYpsosRolou" style={{ marginTop: 10 }}>
                            <Form.Label column sm={3}>???????????? ???????? ??????????</Form.Label>
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

                        {/* <Form.Control type="text" placeholder="????????????????" value={stoixeiaState.profilKwd} /> */}

                        {/* <Button variant="primary" type="submit" style={{ marginTop: 40 }}>
                            ??????????????
                        </Button> */}

                    </Form>
                </Row>
            </Container>
        </StoixeiaContext.Provider >
    )
}

export default Stoixeia
