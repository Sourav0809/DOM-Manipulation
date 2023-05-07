var form = document.querySelector("#addForm")
var formItem = document.querySelector("#items")

//add item
form.addEventListener("submit", additem)

// delete event 
formItem.addEventListener("click", removeItem)

//add item funtion
function additem(e) {
    e.preventDefault()
    //get input value
    var formInput = document.getElementById("item").value

    var li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(formInput))

    // create delete button element 
    var deleteBtn = document.createElement("button")
    // adding classname to delete button bcz its look like the actual button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))

    // adding delete button 
    li.appendChild(deleteBtn)
    formItem.appendChild(li)
}

// delete item function

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure ? ")) {
            var li = e.target.parentElement;
            formItem.removeChild(li)
        }
    }
}
