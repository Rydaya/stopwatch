let $countMin = document.querySelector('.countMin');
let $countSec = document.querySelector('.countSec');
let $countMlsec = document.querySelector('.countMlsec');
let $start = document.querySelector('.start');
let $pause = document.querySelector('.pause');
let $reset = document.querySelector('.reset');

let mlsec = 0;
let sec = 0;
let min = 0;

let checkMin = false;

$start.addEventListener('click', () => {
	let interval = setInterval(() => {
		secCounter();
		minCounter();
		hrCounter();
	}, 10);
	$pause.addEventListener('click', () =>{
		clearInterval(interval);
	})
	$reset.addEventListener('click', () =>{
		clearInterval(interval);
		mlsec = 0;
		sec = 0;
		min = 0;
		$countMlsec.innerHTML = '00';
		$countSec.innerHTML = '00';
		$countMin.innerHTML = '00';
	})
})

function secCounter(){
	mlsec++;
	if(mlsec < 10) {
		$countMlsec.innerHTML = '0' + mlsec;
	} else if(mlsec < 100){
		$countMlsec.innerHTML = mlsec;
	} else {
		$countMlsec.innerHTML = '00';
		mlsec = 0;
	}
}

function minCounter(){
	if(mlsec == '00'){
		sec++;
		if(sec < 10){
			$countSec.innerHTML = '0' + sec;
		} else if(sec < 60){
			$countSec.innerHTML = sec;
		} else {
			$countSec.innerHTML = '00';
			checkMin = true;
			sec = 0;
		}
	} 
}

function hrCounter(){
	if(min == '00' && checkMin){
		min++
		if(min < 10){
			$countMin.innerHTML = '0' + min;
			checkMin = false;
		} else if(min < 60){
			$countMin.innerHTML = min;
			checkMin = false;
		} else {
			$countMin.innerHTML = '00';
			checkMin = false;
			min = 0;
		}
	}
}
