const MainForm = document.querySelector("#main_form")

const appoinmetns = document.querySelector(".items")

MainForm.addEventListener("submit", additem)
// add appointment 
function additem(e) {
    e.preventDefault()

    let dummy = document.querySelector(".noelement")
    if (dummy != null) {
        dummy.remove()
    }

    var nameInput = document.getElementById("person_name").value
    var emailInput = document.getElementById("person_email").value
    var ContactInput = document.getElementById("person_phone").value
    var li = document.createElement("li")
    li.className = "listitems"

    var Namespan = document.createElement("span")
    var EmailSpan = document.createElement("span")
    var ContactSpan = document.createElement("span")
    Namespan.setAttribute("contenteditable", "true")
    var EditnameBtn = document.createElement("button")
    EditnameBtn.appendChild(document.createTextNode("Edit"))
    EditnameBtn.className = "EditnameBtn"


    Namespan.appendChild(document.createTextNode(nameInput + " "))
    EmailSpan.appendChild(document.createTextNode(emailInput + " "))
    ContactSpan.appendChild(document.createTextNode(ContactInput + " "))


    // delete btn

    const deletebtn = document.createElement("button")
    deletebtn.className = "listitems_btn"
    deletebtn.appendChild(document.createTextNode("X"))


    li.appendChild(Namespan)
    li.appendChild(EmailSpan)
    li.appendChild(ContactSpan)
    li.appendChild(deletebtn)
    li.appendChild(EditnameBtn)


    appoinmetns.appendChild(li)


}


// delete item 

appoinmetns.addEventListener("click", removeItem)

function removeItem(e) {
    if (e.target.classList.contains("listitems_btn")) {
        if (confirm("Are You Sure ?? ")) {
            var li = e.target.parentElement

            // also delting form local storage 
            localStorage.removeItem(li.children[1].innerText)
            appoinmetns.removeChild(li)
        }


    }
    // empty item showing 

    if (appoinmetns.children.length == 0) {
        appoinmetns.innerHTML += " <h1 class='noelement'> No Appointment Booked !! </h1>"
    }
}



// filter 


const filter = document.querySelector("#search")

filter.addEventListener("keyup", filterItem)

function filterItem(e) {
    for (let i = 0; i < appoinmetns.children.length; i++) {
        if (appoinmetns.children[i].children[0].textContent.toLowerCase().includes(filter.value.toLowerCase())) {
            appoinmetns.children[i].style.display = "flex"
        }
        else {
            appoinmetns.children[i].style.display = "none"

        }
    }
}


// adding value to local storage 


MainForm.addEventListener("submit", addtoLocalstorage)

function addtoLocalstorage(e) {
    let AppointmentObj = {
        value: appoinmetns.lastElementChild.firstElementChild.textContent
    }

    let AppointmentObjSerialized = JSON.stringify(AppointmentObj)

    // setting email as a key 
    const email = document.getElementById("person_email").value
    localStorage.setItem(email, AppointmentObjSerialized)
}

appoinmetns.addEventListener("click", edit)
function edit(e) {
    if (e.target.classList.contains("EditnameBtn")) {
        var name = e.target.parentElement.children[0].innerText
        var email = e.target.parentElement.children[1].innerText
        var phone = e.target.parentElement.children[2].innerText

        var newObj = {
            name: name,
            email: email,
            phone: phone
        }

        localStorage.setItem(email, JSON.stringify(newObj))
    }


}