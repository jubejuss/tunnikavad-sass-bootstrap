# Bootstrapi kasutamine CDN serveri ja eraldi installi kaudu
## Kõige lihtsam kasutusmeetod on CDN serveri abil:  
https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Bootstrapi lisamine moodsate ehitustööriistade abil

### Vite.js
Vite.js on kiire ja kaasaegne ehitustööriist, mis pakub kiiret arenduskeskkonda ja tõhusat tootmisversiooni loomist. Vite kasutab ES mooduleid, mis võimaldab kiiret käivitust ja uuendusi arenduse ajal. Lisaks Vite-le on ka lihtsam, Parcel ja keerukam Webpack.

Vite-ga paigaldamise juhis asub: https://getbootstrap.com/docs/5.3/getting-started/vite/  
Eesti keeles ka: https://pedakook.wtf/blog/custom-bootstrap/

## Esimene osa

1. Esmalt loome projekti folderi ja sinna node projekti: `npm init -y` mille tagajärjel tekib meie projekti `package.json` esmase vajaliku node rakenduse seadistusega.
2. Seejärel paigaldame Vite.js'i `npm i --save-dev vite`...  
3. ... ja Bootstrapi `npm i --save bootstrap @popperjs/core`
4. ning sassi, kui see pole meil juba installeeritud `npm i --save-dev sass`  
5. lisame muud juhendis nõutud osad  

6. Esialgu Bootstrap veel ei toimi kuna me pole Bootstrappi importinud. Seega impordime Bootstrapi scss-i meie scss-i `src/scss/styles.scss`:  
```scss
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
```
ja javascripti `src/js/main.js`-i:
```javascript
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
```
Ja voilaa - meie rakendus kuvab end nii nagu vaja!  

Nüüd võime oma lehe valmis teha.  
Kopeerime oma CDN näidises tehtud HTML sisu siaa indexisse ümber.   

Et ehitada tootmiskõlbulik versioon, peab lisama package jsonisse:
```json
    "build": "vite build",
    "preview": "vite preview",
```


