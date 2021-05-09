var firstName=prompt('What is your first name ?');

alert('Hello '+ firstName);

var favsport=prompt('What is your favourite sport ?');

if (favsport=='basketball'){
  document.write('<img src=https://cdn.britannica.com/w:1100/44/193844-131-1E4A9F84/ball-net-basketball-game-arena.jpg width=350px>')}

else if (favsport=='football'){
  document.write('<img src="https://ebigh.com/wp-content/uploads/2021/04/football-soccer.jpg" width=350px>');
}

else if (favsport=='tennis'){
  document.write('<img src="https://photoresources.wtatennis.com/photo-resources/2019/08/15/dbb59626-9254-4426-915e-57397b6d6635/tennis-origins-e1444901660593.jpg?width=1024&height=512" width=350px>');}

else{
  document.write('<h2> choose your favourite sport </h2>');
  document.write('<img src="https://cdn2.f-cdn.com/contestentries/1216494/10229632/5a4478eb5e5fe_thumb900.jpg" width=350px>');
}

var ahmad =5;
if (ahmad==5){
  console.log(true)
}
else{
  console.log(false)

}

function sportFav(){

var favsport=prompt('what do you like more basketball or football?!');

while(favsport!=='basketball' && favsport!=='football'){
  favsport= prompt('please only answer with basketball or football ');
}


var result=''

if (favsport=='basketball'){
  result='<img src=https://cdn.britannica.com/w:1100/44/193844-131-1E4A9F84/ball-net-basketball-game-arena.jpg width=350px>'}
 
else if (favsport=='football') {
    result='<img src="https://ebigh.com/wp-content/uploads/2021/04/football-soccer.jpg" width=350px>';}
else {
  document.write('<h2> please select basketball or football next time</h2>');}


return result;
}

//document.write(sportFav());

var ratingStars=function(){
var star = prompt('how many stars do you rate our website?');

if (star > 5) {
  star = 5;
}
var starimg='';
for (var i = 0; i < star; i++) {

  starimg += '<img src="https://cdn1.iconfinder.com/data/icons/hand-signs-emotions-bright-flat-design/128/star-favorite-rating-important-512.png" width="40px">';
}

return starimg;
}
document.write(ratingStars());

var img = prompt('how many images about basketball you need to show ?');

for (var i=0;i < img ;i++){
  document.write('<img src="https://thumbs.dreamstime.com/b/burning-basketball-fire-background-backgrounds-168018631.jpg" width="200px">');
}

