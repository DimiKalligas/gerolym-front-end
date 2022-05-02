ΕΛΑΤΗΡΙΟ Β
    < Form.Group as={ Row } controlId = "elathrioΒ" style = {{ marginTop: 10 }}>
                    <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Α</Form.Label>
                    <Col sm={6}>
                        <Form.Control
                            type='text'
                            name='elathrioΒ'
                            placeholder={stoixeiaState.elathrioΒ}
                                    
                                    <option>Επιλογή...</option>
                    <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
                    <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
                    <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
                    <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
        />
                            </Col >

    {/* ΚΩΔΙΚΟΣ ΕΛΑΤΗΡΙΟ Β */ }
{
    stoixeiaState.elathrioΒkwd !== -1 && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioΒ, elathrioF60, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟ Β */ }
    < Form.Group as={ Row } controlId = "elathrioΒtem" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                <Form.Label column sm={3}>ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟΥ Β</Form.Label>
                <Col sm={6}>
                    <Form.Control
                        type='text'
                        name='elathrioΒtem'
                        placeholder={stoixeiaState.elathrioΒtem}
                                    
                                    <option>0</option>
                <option>2</option>
                <option>4</option>
                <option>6</option>
                <option>8</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΕΛΑΤΗΡΙΟ Γ */ }
    < Form.Group as={ Row } controlId = "elathrioC" style = {{ marginTop: 10 }}>
        <Form.Label column sm={3}>ΕΛΑΤΗΡΙΟ Γ</Form.Label>
        <Col sm={6}>
            <Form.Control
                type='text'
                name='elathrioC'
                placeholder={stoixeiaState.elathrioC}
                                    
                                    <option>Επιλογή...</option>
        <option>ΕΛΑΤΗΡΙΟ 40ρι</option>
        <option>ΕΛΑΤΗΡΙΟ 45ρι</option>
        <option>ΕΛΑΤΗΡΙΟ 50ρι</option>
        <option>ΕΛΑΤΗΡΙΟ 55ρι</option>
        />
                            </Col >

    {/* ΚΩΔΙΚΟΣ ΕΛΑΤΗΡΙΟ Γ*/ }
{
    stoixeiaState.elathrioCkwd !== -1 && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.elathrioC, elathrioF60, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟ Γ */ }
    < Form.Group as={ Row } controlId = "elathrioCtem" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΕΜΑΧΙΑ ΕΛΑΤΗΡΙΟΥ Γ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='elathrioCtem'
                                    placeholder={stoixeiaState.elathrioCtem}
                                    
                                    <option>0</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>6</option>
                                    <option>8</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ */ }
    < Form.Group as={ Row } controlId = "kwdikosProteinomenhsShmaias" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='tablades'
                                    placeholder={stoixeiaState.kwdikosProteinomenhsShmaias}
                                    readOnly
                                >
                                />
                            </Col>
                        </Form.Group >

