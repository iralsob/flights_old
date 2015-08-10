var flights = document.getElementsByClassName('flight');

window.onload = function() {    
    for(var i = 0; i < flights.length; i++) {
        var flight = flights[i];
        flight.onclick = function() {
            //при клике выводим информацию о рейсе
        }
    }
}
//  window.addEventListener('scroll', function() {
// 	var height = document.getElementsById('panel').offsetHeight();
// 	var header = document.getElementByClassName("flights-header");
// 	var headerPosition = 
// 	if ( window.scrollHeight > height ){		
// 		header.className = header.className + " stickly";
// 	} else {
// 		header.className = "flights-header";
// 	}
// });
      
flights.onmouseover = function(e) {
  e = e || window.event;
    
  var cell, i, target = e.target || e.srcElement;
    
  if (target.tagName == 'td') {
    var cells = this.getElementsByTagName('td');
      
    for (i = 0; i < cells.length; i++) {
      cell = cells[i];
        
      if (cell == target) {
      	cell.style.backgroundColor = 'green';
      } else {
        cell.style.backgroundColor = target.className == cell.className ? 'yellow' : 'transparent';
      }
    }
  }
};