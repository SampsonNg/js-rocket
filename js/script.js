console.log('Hiiiii friends')

var docoolstuff = function(){
	var thatclass = document.getElementById('cool').className;
	if (thatclass == 'cool'){
		document.getElementById('cool').className='cool red';
	}else{
		document.getElementById('cool').className='cool';
	}
};

var car = {
	make:'toyota',
	type:'altis',
	year: 2018,
	isturnon:false,
	numberofseats:4,
	seats:[
	'seat1',
	'seat2',
	'seat3',
	'seat4',
	],
	switchcar: function(ison){
		if (ison == true) {
			this.isturnon = true;
			console.log ('Car is now turned on.')
		} else {
			this.isturnon = false;
			console.log('Car is now turned off.')
		}

	},
	fly:function(){
		alert('fly')
	}
}