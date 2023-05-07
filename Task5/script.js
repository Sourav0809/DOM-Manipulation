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


// 4.firstelementchild

console.log(items.firstElementChild)
items.firstElementChild.textContent = " Hey Whats Up !!"
// it is return the first element