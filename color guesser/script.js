body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?landscape'
body.style.backgroundImage = "url("+url+")"


function randomNumber() {
  return Math.floor(Math.random() * (max - min)) + min;
}


clrs = {
  1 : ["white" , "rgb(255,255,255)"],
  2 : ["red" , "rgb(255,0   ,0   )"],
  3 : ["blue" ,  "rgb(0  ,0  ,255)"],
  4 : ["green" , "rgb(0  ,255,0  )"],
  5 : ["grey"  , "rgb(97 ,97 ,97 )"],
  6 : ["yellow", "rgb(234, 255, 0)"],
  7 : ["cyan",  "rgb( 0, 255, 255)"],
  8 : ["orange", "rgb(255, 153, 0)"],
  9 : ["purple", "rgb(174, 0, 255)"],
  10: ["pink",   "rgb(255, 0, 212)"],

};

min = 1;
max = Object.keys(clrs).length;
chosed = randomNumber();
clrName = clrs[chosed][0];
clrCode = clrs[chosed][1];

panel = document.getElementById("displayy");
panel.style.backgroundColor = clrCode;

function sub(){
  r = document.getElementById("inp");
  if (r.value != ""){
    ll = r.value.toLowerCase();
    if (ll == clrName){
      alert("right answer");
      reset();
      r.value = "";
    }
    else {
      alert("try again");
    }
  }
  else {
    alert("please enter a color");
  }
}


function reset() {
  chosed = randomNumber();
  clrName = clrs[chosed][0];
  clrCode = clrs[chosed][1];

  panel = document.getElementById("displayy");
  panel.style.backgroundColor = clrCode;

}
