const kurs = 14500;
const idr = document.getElementById("rupiah");
const usd = document.getElementById("dollar");

usd.addEventListener("input", function(ev){
    const value = ev.currentTarget.value;
    console.log(value);
    const valueUsd = value * kurs;
    idr.value = valueUsd.toFixed(2);
});

idr.addEventListener("input", function(ev){
    const value = ev.currentTarget.value;
    console.log(value);
    const valueIdr = value / kurs;
    usd.value = valueIdr.toFixed(2);
});