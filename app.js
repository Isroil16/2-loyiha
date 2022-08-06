const imgs=document.querySelector('.card_img');
const leftBtn=document.querySelector('.Left');
const rightBtn=document.querySelector('.Right');
const righ=document.querySelector('#Right');
const btn_01=document.querySelector('#btn_01');
const btn_02=document.querySelector('#btn_02');

const img = document.querySelectorAll('.card_img img');

// leftBtn.addEventListener('click', function change() {
    

//       imgs.style.ccsText='width:200px'

   

// });

console.log(img)

let idx = 0;
function changeImage() {
    if(idx > img.length-1){
        idx=0
    }
    else if (idx<0){
        idx=img.length-1
    }
    
    imgs.style.transform = `translateX(${-idx * 550}px)`;
} 

rightBtn.addEventListener('click',function change(){
      imgs.style.transform = `translateX(${-idx * 550}px)`;
       idx++;
     changeImage()

});


leftBtn.addEventListener('click', function change() {
    
    idx--;

    changeImage()

});
righ.addEventListener('click',function change(){
      imgs.style.transform = `translateX(${-idx * 550}px)`;
       idx++;
     changeImage()

});


btn_01.addEventListener('click',function change(){
      imgs.style.transform = `translateX(${-idx * 550}px)`;
       idx++;
     changeImage()

});
btn_02.addEventListener('click',function change(){
      imgs.style.transform = `translateX(${ -idx * 550}px)`;
       idx++;
     changeImage()

});