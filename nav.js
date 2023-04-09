
//let meel = document.getElementById("mybody")
function hidePruduct(){
    var pelement = document.getElementById("mega-menu-full-dropdown");
    var element = document.getElementById("mega-menu-full-dropdown1");
  element.classList.add("hidden");
  const myhero = document.querySelector("#hero")
  if(pelement.classList.contains('hidden')){
    myhero.style.opacity = "0.1";
    console.log("hhh")
  }else{
    myhero.style.opacity = "1";

  }
}
function hideCstudy(){
    var element = document.getElementById("mega-menu-full-dropdown");
    var pelement =document.getElementById("mega-menu-full-dropdown1");
  element.classList.add("hidden");
  const myhero = document.querySelector("#hero")
  if(pelement.classList.contains('hidden')){
    myhero.style.opacity = ".1";
  }else{
    myhero.style.opacity = "1";

  }
  

}
document.querySelector("#hero").addEventListener("click", (event)=>{
    hideCstudy();
    hidePruduct();
    const myhero = document.querySelector("#hero")
  myhero.style.opacity = "1";

});
