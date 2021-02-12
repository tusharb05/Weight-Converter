let outputArea = document.getElementById("output");
outputArea.style.visibility = "hidden";

document.querySelector('.lbs-input').addEventListener('input', (e) => {
    e.preventDefault();
    outputArea.style.visibility = 'visible';
    let value = document.querySelector('.lbs-input').value;
    document.querySelector('#kg').innerHTML = value/2.2046;
    document.querySelector('#gram').innerHTML = value/0.0022046;
    document.querySelector('#oz').innerHTML = value*16;
})
