

var img1 = document.getElementById("ava1");
var center = document.getElementById("centerBox");
var bottom = 0;
var left = 0;
var avaIm = document.getElementById("ava1");
var height = avaIm.clientHeight;

document.getElementById("ava2").addEventListener("click", function(){
            img1.src = "ava2.png";

            })

document.getElementById("ava11").addEventListener("click", function(){
             img1.src = "ava1.png";
          
            })

document.getElementById("buttonly").addEventListener("click", function(){
             document.getElementById("menu").style.right = "0px";
          
            })


document.getElementById("up").addEventListener("click", function(){
             bottom = bottom + 7;
             center.style.bottom = bottom + "px";
          
            })

document.getElementById("down").addEventListener("click", function(){
             bottom = bottom - 7;
             center.style.bottom = bottom + "px";
          
            })


document.getElementById("left").addEventListener("click", function(){
             left = left - 7;
             center.style.left = left + "px";
          
            })

document.getElementById("right").addEventListener("click", function(){
             left = left + 7;
             center.style.left = left + "px";
          
            })


document.getElementById("bigger").addEventListener("click", function(){
             height = (height*1.01);
             document.getElementById("ava1").style.height = height + "px";
     
            })


document.getElementById("smaller").addEventListener("click", function(){
          height = (height*0.99);
          document.getElementById("ava1").style.height = height + "px";
         
            })

document.getElementById("ava1").addEventListener("click", function(){
          document.getElementById("up").style.display = "none";
          document.getElementById("down").style.display = "none";
          document.getElementById("right").style.display = "none";
          document.getElementById("left").style.display = "none";

          document.getElementById("ava11").style.display = "none";
          document.getElementById("ava2").style.display = "none";
          document.getElementById("bigger").style.display = "none";
          document.getElementById("smaller").style.display = "none";

         
            })

document.getElementById("header").addEventListener("click", function(){
          document.getElementById("up").style.display = "inline-block";
          document.getElementById("down").style.display = "inline-block";
          document.getElementById("right").style.display = "inline-block";
          document.getElementById("left").style.display = "inline-block";

          document.getElementById("ava11").style.display = "inline-block";
          document.getElementById("ava2").style.display = "inline-block";
          document.getElementById("bigger").style.display = "inline-block";
          document.getElementById("smaller").style.display = "inline-block";
         
            })



document.getElementById("but1").addEventListener("click", function(){
        document.getElementById("but11").style.display = "inline-block";
            })


document.getElementById("but2").addEventListener("click", function(){
          
        document.getElementById("but22").style.display = "inline-block";

            })


document.getElementById("but3").addEventListener("click", function(){
    
        document.getElementById("but33").style.display = "block";         
            })



   