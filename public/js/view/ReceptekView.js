class ReceptekView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        szuloElem.append(`
            <tr id = 'tablaElem'>
                <td>${elem.nev}</td>
                <td>${elem.kategoria.nev}</td>
            </tr>
            
    `);

        this.receptInformacioMegjelenit = $('#tablaElem');

        this.receptInformacioMegjelenit.on("click", () => {
            this.kattintasTrigger('receptInformacioMegjelenit')
        });

    }

    kattintasTrigger(esemenyneve) {
        const esemeny = new CustomEvent(esemenyneve, { detail: this.#elem.id});
        window.dispatchEvent(esemeny);
    }
}

export default ReceptekView;
