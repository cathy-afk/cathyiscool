document.getElementById("fitcheckclick").onclick = function () {
    document.getElementById("Aboutme").style.display = "none";
    document.getElementById("Fitcheck").style.display = "block"
}
document.getElementById("aboutmeclick").onclick = function () {
    document.getElementById("Aboutme").style.display = "block";
    document.getElementById("Fitcheck").style.display = "none"
}


bluefit = document.getElementById("bluefit")
brownfit = document.getElementById("brownfit")
cozyfit = document.getElementById("cozyfit")
pinkfit = document.getElementById("pinkfit")
nextfit = document.getElementById("next")
previousfit = document.getElementById("previous")
count=0

const fits = [brownfit, bluefit, cozyfit, pinkfit]


nextfit.addEventListener("click", function () {
    fits[count].style.display = "none";
    count ++;
    if (count >= 4){
    count=0;}
    fits[count].style.display = "block";
});

previousfit.addEventListener("click", function () {
    fits[count].style.display = "none";
    count --;
    if (count <= -1){
    count=3;}
    fits[count].style.display = "block";
});

