
$(document).ready(function(){
console.log('ready!');

//IF user clicks the base option
$(".itemholder2").click(function(event){
event.preventDefault();
document.getElementById("shoestyle1").style.backgroundImage = "url('../root/assets/Customisable shoes/redfront.png')"; 
document.getElementById("shoestyle2").style.backgroundImage = "url('../root/assets/Customisable shoes/blackfront.png')";
document.getElementById("shoestyle3").style.backgroundImage = "url('../root/assets/Customisable shoes/colouredfront.png')";
document.getElementById("shoestyle4").style.backgroundImage = "url('../root/assets/Customisable shoes/greyfront.png')";
});

//IF user clicks the heel option
$(".itemholder3").click(function(event){
event.preventDefault();
document.getElementById("shoestyle1").style.backgroundImage = "url('../root/assets/Customisable shoes/redheel.png')"; 
document.getElementById("shoestyle2").style.backgroundImage = "url('../root/assets/Customisable shoes/blackheel.png')";
document.getElementById("shoestyle3").style.backgroundImage = "url('../root/assets/Customisable shoes/purpleheel.png')";
document.getElementById("shoestyle4").style.backgroundImage = "url('../root/assets/Customisable shoes/greenheel.png')";
});
//IF user clicks the oversole option
$(".itemholder4").click(function(event){
event.preventDefault();
document.getElementById("shoestyle1").style.backgroundImage = "url('../root/assets/Customisable shoes/redoversole.png')"; 
document.getElementById("shoestyle2").style.backgroundImage = "url('../root/assets/Customisable shoes/blackoversole.png')";
document.getElementById("shoestyle3").style.backgroundImage = "url('../root/assets/Customisable shoes/yellowoversole.png')";
document.getElementById("shoestyle4").style.backgroundImage = "url('../root/assets/Customisable shoes/blueoversole.png')";
});
//IF user clicks the lace option

//IF user picks a different colour
$(".itemcustomiser1").click(function(event){
event.preventDefault();
var x = document.getElementById("shoestyle1").style.backgroundImage;
console.log(x);
document.getElementById("itempreview").style.backgroundImage = x ;
});

$(".itemcustomiser2").click(function(event){
event.preventDefault();
var x = document.getElementById("shoestyle2").style.backgroundImage;
console.log(x);
document.getElementById("itempreview").style.backgroundImage = x ;
});

$(".itemcustomiser3").click(function(event){
event.preventDefault();
var x = document.getElementById("shoestyle3").style.backgroundImage;
console.log(x);
document.getElementById("itempreview").style.backgroundImage = x ; 
});

$(".itemcustomiser4").click(function(event){
event.preventDefault();
var x = document.getElementById("shoestyle4").style.backgroundImage;
console.log(x);
document.getElementById("itempreview").style.backgroundImage = x ;
});

});