{/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ */ }
< Form.Group as={Row} controlId="proteinomenhShmaia" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
    <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΣΗΜΑΙΑ</Form.Label>
    <Col sm={6}>
        <Form.Control
            style={{ color: 'red' }}
            type="text"
            name='proteinomenhShmaia'
            placeholder={stoixeiaState.proteinomenhShmaia}
            readOnly
        >
                                />
                            </Col>
                        </Form.Group >

    {/* INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ */}
    < Form.Group as={Row} controlId="indexProteinomenhsShmaias" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
        <Form.Label column sm={3}>INDEX ΠΡΟΤΕΙΝΟΜΕΝΗΣ ΣΗΜΑΙΑΣ </Form.Label>
        <Col sm={6}>
            <Form.Control
                type='text'
                name='tablades'
                placeholder={stoixeiaState.indexProteinomenhsShmaias}
                readOnly
            >
                                />
                            </Col>
                        </Form.Group >

        {/* ΣΗΜΑΙΕΣ */}
        < Form.Group as={Row} controlId="shmaies" style={{ marginTop: 10 }}>
            <Form.Label column sm={3}>ΣΗΜΑΙΕΣ</Form.Label>
            <Col sm={6}>
                <Form.Control
                    type='text'
                    name='shmaies'
                    placeholder={stoixeiaState.shmaies}
                                    
                                    <option>Επιλογή...</option>
            <Shmaies />
                                />
                            </Col >
        {/* ΚΩΔΙΚΟΣ Σημαίας*/}
        {
            stoixeiaState.shmaiesKwd !== ' ' && <Col sm={3}>
                <Form.Control type="text" placeholder={stoixeiaState.shmaiesKwd} readOnly />
            </Col>
        }
    </Form.Group >

    {/* 'Ύψος & Μήκος Σημαίας mm */}
    < Form.Group as={Row} controlId="ypsosShmaias" style={{ marginTop: 10 }}>
        {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>ΥΨΟΣ ΣΗΜΑΙΑΣ</Form.Label>}
        {
            stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                <Form.Control type="text" placeholder={stoixeiaState.ypsosShmaias} readOnly />
            </Col>
        }

        {stoixeiaState.ypsosShmaias !== ' ' && <Form.Label column sm={3}>ΜΗΚΟΣ ΣΗΜΑΙΑΣ</Form.Label>}
        {
            stoixeiaState.ypsosShmaias !== ' ' && <Col sm={1}>
                <Form.Control type="text" placeholder={stoixeiaState.mhkosShmaias} readOnly />
            </Col>
        }
    </Form.Group >

    {/* ΤΑΜΠΛΑΔΕΣ */}
    < Form.Group as={Row} controlId="tablades" style={{ marginTop: 10 }}>
        <Form.Label column sm={3}>ΤΑΜΠΛΑΔΕΣ</Form.Label>
        <Col sm={6}>
            <Form.Control
                type='text'
                name='tablades'
                placeholder={stoixeiaState.tablades}
                                    
                                    <option>Επιλογή...</option>
        <Tablas />
                                />
                            </Col >

    {/* ΚΩΔΙΚΟΣ ΤΑΜΠΛΑ */}
    {
        stoixeiaState.tablasKwd !== ' ' && <Col sm={3}>
            <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tablas, tablasKoutiKapaki, 0)} readOnly />
        </Col>
    }
</Form.Group >

{/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ */ }
< Form.Group as={Row} controlId="proteinomenoKouti" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
    <Form.Label column sm={3}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΤΙ</Form.Label>
    {
        <Col sm={3}>
            <Form.Control type="text" placeholder={stoixeiaState.proteinomenoKouti} readOnly />
        </Col>
    }
</Form.Group >

{/* KOYTIA */ }
< Form.Group as={Row} controlId="koutia" style={{ marginTop: 10 }}>
    <Form.Label column sm={3}>KOYTIA</Form.Label>
    <Col sm={6}>
        <Form.Control
            type='text'
            name='koutia'
            placeholder={stoixeiaState.koutia}
                                    
                                    <option>Επιλογή...</option>
    <Kouti />
                                />
                            </Col >

{/* ΚΩΔΙΚΟΣ ΤΑΜΠΛΑ */ }
{
    stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.koutia, tablasKoutiKapaki, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ */ }
    < Form.Group as={ Row } controlId = "lamakiaMonofKoutiou" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΛΑΜΑΚΙΑ ΜΟΝΟΦ.ΚΟΥΤΙΟΥ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='lamakiaMonofKoutiou'
                                    placeholder={stoixeiaState.lamakiaMonofKoutiou}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΚΑΠΑΚΙΑ */ }
    < Form.Group as={ Row } controlId = "kapakia" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΚΑΠΑΚΙΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='kapakia'
                                    placeholder={stoixeiaState.kapakia}
                                    
                                    <option>Επιλογή...</option>
                                    <Kapakia />
        />
                            </Col >

    {/* ΚΩΔΙΚΟΣ ΚΑΠΑΚΙΑ */ }
{
    stoixeiaState.koutiKwd !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.kapakia, tablasKoutiKapaki, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */ }
    < Form.Group as={ Row } controlId = "proteinomenesFases" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 14)} readOnly />
                            </Col>
{/* ΚΩΔΙΚΟΣ ΠΡΟΤΕΙΝΟΜΕΝΕΣ ΦΑΣΕΣ */ }
<Col sm={3}>
    <Form.Control type="text" placeholder={vlookup2(stoixeiaState.profilKwd, profil, 12)} readOnly />
