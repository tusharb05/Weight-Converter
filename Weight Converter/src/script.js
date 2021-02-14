document.querySelector('.container').style.visibility = 'hidden';
let outputArea = document.getElementById("output");
outputArea.style.visibility = "hidden";

let measure1 = document.querySelector('.measure1');
let measure2 = document.querySelector('.measure2');
let measure3 = document.querySelector('.measure3');
let measure4 = document.querySelector('.measure4');

measure1.addEventListener('change', measure1OnClick);
function measure1OnClick(e) {
	e.preventDefault();
	document.querySelector('#unit-input').style.display = 'none';
	document.querySelector('.container').style.visibility = 'visible';
	document.querySelector('.value-input').placeholder = 'Enter Kgs...';

	document.querySelector('.value-input').addEventListener('input', (e) => {
		let kgValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		document.querySelector('.head1').innerHTML = '<h4>Grams: </h4>';
		document.querySelector('.head2').innerHTML = '<h4>Ounces: </h4>';
		document.querySelector('.head3').innerHTML = '<h4>Pounds: </h4>';
		document.querySelector('#output1').innerHTML = kgValue*1000;
		document.querySelector('#output2').innerHTML = kgValue*35.274;
		document.querySelector('#output3').innerHTML = kgValue*2.20462;
	})
}

measure2.addEventListener('change', measure2OnClick);
function measure2OnClick(e) {
	e.preventDefault();
	document.querySelector('#unit-input').style.display = 'none';
	document.querySelector('.container').style.visibility = 'visible'
	document.querySelector('.value-input').placeholder = 'Enter Ounces...';

	document.querySelector('.value-input').addEventListener('input', (e)=>{
		let ozValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		document.querySelector('.head1').innerHTML = '<h4>Grams: </h4>';
		document.querySelector('.head2').innerHTML = '<h4>Kilograms: </h4>';
		document.querySelector('.head3').innerHTML = '<h4>Pounds: </h4>';
		document.querySelector('#output1').innerHTML = ozValue*28.3495;
		document.querySelector('#output2').innerHTML = ozValue*0.0283495;
		document.querySelector('#output3').innerHTML = ozValue*0.0625;
	})
}

measure3.addEventListener('change', measure3OnClick);
function measure3OnClick(e) {
	e.preventDefault();
	document.querySelector('#unit-input').style.display = 'none';
	document.querySelector('.container').style.visibility = 'visible'
	document.querySelector('.value-input').placeholder = 'Enter Pounds...';

	document.querySelector('.value-input').addEventListener('input', (e)=>{
		let lbsValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		document.querySelector('.head1').innerHTML = '<h4>Grams: </h4>';
		document.querySelector('.head2').innerHTML = '<h4>Kilograms: </h4>';
		document.querySelector('.head3').innerHTML = '<h4>Ounces: </h4>';
		document.querySelector('#output1').innerHTML = lbsValue*453.592;
		document.querySelector('#output2').innerHTML = lbsValue*0.453592;
		document.querySelector('#output3').innerHTML = lbsValue*16;
	})
}

measure4.addEventListener('change', measure4OnCLick);
function measure4OnCLick(e) {
	e.preventDefault();
	document.querySelector('#unit-input').style.display = 'none';
	document.querySelector('.container').style.visibility = 'visible'
	document.querySelector('.value-input').placeholder = 'Enter Grams...';

	document.querySelector('.value-input').addEventListener('input', (e)=>{
		let gValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		document.querySelector('.head1').innerHTML = '<h4>Kilograms: </h4>';
		document.querySelector('.head2').innerHTML = '<h4>Pounds: </h4>';
		document.querySelector('.head3').innerHTML = '<h4>Ounces: </h4>';
		document.querySelector('#output1').innerHTML = gValue/1000;
		document.querySelector('#output2').innerHTML = gValue*0.00220462;
		document.querySelector('#output3').innerHTML = gValue*0.035274;
	})
}

