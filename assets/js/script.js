let menu = document.getElementById("menu");
let   navs = menu.getElementsByClassName("nav-item");

for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener("click", function(){
        let active = document.getElementsByClassName("active")
    
        active[0].className = active[0].className.replace("active", " ");
  
        this.className += " active";
    })
}
// $( '#navbarNavDropdown .navbar-nav a' ).on('click',  
// function () { 
// $( '#navbarNavDropdown .navbar-nav' ).find( 'li.active' ) 
// .removeClass( 'active' ); 
// $( this ).parent( 'li' ).addClass( 'active' ); 
// });