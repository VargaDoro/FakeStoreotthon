import AdminUser from "./AdminUser.js";

export default class AdminUserTablazat{
    #userlista=[];
    #szElem;
    constructor(szElem, lista){
        this.#szElem = szElem;
        this.#userlista = lista;
        this.#megjelenit();
    }

    #megjelenit(){
        let html = `<table class="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Felhasznákónév</th>
                        <th scope="col">Email</th>
                        <th scope="col">Jelszó</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </table>`

        this.#szElem.insertAdjacentHTML("beforeend", html)
        this.tbodyELem = this.#szElem.querySelector("table tbody")
        console.log(this.tbodyELem)
        /* ide példányosítjuk bele a táblázat sorait - AdmitTermek osztályt */
        this.#userlista.forEach(felhasznalo => {
            new AdminUser(felhasznalo, this.tbodyELem);
        });
    }
}