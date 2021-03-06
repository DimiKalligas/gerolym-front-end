const stoixeiaReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE TEXT':
            return {
                ...state,
                [action.field]: action.payload
            }
        case 'LOAD WHOLE OBJECT':
            return action.payload

        case "CLEAR_FORM":
            // let lastOrder = JSON.parse(localStorage.getItem('lastOrderNo'))
            // let lastOrder = state.orderNo || 1 // Πρώτη Παραγγελία!

            return {
                customer: '',
                orderDate: Date.now(),
                deliveryDate: '',
                pithaniDeliveryDate: '',
                orderNo: action.payload, // lastOrder, // + 1
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
                ypsosSimaias: 0,
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
                ypsosShmaias: '',
                mhkosShmaias: '',
                proteinomenoKouti: '',
                proteinomenosTablas: '',
                tablades: '',
                tabladesKwd: '',
                koutia: '',
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
                agyriaKwd: '-',
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
                proteraiothta: 'KANONIKH',
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
                J322: 0
            }
        default: return state
    }
}

export default stoixeiaReducer