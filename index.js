const date = new Date();
let month = date.getMonth() + 1
const format = date.getFullYear() + "/" + month + "/" + date.getDate();

document.querySelector('h3').innerHTML = format;


let itemList = [];
let inputButton = document.querySelector(".button_in");
inputButton.addEventListener("click", additem);

function additem() {
    let item = document.querySelector(".item").value;
    if (item != null) {
        itemList.push(item);
        console.log(itemList)
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    showList();
}

function showList() {
    let List = "<ul>"
    for (let i = 0; i < itemList.length; i++) {
        List += "<li>" + "<span class='todo_text'>" + itemList[i] + "</span>" + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    List += "</ul>";
    document.querySelector(".item_List").innerHTML = List;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

let list = document.querySelector('.item_List');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('checked');
    }
}, false);