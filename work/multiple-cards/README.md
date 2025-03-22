# SCSS Näidisrakendus

See on lihtne näide SCSS kasutamisest, mis demonstreerib põhilisi SCSS funktsionaalsusi ja BEM nimetamise konventsiooni.

## Kasutatud SCSS funktsioonid

1. **Google Fonts** - Projektis on kasutatud Google fonte
2. **Nesting** - CSS selektorite pesastamine BEM stiilis (nt `.card`, `.card__title`, `.card--featured`)
3. **Partials** - SCSS-i jagamine eraldi failidesse (_variables.scss, _mixins.scss, _base.scss, _colors.scss)
4. **Mixins** - Taaskasutatavad CSS koodiplokid (nt `@mixin flex-center`, `@mixin button-style`)
5. **@use** - Modernne viis SCSS moodulite importimiseks nimeruumidega
6. **Funktsioonid** - SCSS funktsioonid värvide ja väärtuste dünaamiliseks loomiseks
7. **Sass moodulid** - Sisseehitatud moodulid nagu `sass:math` ja `sass:color`

## BEM nimetamise konventsioon

Projektis on kasutatud BEM (Block Element Modifier) nimetamise konventsiooni:
- **Block**: Iseseisev komponent (nt `.card`, `.button`)
- **Element**: Bloki osa (nt `.card__title`, `.footer__text`)
- **Modifier**: Bloki või elemendi variant (nt `.card--featured`, `.button--primary`)

## Muutujate kasutamine

Projektis on defineeritud mitmeid muutujaid, mida kasutatakse läbivalt kogu koodis:

1. **Värvid**:
   ```scss
   $primary-color: #3498db;    // Põhivärv (pealkirjad, nupud)
   $secondary-color: #2ecc71;  // Teine värv (sekundaarsed nupud)
   $text-color: #333;          // Teksti värv
   $background-color: #f8f9fa; // Tausta värv
   ```

2. **Fondid**:
   ```scss
   $font-primary: 'Roboto', sans-serif;      // Põhifont (body)
   $font-secondary: 'Open Sans', sans-serif; // Teine font (pealkirjad)
   ```

3. **Vahed**:
   ```scss
   $spacing: 1rem; // Põhiline vahe, mida kasutatakse läbivalt
   $spacing-small: calc($spacing * 0.5); // Väiksem vahe
   $spacing-large: calc($spacing * 2); // Suurem vahe
   ```

Muutujate kasutamine võimaldab:
- Muuta disaini kiiresti ja järjepidevalt
- Hoida stiilid ühtlased kogu rakenduses
- Vältida korduvat koodi

## SCSS Funktsioonid

Projektis on kasutatud SCSS funktsioone värvide ja väärtuste dünaamiliseks loomiseks:

```scss
// Funktsioon värvi varjundi loomiseks
@function create-shade($color, $percentage) {
  @return darken($color, $percentage);
}

// Funktsioon värvi helenduse loomiseks
@function create-tint($color, $percentage) {
  @return lighten($color, $percentage);
}

// Funktsioon kontrastse teksti värvi valimiseks
@function text-on-color($color) {
  $brightness: math.div(red($color) * 299 + green($color) * 587 + blue($color) * 114, 1000);
  @if $brightness > 128 {
    @return #333; // Tume tekst heledal taustal
  } @else {
    @return #fff; // Hele tekst tumedal taustal
  }
}
```

Funktsioonide kasutamine võimaldab:
- Luua dünaamilisi väärtusi vastavalt sisendparameetritele
- Automatiseerida korduvaid arvutusi
- Luua keerukamaid värvipalette

## Sass moodulid

Projektis on kasutatud Sass-i sisseehitatud mooduleid:

```scss
@use "sass:math"; // Matemaatiliste operatsioonide jaoks
@use "sass:color"; // Värvioperatsioonide jaoks
```

Sass moodulid pakuvad funktsioone ja võimalusi:
- `math.div()` - Jagamistehete tegemiseks (uuem alternatiiv / operaatorile)
- `color` moodul - Värvimanipulatsioonide jaoks

## Mixinite kasutamine

Projektis on defineeritud kaks mixinit:

1. **flex-center** - Kasutatakse `.card__footer` elemendis:
   ```scss
   .card {
     &__footer {
       @include m.flex-center;
       // ...
     }
   }
   ```

