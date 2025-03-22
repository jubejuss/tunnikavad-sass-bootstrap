# SASS Hoiatused Bootstrap Vite Projektis

## Tuvastatud Probleemid

Bootstrap Vite projekti käivitamisel ilmub mitu hoiatust, mis on seotud SASS-i funktsioonidega, mis eemaldatakse Dart Sass 3.0.0 versioonis. Peamised probleemid on:

1. **Aegunud @import Reeglid**: 
   ```
   Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
   ```

2. **Aegunud Globaalsed Sisseehitatud Funktsioonid**:
   ```
   Deprecation Warning [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
   Use color.mix instead.
   ```

3. **Aegunud Värvi Funktsioonid**:
   ```
   Deprecation Warning [color-functions]: red() is deprecated. Suggestion:
   color.channel($color, "red", $space: rgb)
   ```

4. **Segatud Deklaratsioonid Pärast Pesastatud Reegleid**:
   ```
   Deprecation Warning [mixed-decls]: Sass's behavior for declarations that appear after nested rules will be changing to match the behavior specified by CSS in an upcoming version.
   ```

## Kuidas Neid Probleeme Lahendada

### 1. Asenda @import @use ja @forward käskudega

Peamine probleem on selles, et Sass-i `@import` reegel on aegunud ja selle asemel soovitatakse kasutada uuemaid `@use` ja `@forward` reegleid.

Muuda oma `src/scss/styles.scss` failis:

```scss
// Algne kood aegunud @import käsuga
@import "custom/variables";
@import "bootstrap/scss/bootstrap";

// Uus kood kasutades @use käsku
@use "custom/variables" as vars;
@use "bootstrap/scss/bootstrap" as bootstrap;
```

**Oluline märkus**: Kui kasutad `@use` koos nimerumiga (nagu `vars` või `bootstrap`), pead viitama muutujatele, mixinidele ja funktsioonidele koos nimerumi eesliitega. Näiteks, kui sul on muutuja `$primary-color` oma muutujate failis, pead nüüd sellele ligi pääsema kui `vars.$primary-color`.

### 1.1. Probleem: Kohandatud Muutujad Ei Toimi Pärast @use Kasutamist

Kui vahetad `@import` `@use` vastu, siis kohandatud muutujad (custom variables) ei mõjuta enam Bootstrap'i, kuna:

1. `@import` puhul olid muutujad globaalselt saadaval
2. `@use` puhul on muutujad nimeruumistatud ega ole automaatselt teistele moodulitele nähtavad

**Lahendus 1: Muutujate Edasiandmine Bootstrap'ile**

Muuda `src/scss/styles.scss` faili järgmiselt:

```scss
// Kasuta custom/variables.scss enne Bootstrap'i
@use "custom/variables" as vars;
// Kasuta Bootstrap'i koos muutujatega
@use "bootstrap/scss/bootstrap" with (
  $primary: vars.$primary,
  $secondary: vars.$secondary,
  $font-size-base: vars.$font-size-base,
  // Lisa siia teised muutujad, mida soovid üle kirjutada
);
```

**Oluline märkus**: Iga kord, kui soovid mõnda Bootstrap'i muutujat oma _variables.scss failist üle kirjutada, pead lisama selle `with` parameetrisse. Näiteks kui muudad `$font-size-base` või mistahes teist Bootstrap'i muutujat, peab see olema loendis välja toodud.

**Lahendus 2: Paranda custom/_variables.scss Faili**

Muuda `src/scss/custom/_variables.scss` faili kasutades `@forward` direktiivi:

```scss
// Impordi kõigepealt Bootstrap-i muutujad
@use "bootstrap/scss/functions" as functions;
@use "bootstrap/scss/variables" as bootstrap-vars;

// Kohandatud muutujad
$primary: #0074d9;
$secondary: #7fdbff;
$font-size-base: 1.1rem; // Kohandatud fondi suurus
// jne

// Edasta muutujad
@forward "bootstrap/scss/variables" with (
  $primary: $primary,
  $secondary: $secondary,
  $font-size-base: $font-size-base,
  // jne
);
```

**Lahendus 3: Lihtsaim Lahendus - Loo Uus _bootstrap.scss Fail**

Loo uus fail `src/scss/custom/_bootstrap.scss`:

```scss
// Impordi Bootstrap muutujad ja funktsioonid
@forward "bootstrap/scss/functions";

// Lisa oma kohandatud muutujad
@forward "custom/variables";

// Impordi ülejäänud Bootstrap
@forward "bootstrap/scss/variables";
@forward "bootstrap/scss/maps";
@forward "bootstrap/scss/mixins";
@forward "bootstrap/scss/root";
// jne - kõik teised Bootstrap'i osad
```

Ja siis `styles.scss` failis:

```scss
@use "custom/bootstrap" as bootstrap;
```

### 2. Uuenda Bootstrap Versiooni

