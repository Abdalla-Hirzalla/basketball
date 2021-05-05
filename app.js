var firstName=prompt('What is your first name ?');
var secondName=prompt('What is your second name ?');
alert('Good Morning '+ firstName +" "+ secondName);

var favsport=prompt('What is your favourite sport ?');

if (favsport=='basketball'){
  document.write('<img src="https://cdn.britannica.com/w:1100/44/193844-131-1E4A9F84/ball-net-basketball-game-arena.jpg" width=350px>');

}
else if (favsport=='football'){
  document.write('<img src="https://m.economictimes.com/thumb/msid-65210785,width-1200,height-900,resizemode-4,imgsize-343861/football1_gettyimages.jpg" width=350px>');

}
else if (favsport=='tennis'){
  document.write('<img src="https://lh3.googleusercontent.com/proxy/i26RG6ATA1HlN05yrteokazhUvQ2QWBzGT3nTpK_tyZz90MMQpDUPzkS-qbgey-_hayEaaPSviCE3542Y3a_R6B7MPe5968zsG4e2fK6No_7eGU9eAgbWfd2z4uFApPH37vbWZXnoPSNLrAehw" width=350px>');}

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
};
alert('welcome to our website'+" "+ firstName +" "+ secondName);