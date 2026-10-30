const homeBtn = document.querySelector(".home-btn");
   const dropdown = document.querySelector(".dropdown");
   if (homeBtn && dropdown) {
    homeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
}

let rtlButton =document.getElementById("rtl-toggle");
         rtlButton.addEventListener("click", function(){
            if(document.documentElement.dir==="ltr"){
                document.documentElement.dir="rtl";
                rtlButton.innerHTML='<i class="fa-solid fa-arrow-right-arrow-left"></i>';
            }
            else{
                document.documentElement.dir="ltr";
                rtlButton.innerHTML='<i class="fa-solid fa-arrow-right-arrow-left"></i>';

            }
        })

 let themebutton= document.getElementById("theme-toggle");
         themebutton.addEventListener("click", function(event){
            event.preventDefault();
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark")){
            themebutton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
        else{
            themebutton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
      })        