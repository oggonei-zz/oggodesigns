AOS.init();

//menu scroll

// let ubicacionPrincipal = window.pageYOffset;

// window.addEventListener ("scroll" , function () {
//   let desplazamientoActual = window.pageYOffset;
//   if ( ubicacionPrincipal >= desplazamientoActual ) {
//     this.document.querySelectorAll(".menu")[0].style.top="10px";
//   } else {
//     this.document.querySelectorAll(".menu")[0].style.top="-100px";
//   }
//   ubicacionPrincipal = desplazamientoActual;
// })

//menu

//  let enlacesHeader = document.querySelectorAll(".nav")[0];
//  let semaforo = true;

//  console.log(enlacesHeader)

//  document.querySelectorAll(".menu")[0].addEventListener("click", function(){
//    if(semaforo) {
//      document.querySelectorAll(".menu")[0].style.color="fff"
//      semaforo=false;
//    } else {
//      document.querySelectorAll(".menu")[0].style.color="000"
//      semaforo=true;
//    }
 
//    enlacesHeader.classList.toggle("menu-desplegable");
//  })

//menu desaparece


 const menu = document.querySelector(".menu");
 const nav = document.querySelector(".nav");
 const icon = document.getElementById("example");

 menu.addEventListener("click", () =>{
   nav.classList.toggle("menu-desplegable");
   console.log("abre menu")
 })

 window.addEventListener("click", e=>{
  const a = e.target;
  console.log("actual",a);
  console.log("menu",menu);
  console.log("nav",nav);
  console.log("icon",icon);
   if(nav.classList.contains("menu-desplegable") && e.target != nav && e.target != icon ) {
     console.log("Cierra");
     nav.classList.toggle("menu-desplegable");
   } 

 })