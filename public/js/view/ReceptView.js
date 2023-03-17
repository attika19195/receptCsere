class ReceptView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <div>
                <img src="${elem.kep_eleresi_ut}" alt="..."/>
                <h5 class="fw-bold text-1000 text-truncate">${elem.nev}</h5>
                <h5 class="fw-bold text-1000 text-truncate">Kategória: ${elem.kategoria.nev}</h5>
                <h5 class="fw-bold text-1000 text-truncate">${elem.leiras}</h5>
            </div>   
    `);


    }

}

export default ReceptView;
