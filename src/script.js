document.querySelector('.container').style.visibility = 'hidden';
let outputArea = document.getElementById("output");
outputArea.style.visibility = "hidden";

let measure1 = document.querySelector('.measure1');
let measure2 = document.querySelector('.measure2');
let measure3 = document.querySelector('.measure3');
let measure4 = document.querySelector('.measure4');
let head1 = document.querySelector('.head1');
let head2 = document.querySelector('.head2');
let head3 = document.querySelector('.head3');
let output1 = document.querySelector('#output1');
let output2 = document.querySelector('#output2');
let output3 = document.querySelector('#output3');
let unitInput = document.querySelector('#unit-input');
let container = document.querySelector('.container');
let valueInput = document.querySelector('.value-input');

measure1.addEventListener('change', measure1OnClick);
function measure1OnClick(e) {
	e.preventDefault();
	unitInput.style.display = 'none';
	container.style.visibility = 'visible';
	valueInput.placeholder = 'Enter Kgs...';

	valueInput.addEventListener('input', (e) => {
		let kgValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		head1.innerHTML = '<h4>Grams: </h4>';
		head2.innerHTML = '<h4>Ounces: </h4>';
		head3.innerHTML = '<h4>Pounds: </h4>';
		output1.innerHTML = kgValue*1000;
		output2.innerHTML = kgValue*35.274;
		output3.innerHTML = kgValue*2.20462;
	})
}

measure2.addEventListener('change', measure2OnClick);
function measure2OnClick(e) {
	e.preventDefault();
	unitInput.style.display = 'none';
	container.style.visibility = 'visible'
	valueInput.placeholder = 'Enter Ounces...';

	valueInput.addEventListener('input', (e)=>{
		let ozValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		head1.innerHTML = '<h4>Grams: </h4>';
		head2.innerHTML = '<h4>Kilograms: </h4>';
		head3.innerHTML = '<h4>Pounds: </h4>';
		output1.innerHTML = ozValue*28.3495;
		output2.innerHTML = ozValue*0.0283495;
		output3.innerHTML = ozValue*0.0625;
	})
}

measure3.addEventListener('change', measure3OnClick);
function measure3OnClick(e) {
	e.preventDefault();
	unitInput.style.display = 'none';
	container.style.visibility = 'visible'
	valueInput.placeholder = 'Enter Pounds...';

	valueInput.addEventListener('input', (e)=>{
		let lbsValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		head1.innerHTML = '<h4>Grams: </h4>';
		head2.innerHTML = '<h4>Kilograms: </h4>';
		head3innerHTML = '<h4>Ounces: </h4>';
		output1.innerHTML = lbsValue*453.592;
		output2.innerHTML = lbsValue*0.453592;
		output3.innerHTML = lbsValue*16;
	})
}

measure4.addEventListener('change', measure4OnCLick);
function measure4OnCLick(e) {
	e.preventDefault();
	unitInput.style.display = 'none';
	container.style.visibility = 'visible'
	valueInput.placeholder = 'Enter Grams...';

	document.querySelector('.value-input').addEventListener('input', (e)=>{
		let gValue = document.querySelector('.value-input').value;
		outputArea.style.visibility = 'visible';
		head1.innerHTML = '<h4>Kilograms: </h4>';
		head2.innerHTML = '<h4>Pounds: </h4>';
		head3.innerHTML = '<h4>Ounces: </h4>';
		output1.innerHTML = gValue/1000;
		output2.innerHTML = gValue*0.00220462;
		output3.innerHTML = gValue*0.035274;
	})
}

