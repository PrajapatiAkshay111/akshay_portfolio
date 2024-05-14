// function myFunction() {
//     document.getElementById("work").style.backgroundColor = "lavender";
//     document.getElementById("work").style.Color = "black";
//   }



  var a = document.querySelector("#work")
  let flag = 0

  a.addEventListener("click",function(){
    if(flag == 0){
      a.style.color = "black"
      a.style.backgroundColor = "yellow"
      flag = 1
    }else{
      a.style.color = "white"
      a.style.backgroundColor = "red"
      flag = 0
    }
  })