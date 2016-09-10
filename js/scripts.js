var div = document.createElement('DIV');
document.body.appendChild(div);
div.className = 'main';

var bloco = document.createElement('DIV');
div.appendChild(bloco)
bloco.className = 'bloco';
var p = document.createElement('P');
div.appendChild(p);

document.addEventListener('mousemove', function(event){
  var x = event.clientX /4;
  var y = event.clientY /4;
  //div.textContent = 'X: ' + x + ', ' + 'Y: ' + y;
  p.textContent = 'X: ' + x + ', ' + 'Y: ' + y;
  //div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
    if(y <= y || x <= y){
      //console.log('Gonna Dark!');
      //bloco.className = 'animabloco';
      bloco.style.top = -y + 'px';
      bloco.style.left = -(x - bloco.style.width / 2) + 'px';
      var bgMoveX = x / 5;
      var bgMoveY = y / 5;
      div.style.backgroundPosition = -bgMoveX + 'px ' + (-bgMoveY) + 'px';
    }else {
      bloco.className = 'bloco';
    }




});
