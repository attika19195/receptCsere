import AdatModell from "../model/ReceptModel.js";
import ReceptekView from "../view/ReceptekView.js";
import ReceptView from "../view/ReceptView.js";

class ReceptController{
    constructor(){
        const adatmodell = new AdatModell();
        adatmodell.adatBe('/api/receptek', this.megjelenitReceptek);
        
        console.log('itt vagyok');

        $(window).on('receptInformacioMegjelenit', (event)=>{
            
            this.receptMutat = `/api/recept/${event.detail}`;
            console.log(event.detail);
            adatmodell.adatBe(this.receptMutat, this.megjelenitRecept);
        });
    }

    

    megjelenitReceptek(receptek){
        let szuloElem=$(".receptek_article");
        receptek.forEach(recept => {
            new ReceptekView(recept, szuloElem);
        });
    }

    megjelenitRecept(recept){
        let szuloElem=$(".recept_article");
        szuloElem.empty();
        new ReceptView(recept, szuloElem);

    }

}

export default ReceptController;
