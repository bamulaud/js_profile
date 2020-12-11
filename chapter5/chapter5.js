var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("enter first new thing");
    item2 = prompt("enter second new thing");
    item3 = prompt("enter third new thing");
    item4 = prompt("enter forth new thing");
    item5 = prompt("enter fifth new thing");
    item6 = prompt("enter sixth new thing");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("f").innerHTML = item4;
    document.getElementById("e").innerHTML = item5;
    document.getElementById("l").innerHTML = item6;
}