Enamus nendest hoiatusest tulevad Bootstrap'i enda SCSS failidest. Sinu kasutatav Bootstrap'i versioon pole veel uuendatud kasutama uuemat Sass'i moodulite süsteemi.

Võimalused:
- Oota, kuni Bootstrap uuendab oma koodi (parim pikaajaline lahendus)
- Kasuta Sass-i migrator tööriista, et automaatselt konverteerida Bootstrap'i SCSS failid
- Ignoreeri hoiatusi, kui kood töötab korrektselt

### 3. Sass Migrator Tööriista Kasutamine

Sass pakub migrator tööriista, mis aitab üleminekul vanalt süntaksilt uuele:

```bash
npm install -g sass-migrator
sass-migrator module --migrate-deps <sinu-scss-failide-tee>
```

### 4. Ajutine Lahendus: Vaigista Hoiatused

Kui vajad kiiret lahendust ja kood töötab hoolimata hoiatusest, saad vaigistada aegumise hoiatused, lisades Vite konfiguratsioonile järgmise:

```javascript
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true // Vaigistab sõltuvustest tulevad hoiatused
      }
    }
  }
}
```

**Märkus**: `quietDeps` valik vaigistab ainult sõltuvustest (nagu Bootstrap'i sisemistest SCSS failidest) tulevad hoiatused, kuid mitte sinu enda SCSS failidest tulevad hoiatused. Seepärast on oluline uuendada oma SCSS faile kasutama kaasaegset süntaksit, nagu näidatud lahenduses #1.

### 5. Paranda Segatud Deklaratsioonide Hoiatused

Segatud deklaratsioonide hoiatuste korral on õige lahendus SCSS ümber struktureerida vastavalt uutele reeglitele:

- Liiguta deklaratsioonid pesastatud reeglite ette
- Või kapseldada deklaratsioonid, mis ilmuvad pärast pesastatud reegleid, `& {}` plokki

Näide:
```scss
// Enne (tekitab hoiatuse)
.selector {
  @media (min-width: 768px) {
    font-size: 16px;
  }
  color: red; // See deklaratsioon ilmub pärast pesastatud reeglit
}

// Pärast (korrektne)
.selector {
  color: red; // Deklaratsioon on liigutatud pesastatud reegli ette
  @media (min-width: 768px) {
    font-size: 16px;
  }
}

// Või alternatiivselt
.selector {
  @media (min-width: 768px) {
    font-size: 16px;
  }
  & {
    color: red; // Kapseldatud & {} plokki
  }
}
```

## Kokkuvõte

Need aegumise hoiatused ei takista praegu sinu koodi töötamist, kuid need näitavad, et Sass-i tulevased versioonid ei ühildu enam nende mustritega. Soovitatav on uuendada oma kood kasutama uuemat süntaksit, kui võimalik.

Rakendatud lahendustega:
1. Hoiatused loodud SCSS failidest peaksid olema kadunud
2. Hoiatused Bootstrap'i SCSS failidest peaksid olema vaigistatud `quietDeps` valikuga

## Tehtud Muudatused

Selle projekti käigus tegime järgmised konkreetsed muudatused, et lahendada SASS-i aegumise hoiatused:

1. **Muutsime `vite.config.js` faili:**
   - Lisasime `css.preprocessorOptions.scss.quietDeps` seadistuse, et vaigistada sõltuvuste hoiatused
   - Uuendasime Node.js impordis kasutatavat süntaksit, muutes `import { resolve } from 'path'` kujule `import { resolve } from 'node:path'`

2. **Muutsime `src/scss/styles.scss` faili:**
   - Asendasime aegunud `@import` direktiivid kaasaegsete `@use` direktiividega
   - Lisasime nimerumid (namespace) importidele (`vars` ja `bootstrap`)
   - Lisasime `with` parameetri, et edastada kohandatud muutujad Bootstrap'ile ($primary, $secondary, $font-size-base jne)
   - Uuendasime kommentaare, et need peegeldaksid uut süntaksit

3. **Koostasime selle dokumentatsiooni faili:**
   - Kirjeldasime erinevad hoiatused ja nende põhjused
   - Pakkusime mitu erinevat lahendust hoiatuste kõrvaldamiseks
   - Andsime näiteid koodi uuendamiseks
   - Selgitasime, kuidas iga muudatus aitab probleemi lahendada

Nende muudatustega oleme:
- Kõrvaldanud hoiatused, mis tulid loodud SCSS failidest
- Vaigistanud hoiatused, mis tulid Bootstrap'i SCSS failidest
- Valmistanud koodi ette tulevasteks Sass versioonideks
- Rakendanud kaasaegsemaid ja soovitatud SASS praktikaid

Täieliku juhendi saamiseks üleminekuks @import-ilt @use-le, vaata ametlikku Sass-i dokumentatsiooni: https://sass-lang.com/documentation/at-rules/import/ 