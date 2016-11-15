var c;
setInterval(function(){
  updateCount(getCount(),1);
  updateRupees(getCount());
}, 1+c);

function getCount(){
return +$(".count").html();
}

function updateCount (x,y){
$(".count").html(x + y);
c=c*10;
console.log(c);
}

function updateRupees(x){
$(".rupees").html(Math.round(x * 3500 / 3));
}
