window.onload = function() {
console.log("Tämä kirjoitetaan selaimen konsoliin");
document.getElementById('hello-div').innerHTML = "Welcome";
}
function sayHelloTo(name) {
    alert("Hei " + name + "!");
    console.log("sayHello-funktio suoritettu");
    }
    