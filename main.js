//program belépési pontja

import AdminTermekTablazat from "./admin/AdminTermekTablazat.js";
import AdminUserTablazat from "./admin/AdminUserTablazat.js";
import Modell from "./Modell.js";

const SZULOELEM = document.getElementsByClassName("tarolo")[0];

const ADMINTERMEKGOMB = document.querySelector(".admintermekek");
const ADMINUSERGOMG = document.querySelector(".adminuser");

const PUBLICTERMEKGOMB = document.querySelector(".publictermekek");
const PUBLICKOSARGOMB = document.querySelector(".publickosar");

const MODELL = new Modell();

ADMINTERMEKGOMB.addEventListener("click", function(){
    MODELL.getAdat('https://fakestoreapi.com/products', adminTermekMegjelenit);
});
ADMINUSERGOMG.addEventListener("click", function(){
    MODELL.getAdat('https://fakestoreapi.com/users', adminUserMegjelenit);
});
PUBLICTERMEKGOMB.addEventListener("click", function(){
    SZULOELEM.innerHTML = "Publikus TERMÉK oldal";
    MODELL.getAdat('https://fakestoreapi.com/products', publicTermekMegjelenit);
});
PUBLICKOSARGOMB.addEventListener("click", function(){
    SZULOELEM.innerHTML = "Publikus KOSÁR oldal";
    MODELL.getAdat('https://fakestoreapi.com/carts', publicKosarMegjelenit);
});

/*console.log("A lista értéke a fetch ELŐTT: ")
console.log(TERMEK)*/

/*console.log("A lista értéke a fetch UTÁN: ");
console.log(TERMEK);*/

function adminTermekMegjelenit(lista){
    new AdminTermekTablazat(SZULOELEM, lista)
}

function adminUserMegjelenit(lista){
    new AdminUserTablazat(SZULOELEM, lista)
}