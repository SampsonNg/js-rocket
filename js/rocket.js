var timer = null;

var changestate = function(state){
	document.body.className = 'bodystate'+state;
	clearInterval(timer);
	var countdownnumber = 10;
	document.getElementById('countdown').innerHTML = countdownnumber;
	document.getElementById('nervous').className= 'nervous';
	document.getElementById('cantwait').className= 'cantwait';

	if (state== 2){
		timer = setInterval(function(){
			countdownnumber = countdownnumber -1;
			document.getElementById('countdown').innerHTML = countdownnumber;
			if (countdownnumber==5) {
				document.getElementById('nervous').className= 'nervous show';
			};
			if (countdownnumber==3) {
				document.getElementById('nervous').className= 'nervous';
				document.getElementById('cantwait').className= 'cantwait show';
			}
			if (countdownnumber == 0){
				document.getElementById('cantwait').className= 'cantwait';
				changestate(3)
			}
		},800);
		
	}else if(state == 3){
		var success = setTimeout(function(){
			var randomnumber = Math.round(Math.random()*10)
			console.log('randomnumber was '+randomnumber)
			if (randomnumber >4){
				changestate(4);
			}else{
				changestate(5);
			}
		}, 3000);
	}
}