var ln1 = document.getElementById("ln1").innerHTML;
var ln2 = document.getElementById("ln2").innerHTML;
var hasil;
var fn1 = document.getElementById("n1").value;
var validasiAngka = /^[0-9]+$/;

function bersih(){
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("n1").focus();
    hasil = "";
}

function hitung(){
    if(ln1 == "Celsius (<sup>o</sup>C):"){
        hasil = fn1 * (9/5) + 23;
    }else{
        hasil = fn1 * (5/9) - 23 ;
    }
    document.getElementById("n2").value = hasil;
    //console.log(hasil);
}

function bkonClick(){
    fn1 = document.getElementById("n1").value;
    if(fn1.trim() == ""){
        alert("Harap Input Nilai");
        bersih();
    }else{
        if(fn1.match(validasiAngka)){
            hitung();
        }else{
            alert("Harap Input dengan Angka");
            bersih();
        }
    }
}

function bresClick(){
    bersih();
}

function brevClick(){
    if(ln1 == "Celsius (<sup>o</sup>C):"){
        document.getElementById("ln1").innerHTML = "Fahrenheit (<sup>o</sup>F):";
        document.getElementById("ln2").innerHTML = "Celsius (<sup>o</sup>C):";
    }else{
        document.getElementById("ln1").innerHTML = "Celsius (<sup>o</sup>C):"; 
        document.getElementById("ln2").innerHTML = "Fahrenheit (<sup>o</sup>F):";
    }
    console.log(ln1);
    ln1 = document.getElementById("ln1").innerHTML;
    ln2 = document.getElementById("ln2").innerHTML;
    fn1 = document.getElementById("n1").value;
    if(fn1.trim() == ""){
        bersih();
    }else{
        if(fn1.match(validasiAngka)){
            hitung();
        }else{
            alert("Harap Input dengan Angka");
            bersih();
        }
    }
}

