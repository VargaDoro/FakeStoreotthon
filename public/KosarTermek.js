export default class KosarTermek {
    #adat;
    #szElem;

    constructor(termek, szElem) {
        this.#adat = termek;
        this.#szElem = szElem;
        this.#megjelenit();
    }

    #megjelenit() {
        const { id, title, price, description, image } = this.#adat;
        this.#szElem.insertAdjacentHTML("beforeend", `
            <tr>
                <td scope="col">${id}</td>
                <td scope="col">${title}</td>
                <td scope="col">${price}</td>
                <td scope="col">${description}</td>
                <td scope="col"><img src="${image}" alt="${title}" style="max-width: 100px; height: auto;"></td>
                <td scope="col"><button class="btn torol" data-id="${id}">❌</button></td>
            </tr>`);

        this.#szElem.querySelector(`.torol[data-id="${id}"]`)
            ?.addEventListener("click", () => this.#torolASzerverrol());
    }

    #torolASzerverrol() {
        fetch('https://fakestoreapi.com/carts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 1, products: [{ id: this.#adat.id }] })
        })
        .then(res => res.json())
        .then(() => {
            this.#szElem.querySelector(`.torol[data-id="${this.#adat.id}"]`)
                ?.closest("tr")?.remove();
        })
        .catch(err => {
            console.error("Hiba történt:", err);
            alert("Hiba történt a termék törlésekor! Próbáld újra.");
        });
    }
}
