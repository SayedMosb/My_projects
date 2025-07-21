let btn =document.getElementById("btn");
let span =document.getElementById("span");

let one =document.getElementById("one");
let two =document.getElementById("two");


let search =document.getElementById("search")


btn.addEventListener("click",function(){
let onee =Number(one.value);
let twoo =Number(two.value);
   if(search.value === "Multiplication"){
    span.innerHTML ="$"+(onee*twoo).toFixed(2);
   }else if (search.value === "Substraction"){
     span.innerHTML ="$"+Math.abs(onee - twoo).toFixed(2);

   }else if (search.value === "summition"){
     span.innerHTML ="$"+Math.abs(onee+ twoo).toFixed(2);

   }else if(search.value === "Divition"){
      span.innerHTML =Math.abs(onee/ twoo).toFixed(2);
   }else if(search.value === "Power"){
      span.innerHTML ="$"+(onee** twoo).toFixed(2);
   }
})














