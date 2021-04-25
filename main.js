let container = document.getElementById('container');
let square = document.createElement('div');
let i = 0


  function game() {
    for(i; i < 16; i++) {
      for(let j = 0; j < 16; j++){
        square = document.createElement('div')
        square.className = 'square';
        container.appendChild(square);
        square.addEventListener('mouseenter', (e) => {
          const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
          e.target.style.backgroundColor = rndCol;
        });
      }
    }
  }
  game();
  
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

  btn.addEventListener('click', () => {
    let rows = prompt('number of rows');
    let col = prompt('number of columns');
    for(i; i < rows; i++) {
      for(let j = 0; j < col; j++){
        square = document.createElement('div')
        square.className = 'square';
        container.appendChild(square);
        square.addEventListener('mouseenter', (e) => {
          const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
          e.target.style.backgroundColor = rndCol;
        });
      }
    }
  })






