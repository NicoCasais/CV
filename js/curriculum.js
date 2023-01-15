document.getElementById("boton_personal").addEventListener("click",function() {
    document.getElementById("personal").style.display="block";
    document.getElementById("habilidades").style.display="none";
    document.getElementById("experiencia").style.display="none";
});

document.getElementById("boton_experiencia").addEventListener("click",function() {
    document.getElementById("experiencia").style.display="block";
    document.getElementById("personal").style.display="none";
    document.getElementById("habilidades").style.display="none";
});

document.getElementById("boton_habilidades").addEventListener("click",function() {
    document.getElementById("habilidades").style.display="block";
    document.getElementById("experiencia").style.display="none";
    document.getElementById("personal").style.display="none";
});