</Col>
                        </Form.Group >

    {/* ΦΑΣΕΣ */ }
    < Form.Group as={ Row } controlId = "fases" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΦΑΣΕΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='fases'
                                    placeholder={stoixeiaState.fases}
                                    
                                    <option>Επιλογή...</option>
                                    <Fasa />
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΚΑΠΑΚΙΑ */ }
{
    stoixeiaState.fases !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.fases, fasaTelikouProfil, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* TZAMAKIA */ }
    < Form.Group as={ Row } controlId = "tzamakia" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>TZAMAKIA</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='tzamakia'
                                    placeholder={stoixeiaState.tzamakia}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΤΖΑΜΑΚΙ ΠΟΛΥΚΑΡΒΟΝΙΚΟ 100Χ50 ΜΟΝΤΑΡΙΣΜΕΝΟ</option>
                                    <option>ΣΕΤ ΠΑΡΑΘΥΡΟ ΕΠΟΠΤ. F100</option>
                                    <option>ΣΕΤ ΠΑΡΑΘΥΡΟ ΕΠΟΠΤ. F140</option>
                                    <option>ΧΩΡΙΣ ΤΖΑΜΑΚΙΑ</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ TZAMAKIA */ }
{
    stoixeiaState.tzamakia !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.tzamakia, tzamakiParathyro, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* TZAMAKIA ΠΛΗΘΟΣ */ }
    < Form.Group as={ Row } controlId = "tzamakiaPlithos" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>TZAMAKIA ΠΛΗΘΟΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" placeholder={stoixeiaState.tzamakiaPlithos} />
                            </Col>
                        </Form.Group >

    {/* ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ */ }
    < Form.Group as={ Row } controlId = "proteinomenhYpodiairesh" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΗ ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" style={{ color: 'red' }} placeholder={stoixeiaState.proteinomenhYpodiairesh} readOnly />
                            </Col>
                        </Form.Group >

    {/* ΥΠΟΔΙΑΙΡΕΣΗ */ }
    < Form.Group as={ Row } controlId = "ypodiairesh" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΠΟΔΙΑΙΡΕΣΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ypodiairesh'
                                    placeholder={stoixeiaState.ypodiairesh}
                                    
                                    <option>Επιλογή...</option>
                                    <Ypodiairesh />
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΥΠΟΔΙΑΙΡΕΣΗS */ }
{
    stoixeiaState.proteinomenhYpodiairesh !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={stoixeiaState.ypodiaireshKwd} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ */ }
    < Form.Group as={ Row } controlId = "mhkosMeiwthra" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΜΗΚΟΣ ΜΕΙΩΤΗΡΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.mhkosMeiwthra} readOnly />
                            </Col>
                        </Form.Group >

    {/* ΥΨΟΣ ΜΕΙΩΤΗΡΑ */ }
    < Form.Group as={ Row } controlId = "ypsosMeiwthra" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΨΟΣ ΜΕΙΩΤΗΡΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.ypsosMeiwthra} readOnly />
                            </Col>
                        </Form.Group >

    {/* ΣΧΕΣΗ - BX */ }
    < Form.Group as={ Row } controlId = "sxesh" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΣΧΕΣΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.sxesh} readOnly />
                            </Col>
                        </Form.Group >

    {/* ΑΓΚΥΡΙΑ */ }
    < Form.Group as={ Row } controlId = "agyria" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΓΚΥΡΙΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='agyria'
                                    placeholder={stoixeiaState.agyria}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΑΓΚΥΡΙΑ F140</option>
                                    <option>ΑΓΚΥΡΙΑ F100 ΠΑΧΟΣ 4mm</option>
                                    <option>ΑΓΚΥΡΙΑ ΓΙΑ ROLLING SYSTEM F100</option>
                                    <option>ΤΑΠΕΣ + ΠΡΙΤΣΙΝΙΑ ΓΙΑ ROL.SYSTEM F100 ΜΟΝΤΑΡΙΣΜΕΝΑ</option>
                                    <option>ΑΓΚΥΡΙΑ  + ΤΑΠΕΣ + ΠΡΙΤΣΙΝΙΑ ΓΙΑ ROL.SYSTEM F100 ΜΟΝΤΑΡΙΣΜΕΝΑ</option>
                                    <option>ΧΩΡΙΣ ΑΓΚΥΡΙΑ</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΑΓΚΥΡΙΑ */ }
{
    stoixeiaState.agyria !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ */ }
    < Form.Group as={ Row } controlId = "proteinomenoPlithosAgyriwn" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder={stoixeiaState.agyriaKwd === '-' ? '-' : Math.ceil(stoixeiaState.katharoYpsos / 750)} readOnly />
                            </Col>
                        </Form.Group >

    {/* ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ  */ }
    < Form.Group as={ Row } controlId = "plithosAgyriwn" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΠΛΗΘΟΣ ΑΓΚΥΡΙΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='plithosAgyriwn'
                                    placeholder={stoixeiaState.plithosAgyriwn}
                                    
                                    {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28].map(n => (<option>{n}</option>))}
                                />
                            </Col>
                        </Form.Group >

    {/* MOTEP */ }
    < Form.Group as={ Row } controlId = "moter" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>MOTEP </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='moter'
                                    placeholder={stoixeiaState.moter}
                                    
                                    <option>Επιλογή...</option>
                                    <Moter />
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ MOTEP  */ }
{
    stoixeiaState.moter !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={stoixeiaState.moterKwd} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΘΕΣΗ ΜΟΤΕΡ */ }
    < Form.Group as={ Row } controlId = "moterThesi" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΘΕΣΗ MOTEP</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='moterThesi'
                                    placeholder={stoixeiaState.moterThesi}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΕΣΩΤ. ΑΡΙΣΤΕΡΑ</option>
                                    <option>ΕΣΩΤ. ΔΕΞΙΑ</option>
                                    <option>ΕΞΩ ΔΕΞΙΑ</option>
                                    <option>ΕΞΩ ΑΡΙΣΤΕΡΑ</option>
                                    <option>ΕΣΩΤ. ΔΕΞΙΑ PYROL</option>
                                    <option>ΚΕΝΤΡΙΚΟ</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ */ }
    < Form.Group as={ Row } controlId = "thesiParoxhsReumatos" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΘΕΣΗ ΠΑΡΟΧΗΣ ΡΕΥΜΑΤΟΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='thesiParoxhsReumatos'
                                    placeholder={stoixeiaState.thesiParoxhsReumatos}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΕΣΩ ΑΡΙΣΤΕΡΑ</option>
                                    <option>ΕΣΩ ΔΕΞΙΑ</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ  */ }
    < Form.Group as={ Row } controlId = "proteinomenoKouzineto" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3} style={{ color: 'red' }}>ΠΡΟΤΕΙΝΟΜΕΝΟ ΚΟΥΖΙΝΕΤΟ </Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder={stoixeiaState.proteinomenoKouzineto}
                                >
                                />
                            </Col>
                        </Form.Group >

