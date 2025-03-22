# 05-seminar: Bootstrapi iseseisva õppe kokkuvõtted ja kohandamine, sissejuhatus TailwindCSS-i

## Sisukord
- [Seminari eesmärgid](#seminari-eesmärgid)
- [Õpiväljundid](#õpiväljundid)
- [Tehnilised vahendid](#tehnilised-vahendid)
- [Esimene sessioon](#esimene-sessioon)
  - [1. Kodutööde tulemuste jagamine](#1-kodutööde-tulemuste-jagamine)
  - [2. Ühine refleksioon ja probleemide lahendamine](#2-ühine-refleksioon-ja-probleemide-lahendamine)
  - [3. Vite.js tutvustus ja seadistamine](#3-vitejs-tutvustus-ja-seadistamine)
  - [4. Bootstrapi paigaldamine npm-i abil](#4-bootstrapi-paigaldamine-npm-i-abil)
- [Teine sessioon](#teine-sessioon)
  - [1. Bootstrapi kohandamine arenduskeskkonnas](#1-bootstrapi-kohandamine-arenduskeskkonnas)
  - [2. Sissejuhatus Tailwind CSS-i](#2-sissejuhatus-tailwind-css-i)
  - [3. Kodutöö tutvustus ja seminari kokkuvõte](#3-kodutöö-tutvustus-ja-seminari-kokkuvõte)
- [Kodutöö: Tailwind CSS-i uurimine ja rakendamine](#kodutöö-tailwind-css-i-uurimine-ja-rakendamine)
  - [Uurimisküsimused](#uurimisküsimused)
  - [Praktiline ülesanne: Tailwind CSS-i rakendamine](#praktiline-ülesanne-tailwind-css-i-rakendamine)
  - [NB! Ülesande lahendamise oluline osa on koostöö](#nb-ülesande-lahendamise-oluline-osa-on-koostöö)
  - [Soovitused alustamiseks](#soovitused-alustamiseks)
  - [Ennastjuhtiva õppimise komponendid](#ennastjuhtiva-õppimise-komponendid)
  - [Koostöö ja tagasiside](#koostöö-ja-tagasiside)
  - [Hindamiskriteeriumid](#hindamiskriteeriumid)
- [Ennastjuhtiva õppija kujundamise strateegiad seminaris](#ennastjuhtiva-õppija-kujundamise-strateegiad-seminaris)
  - [1. Kogemuspõhine õppimine](#1-kogemuspõhine-õppimine)
  - [2. Probleemipõhine õppimine](#2-probleemipõhine-õppimine)
  - [3. Ressursside otsimine ja hindamine](#3-ressursside-otsimine-ja-hindamine)
  - [4. Metakognitsioon](#4-metakognitsioon)
  - [5. Koostöö ja vastastikune õpetamine](#5-koostöö-ja-vastastikune-õpetamine)
- [Lisamaterjalid](#lisamaterjalid)

## Seminari eesmärgid
- Iseseisva töö (Bootstrap teegi abil digirakenduste disaini loomine) tulemuste tutvustamine
- Kodutöö refleksioon, kogemuste jagamisel uute teadmiste saamine ja õpitu kinnistamine
- Node.js ja Vite.js kasutamise õppimine arenduskeskkonna seadistamisel
- Bootstrapi paigaldamine ja kohandamine arenduskeskkonnas
- Sissejuhatus Tailwind CSS-i ja selle põhimõtetesse
- Ennastjuhtiva õppimise oskuste arendamine läbi iseseisva töö, kogemuste jagamise ja iseseisva uurimise

## Õpiväljundid
Pärast seminari läbimist õppija:
- Seadistab veebirakenduse arenduskeskkonda, kasutades Node.js ja Vite.js-i
- Paigaldab ja konfigureerib Bootstrapi npm-i abil
- Kohandab Bootstrapi SCSS-i välimust vastavalt projekti vajadustele
- Rakendab Bootstrapi komponente ja utiliite veebilehe loomisel
- Tutvub Tailwind CSS-i põhimõtete ja seadistamisega
- Dokumenteerib oma arendusprotsessi ja jagab teadmisi teistega
- Rakendab ennastjuhtiva õppimise strateegiaid tehniliste probleemide lahendamisel
- Analüüsib oma õppimisprotsessi ja teeb järeldusi selle tõhustamiseks

## Tehnilised vahendid
- Visual Studio Code 
- Git ja Github
- Terminal
- Discord (kiirsuhtlus)
- Node.js ja npm
- Vite.js
- Bootstrap
- Tailwind CSS (tutvumiseks)

## Esimene sessioon
(1,5 tundi)

### 1. Kodutööde tulemuste jagamine
(45 min)
- Õppijad jagatakse 4-5 liikmelistesse rühmadesse
- Iga rühm valib 1-2 lahendust, mida teistega jagada. Valikus on klasside kasutamine, layout, värvid, suurused, javascript.
- Rühmad esitlevad valitud lahendusi, keskendudes:
  - Milliseid Bootstrapi komponente kasutati
  - Kuidas lahendati seadmetundliku disaini väljakutsed
  - Milliseid SCSS võtteid rakendati
  - Millised olid suurimad õppetunnid ja kuidas õppemeetod aitas õppimisele kaasa

### 2. Ühine refleksioon ja probleemide lahendamine
(15 min)
- Õppejõud juhib arutelu levinumate probleemide üle
- Õppijad jagavad oma lahendusi (osa tagasisidest Github Discussions'ist)
- Koos arutatakse, kuidas protsessi saaks edaspidi tõhustada

### 3. Vite.js tutvustus ja seadistamine
(15 min)
- Mis on Vite.js ja miks seda kasutada (eelmises seminaris on tutvutud Node.js-iga)
- Vite.js projekti loomine
- Projekti struktuuri tutvustus
- Kuidas käivitada arendusserver

### 4. Bootstrapi paigaldamine npm-i abil
(15 min)
- Bootstrapi paigaldamine
- Bootstrapi importimine JavaScript failis
- Bootstrapi SCSS failide importimine
- Vite.js konfiguratsioon Bootstrapi jaoks

## Teine sessioon
(1,5 tundi)

### 1. Bootstrapi kohandamine arenduskeskkonnas 
(60 min)  
- Bootstrapi muutujate ülekirjutamine
- Kohandatud komponentide loomine
- Bootstrapi utiliitide laiendamine
- Eelmises kodutöös tehtud lahenduse kohandamine arenduskeskkonnas
- Praktilised näited ja harjutused

### 2. Sissejuhatus Tailwind CSS-i
(20 min)  
- Tailwind CSS-i põhimõtted ja filosoofia
- Võrdlus Bootstrapiga
- Tailwind CSS-i kiirseadistus Vite.js projektis
- Lihtsa näitekomponendi loomine

### 3. Kodutöö tutvustus ja seminari kokkuvõte
(10 min)  
- Õppejõud tutvustab kodutöö ülesandeid
- Seminari peamiste õppetundide kokkuvõte
- Tagasiside seminari kohta

## Kodutöö: Tailwind CSS-i uurimine ja rakendamine

Järgmiseks seminariks uurige väikestes gruppides (2-3 inimest) Tailwind CSS-i. See on iseseisvalt õppimise ülesanne, kus peate ise avastama, kuidas Tailwind CSS töötab ja kuidas seda kasutada.

### Uurimisküsimused
- Uurige Tailwind CSS-i põhimõtteid ja filosoofiat
- Võrrelge Tailwind CSS-i ja Bootstrapi lähenemisi
- Dokumenteerige oma leiud Github Discussions'is
- Jagage kasulikke ressursse ja õpetusi teistega

### Praktiline ülesanne: Tailwind CSS-i rakendamine
1. Looge uus Vite.js projekt
2. Paigaldage ja seadistage Tailwind CSS
3. Looge Tailwind CSS-i abil lihtne veebileht, mis sisaldab:
   - Navigatsiooniriba
   - Hero sektsiooni
   - Kaartide sektsiooni
   - Kontaktvormi või jalust

Kasutage sama sisu, mida olete varasemalt CV-s või Bootstrapi ülesandes kasutanud.

### NB! Ülesande lahendamise oluline osa on koostöö
Kasutage Github Discussions'i, et:
- Jagada avastatud nippe ja põhimõtteid
- Küsida abi, kui jääte hätta
- Vastata teiste küsimustele
- Jagada kasulikke ressursse ja näiteid

### Soovitused alustamiseks
- Alustage Tailwind CSS-i ametliku dokumentatsiooniga: https://tailwindcss.com/docs
- Uurige, kuidas seadistada Tailwind CSS-i Vite.js projektis
- Tutvuge Tailwind CSS-i utiliitide klassidega (flex, grid, spacing, colors jne)
- Proovige luua seadmetundlikku disaini Tailwind CSS-i abil

Iga grupp valmistab ette lühikese esitluse (5-7 minutit) oma leidudest ja näitab praktilist näidet Tailwind CSS-i kasutamisest.

### Ennastjuhtiva õppimise komponendid
- **Õpipäevik**: Pidage Github Discussions'is õpipäevikut, kuhu märgite:
  - Mida õppisite iga päev Tailwind CSS-i kohta
  - Milliseid ressursse kasutasite
  - Millised küsimused tekkisid
  - Kuidas lahendasite probleeme

- **Vastastikune õpetamine**: Valige üks Tailwind CSS-i teema, mida õppisite sügavamalt, ja looge selle kohta lühike õpetus (tutorial) teistele. Jagage seda Github Discussions'is.

- **Probleemide püstitamine**: Kui jääte hätta, püstitage probleem Github Discussions'is struktureeritud kujul:
  - Mida püüate saavutada Tailwind CSS-iga
  - Mida olete juba proovinud
  - Millised veateated ilmuvad
  - Koodi näidised

- **Refleksioon**: Looge `protsess.md` fail, kus analüüsite:
  - Kuidas on teie õppimisprotsess arenenud võrreldes eelmiste seminaridega
  - Milliseid strateegiaid kasutasite Tailwind CSS-i õppimisel
  - Kuidas võrdleksite Tailwind CSS-i ja Bootstrapi õppimiskogemust
  - Kuidas saaksite oma õppimist veelgi tõhustada

### Koostöö ja tagasiside
- Esitage oma töö Pull Request'ina
- Andke tagasisidet vähemalt kahe kaasõppija Tailwind CSS projektile
- Vastake vähemalt kahele küsimusele või probleemile Github Discussions'is
- Osalege aktiivselt Discord'i vestlustes, jagades oma kogemusi ja aidates teisi

### Hindamiskriteeriumid
- Tailwind CSS-i rakendamise tehniliste nõuete täitmine
- Koodi kvaliteet ja organiseeritus
- Ennastjuhtiva õppimise komponentide täitmine
- Koostöö ja teadmiste jagamine
- Refleksiooni põhjalikkus

## Ennastjuhtiva õppija kujundamise strateegiad seminaris

### 1. Kogemuspõhine õppimine
- Õppijad jagavad oma kogemusi ja lahendusi
- Õpitakse nii oma kui ka teiste kogemustest
- Reflekteeritakse õppeprotsessi üle

### 2. Probleemipõhine õppimine
- Õppijad lahendavad praktilisi probleeme (arenduskeskkonna seadistamine)
- Probleemid on autentsed ja seotud reaalse arendustööga
- Õppijad peavad leidma lahendusi iseseisvalt või koostöös

### 3. Ressursside otsimine ja hindamine
- Õppijad peavad leidma vajalikku dokumentatsiooni ja õpetusi
- Õpitakse hindama allikate kvaliteeti ja asjakohasust
- Jagatakse kasulikke ressursse teistega

### 4. Metakognitsioon
- Õppijad reflekteerivad oma õppimisprotsessi üle
- Analüüsitakse, millised strateegiad toimivad ja millised mitte
- Planeeritakse, kuidas õppimist tõhustada

### 5. Koostöö ja vastastikune õpetamine
- Õppijad õpetavad üksteist
- Jagatakse teadmisi ja kogemusi
- Antakse konstruktiivset tagasisidet

## Lisamaterjalid
- [Vite.js ametlik dokumentatsioon](https://vitejs.dev/guide/)
- [Bootstrap npm-i juhend](https://getbootstrap.com/docs/5.3/getting-started/download/#npm)
- [Bootstrapi kohandamise juhend](https://getbootstrap.com/docs/5.3/customize/sass/)
- [Tailwind CSS dokumentatsioon](https://tailwindcss.com/docs)
- [Tailwind CSS vs Bootstrap võrdlus](https://www.creative-tim.com/blog/educational-tech/bootstrap-vs-tailwind-css/)
