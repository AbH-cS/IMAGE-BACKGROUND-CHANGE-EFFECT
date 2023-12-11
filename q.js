let imgBox = document.querySelector(".imgBox")
let imgWrap = document.querySelector(".imgWrap")
let orginalImg = document.getElementById("orginalImg")
let arrow = document.getElementById("arrow")

orginalImg.style.width = imgBox.offsetWidth + "px"

let leftspace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    let boxwidth = (e.pageX - leftspace) + "px"
    imgWrap.style.width = boxwidth;
    arrow.style.left = boxwidth;
}