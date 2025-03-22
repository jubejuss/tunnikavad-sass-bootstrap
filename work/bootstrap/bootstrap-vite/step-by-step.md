# Bootstrap Kohandamise Juhend

See juhend kirjeldab, kuidas kohandada Bootstrap raamistiku välimust, kasutades SCSS muutujaid.

## Sisukord

1. [Ettevalmistused](#ettevalmistused)
2. [Fondid ja tüpograafia kohandamine](#fondid-ja-tüpograafia-kohandamine)
3. [Põhi- ja teiseste värvide kohandamine](#põhi-ja-teiseste-värvide-kohandamine)
4. [Nuppude ääreraadiuse kohandamine](#nuppude-ääreraadiuse-kohandamine)
5. [Kaartide ääreraadiuse kohandamine](#kaartide-ääreraadiuse-kohandamine)
6. [Nuppude vaikesuuruste kohandamine](#nuppude-vaikesuuruste-kohandamine)

## Ettevalmistused

1. Loo uus SCSS fail kohandatud muutujate jaoks:

```bash
mkdir -p src/scss/custom
touch src/scss/custom/_variables.scss
```

2. Muuda `src/scss/styles.scss` faili, et lisada kohandatud muutujate fail enne Bootstrap'i importimist:

```scss
// Impordi kohandatud muutujad
@import "custom/variables";

// Impordi kõik Bootstrap'i CSS
@import "bootstrap/scss/bootstrap";
```

## Fondid ja tüpograafia kohandamine

Ava `src/scss/custom/_variables.scss` fail ja lisa järgmised kohandused:

```scss
// Fondi perekondade kohandamine
$font-family-sans-serif: 'Roboto', system-ui, -apple-system, "Segoe UI", sans-serif;
$font-family-monospace: 'Roboto Mono', SFMono-Regular, Menlo, monospace;

// Fondi suuruste kohandamine
$font-size-base: 1rem; // Vaikimisi 1rem (tavaliselt 16px)
$font-size-sm: $font-size-base * 0.875;
$font-size-lg: $font-size-base * 1.25;

// Pealkirjade fondi suuruste kohandamine
$h1-font-size: $font-size-base * 2.5;
$h2-font-size: $font-size-base * 2;
$h3-font-size: $font-size-base * 1.75;
$h4-font-size: $font-size-base * 1.5;
$h5-font-size: $font-size-base * 1.25;
$h6-font-size: $font-size-base;

// Fondi kaalude kohandamine
$font-weight-lighter: 200;
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 700;
$font-weight-bolder: 900;

// Reavahe kohandamine
$line-height-base: 1.6;
$line-height-sm: 1.4;
$line-height-lg: 1.8;
```

### Google'i fontide kasutamine

Kui soovid kasutada Google fonte, lisa järgmine kood `src/index.html` faili `<head>` sektsiooni:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&family=Roboto+Mono&display=swap" rel="stylesheet">
```

## Põhi- ja teiseste värvide kohandamine

Ava `src/scss/custom/_variables.scss` fail ja lisa järgmised kohandused:

```scss
// Põhivärvide kohandamine
$primary: #0d6efd;    // Kohandatud peamine värv
$secondary: #6c757d;  // Kohandatud teisene värv
$success: #198754;
$info: #0dcaf0;
$warning: #ffc107;
$danger: #dc3545;
$light: #f8f9fa;
$dark: #212529;

// Värvide kaardi loomine
$theme-colors: (
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark
);
```

## Nuppude ääreraadiuse kohandamine

Ava `src/scss/custom/_variables.scss` fail ja lisa järgmised kohandused:

```scss
// Üldise ääreraadiuse kohandamine (mõjutab ka nuppe)
$border-radius: 0.25rem;
$border-radius-sm: 0.2rem;
$border-radius-lg: 0.5rem;
$border-radius-pill: 50rem;

// Kui soovid spetsiifiliselt ainult nuppude ääreraadius kohandada
$btn-border-radius: 0.25rem;
$btn-border-radius-sm: 0.2rem;
$btn-border-radius-lg: 0.5rem;
```

## Kaartide ääreraadiuse kohandamine

Ava `src/scss/custom/_variables.scss` fail ja lisa järgmised kohandused:

```scss
// Kaartide ääreraadiuse kohandamine
$card-border-radius: 0.5rem;
```

## Nuppude vaikesuuruste kohandamine

Ava `src/scss/custom/_variables.scss` fail ja lisa järgmised kohandused:

```scss
// Nuppude polsterduse (padding) kohandamine
$btn-padding-y: 0.5rem;
$btn-padding-x: 1rem;
$btn-font-size: $font-size-base;
$btn-line-height: $line-height-base;

// Väikeste nuppude polsterduse kohandamine
$btn-padding-y-sm: 0.25rem;
$btn-padding-x-sm: 0.5rem;
$btn-font-size-sm: $font-size-sm;

// Suurte nuppude polsterduse kohandamine
$btn-padding-y-lg: 0.75rem;
$btn-padding-x-lg: 1.5rem;
$btn-font-size-lg: $font-size-lg;
```

## Kohanduste rakendamine

Pärast muudatuste tegemist käivita arendusserver, et näha muudatusi:

```bash
npm run dev
```

## Kõik kohandused ühes failis

Allpool on näidatud kogu kohanduste komplekt, mille saad kopeerida faili `src/scss/custom/_variables.scss`:

```scss
// Fondid ja tüpograafia
$font-family-sans-serif: 'Roboto', system-ui, -apple-system, "Segoe UI", sans-serif;
$font-family-monospace: 'Roboto Mono', SFMono-Regular, Menlo, monospace;

$font-size-base: 1rem;
$font-size-sm: $font-size-base * 0.875;
$font-size-lg: $font-size-base * 1.25;

$h1-font-size: $font-size-base * 2.5;
$h2-font-size: $font-size-base * 2;
$h3-font-size: $font-size-base * 1.75;
$h4-font-size: $font-size-base * 1.5;
$h5-font-size: $font-size-base * 1.25;
$h6-font-size: $font-size-base;

$font-weight-lighter: 200;
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 700;
$font-weight-bolder: 900;

$line-height-base: 1.6;
$line-height-sm: 1.4;
$line-height-lg: 1.8;

// Põhi- ja teisesed värvid
$primary: #0d6efd;
$secondary: #6c757d;
$success: #198754;
$info: #0dcaf0;
$warning: #ffc107;
$danger: #dc3545;
$light: #f8f9fa;
$dark: #212529;

$theme-colors: (
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark
);

// Ääreraadiused
$border-radius: 0.25rem;
$border-radius-sm: 0.2rem;
$border-radius-lg: 0.5rem;
$border-radius-pill: 50rem;

// Nuppude ääreraadiused
$btn-border-radius: 0.25rem;
$btn-border-radius-sm: 0.2rem;
$btn-border-radius-lg: 0.5rem;

// Kaartide ääreraadiused
$card-border-radius: 0.5rem;

// Nuppude suurused
$btn-padding-y: 0.5rem;
$btn-padding-x: 1rem;
$btn-font-size: $font-size-base;
$btn-line-height: $line-height-base;

$btn-padding-y-sm: 0.25rem;
$btn-padding-x-sm: 0.5rem;
$btn-font-size-sm: $font-size-sm;

$btn-padding-y-lg: 0.75rem;
$btn-padding-x-lg: 1.5rem;
$btn-font-size-lg: $font-size-lg;
``` 