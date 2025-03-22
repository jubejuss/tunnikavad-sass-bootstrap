# Lihtne veebileht
Lihtne, semantilise html-iga veebileht, mille keskel on kaart.  
Kaart koosneb päisest, kehast ja jalusest. Võib kasutada header ja footer elementi, kuid vajadus tekiks alles siis, kui sisu rohkem.

## Ülesanded
1. Installeeri sass. See võib olla keerukas sõltuvalt asjadest. Node puhul muidu `npm install -g sass` kui ei aita siis `nps sass`  
2. Lisa sass projekti ja demonstreeri kompileerimist ja "vaatamist"  
    - Lingi style.css file HTML-i
    - Loo sassi ja css folderid, 
    – Lisa sassi file ja lisa sellesse esimene sassi funktsioon:  
    ```scss
    // Dokumendi kõige algusse
    @use "sass:color";

    @function text-color-for-background($background-color) {
        // Eraldame värvi heleduse (lightness) väärtuse HSL värviruumis
        // color.channel funktsioon võtab värvi, kanali nime ja värviruumi parameetrid
        // $space: hsl täpsustab, et töötame HSL värviruumis (hue, saturation, lightness)
        $lightness: color.channel($background-color, "lightness", $space: hsl);
        // Kui heledus on väiksem kui nöidatud %, siis on taust tume
        // ja tagastame valge tekstivärvi
        @if ($lightness < 50%) {
            @return white;
            } @else {
                @return black;
            }
        }
    // Määrame lehe tausta värvi muutuja, mille heledust funktsioon jälgib
    $background-color: hsl(0, 0%, 20%);
    body {
        background-color: $background-color;
        color: text-color-for-background($background-color); 
    }
    ```
    - Kompileeri (loo folderid) – `sass input.scss output.css` Kasuta foldreid ka
    - Selgita, mis on xxx.css.map
    - Kustuta css folderi sisu (demonstreerimise jaoks)
    - Pane jälgima - `sass --watch input.scss output.css`
    - Muuda näidises oleva `$background-color` värvimuutuja heledust

3. Lisame kirjadega seonduva
    - Võtame kasutusele `Partialid`
        Partialid on SASS-i failid, mille nimed algavad alakriipsuga (nt `_variables.scss`). Need on mõeldud koodijuppide organiseerimiseks ja taaskasutamiseks. Partialid ei kompileeru eraldi CSS failideks, vaid neid imporditakse põhifaili sisse `@use` või vanemas versioonis `@import` direktiiviga. Partialid võimaldavad jagada SASS koodi loogilisteks osadeks ja hoida projekti struktuuri korras.
    - Loo `scss` folderisse `partials`folder ja sellesse faile `type.scss`. Sellesse läheb kogu rakenduse kirjadega seotud temaatika. 
    - Impordi kaks font – pealkirjad ja sisu. Vaata, et valitud fondid moodustaks hea kontrasti.
    - Loo kirjade kasutuseks mõned muutujad. Nt:
        ```
        $heading-font: "Montserrat", sans-serif;
        $body-font: "Roboto Slab", serif;   

        $font-size-sm: 0.875rem;    // 14px
        $font-size-base: 1rem;      // 16px
        $font-size-md: 1.125rem;    // 18px
        $font-size-lg: 1.25rem;     // 20px
        $font-size-xl: 1.5rem;      // 24px
        $font-size-2xl: 1.875rem;   // 30px

        $line-height-tight: 1.25;
        $line-height-normal: 1.5;
        $line-height-loose: 1.75;

        $font-weight-normal: 400;
        $font-weight-medium: 500;
        $font-weight-bold: 700;

    - Loo stiilide mixinid, mis sisaldavad põhilisi muutujaid.
        Mixinid on SASS-i funktsioonid, mis võimaldavad defineerida korduvkasutatavaid CSS koodi blokke.
        nt:
        ```scss
        @mixin heading-font {
            font-family: $heading-font;
            font-weight: $font-weight-bold;
            line-height: $line-height-tight;
        }

        @mixin body-font {
            font-family: $body-font;
            font-weight: $font-weight-normal;
            line-height: $line-height-normal;
        }
        ```
    - Impordi fondi partial peamisse stiilifaili (tee näidiseks index.html-i h1 -h4 pealkirjad)
    - Loo tekstisriilid, kasutades mixineid ja lisamuutujaid. Nt:
        ```SCSS
        body {
            //...
            @include t.body-font;
        }
        h1, h2, h3, h4, h5, h6 {
            @include t.heading-font;
        }

        h1 {
            font-size: t.$font-size-2xl;
        }

        h2 {
            font-size: t.$font-size-xl;
        }
        ```

4. Loome kaardi paigutuse
    - Loome kõigepealt `_reset.scss` faili, millega nullime brauseri vaikimisi stiilisätted. Võite google abil otsida mõne olemasoleva ja kopperida selle sisu.
    - liiguta kaart ekraani keskele (nii vertikaalselt kui horisontaalselt). Küsimus auditooriumile – kuidas? (tegime seminaris)
5. Loome värvisüsteemi
    - Loome partiali ja impordime põhifaili
    - Loome värvisüsteemi, mis koosneb ühest primaarsest, sekundaarsest värvist ja neutraalsest värvist, mis omavahel harmoneeruvad (nt Adobe colors complementary colors). 
    - Loome pooltoonide matemaatika (vt näidist: /seminarid/04-seminar/scss-functions/index.html)
    Alljärgnev funktsioon kasutab SCSS-i funktsiooni `darken()`, ette kasutamiseks antakse värv ja tumendamisprotsent:
    ```scss
    @function create-shade($color, $percentage) {
        @return darken($color, $percentage);
        }

    @function create-tint($color, $percentage) {
        @return lighten($color, $percentage);
        }
    ```
    Neid võiks ka ainult `darken()` ja `lighten()` funktsioonidena kasutada, kuid nii tekib semantiline selgus - create-shade() on selgem kui darken()
      ja võimalus tulevikus funktsionaalsust muuta ilma koodi mitmest kohast muutmata  
    Ja seejärel kasutades loodud funktsioone, loome lehele taustavärvi, kaardi värvi, kaardi päise, sisu ja jaluse värvi ja tekstide värvid. Loome tekstivärvi nii heledale kui tumedale taustale. Väldi värve valides 100% valget ja musta.
    - Loome vajalikud värvimuutujad – `$surface`, `$surface-01`, `$surface-02`, `$text-on-dark`, `$text-on-light`, `$btn-primary`


Ülesanne – disaini eeskuju järgi kaart, lisa nuppudele muutujaid kasutades hover, active, focus. Muuda jaluse tekst enne defineeritud muutujaid kasutades väiksemaks. Loo 3 erinevat raadiuse muutujat ja kasuta vähemalt kahte oma disianis – kaardi nurgad, nupu nurgad. Loo kahed varjud, kasuta neid default ja hoveri puhul

Loo variables partial, kus on suurused (padding, gap, radius)