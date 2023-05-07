const items = document.querySelector("#items")

// 1.ParentElement
// items.parentElement.style.border = "thick solid blue"



// ChildNodes
// console.log(items.firstElementChild)
// console.log(items.lastElementChild)

// 2.LastElement Child

// items.lastElementChild.style.color = "red"


// 3. last child 
// console.log(items.lastChild)
// we got the empty space


// 5.firstelementchild

// console.log(items.firstElementChild)
// items.firstElementChild.textContent = " Hey Whats Up !!"
// it is return the first element

//6.firstchild
// console.log(items.firstChild)
// we got the empty space 

// 7. nextsibling

// console.log(items.nextSibling)

// we again got the empty space 

// 8. nextelementsibling

// items.nextElementSibling.style.color = "blue"

//9.previoussibling
// console.log(items.previousSibling)
// we again got an empty space 


// 10. previouselementsibling
// items.previousElementSibling.style.color = "red"


// 11. creating an element 

// var newDiv = document.createElement("div")
// newDiv.className = "mydiv"
// console.log(newDiv)
// newDiv.setAttribute("id","div1")
// console.log(newDiv)

// 12. set setAttribute
// var newDiv = document.createElement("div")
// newDiv.className = "mydiv"
// newDiv.setAttribute("id", "div1")
// console.log(newDiv)

// 13. createtextnode 14.appendchild 15. Adding Hello 
const newDiv = document.createElement("div")
newDiv.className = "mydiv"
newDiv.setAttribute("id", "div1")

const textnode = document.createTextNode("Hello World")
newDiv.appendChild(textnode)

var container = document.querySelector('header .container')

var h1 = document.querySelector('header h1')

container.insertBefore(newDiv, h1)