{/* ΚΟΥΖΙΝΕΤΟ ΑΣΦΑΛΕΙΑΣ */ }
< Form.Group as={Row} controlId="kouzineto" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
    <Form.Label column sm={3}>ΚΟΥΖΙΝΕΤΟ ΑΣΦΑΛΕΙΑΣ </Form.Label>
    <Col sm={6}>
        <Form.Control
            type='text'
            name='kouzineto'
            placeholder={stoixeiaState.kouzineto}
                                    
                                    <option>Επιλογή...</option>
    <Kouzineto />
                                />
                            </Col >
{/* ΚΩΔΙΚΟΣ ΚΟΥΖΙΝΕΤΟ  */ }
{
    stoixeiaState.kouzineto !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={stoixeiaState.kouzinetoKwd} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΑΠΑΣΦΑΛΙΣΕΙΣ */ }
    < Form.Group as={ Row } controlId = "apasfaliseis" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΠΑΣΦΑΛΙΣΕΙΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='apasfaliseis'
                                    placeholder={stoixeiaState.apasfaliseis}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΕΞΩΤΕΡΙΚΗ ΑΠΑΣΦΑΛΙΣΗ ΡΟΛΟΥ</option>
                                    <option>BLINDOOR GEROLIMATOS</option>
                                    <option>ΕΣΩΤΕΡΙΚΗ ΔΙΠΛΗ ΑΠΑΣΦΑΛΙΣΗ ΡΟΛΟΥ</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ MOTEP  */ }
{
    stoixeiaState.apasfaliseis !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.apasfaliseis, apasfaliseis, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* PACKAGING */ }
    < Form.Group as={ Row } controlId = "packaging" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>PACKAGING </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='packaging'
                                    placeholder={stoixeiaState.packaging}
                                    
                                    {/* <option>Επιλογή...</option> */}
                                    <option>ΙΔΙΑ ΕΓΚΑΤΑΣΤΑΣΗ</option>
                                    <option>ΠΑΡΑΛΑΒΗ ΑΠΟ ΕΡΓΟΣΤΑΣΙΟ</option>
                                    <option>ΠΑΡΑΔΟΣΗ ΣΕ ΜΕΤΑΦΟΡΙΚΗ</option>
                                    <option>ΕΞΑΓΩΓΗ (ΞΥΛΟΚΙΒΩΤΙΟ)</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ */ }
    < Form.Group as={ Row } controlId = "koutiaXwrisSkotia" style = {{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΚΟΥΤΙΑ ΧΩΡΙΣ ΣΚΟΤΙΑ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='koutiaXwrisSkotia'
                                    placeholder={stoixeiaState.koutiaXwrisSkotia}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ */ }
    < Form.Group as={ Row } controlId = "steganopoihshTampla" style = {{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΣΤΕΓΑΝΟΠΟΙΗΣΗ ΤΑΜΠΛΑ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='steganopoihshTampla'
                                    placeholder={stoixeiaState.steganopoihshTampla}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΑΝΟΙΓΜΑ ΣΤΟ ΠΡΟΦΙΛ */ }
    < Form.Group as={ Row } controlId = "anoigmaStoProfil" style = {{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ - ΑΝΟΙΓΜΑ ΣΤΟ ΠΡΟΦΙΛ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='anoigmaStoProfil'
                                    placeholder={stoixeiaState.anoigmaStoProfil}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ */ }
    < Form.Group as={ Row } controlId = "epifaneiaEgatastashs" style = {{ display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΕΠΙΦΑΝΕΙΑ ΕΓΚΑΤΑΣΤΑΣΗΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='epifaneiaEgatastashs'
                                    placeholder={stoixeiaState.epifaneiaEgatastashs}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΜΠΕΤΟΝ</option>
                                    <option>ΤΟΥΒΛΟ</option>
                                    <option>ΜΕΤΑΛΛΙΚΟΣ ΣΚΕΛΕΤΟΣ</option>
                                    <option>ΓΥΨΟΣΑΝΙΔΑ</option>
                                    <option>ΞΥΛΟ</option>
                                    <option>ΑΛΛΟ</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1 */ }
    < Form.Group as={ Row } controlId = "anypsotikoMeso1" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 1</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='anypsotikoMeso1'
                                    placeholder={stoixeiaState.anypsotikoMeso1}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΓΕΡΑΝΟΣ</option>
                                    <option>KΛΑΡΚ</option>
                                    <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                    <option>ΣΚΑΛΑ</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2 */ }
    < Form.Group as={ Row } controlId = "anypsotikoMeso2" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='anypsotikoMeso2'
                                    placeholder={stoixeiaState.anypsotikoMeso2}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΓΕΡΑΝΟΣ</option>
                                    <option>KΛΑΡΚ</option>
                                    <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                    <option>ΣΚΑΛΑ</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3 */ }
    < Form.Group as={ Row } controlId = "anypsotikoMeso3" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 3</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='anypsotikoMeso3'
                                    placeholder={stoixeiaState.anypsotikoMeso3}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΓΕΡΑΝΟΣ</option>
                                    <option>KΛΑΡΚ</option>
                                    <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                    <option>ΣΚΑΛΑ</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4 */ }
    < Form.Group as={ Row } controlId = "anypsotikoMeso4" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΑΝΥΨΩΤΙΚΟ ΜΕΣΟ 4</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='anypsotikoMeso4'
                                    placeholder={stoixeiaState.anypsotikoMeso4}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΓΕΡΑΝΟΣ</option>
                                    <option>KΛΑΡΚ</option>
                                    <option>ΥΔΡ. ΠΛΑΤΦΟΡΜΑ</option>
                                    <option>ΣΚΑΛΑ</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1 */ }
    < Form.Group as={ Row } controlId = "ilektrologikhEgatastash1" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 1</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ilektrologikhEgatastash1'
                                    placeholder={stoixeiaState.ilektrologikhEgatastash1}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                    <option>ΦΑΡΟΣ</option>
                                    <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                    <option>ΔΙΑΚΟΠΤΗΣ</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2 */ }
    < Form.Group as={ Row } controlId = "ilektrologikhEgatastash2" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ilektrologikhEgatastash2'
                                    placeholder={stoixeiaState.ilektrologikhEgatastash2}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                    <option>ΦΑΡΟΣ</option>
                                    <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                    <option>ΔΙΑΚΟΠΤΗΣ</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3 */ }
    < Form.Group as={ Row } controlId = "ilektrologikhEgatastash3" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 3</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ilektrologikhEgatastash3'
                                    placeholder={stoixeiaState.ilektrologikhEgatastash3}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                    <option>ΦΑΡΟΣ</option>
                                    <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                    <option>ΔΙΑΚΟΠΤΗΣ</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4 */ }
    < Form.Group as={ Row } controlId = "ilektrologikhEgatastash4" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 4</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ilektrologikhEgatastash4'
                                    placeholder={stoixeiaState.ilektrologikhEgatastash4}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                    <option>ΦΑΡΟΣ</option>
                                    <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                    <option>ΔΙΑΚΟΠΤΗΣ</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5 */ }
    < Form.Group as={ Row } controlId = "ilektrologikhEgatastash5" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΗΛΕΚΤΡΟΛΟΓΙΚΗ ΕΓΚΑΤΑΣΤΑΣΗ 5</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='ilektrologikhEgatastash5'
                                    placeholder={stoixeiaState.ilektrologikhEgatastash5}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΦΩΤΟΚΥΤΑΡΑ</option>
                                    <option>ΦΑΡΟΣ</option>
                                    <option>ΤΗΛΕΧΕΙΡΙΣΜΟΣ</option>
                                    <option>ΔΙΑΚΟΠΤΗΣ</option>
                                    <option>BLINDOR GEROLIMATOS</option>
                                    <option>-</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ */ }
    < Form.Group as={ Row } controlId = "tainiaSyskevasias" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΤΑΙΝΙΑ ΣΥΣΚΕΥΑΣΙΑΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='tainiaSyskevasias'
                                    placeholder={stoixeiaState.tainiaSyskevasias}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΓΕΡΟΛΥΜΑΤΟΣ</option>
                                    <option>ΚΑΦΕ</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ */ }
    < Form.Group as={ Row } controlId = "tampelaSimansis" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΑΜΠΕΛΑ ΣΗΜΑΝΣΗΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='tampelaSimansis'
                                    placeholder={stoixeiaState.tampelaSimansis}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ */ }
    < Form.Group as={ Row } controlId = "kleidariaAsfaleias" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΚΛΕΙΔΑΡΙΑ ΑΣΦΑΛΕΙΑΣ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='kleidariaAsfaleias'
                                    placeholder={stoixeiaState.kleidariaAsfaleias}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΚΛΕΙΔΑΡΙΑS ΑΣΦΑΛΕΙΑΣ  */ }
{
    stoixeiaState.kleidariaAsfaleias == 'NAI' && <Col sm={3}>
        <Form.Control type="text" placeholder='07.01.00.00.000' readOnly />
    </Col>
}
                        </Form.Group >

    {/* ANTIANEMIA */ }
    < Form.Group as={ Row } controlId = "antianemia" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ANTIANEMIA</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='antianemia'
                                    placeholder={stoixeiaState.antianemia}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΑΝΤΙΑΝΕΜΙΟ 0-5</option>
                                    <option>ΑΝΤΙΑΝΕΜΙΟ 5-7</option>
                                    <option>ΑΝΤΙΑΝΕΜΙΟ 7-10</option>
                                    <option>ΧΩΡΙΣ ΑΝΤΙΑΝΕΜΙΟ</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ANTIANEMIA */ }
{
    stoixeiaState.antianemia !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.antianemia, antianemio, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* STOP ΡΟΛΟΥ */ }
    < Form.Group as={ Row } controlId = "stopRolou" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>STOP ΡΟΛΟΥ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='stopRolou'
                                    placeholder={stoixeiaState.stopRolou}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΜΕΤΑΛΛΙΚΟ STOP ΡΟΛΟΥ</option>
                                    <option>ΠΛΑΣΤΙΚΟ STOP ΡΟΛΟΥ</option>
                                    <option>ΧΩΡΙΣ STOP</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ STOP ΡΟΛΟΥ */ }
{
    stoixeiaState.stopRolou == 'ΜΕΤΑΛΛΙΚΟ STOP ΡΟΛΟΥ' && <Col sm={3}>
        <Form.Control type="text" placeholder='08.01.07.00.001' readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΧΕΙΡΟΛΑΒΗ */ }
    < Form.Group as={ Row } controlId = "xeirolavh" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΧΕΙΡΟΛΑΒΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='xeirolavh'
                                    placeholder={stoixeiaState.xeirolavh}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΧΕΙΡΟΛΑΒΗ ΡΟΛΟΥ ΑΠΟ PVC</option>
                                    <option>ΧΕΙΡΟΛΑΒΗ ΜΕ ΕΣΟΧΗ ΡΟΛΟΥ ΑΠΟ PVC</option>
                                    <option>ΧΩΡΙΣ ΧΕΙΡΟΛΑΒΗ</option>
        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΧΕΙΡΟΛΑΒΗS */ }
{
    stoixeiaState.xeirolavh !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={vlookup2(stoixeiaState.xeirolavh, xeirolavi, 0)} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΒΑΣΗ ΣΤΗΡΙΞΗΣ */ }
    < Form.Group as={ Row } controlId = "vashSthrijhs" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΒΑΣΗ ΣΤΗΡΙΞΗΣ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='vashSthrijhs'
                                    placeholder={stoixeiaState.vashSthrijhs}
                                    
                                    <option>Επιλογή...</option>
                                    <VasiSthrijhs />

        />
                            </Col >
    {/* ΚΩΔΙΚΟΣ ΒΑΣΗS ΣΤΗΡΙΞΗΣ */ }
{
    stoixeiaState.vashSthrijhs !== ' ' && <Col sm={3}>
        <Form.Control type="text" placeholder={stoixeiaState.vashSthrijhsKwd} readOnly />
    </Col>
}
                        </Form.Group >

    {/* ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ */ }
    < Form.Group as={ Row } controlId = "plithosVasewnSthrijhsOdhgou" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΠΛΗΘΟΣ ΒΑΣΕΩΝ ΣΤΗΡΙΞΗΣ ΟΔΗΓΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder={stoixeiaState.plithosVasewnSthrijhsOdhgou}
                                // readOnly ??
                                >
                                />
                            </Col>
                        </Form.Group >

