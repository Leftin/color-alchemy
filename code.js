function onload() {
    green = document.getElementById("green")
    red = document.getElementById("red")
    yellow = document.getElementById("yellow")
    clear = document.getElementById("clear")
    ready = document.getElementById("ready")
    slot1 = document.getElementById("slot1")
    slot2 = document.getElementById("slot2")
    answer = document.getElementById("answer")
    slots = ["None", "None"]

    slot1.textContent = slots[0]
    slot2.textContent = slots[1]

    green.onclick = () => {
        console.log("Green")
        if (slots[0]=="None") {slots[0]="Green"}
        else if (slots[1]=="None") {slots[1]="Green"}
        slot1.textContent = slots[0]
        slot2.textContent = slots[1]
        answer.textContent = undefined
    }
    red.onclick = () => {
        console.log("Red")
        if (slots[0]=="None") {slots[0]="Red"}
        else if (slots[1]=="None") {slots[1]="Red"}
        slot1.textContent = slots[0]
        slot2.textContent = slots[1]
        answer.textContent = undefined
    }
    yellow.onclick = () => {
        console.log("Yellow")
        if (slots[0]=="None") {slots[0]="Yellow"}
        else if (slots[1]=="None") {slots[1]="Yellow"}
        slot1.textContent = slots[0]
        slot2.textContent = slots[1]
        answer.textContent = undefined
    }
    clear.onclick = () => {
        console.log("clear")
        slots = ["None", "None"]
        slot1.textContent = slots[0]
        slot2.textContent = slots[1]
        answer.textContent = undefined
    }
    ready.onclick = () => {
        console.log("ready")
        if (slots[0]=="Red" && slots[1]=="Yellow" || slots[1]=="Red" && slots[0]=="Yellow") { answer.textContent = "Orange" } 
        else if (slots[0]=="Red" && slots[1]=="Green" || slots[1]=="Red" && slots[0]=="Green") { answer.textContent = "Brown" }
        else if (slots[0]=="Yellow" && slots[1]=="Green" || slots[1]=="Yellow" && slots[0]=="Green") { answer.textContent = "Olive" }
        else { answer.textContent = "Error"}
        
    }
}