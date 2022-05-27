let letsContinue = true
let goodbyes = 0

while (letsContinue) {

    let userInput = prompt()
    
    if (userInput == "") {
        alert("WHAT!?")
    } else if (userInput === "GOODBYE!" && goodbyes == 0) {
        goodbyes += 1;
        alert('LEAVING SO SOON?')
        } else if(userInput === "GOODBYE!" && goodbyes == 1){
            alert('LATER, SKATER!')
            letsContinue = false
    } else if (userInput.toUpperCase() === userInput) {
        alert('NO, NOT SINCE 1946!')  
    } else {
        alert("SPEAK UP KID!")
    }
}
    