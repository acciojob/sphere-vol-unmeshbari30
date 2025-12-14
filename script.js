function volume_sphere() {
	event.preventDefault();
	let radius = document.getElementById("radius")
	let volume = document.getElementById("volume")

	let input = Number(radius.value)

	if(isNaN(input) || input<=0){
		volume.value = "NaN"
		return;	
	}

	let ans = (4/3) * Math.PI * input * input * input
	volume.value = ans.toFixed(4)
	
}   

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
