var timer = null;

var changestate = function(state){
	document.body.className = 'bodystate'+state;
	clearInterval(timer);
	var countdownnumber = 10;
	document.getElementById('countdown').innerHTML = countdownnumber;

	if (state== 2){
		timer = setInterval(function(){
			countdownnumber = countdownnumber -1;
			document.getElementById('countdown').innerHTML = countdownnumber;
			if (countdownnumber == 0){
				changestate(3)
			}
		},900);
		
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