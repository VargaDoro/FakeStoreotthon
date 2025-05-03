import WebaruhazTermek from "./WebaruhazTermek.js";
import Kosar from "./Kosar.js";

export default class Webaruhaz {
    #termeklista = [];
    #szElem;
    #kosar;

    constructor(szElem, lista, kosarElem) {
        this.#szElem = szElem;
        this.#termeklista = lista;
        this.#kosar = new Kosar(kosarElem, []);
        this.#megjelenit();
    }


    #megjelenit(){
        let html = `<table class="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Termék név</th>
                        <th scope="col">Ár</th>
                        <th scope="col">Kategória</th>
                        <th scope="col">Leírás</th>
                        <th scope="col">Kép</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </table>`

        this.#szElem.insertAdjacentHTML("beforeend", html)
        this.tbodyELem = this.#szElem.querySelector("table tbody");
        this.#termeklista.forEach(termek => {
            new WebaruhazTermek(termek, this.tbodyELem, (termekAdat) => this.#kosar.hozzaad(termekAdat));
        });
    }
}