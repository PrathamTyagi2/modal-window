'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCM=document.querySelector('.close-modal');
const btnOM=document.querySelectorAll('.show-modal');
const openM=function(){
        // console.log("button clicked");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    }

const closedM=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i =0;i<btnOM.length;i++)
    btnOM[i].addEventListener('click',openM);

btnCM.addEventListener('click',closedM);
overlay.addEventListener('click',closedM);

document.addEventListener('keydown',function(e){
    // console.log(e.key);
    if(e.key==='Escape')
        console.log("the esc key is pressed");{
    if(!modal.classList.contains('hidden')){
        closedM();
    }}

});
