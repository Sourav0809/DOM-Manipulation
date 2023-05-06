
const items = document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor = "red";

// changing font in all list item
for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold"
}