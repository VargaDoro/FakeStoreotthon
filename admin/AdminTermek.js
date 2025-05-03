//egy sor a táblázatból, termék megjelenítése

export default class AdminTermek{
    #adat={}
    #szElem;
    constructor(termek, szElem){
        this.#adat = termek;
        this.#szElem = szElem;
        this.#megjelenit();
    }

    #megjelenit(){
        let html = `<tr>
                        <td scope="col">${this.#adat.id}</td>
                        <td scope="col">${this.#adat.title}</td>
                        <td scope="col">${this.#adat.price}</td>
                        <td scope="col">${this.#adat.category}</td>
                        <td scope="col">${this.#adat.description}</td>
                        <td scope="col"><img src="${this.#adat.image}" alt="${this.#adat.title}" style="max-width: 100px; height: auto;"></td>
                        <td scope="col">
                        <button class = "btn torol">❌</button>
                        </td>
                    </tr>`
        this.#szElem.insertAdjacentHTML("beforeend", html)
        console.log(this.#szElem)
    }
}