const list = document.querySelector("ul")
const input = document.querySelector("input")
const sonlar = []
let tasodifiySon;

function tanla(){
    if(input.value == '') return

    sonTuzish(input.value)

    if(sonlar.length == 0){
        alert("Son qomadi, damingni ol")
        return
    }
    let tasodifiySon = Math.floor(Math.random() * sonlar.length)
    console.log(sonlar[tasodifiySon]);

    list.innerHTML += `
        <li>${sonlar[tasodifiySon]}</li>
    `

    sonlar.splice(tasodifiySon, 1)
}

let sanabDur = 0
function sonTuzish(son){
    sanabDur++

    if(sanabDur == 1){
        for(let i = 1; i <= son; i++)
            sonlar.push(i)
    }

    // else alert("Bir zamon o'tirib dur")
}