{/* ΧΡΩΜΑ */ }
< Form.Group as={Row} controlId="xrwma" style={{ marginTop: 10 }}>
    <Form.Label column sm={3}>ΧΡΩΜΑ</Form.Label>
    <Col sm={4}>
        <Form.Control
            type="number"
            name='xrwma'
            maxLength='4'
            placeholder={stoixeiaState.xrwma}

        />
    </Col>
</Form.Group >

{/* ΠΕΛΑΤΗΣ
                        <Form.Group as={Row} controlId="customer" >
                            <Form.Label column sm={3}>ΠΕΛΑΤΗΣ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    name='customer'
                                    maxLength='4'
                                    placeholder={stoixeiaState.customer}
                                    
                                />
                            </Col>
                        </Form.Group> */}

{/* ΠΡΟΤΕΡΑΙΟΤΗΤΑ */ }
<Form.Group as={Row} controlId="proteraiothta" style={{ marginTop: 10 }}>
    <Form.Label column sm={3}>ΠΡΟΤΕΡΑΙΟΤΗΤΑ</Form.Label>
    <Col sm={6}>
        <Form.Control
            type='text'
            name='proteraiothta'
            placeholder={stoixeiaState.proteraiothta}
                                    
                                    <option>OXI</option>
    <option>NAI</option>
                                />
                            </Col >
                        </Form.Group >

    {/* ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */ }
    < Form.Group as={ Row } controlId = "thikesSthrijhsOdhgwn" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΘΗΚΕΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='thikesSthrijhsOdhgwn'
                                    placeholder={stoixeiaState.thikesSthrijhsOdhgwn}
                                    
                                    <option>OXI</option>
                                    <option>NAI</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */ }
    < Form.Group as={ Row } controlId = "diastashThikisSthrijhsOdhgwn" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΔΙΑΣΤΑΣΗ ΘΗΚΗΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    input="number"
                                    name='diastashThikisSthrijhsOdhgwn'
                                    placeholder={stoixeiaState.diastashThikisSthrijhsOdhgwn}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */ }
    < Form.Group as={ Row } controlId = "kolonaSthrijhsOdhgwn" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΚΟΛΟΝΑ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='kolonaSthrijhsOdhgwn'
                                    placeholder={stoixeiaState.kolonaSthrijhsOdhgwn}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΣΤΑΘΕΡΗ ΚΟΛΟΝΑ 80Χ40</option>
                                    <option>ΑΦΑΙΡΟΥΜΕΝΗ ΚΟΛΟΝΑ 80Χ40</option>
                                    <option>ΧΩΡΙΣ ΚΟΛΟΝΑ ΟΔΗΓΩΝ</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ */ }
    < Form.Group as={ Row } controlId = "diastashKolonasSthrijhsOdhgwn" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΔΙΑΣΤΑΣΗ ΚΟΛΟΝΑΣ ΣΤΗΡΙΞΗΣ ΟΔΗΓΩΝ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='diastashKolonasSthrijhsOdhgwn'
                                    placeholder={stoixeiaState.diastashKolonasSthrijhsOdhgwn}
                                    readOnly
                                >
                                />
                            </Col>
                        </Form.Group >

