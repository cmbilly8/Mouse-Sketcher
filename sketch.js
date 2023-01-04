function makeDivs(n){ 
    var e = sketchBox; // whatever you want to append the rows to: 
    for(var i = 0; i < n; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= n; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridSquare";
          cell.addEventListener('mouseenter', (event) => {event.target.style.backgroundColor = currentColor});
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    }
  }
let currentColor = 'black';
const sketchBox = document.querySelector('#sketchBox');
const colorBtns = document.querySelectorAll('.colorChoose');
makeDivs(14);
const resetBtn = document.querySelector("#reset");
const cells = document.querySelectorAll('.gridSquare');
for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', function (event) {
        currentColor = event.target.innerText;
    })
}
resetBtn.addEventListener('click', function() {
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
});
