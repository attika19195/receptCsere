class KategoriaView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <h5 id = 'kategoria'>
                ${elem.nev}
            </h5>
            
    `);

        /* this.kateghezRecept = $('#kategoria');

        this.kateghezRecept.on("click", () => {
            this.kattintasTrigger('kateghezRecept')
        }); */

    }

    /* kattintasTrigger(esemenyneve) {
        const esemeny = new CustomEvent(esemenyneve, { detail: this.#elem.id});
        window.dispatchEvent(esemeny);
    } */
}

export default KategoriaView;