{/* ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ */ }
< Form.Group as={Row} controlId="gwniesSthrijhs" style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
    <Form.Label column sm={3}>ΓΩΝΙΕΣ ΣΤΗΡΙΞΗΣ </Form.Label>
    <Col sm={6}>
        <Form.Control
            type='text'
            name='gwniesSthrijhs'
            placeholder={stoixeiaState.gwniesSthrijhs}
                                    
                                    <option>OXI</option>
    <option>NAI</option>
                                />
                            </Col >
                        </Form.Group >

    {/* ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ */ }
    < Form.Group as={ Row } controlId = "eidikhSthrijh" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='eidikhSthrijh'
                                    placeholder={stoixeiaState.eidikhSthrijh}
                                    
                                    <option>Επιλογή...</option>
                                    <option>ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10</option>
                                    <option>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80</option>
                                    <option>ΧΩΡΙΣ ΕΙΔΙΚΗ ΣΤΗΡΙΞΗ</option>
        />
                            </Col >
                        </Form.Group >

    {/* ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */ }
    < Form.Group as={ Row } controlId = "lamaSthrijhs80x10" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΛΑΜΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='lamaSthrijhs80x10'
                                    placeholder={stoixeiaState.lamaSthrijhs80x10}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm */ }
    < Form.Group as={ Row } controlId = "gwniaSthrijhs80x10" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ10 mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='gwniaSthrijhs80x10'
                                    placeholder={stoixeiaState.gwniaSthrijhs80x10}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80 mm */ }
    < Form.Group as={ Row } controlId = "gwniaSthrijhs80x80" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΓΩΝΙΑ ΣΤΗΡΙΞΗΣ 80Χ80 mm</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='gwniaSthrijhs80x80'
                                    placeholder={stoixeiaState.gwniaSthrijhs80x80}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm */ }
    < Form.Group as={ Row } controlId = "aerasProfilOdhgou" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΕΡΑΣ ΠΡΟΦΙΛ ΟΔΗΓΟΥ mm </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type='text'
                                    name='aerasProfilOdhgou'
                                    placeholder={stoixeiaState.aerasProfilOdhgou}
                                    
                                    {[20, 25, 30, 35, 40, 45, 50].map(n => (<option>{n}</option>))}
                                />
                            </Col>
                        </Form.Group >

    {/* ΑΡ.ΠΑΡΑΓΓΕΛΙΑΣ - 2 */ }
    < Form.Group as={ Row } controlId = "arParaggelias2" style = {{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                            <Form.Label column sm={3}>ΑΡ.ΠΑΡΑΓΓΕΛΙΑΣ - 2</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="number"
                                    name='arParaggelias2'
                                    placeholder={stoixeiaState.arParaggelias2}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΥΨΟΣ ΔΟΚΑΡΙΟΥ */ }
    < Form.Group as={ Row } controlId = "ypsosDokariou" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΥΨΟΣ ΔΟΚΑΡΙΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='ypsosDokariou'
                                    placeholder={stoixeiaState.ypsosDokariou}
                                    
                                />
                            </Col>
                        </Form.Group >

    {/* ΤΕΛΙΚΟ ΥΨΟΣ ΡΟΛΟΥ - EF */ }
    < Form.Group as={ Row } controlId = "telikoYpsosRolou" style = {{ marginTop: 10 }}>
                            <Form.Label column sm={3}>ΤΕΛΙΚΟ ΥΨΟΣ ΡΟΛΟΥ</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="number"
                                    name='telikoYpsosRolou'
                                    maxLength='4'
                                    placeholder={stoixeiaState.telikoYpsosRolou}
                                    
                                />
                            </Col>
                        </Form.Group >



