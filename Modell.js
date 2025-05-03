export default class Modell{
    constructor(){
    }
    //az osztály feladata hogy HTTP kéréseket végrehajtsa
    getAdat(vegpont, callback){
        fetch(vegpont)
        .then(response => response.json())
        .then(data => {
            data
            //console.log("Megékezett adatok")
            //console.log(data)
            callback(data)
        })
        .catch(error => console.log(error))
    }
    postAdat(vegpont, callback){
        fetch(vegpont)
        .then(response => response.json())
        .then(data => {
            data
            //console.log("Megékezett adatok")
            //console.log(data)
            callback(data)
        })
        .catch(error => console.log(error))
    }
}