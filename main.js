//program belépési pontja

import AdminTermekTablazat from "./admin/AdminTermekTablazat.js";
import AdminUserTablazat from "./admin/AdminUserTablazat.js";
import Webaruhaz from "./public/Webaruhaz.js";
import Kosar from "./public/Kosar.js";
import Modell from "./Modell.js";

const SZULOELEM = document.getElementsByClassName("tarolo")[0];

const ADMINTERMEKGOMB = document.querySelector(".admintermekek");
const ADMINUSERGOMG = document.querySelector(".adminuser");

const PUBLICTERMEKGOMB = document.querySelector(".publictermekek");
const PUBLICKOSARGOMB = document.querySelector(".publickosar");

const MODELL = new Modell();

ADMINTERMEKGOMB.addEventListener("click", function(){
    SZULOELEM.innerHTML = "";
    MODELL.getAdat('https://fakestoreapi.com/products', adminTermekMegjelenit);
});
ADMINUSERGOMG.addEventListener("click", function(){
    SZULOELEM.innerHTML = "";
    MODELL.getAdat('https://fakestoreapi.com/users', adminUserMegjelenit);
});
PUBLICTERMEKGOMB.addEventListener("click", function(){
    SZULOELEM.innerHTML = "";
    MODELL.getAdat('https://fakestoreapi.com/products', webaruhazMegjelenit);
});
PUBLICKOSARGOMB.addEventListener("click", function(){
    SZULOELEM.innerHTML = "";
    MODELL.getAdat('https://fakestoreapi.com/carts', kosarMegjelenit);
});
console.log(ADMINTERMEKGOMB, ADMINUSERGOMG, PUBLICTERMEKGOMB, PUBLICKOSARGOMB);

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

function webaruhazMegjelenit(lista){
    new Webaruhaz(SZULOELEM, lista)
}

function kosarMegjelenit(lista){
    new Kosar(SZULOELEM, lista)
}