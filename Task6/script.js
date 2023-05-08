const form = document.querySelector("#addForm")
const formItem = document.querySelector("#items")

form.addEventListener("submit", additem)
formItem.addEventListener("click", removeItem)

function additem(e) {
    e.preventDefault()
    let dummy = document.querySelector(".noelement")
    if (dummy != null) {
        dummy.remove()
    }

    const inputText = document.querySelector("#item").value
    const li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(inputText))

    const deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))
    li.appendChild(deleteBtn)
    formItem.appendChild(li)


}



function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure ? ")) {
            var li = e.target.parentElement
            li.remove()
        }
        if (formItem.children.length == 0) {
            formItem.innerHTML += " <h2 class='noelement'> No item Present ADD NOW !! </h2>"
        }

    }
}

// filter 

const filter = document.querySelector("#filter")

filter.addEventListener("keyup", search)


function search(e) {

    for (let i = 0; i < formItem.children.length; i++) {
        if (formItem.children[i].children[0].textContent.toLowerCase().includes(filter.value.toLowerCase())) {
            formItem.children[i].style.display = "flex"

        }
        else {
            formItem.children[i].style.display = "none"

        }



    }

}