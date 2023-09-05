const frm = document.querySelector("form")
const result = document.getElementById("resultado")

//----------------------------------------------------------------

const input1 = document.getElementById("inBaseDmg")
const backup1 = input1.getAttribute("placeholder")

const input2 = document.getElementById("inBuff")
const backup2 = input1.getAttribute("placeholder")

const input3 = document.getElementById("inInsp")
const backup3 = input1.getAttribute("placeholder")

const input4 = document.getElementById("inMultp")
const backup4 = input1.getAttribute("placeholder")


input1.onfocus = function() {
    this.setAttribute("placeholder", "")
}
input1.onblur = function(){
    this.setAttribute("placeholder", backup1)
}

input2.onfocus = function() {
    this.setAttribute("placeholder", "")
}
input2.onblur = function(){
    this.setAttribute("placeholder", backup2)
}

input3.onfocus = function() {
    this.setAttribute("placeholder", "")
}
input3.onblur = function(){
    this.setAttribute("placeholder", backup3)
}

input4.onfocus = function() {
    this.setAttribute("placeholder", "")
}
input4.onblur = function(){
    this.setAttribute("placeholder", backup4)
}

//----------------------------------------------------------------


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dmg = frm.inBaseDmg.value
    const buff = frm.inBuff.value
    const insp = frm.inInsp.value
    const mult = frm.inMultp.value

    const inspiracao = Number(insp)
    const dano = Number(dmg)
    
    
    if (dmg == `` || mult == ``){
        alert("Dano base ou multiplicador vazios")
    }
    else if (buff == ``){
        if (insp == ``){
            let num = Number(0)
            const porcent2 = Number(mult / 100)
            num = Number(dano * porcent2)
            result.innerText = `Seu DPS é: ${num.toFixed(2)}`
        }
        else{
            const porcent2 = Number(mult / 100)
            num = Number((dano + inspiracao) * porcent2)
            result.innerText = `Seu DPS é: ${num.toFixed(2)}`
        }
    }
    else{
        const porcent1 = Number(buff / 100)
        const porcent2 = Number(mult / 100)
        num = Number(((dano * (1 + porcent1)) + inspiracao) * porcent2)
        result.innerText = `Seu DPS é: ${num.toFixed(2)}`
    }
})