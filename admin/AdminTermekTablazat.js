//teljes táblázat, itt kapjuk meg az obj. listát
//annyiszor példányosítjuk az AdminTermek osztályt, ahány eleme lesz a listának
import AdminTermek from "./AdminTermek.js";

export default class AdminTermekTablazat{
    #termeklista=[];
    #szElem;
    constructor(szElem, lista){
        this.#szElem = szElem;
        this.#termeklista = lista;
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
                        <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </table>`

        this.#szElem.insertAdjacentHTML("beforeend", html)
        this.tbodyELem = this.#szElem.querySelector("table tbody")
        console.log(this.tbodyELem)
        /* ide példányosítjuk bele a táblázat sorait - AdmitTermek osztályt */
        this.#termeklista.forEach(termek => {
            new AdminTermek(termek, this.tbodyELem);
        });
    }
}