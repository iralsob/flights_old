var flights = document.getElementsByClassName('flight');
var cells = document.getElementsByClassName('flight-info');


//при изменении ширины экрана браузера в табло 
//автоматически скрываются и/или сокращаются 
//значения наименее важных столбцов (например, 
//при ширине 1000 пикселей вы показываете всю таблицу, 
//при ширине 900 пикселей — убираете название авиакомпании, оставляя только логотип, 
//800 пикселей — сокращаете название воздушного судна (Boeing 737-800 -> B737) 
//и так далее);

window.onload = function() {
	
	//в дополнение к предыдущему пункту сделайте так, 
	//чтобы по клику на соответствующую строчку 
	//в выплывающем окне показывались все данные рейса;
	//два чекбокса над самим табло: прилёт и вылет, 
	//по нажатию показываются только соответствующие рейсы.
    for(var i = 0; i < flights.length; i++) {
        var flight = flights[i];
        flight.onclick = function() {
            //при клике выводим информацию о рейсе
            console.log(11);
        };
    }

    //по наведению курсора на определённое место 
	//в табло контрастным цветом выделяются 
	//соответствующие строка и столбец;
    for(var i = 0; i < cells.length; i++) {
	    var cell = cells[i];
	    var cellClass;
	    cell.onmouseover = function(e) {
	        var cellsWithSameClass = document.getElementsByClassName(this.className);
	        console.log(this.className);
	        console.log(cellsWithSameClass);
	        for (var j=0; j < cellsWithSameClass.length; j++) {
	        	var cellWithSameClass = cellsWithSameClass[j];
	        	cellClass = cellWithSameClass.className;
	        	cellWithSameClass.className = cellWithSameClass.className + " hover";
	        }
	    };
	    cell.onmouseout = function(e) {
	        var cellsWithSameClass = document.getElementsByClassName(this.className);
	        for (var j=0; j < cellsWithSameClass.length; j++) {
	        	var cellWithSameClass = cellsWithSameClass[j];
	        	cellWithSameClass.className = cellClass;
	        }
	    };
	}

	//количество отображаемых данных по высоте 
	//больше высоты экрана, при прокрутке заголовок таблицы 
	//приклеивается к верхней части видимой области окна браузера;
	window.addEventListener('scroll', function() {
		var height = document.getElementsById('panel').offsetHeight();
		var header = document.getElementByClassName("flights-header");
		if ( window.scrollHeight > height ){		
			header.className = header.className + " stickly";
		} else {
			header.className = "flights-header";
		}
	});

	//два чекбокса над самим табло: прилёт и вылет, 
	//по нажатию показываются только соответствующие рейсы.
	var btnDeparture = document.getElementById('departure');
	var btnArrival = document.getElementById('arrival');
	var isArrivalFlightsHidden = 0;
	var isDepartureFlightsHidden = 0;

	btnArrival.onclick = function () {
		var arrivalFlights =  document.getElementsByClassName(btnArrival.id);
		for (var i=0; i<arrivalFlights.length; i++) {
			var arrivalFlight = arrivalFlights[i];
			if(isArrivalFlightsHidden === 0){
				isArrivalFlightsHidden = 1;
				arrivalFlight.className = arrivalFlight.className + ' hidden';
			} else {
				isArrivalFlightsHidden = 0;
				arrivalFlight.className = 'flight arrival';
			}
			if(isDepartureFlightsHidden === 0){
				departureFlight.className = departureFlight.className + ' hidden';
			} else {
				departureFlight.className = 'flight arrival';
			}
		}
	};

	btnDeparture.onclick = function () {
		var departureFlights =  document.getElementsByClassName(btnArrival.id);
		for (var i=0; i<departureFlights.length; i++) {
			var departureFlight = departureFlights[i];
			if(isDepartureFlightsHidden === 0){
				isDepartureFlightsHidden = 1;
				departureFlight.className = departureFlight.className + ' hidden';
			} else {
				isDepartureFlightsHidden = 0;
				departureFlight.className = 'flight arrival';
			}
			if(isArrivalFlightsHidden === 0){
				arrivalFlight.className = arrivalFlight.className + ' hidden';
			} else {
				arrivalFlight.className = 'flight arrival';
			}
		}
	};
}