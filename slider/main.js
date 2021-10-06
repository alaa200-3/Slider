let item=Array.from(document.querySelectorAll(".item img"));
let lightBox=document.getElementById("lightBoxContainer");
let lightBoxItem=document.getElementById("lightBoxItem");
let nextBtn=document.getElementById("next");
let prevBtn=document.getElementById("prev");
let closeBtn=document.getElementById("close");

let currentIndex=0;
let code=0;

for(let i=0;i<item.length;i++){

    item[i].addEventListener("click",function(e){

        lightBox.style="display:flex";
        let h=e.target;
        currentIndex=item.indexOf(h);
        lightBoxItem.style=` background-image: url('${h.src}')`;
    })
}

nextBtn.addEventListener("click",nextslider);
function nextslider(){
    currentIndex++;
    console.log(currentIndex);
    if(currentIndex==item.length){
        currentIndex=0;
    }
    lightBox.style="display:flex";
        lightBoxItem.style=` background-image: url('${item[currentIndex].src}')`;
        s();
}

prevBtn.addEventListener("click",prevslider);
function prevslider(){
    currentIndex--;
    console.log(currentIndex);
    if(currentIndex<0){
        currentIndex=item.length-1;
    }
    lightBox.style="display:flex";
        lightBoxItem.style=` background-image: url('${item[currentIndex].src}')`;
}


closeBtn.addEventListener("click",function(){
    lightBox.style="display:none";
});


function s(){
    document.addEventListener("keydown",function(e){

        code=e.code;
        console.log(code);
        if(code=="ArrowRight") nextslider();
        else if(code=="ArrowLeft") prevslider();
        else if(code=="Escape") lightBox.style="display:none";
    });
}
