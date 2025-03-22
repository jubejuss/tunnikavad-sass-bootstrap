# Bootstrap Layout iseseisev töö

## Ülesande kirjeldus

Loo üheleheküljeline (onepager) veebileht, mis tutvustab sind ja sinu huvisid, kasutades Bootstrap'i võrgustiku süsteemi (grid system). Leht peab olema responsive ja hästi välja nägema nii mobiilil, tahvlil kui ka desktopil.

Lehe kujundus peab järgima etteantud visandit, mis näitab kahte erinevat layout'i - mobiiliversiooni (Frame 1) ja desktop versiooni (Frame 2).

## Nõuded

1. Kasuta Bootstrap 5 CDN-i
2. Loo responsive layout, mis kohandub erinevate ekraani suurustega
3. Järgi visandil näidatud struktuuri ja paigutust
4. Kasuta Bootstrap'i grid süsteemi (container, row, col)
5. Rakenda erinevaid column klasse (col-12, col-md-6, col-lg-4 jne)

## Lehe struktuur

### 1. Navigatsioon
- Mobiiliversioonis: hamburger menüü
- Desktop versioonis: horisontaalne menüü paremal

### 2. Hero sektsioon
- Täislaiuses pilt taustana
- Pealkiri – nimi
- Mobiiliversioonis: väiksem pilt
- Desktop versioonis: suurem pilt

### 3. "Minu maailm" sektsioon
- Mobiiliversioonis: kolm kaarti üksteise all
- Desktop versioonis: kolm kaarti kõrvuti ühes reas
- Kaartide sisu:
  1. **"Enda kirjeldus"** - lühike enesetutvustus
  2. **"Hobid"** - sinu hobide loetelu
  3. **"Oskused"** - sinu oskuste loetelu
  Kasutuse ikoonid või illustratsioonid

### 4. Tekstiblokk
- Pikem tekstilõik, mis kirjeldab sind või sinu huvisid
- Mobiiliversioonis: täislaius
- Desktop versioonis: täislaius, kuid struktureeritud

### 5. Galerii
- Mobiiliversioonis: pildid 2x3 ruudustikus
- Desktop versioonis: pildid 3x2 ruudustikus
- Kokku 6 pilti

### 6. Jalus
- Autoriõiguse tekst
- Lingid
- Bootstrap'i märge

## Tehnilised nõuded

1. **Navigatsioon**:
   - Kasuta `.navbar` ja `.navbar-toggler` komponente
   - Tee nii, et menüü oleks mobiilil kokkupakitud ja suurel ekraanil horisontaalne

2. **Hero sektsioon**:
   - Kasuta `.container-fluid` täislaiuses tausta jaoks
   - Tekst peaks olema pildi peal (kasuta positsioneerimist)

3. **"Minu maailm" kaardid**:
   - Kasuta `.card` komponente
   - Mobiilil: `.col-12` (täislaius)
   - Tahvlil: `.col-md-6` (kaks kaarti reas)
   - Desktopil: `.col-lg-4` (kolm kaarti reas)
   - Lisa igale kaardile ikoon

4. **Tekstiblokk**:
   - Kasuta `.container` ja sobivaid teksti vormindamise klasse

5. **Galerii**:
   - Kasuta grid süsteemi piltide paigutamiseks
   - Mobiilil: `.col-6` (kaks pilti reas)
   - Desktopil: `.col-lg-4` (kolm pilti reas)
   - Lisa piltidele `.img-fluid` klass, et need oleksid responsive

6. **Jalus**:
   - Kasuta `.container` ja sobivaid teksti vormindamise klasse
   - Lisa loetelu punktid (list items)

## Hindamiskriteeriumid

1. Layout vastab visandile
2. Veebileht on responsive ja kohandub erinevate ekraani suurustega
3. Bootstrap'i grid süsteemi on kasutatud korrektselt
4. Kood on puhas ja hästi struktureeritud
5. Kõik nõutud sektsioonid on olemas

## Abimaterjalid

- Bootstrap dokumentatsioon: https://getbootstrap.com/docs/5.3/layout/grid/
- Bootstrap komponendid: https://getbootstrap.com/docs/5.3/components/
- Bootstrap utiliidid: https://getbootstrap.com/docs/5.3/utilities/