2. **button-style** - Kasutatakse `.button--primary` ja `.button--secondary` elementides:
   ```scss
   .button {
     &--primary {
       @include m.button-style(v.$primary-color);
     }
     
     &--secondary {
       @include m.button-style(v.$secondary-color);
     }
   }
   ```

## @use vs @import

Projektis on kasutatud `@use` direktiivi, mis on modernne viis SCSS moodulite importimiseks:

```scss
@use 'partials/variables' as v;
@use 'partials/mixins' as m;
@use 'partials/colors' as c;
```

**@use eelised @import ees:**
- Imporditud failid on nimeruumides (namespaces), mis väldib nimede konflikte
- Iga fail imporditakse ainult üks kord, isegi kui seda kasutatakse mitmes kohas
- Selgem kood, kuna on näha, millisest moodulist muutuja või mixin pärineb

## Projekti struktuur

```
work/
├── index.html
├── css/
│   └── style.css
├── scss/
│   ├── style.scss
│   └── partials/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _base.scss
│       └── _colors.scss
└── README.md
```

## Kuidas käivitada

1. Ava `index.html` fail brauseris
2. SCSS-i kompileerimiseks CSS-iks kasuta käsku:
   ```
   sass scss/style.scss css/style.css
   ```
   või pidevaks kompileerimiseks
   ```
   sass --watch scss/style.scss css/style.css
   ```

## SCSS näited

### Muutujad (_variables.scss)
```scss
$primary-color: c.$primary-color;
$spacing: 1rem;
$spacing-small: calc($spacing * 0.5);
```

### Funktsioonid (_colors.scss)
```scss
@function create-tint($color, $percentage) {
  @return lighten($color, $percentage);
}

@function text-on-color($color) {
  $brightness: math.div(red($color) * 299 + green($color) * 587 + blue($color) * 114, 1000);
  @if $brightness > 128 {
    @return #333;
  } @else {
    @return #fff;
  }
}
```

### Mixinid (_mixins.scss)
```scss
@mixin button-style($bg-color) {
  background-color: $bg-color;
  color: white;
  // rohkem stiile...
}
```

### Nesting BEM stiilis (style.scss)
```scss
.card {
  background-color: white;
  
  &__title {
    color: v.$primary-color;
  }
  
  &--featured {
    border-left: 4px solid v.$primary-color;
  }
}
```

## Läbitud teemad seminarist

Selles näidisrakenduses on rakendatud järgmised SCSS teemad, mis käsitleti 4. seminaris:

### 1. CSS Preprotsessorid
- SCSS kui CSS preprotsessor, mis laiendab CSS-i funktsionaalsust
- Koodi kompileerimine SCSS-ist CSS-iks

### 2. SCSS Põhiomadused
- CSS-iga ühilduv süntaks
- Muutujate defineerimine `$` sümboliga (nt `$primary-color`, `$spacing`)
- Pesastatud reeglid (nesting) koodi struktuuri paremaks organiseerimiseks
- Matemaatilised operatsioonid (nt `calc($spacing * 0.5)`)
- Värvidega töötamise funktsioonid (nt `darken()`, `lighten()`)

### 3. Partials
- Failinimed algavad alakriipsuga (nt `_variables.scss`, `_mixins.scss`)
- Koodi jagamine loogilisteks mooduliteks
- Importimine `@use` direktiiviga nimeruumidega
- Koodi taaskasutatavuse ja hooldatavuse parandamine

### 4. Mixinid
- Defineerimine `@mixin` direktiiviga
- Kasutamine `@include` direktiiviga
- Parameetrite kasutamine (nt `@mixin button-style($bg-color)`)
- Koodi kordumise vähendamine
- Koodi parema hallatavuse tagamine

### 5. SCSS Funktsioonid
- Kohandatud funktsioonide loomine `@function` direktiiviga
- Sisseehitatud funktsioonide kasutamine (nt `darken()`, `lighten()`)
- Tingimuslausete kasutamine funktsioonides (`@if`, `@else`)
- Dünaamiliste väärtuste loomine

### 6. Sass Moodulid
- Sisseehitatud moodulite kasutamine (`sass:math`, `sass:color`)
- Moodulite importimine `@use` direktiiviga
- Moodulite funktsioonide kasutamine (nt `math.div()`)

### 7. BEM Metoodika
- Block-Element-Modifier nimetamise konventsioon
- Selektorite struktureerimine SCSS-is BEM metoodika järgi
- Ampersandi (`&`) kasutamine pesastatud reeglites BEM-i implementeerimiseks 