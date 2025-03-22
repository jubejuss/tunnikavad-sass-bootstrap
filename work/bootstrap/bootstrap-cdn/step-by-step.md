# Bootstrapi demoveebilehe loomine: samm-sammuline juhend

See juhend selgitab samm-sammult, kuidas luua atraktiivne Bootstrap 5 demo veebileht, mis sobib Bootstrapi võimaluste tutvustamiseks algajatele. Juhendis keskendume erinevatele Bootstrap komponentidele ja selgitame, miks neid kasutatakse.

## Sisukord

1. [Projekti algus ja põhistruktuur](#1-projekti-algus-ja-põhistruktuur)
2. [Navigatsiooniriba lisamine](#2-navigatsiooniriba-lisamine)
3. [Hero sektsiooni loomine](#3-hero-sektsiooni-loomine)
4. [Omaduste sektsiooni loomine](#4-omaduste-sektsiooni-loomine)
5. [Komponentide sektsiooni loomine](#5-komponentide-sektsiooni-loomine)
   - [Kaartide lisamine](#51-kaartide-lisamine)
   - [Hoiatuste lisamine](#52-hoiatuste-lisamine)
   - [Edenemisribade lisamine](#53-edenemisribade-lisamine)
6. [Kontaktivormi lisamine](#6-kontaktivormi-lisamine)
7. [Jaluse loomine](#7-jaluse-loomine)
8. [Juurdepääsetavuse parandamine](#8-juurdepääsetavuse-parandamine)

## 1. Projekti algus ja põhistruktuur

Alustame lihtsast HTML-i põhistruktuurist ja lisame Bootstrapi CDN lingid.

```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body>
    <h1>Hello World</h1>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

**Miks see on oluline?**
- `viewport` meta-tag on vajalik, et leht töötaks hästi mobiilseadmetel
- Bootstrap CSS ja JS on lisatud CDN kaudu, mis lihtsustab arendust
- Bootstrap ikoonide teek on lisatud, mis võimaldab kasutada vektorikoonide kogumit

## 2. Navigatsiooniriba lisamine

Eemaldame "Hello World" teksti ja loome navigatsiooniriba, mis näitab, kuidas toimib Bootstrapi mobiilisõbralik navigatsioon.

```html
<!-- Navigatsiooniriba -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div class="container">
        <a class="navbar-brand" href="#">Bootstrap Demo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#avaleht">Avaleht</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#omadused">Omadused</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#komponendid">Komponendid</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#kontakt">Kontakt</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Miks see on oluline?**
- `navbar-expand-lg` määrab, millisel ekraani suurusel menüü taas avaneb (lg = large)
- `navbar-dark` ja `bg-primary` määravad navigatsiooni värviskeemi
- `sticky-top` hoiab navigatsiooniriba ekraani ülaosas isegi kerides
- `container` keskendab sisu ja loob ääred
- `navbar-toggler` loob "hamburger" menüü nupu väiksematel ekraanidel
- `collapse` klass peidab menüü väikestel ekraanidel ja `data-bs-target` seob selle hamburgeri menüüga
- `ms-auto` nihutab navigatsiooni paremale

## 3. Hero sektsiooni loomine

Loome esimese sektsiooni, mis toimib kui "hero" ala – esimene asi, mida külastajad näevad.

```html
<!-- Hero sektsioon -->
<section id="avaleht" class="bg-light text-center py-5">
    <div class="container">
        <h1 class="display-4 fw-bold">Bootstrapi Võimalused</h1>
        <p class="lead mb-4">Lihtne ja kiire viis luua mobiilsõbralikke veebilehti</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Tutvu lähemalt</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Dokumentatsioon</button>
        </div>
    </div>
</section>
```

**Miks see on oluline?**
- `id="avaleht"` võimaldab navigeerida siia otse menüüst
- `bg-light` lisab halli tausta
- `text-center` joondab teksti keskele
- `py-5` lisab üla- ja alapadding'u (spacing)
- `display-4` ja `lead` on Bootstrapi tüpograafia klassid, mis muudavad teksti atraktiivsemaks
- `d-grid` ja `d-sm-flex` demonstreerivad responsiivset käitumist:
  - Väikestel ekraanidel on nupud üksteise kohal (`d-grid`)
  - Suuremal ekraanil on nupud kõrvuti (`d-sm-flex`)
- Kahe erineva nupu stiili kasutamine näitab Bootstrapi erinevaid nupustiile

## 4. Omaduste sektsiooni loomine

Järgmisena loome sektsiooni, mis tutvustab Bootstrapi põhiomadusi ikoonide ja selgitavate tekstidega.

```html
<!-- Omaduste sektsioon -->
<section id="omadused" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5">Bootstrapi eelised</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="text-center">
                    <i class="bi bi-phone fs-1 text-primary mb-3"></i>
                    <h3>Mobiilisõbralik</h3>
                    <p>Loodud töötama sujuvalt kõikidel seadmetel, suurustest olenemata.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <i class="bi bi-grid-3x3-gap fs-1 text-primary mb-3"></i>
                    <h3>Võrgustiku süsteem</h3>
                    <p>Paindlik 12-veeruline võrgustik, et luua keerukaid ja dünaamilisi paigutusi.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <i class="bi bi-building fs-1 text-primary mb-3"></i>
                    <h3>Valmiskomponendid</h3>
                    <p>Kasuta valmis komponente nagu navigatsiooniriba, nupud, kaardid ja palju muud.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Miks see on oluline?**
- `id="omadused"` loob ankru navigeerimiseks
- `row` ja `col-md-4` näitavad Bootstrapi võrgustikusüsteemi:
  - `col-md-4` tähendab, et keskmise suurusega ekraanil (md) võtab veerg enda alla 4/12 laiusest
  - Väiksematel ekraanidel lähevad veerud automaatselt üksteise alla
- `g-4` määrab veerudevahelise tühimiku (gutter)
- `bi` klassiga ikoonid tulevad Bootstrap Icons teegist, näidates, kuidas kaasata vektorikoonid
- `fs-1` suurendab ikooni (font-size)
- `text-primary` värvib ikoonid põhivärviga, näidates värvimuutujate kasutamist

## 5. Komponentide sektsiooni loomine

Siin sektsioonis demonstreerime erinevaid Bootstrap komponente.

### 5.1 Kaartide lisamine

Kaardid on universaalsed komponendid, mis võimaldavad esitada sisu struktureeritud viisil.

```html
<!-- Komponendid -->
<section id="komponendid" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-5">Populaarsed komponendid</h2>
        
        <!-- Kaardid -->
        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="https://picsum.photos/300/200?random=1" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Kaardid</h5>
                        <p class="card-text">Bootstrapi kaardid on paindlikud konteinerid mitme variandiga.</p>
                        <a href="#" class="btn btn-primary">Uuri lähemalt</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="https://picsum.photos/300/200?random=2" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nupud</h5>
                        <p class="card-text">Bootstrapil on mitmeid nuppude stiile erinevate olekute jaoks.</p>
                        <a href="#" class="btn btn-primary">Uuri lähemalt</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="https://picsum.photos/300/200?random=3" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Vormid</h5>
                        <p class="card-text">Bootstapil on paindlikud vormielemendid ja valideerimise stiilid.</p>
                        <a href="#" class="btn btn-primary">Uuri lähemalt</a>
                    </div>
                </div>
            </div>
        </div>
```

**Miks see on oluline?**
- `card` on üks Bootstrapi põhikomponente, mis aitab sisu organiseerida
- `h-100` tagab, et kõik kaardid on ühekõrgused, isegi kui neis on erinev hulk sisu
- `card-img-top` paigutab pildi kaardi ülaossa
- `card-body` sisaldab kaardi põhisisu
- Taaskord kasutame võrgustikku (`row` ja `col-md-4`), et paigutada kaardid responsiivselt

### 5.2 Hoiatuste lisamine

Hoiatused on hea viis edastada kasutajale olulist teavet erinevate värvidega.

```html
<!-- Lähemalt/Vaata näidet -->
<div class="alert alert-info" role="alert">
    <h4 class="alert-heading">Hoiatused!</h4>
    <p>Bootstrapiga saab luua erinevaid hoiatuse stiile, mis sobivad kasutajale info edastamiseks.</p>
    <hr>
    <p class="mb-0">Info, edu, hoiatus ja vea hoiatused on vaid mõned näited.</p>
</div>
```

**Miks see on oluline?**
- `alert` klass loob hoiatuse komponendi
- `alert-info` määrab hoiatuse värvi (sinine = info)
- `role="alert"` parandab juurdepääsetavust ekraanilugejate jaoks
- `alert-heading` stiilub pealkirja
- `hr` lisab horisontaalse joone

### 5.3 Edenemisribade lisamine

Edenemisribad on visuaalsed näitajad edenemise kuvamiseks.

```html
<!-- Progress -->
<h4 class="mt-4">Edenemisribad</h4>
<div class="progress mb-2" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 25%">25%</div>
</div>
<div class="progress mb-2" role="progressbar" aria-label="Success example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 50%">50%</div>
</div>
<div class="progress mb-2" role="progressbar" aria-label="Warning example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
</div>
```

**Miks see on oluline?**
- `progress` loob edenemisriba konteineri
- `progress-bar` on tegelik edenemisriba
- `style="width: X%"` määrab edenemisriba täidetuse
- Erinevad värviklassid (`bg-success`, `bg-warning`, `bg-danger`) näitavad Bootstrapi värvisüsteemi
- ARIA atribuudid (`aria-label`, `aria-valuenow`, jne) parandavad juurdepääsetavust

## 6. Kontaktivormi lisamine

Vormid on veebilehtede oluline osa ja Bootstrap muudab nende loomise lihtsaks.

```html
<!-- Kontakt sektsioon -->
<section id="kontakt" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5">Võta ühendust</h2>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nimi</label>
                        <input type="text" class="form-control" id="name" placeholder="Sinu nimi">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-post</label>
                        <input type="email" class="form-control" id="email" placeholder="sinu@email.com">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Sõnum</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Sinu sõnum"></textarea>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Saada</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
```

**Miks see on oluline?**
- `justify-content-center` keskendab vormi lehe keskele
- `col-lg-6` teeb vormi laiuseks poole lehe laiusest suuremal ekraanil
- `form-label` ja `form-control` on Bootstrapi vormistiilid, mis teevad vormid visuaalselt meeldivaks
- `mb-3` lisab vaba ruumi vormi elementide vahele
- `d-grid` paigutab nupu täislaiusesse
- `placeholder` atribuudid annavad kasutajale vihje, mida väljale sisestada

## 7. Jaluse loomine

Jalus on tüüpiline komponent, mis sisaldab autoriõigusi, linkimist ja muid olulisi andmeid.

```html
<!-- Jalus -->
<footer class="bg-dark text-white text-center py-4">
    <div class="container">
        <p class="mb-0">© 2023 Bootstrap Demo. Kõik õigused kaitstud.</p>
        <div class="mt-3">
            <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white"><i class="bi bi-github"></i></a>
        </div>
    </div>
</footer>
```

**Miks see on oluline?**
- `bg-dark` ja `text-white` muudavad jaluse tumeda taustaga ja valge tekstiga
- `text-center` keskendab sisu
- `py-4` lisab üla- ja alapadding'u
- `me-3` lisab ikoonide vahele ruumi (margin-end)
- Bootstrap ikoonid (`bi-facebook`, jne) lisavad sotsiaalmeedia ikoonid

## 8. Juurdepääsetavuse parandamine

Linter on tuvastanud, et meie jaluses olevatel linkidel puudub juurdepääsetav tekst. Parandame seda, lisades iga ikoonilingi juurde peidetud teksti:

```html
<!-- Jalus parandatud juurdepääsetavusega -->
<footer class="bg-dark text-white text-center py-4">
    <div class="container">
        <p class="mb-0">© 2023 Bootstrap Demo. Kõik õigused kaitstud.</p>
        <div class="mt-3">
            <a href="#" class="text-white me-3" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
                <span class="visually-hidden">Facebook</span>
            </a>
            <a href="#" class="text-white me-3" aria-label="Twitter">
                <i class="bi bi-twitter"></i>
                <span class="visually-hidden">Twitter</span>
            </a>
            <a href="#" class="text-white me-3" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
                <span class="visually-hidden">Instagram</span>
            </a>
            <a href="#" class="text-white" aria-label="GitHub">
                <i class="bi bi-github"></i>
                <span class="visually-hidden">GitHub</span>
            </a>
        </div>
    </div>
</footer>
```

**Miks see on oluline?**
- `aria-label` atribuut annab ekraanilugejatele teavet lingi kohta
- `visually-hidden` klass peidab teksti visuaalselt, kuid jätab selle ekraanilugejate jaoks kättesaadavaks
- Juurdepääsetavus on oluline, et veebileht oleks kasutatav kõigile kasutajatele, sh puuetega inimestele

## Kokkuvõte

See juhend näitas, kuidas ehitada algusest peale atraktiivne veebileht Bootstrapi abil, kasutades populaarseid komponente ja õiget klasside süntaksit. Bootstrap võimaldab luua professionaalse välimusega veebilehti minimaalse CSS-koodi kirjutamisega, keskendudes kiirusele ja mobiilsõbralikkusele.

Selle demo abil saab algaja näha, kuidas:
1. Luua responsiivne menüü
2. Kasutada võrgustikusüsteemi paigutuseks
3. Lisada valmis komponente
4. Kasutada Bootstrapi utiliite (spacing, text alignment jne)
5. Disainida vorme
6. Luua juurdepääsetav leht

Kõik need teadmised loovad tugeva aluse Bootstrap raamistikuga töötamisel. 