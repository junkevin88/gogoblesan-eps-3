/*? no js js needed from me */
const result = document.getElementById("result")

let hobbyList = []

function saveHobbyInput() {
  const input = document.getElementById("hobbyInput")
  const hobby = input.value
  hobbyList.push(hobby)
  result.textContent = hobbyList
}

function switcher() {


    const from = document.getElementById("from")
    if(from.value == 0) {
        alert("The number must be more than 0, please try again")
        return
    }

    if(from.value > hobbyList.length) {
        alert("Please select a number between 1 and " + hobbyList.length)
        return
    }

    const to = document.getElementById("to")

    if(to.value == 0) {
        alert("The number must be more than 0, please try again")
        return
    }
    
    if(to.value > hobbyList.length) {
        alert("Please select a number between 1 and " + hobbyList.length)
        return
    }

    const x = hobbyList[from.value -1]
    const y = hobbyList[to.value -1]


    // switch x and y
    hobbyList[from.value -1] = y
    hobbyList[to.value -1] = x


    result.textContent = hobbyList

}