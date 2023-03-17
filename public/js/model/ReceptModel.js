class ReceptModel{
    #receptTomb = [];

    constructor() {

    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#receptTomb = data;
                myCallBack(this.#receptTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default ReceptModel;