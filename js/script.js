const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const overlay = document.getElementById("product-shape");

// Click on a color

var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;

}

function changeColor(e) {
  
  // get the hex color
  let hex = e.target.getAttribute("data-hex");
  let id=e.target.getAttribute('id')
  let parentId=document.getElementById(id).parentElement.id
  console.log(parentId)
   document.getElementById(parentId).src=`images/bg-${id}.png`
  
  console.log(img)
  // set the hex color
  overlay.style.fill = hex;
}
