export default class KosarTermek{
    #adat={}
    #szElem;
    constructor(termek, szElem){
        this.#adat = termek;
        this.#szElem = szElem;
        this.#megjelenit();
        this.#torolASzerverrol();
    }

    #megjelenit(){
        let html = `<tr>
                        <td scope="col">${this.#adat.id}</td>
                        <td scope="col">${this.#adat.title}</td>
                        <td scope="col">${this.#adat.price}</td>
                        <td scope="col">
                            <button class="btn torol" data-id="${this.#adat.id}">❌</button>
                        </td>
                    </tr>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);

        const utolsoGomb = this.#szElem.querySelector(`.torol[data-id="${this.#adat.id}"]`);
        if (utolsoGomb) {
            utolsoGomb.addEventListener("click", () => this.#torolASzerverrol());
        }
    }

    #torolASzerverrol() {
        const cart = {
            userId: 1,
            products: [{ id: this.#adat.id }]
        };
    
        fetch('https://fakestoreapi.com/carts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Kosár frissítve:", data);
            this.#szElem.querySelector(`.torol[data-id="${this.#adat.id}"]`).closest("tr").remove();
        })
        .catch(error => console.error("Hiba történt:", error));
    }
    
}