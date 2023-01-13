
//  change the nav border color 

let navBtn = document.querySelector(".navbar-toggler")

navBtn.onclick=function(){
    navBtn.classList.toggle("open")
   
    if(navBtn.classList.contains("open")){
    navBtn.style.color="#33d1cc"
    }else {   
    navBtn.style.color="white"
    }
}

