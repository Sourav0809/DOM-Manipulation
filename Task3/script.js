let items = document.getElementsByTagName("li")
console.log(items)

for (let i = 0; i < items.length; i++) {
    items[i].style.color = "red"
}

// it will still add color red because the last item has also "li" tagname 
