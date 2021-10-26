function change1() {
    document.getElementById("body").style.background = "#3d920b";
    document.getElementById("headline").style.color = "black";
}

document.getElementById("div1").addEventListener("click", change1);

function change2() {
    document.getElementById("body").style.background = "rgb(196, 16, 16)";
    document.getElementById("headline").style.color = "#122096";
}

document.getElementById("div2").addEventListener("click", change2);

function change3() {
    document.getElementById("body").style.background = "#8b0faa";
    document.getElementById("headline").style.color = "black";
}

document.getElementById("div3").addEventListener("click", change3);

function change4() {
    document.getElementById("body").style.background = "#07a79f";
    document.getElementById("headline").style.color = "rgb(56, 58, 31)";
}

document.getElementById("div4").addEventListener("click", change4);