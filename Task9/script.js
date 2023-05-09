
const form = document.querySelector(".form")
const FormItem = document.querySelector(".flexitems")



// addItem 
form.addEventListener("submit", addItems)

//addItem Function 

function addItems(e) {
    e.preventDefault()


    let dummy = document.querySelector(".noelement")
    if (dummy != null) {
        dummy.remove()
    }


    const InputVal = document.getElementById("sec-form-input").value

    const li = document.createElement("li")
    li.className = "listitem"

    const span = document.createElement("span")
    span.appendChild(document.createTextNode(InputVal))
    li.appendChild(span)

    // Adding the Button
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "secBtn"
    deleteBtn.appendChild(document.createTextNode("X"))
    li.appendChild(deleteBtn)
    FormItem.appendChild(li)
}


// delete item

FormItem.addEventListener("click", RemoveItem)

function RemoveItem(e) {
    if (e.target.classList.contains("secBtn")) {
        if (confirm("Are You Sure ?? ")) {
            var li = e.target.parentElement
            FormItem.removeChild(li)
        }
        // check if no elemet is present 

        if (FormItem.children.length == 0) {
            FormItem.innerHTML += " <h2 class='noelement'> No item Present ADD NOW !! </h2>"

        }
    }
}


// filter 


const filter = document.querySelector("#input")

filter.addEventListener("keyup", search)

function search(e) {
    for (let i = 0; i < FormItem.children.length; i++) {
        if (FormItem.children[i].children[0].textContent.toLowerCase().includes(filter.value.toLowerCase())) {
            FormItem.children[i].style.display = "flex"
        }
        else {
            FormItem.children[i].style.display = "none"
        }
    }
}




// // save on local storage 
let id = 1
form.addEventListener("submit", saveData)

function saveData(e) {
    //creating an obj 
    let SetObj = {
        value: FormItem.lastElementChild.firstElementChild.textContent
    }
    let SetObjSerialized = JSON.stringify(SetObj)
    localStorage.setItem("form-item " + FormItem.children.length, SetObjSerialized)

}



