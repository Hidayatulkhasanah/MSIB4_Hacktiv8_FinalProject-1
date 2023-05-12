document.addEventListener('scroll',()=>{
    var scroll_position =window.scrollY;
    
    if(scroll_position >50){
      document.getElementById("scrool").style.backgroundColor= "#ffffff"
      document.getElementById("scrool").style.boxShadow=" 0 .5rem 1rem rgba(0,0,0,.15)"

    }else if(scroll_position <50){
        document.getElementById("scrool").style.backgroundColor= "transparent" 
        document.getElementById("scrool").style.boxShadow=" 0 0 0 0"
    };
})