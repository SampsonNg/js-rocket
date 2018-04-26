console.log('Hiiiii friends')
var car ={
	make:'toyota',
	type:'altis',
	year: 2018,
	isturnon:false,
	numberofseats:4,
	seats:[
	'seat1',
	'seat2',
	'seat3',
	'seat4'
	],
	switchCar: function(ison){
		if (ison == true) {
			this.isturnon = true
			return ('Car is now turned on.')
		} else {
			this.isturnon = false
			return('Car is now turned off.')
		}

	}
}