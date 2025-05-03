import KosarTermek from "./KosarTermek.js";

export default class Kosar {
    #termeklista = [];
    #szElem;

    constructor(szElem, lista) {
        this.#szElem = szElem;
        this.#termeklista = lista;
        this.#megjelenit();
    }

    #megjelenit() {
        let html = `<table class="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Termék név</th>
                                <th scope="col">Ár</th>
                                <th scope="col">Művelet</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);
        const tbodyELem = this.#szElem.querySelector("table tbody");
        this.#termeklista.forEach(termek => {
            new KosarTermek(termek, tbodyELem);
        });
    }
}
