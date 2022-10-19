let saturate= document.getElementById("Saturate");
let contrast= document.getElementById("Contrast");
let Brightness= document.getElementById("Brightness");
let Sepia= document.getElementById("Sepia");
let Grayscale= document.getElementById("Grayscale");
let blur= document.getElementById("Blur");
let hueRotate= document.getElementById("hue-rotate");
let download= document.getElementById("download");
let reset= document.getElementById("reset");
let upload= document.getElementById("upload");
let img= document.getElementById("imggg");
let imgbox=document.querySelector(".imgg");
let canvas= document.getElementById("canvas");
let ctx= canvas.getContext("2d");



window.onload=function(){
    download.style.display="none";
    reset.style.display="none";
    imgbox.style.display="none";
}
// ########################################
function resettt(){
ctx.filter="none";
saturate.value='100';
contrast.value="100";
Brightness.value='100';
Sepia.value="0";
Grayscale.value="0";
blur.value="0";
hueRotate.value="0";
ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

reset.onclick= resettt;





// #######################################
upload.onchange=function(){
    resettt()
    download.style.display="block";
    reset.style.display="block";
    imgbox.style.display="block";
  let file=new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload=function(){
      img.src=file.result;
  }  
  img.onload=function(){
      canvas.width=img.width
      canvas.height=img.height;
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      img.style.display="none";
  }
}
// ########################################

let filtersss = document.querySelectorAll("ul li input");
filtersss.forEach(filter =>{

filter.addEventListener("input",function(){
   ctx.filter=`
saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${Brightness.value}%)
sepia(${Sepia.value}%)
grayscale(${Grayscale.value})
blur(${blur.value}px)
hue-rotate(${hueRotate.value}deg)

    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height);

})
})
// ####################################
download.onclick=function(){
    download.href=canvas.toDataURL()
}