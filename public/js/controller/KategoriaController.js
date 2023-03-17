import AdatModell from "../model/KategoriaModel.js";
import KategoriaView from "../view/KategoriaView.js";

class KategoriaController{
    constructor(){
        const adatmodell = new AdatModell();
        adatmodell.adatBe('/api/kategoriak', this.megjelenitKategoriak);
        
        console.log('itt vagyok');

        /* $(window).on('kateghezRecept', (event)=>{
            
            this.receptMutat = `/api/recept/${event.detail}`;
            console.log(event.detail);
            adatmodell.adatBe(this.receptMutat, this.megjelenitRecept);
        }); */
    }

    

    megjelenitKategoriak(kategoriak){
        let szuloElem=$(".kategoria_article");
        kategoriak.forEach(kategoria => {
            new KategoriaView(kategoria, szuloElem);
        });
    }


}

export default KategoriaController;
