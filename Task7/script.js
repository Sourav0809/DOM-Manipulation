const form = document.querySelector(".form")
const FormItem = document.querySelector(".flexitems")



// addItem 
form.addEventListener("submit", addItems)

//addItem Function 

function addItems(e) {
    e.preventDefault()
    const InputVal = document.getElementById("sec-form-input").value
    const SecInputVal = document.getElementById("sec-form").value

    const li = document.createElement("li")
    li.className = "listitem"

    const span = document.createElement("span")
    span.appendChild(document.createTextNode(InputVal))
    span.appendChild(document.createTextNode(" " + SecInputVal))
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