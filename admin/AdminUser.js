export default class AdminUser{
    #adat={}
    #szElem;
    constructor(felhasznalo, szElem){
        this.#adat = felhasznalo;
        this.#szElem = szElem;
        this.#megjelenit();
    }

    #megjelenit(){
        let html = `<tr>
                        <td scope="col">${this.#adat.id}</td>
                        <td scope="col">${this.#adat.username}</td>
                        <td scope="col">${this.#adat.email}</td>
                        <td scope="col">${this.#adat.password}</td>
                        <td scope="col">
                        <button class = "btn torol">❌</button>
                        </td>
                    </tr>`
        this.#szElem.insertAdjacentHTML("beforeend", html)
        console.log(this.#szElem)
    }
}