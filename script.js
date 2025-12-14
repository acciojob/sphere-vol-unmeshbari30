function volume_sphere() {
    //Write your code here
        event.preventDefault();
        let inp = document.getElementById('radius')
        let volumeInp = document.getElementById("volume")
        let r = Number(inp.value);

        if(isNaN(r) || r<=0){
            volumeInp.value = "NaN"   
            return;
        }
        let volume = (4/3) * Math.PI * r *r*r;
        volumeInp.value = volume;
    
    }   

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
