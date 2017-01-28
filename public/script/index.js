
var stringChar = "AM ADVISORY. Is founded with a broad vision to boost business base of Nepalese community living in Australia through its 3-lines of integrated services.";
var strArray = stringChar.split("");

var photoes = [  "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/14354888_10153971476399001_1788709991634649976_n.jpg?oh=b2b85ae8660511d669ce8b92f8bba000&oe=5918BF56",
                "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/13445530_310292935970180_3600618690176820820_n.jpg?oh=d533b3982d5ff754302be88c3f621aa7&oe=59099DDA",
                "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/13062265_286346328364841_5938333989839573265_n.jpg?oh=86cac48a12789e1f5c0fcf4592f9f991&oe=591EB8E7"
    
                ]
function animate(){
    if(strArray.length>0){
   var words= strArray.shift();
    document.getElementById("storyPoint").innerHTML +=words; 
    } else{
        document.getElementById("storyPoint").innerHTML="";
        strArray = stringChar.split("");
        
    }
    
    setTimeout(animate,200);
}

animate();

var index = 0;
var len = photoes.length-1;
function imgSlider(){
    index = index +1;
    if(index>len){
        index=0;
    } else if(index<0){
        index = len;
    }
    document.getElementById("photo").src = photoes[index];
    setTimeout(imgSlider,3000);
}


imgSlider();










