const forBtn=document.querySelector("#nextBtnForward");
const backBtn=document.querySelector("#nextBtnBackward");
const photo1=document.querySelector("#photo1");
const photo2=document.querySelector("#photo2");
const photo3=document.querySelector("#photo3");
const photoArr=[photo1,photo2,photo3];
let photoCount=0;
forBtn.addEventListener("click",()=>{
    photoArr[photoCount].style.zIndex=1;
    photoCount+=1;
    if(photoCount>2){
        photoCount=0;
    }
    photoArr[photoCount].style.zIndex=3;
})
backBtn.addEventListener("click",()=>{
    photoArr[photoCount].style.zIndex=1;
    photoCount-=1;
if(photoCount<0)
    {
        photoCount=2;
    }
    photoArr[photoCount].style.zIndex=3;
})
