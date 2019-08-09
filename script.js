// alert("hello");
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
// alert(randomNumber1);
var img1 = document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
var img2 = document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player one win";
  // break;
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player two win";
  // break;
} else if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "both player are equal";
  // break;
}else{
  document.querySelector("h1").innerHTML = "player one win";
}
