let slideIndex = 0;
const slides = document.querySelectorAll(".img");

function nextImg(){
    slideIndex++;
    if(slideIndex==slides.length){
        slideIndex = 0;
    }
    showImage();
}

function previousImg(){
    slideIndex--;
    if(slideIndex<0){
        slideIndex = slides.length-1;
    }
    showImage();
}

function showImage(){
    slides.forEach(function(ele,ind){
        if(ind==slideIndex){
            ele.style.display = "block";
        }else{
            ele.style.display = "none";
        }
    })
}

showImage();