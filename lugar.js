var cartas = [];
var alumne
var lugarAsignado

function precargarImagenes() {
  opcionesImagenes.forEach(function(src) {
      var img = new Image();
      img.src = src;
  });
}

window.onload = function() {
  precargarImagenes();
};

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDmszu_uKlSzNKG5iBTFyQfIHGcszlVGWg",
    authDomain: "lugar-392b5.firebaseapp.com",
    databaseURL: "https://lugar-392b5-default-rtdb.firebaseio.com",
    projectId: "lugar-392b5",
    storageBucket: "lugar-392b5.appspot.com",
    messagingSenderId: "787538307276",
    appId: "1:787538307276:web:a23e5a90df4e46c6b8fa69",
    measurementId: "G-4GGNM3T16K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.database();

  var baseDatos=firebase.database()
  var ref = baseDatos.ref("creadores");
  
  
  function gotData(data){
    var registro = data.val();
    var keys=Object.keys(registro).reverse();
    console.log(keys)
    for (var i=0; i<10; i++){
        var k = keys[i];
        var nombre= registro[k].nombre
        var lugar= registro[k].lugar
        document.getElementById("demo").innerHTML += (nombre +": " + lugar+"<br>")
    }
   
  }
function errData(err){
    console.log("Error!")
}


opcionesLugares=["desde el poema que tengas más cerca",
  "desde una conversación vieja de whatsapp",
  "desde un tuit que tengas guardado",
  "desde el retrato de la característica de lo que más te guste de tu mejor amigue",
  "desde una obsesión que te duela",
  "con algo que no exista en internet",
  "usando un color que detestes",
  "un retrato de tu archimeganémesis",
  "desde algo que sea una basura total",
  "una escena de la última novela que leíste",
  "con los subrayados de los libros que tengas más cerca",
  "desde un libro de $5000 que encuentres en una librería de usados",
  "engañando a una máquina",
  "sobre alguna enfermedad común de otro siglo",
  "arquitectura para fantasmas",
  "sobre el primer libro que recuerda tu papá",
  "una conspiración de tiktok",
  "sobre un comportamiento de animales no humanos que te maraville, te de miedo o te parezca rarísimo",
  "con la imagen de tu ex",
  "la exaltación de un error"]
opcionesImagenes=["img/01.png","img/02.png","img/03.png","img/04.png", "img/05.png", "img/06.png", "img/07.png","img/08.png","img/09.png","img/10.png","img/11.png","img/12.png","img/13.png", "img/14.png","img/15.png","img/16.png","img/17.png","img/18.png"]

function SortearCartas(){
  
  var vacio = document.forms["FormularioAlumne"]["text_id"].value;
  if(vacio == ""){
    alert("completá tu nombre / alias / apodo / pseudónimo ")
  }else{

        alumne = document.getElementById("text_id").value;
        document.getElementById("FormularioAlumne").hidden=true
        var posicion=Math.floor(Math.random()*18);
        var posicion2=Math.floor(Math.random()*18);
        var posicion3=Math.floor(Math.random()*18);

        
        //console.log(opciones[posicion]);
        var elegida1=opcionesImagenes[posicion];
        var elegida2=opcionesImagenes[posicion3]
        var elegida3=opcionesImagenes[posicion2]
    
    
        var carta1= document.getElementById("carta1")
        carta1.src=elegida1
        var carta2= document.getElementById("carta2")
        carta2.src=elegida2
        var carta3= document.getElementById("carta3")
        carta3.src=elegida3

        var x = document.getElementById("div 1");
        if (x.style.display === "none") {
           x.style.display = "block";
         } else {
           x.style.display = "none";
  }

        event.preventDefault();
  }
        
        
    


};

function SortearLugar(){
    //imprimir en pantalla Math.random(lugar)
    var posicion2=Math.floor(Math.random()*opcionesLugares.length);
	//console.log(opciones[posicion]);
	lugarAsignado=opcionesLugares[posicion2];
    document.getElementById("lugarAsi").innerHTML = lugarAsignado
    var f = document.getElementById("content");
    if (f.style.display === "none") {
      f.style.display = "block";
    } else {
      f.style.display = "none";
    }
     
    EnviarDatos();

};

function EnviarDatos(){
    var data={
      nombre:alumne,
      lugar:lugarAsignado,
  }
  ref.push(data);

            
};

function TraerDatos(){
    ref.on("value", gotData, errData)
    var f = document.getElementById("cartas");
    var volver = document.getElementById("volver");
    var lista = document.getElementById("btn-lista");
    if (f.style.display === "none") {
      f.style.display = "block";
      volver.style.display = "none";
      lista.disabled = false
    } else {
      f.style.display = "none";
      volver.style.display = "block";
      lista.disabled = true
    }
    var x = document.getElementById("div 1");
      x.style.display = "none";
      volver.style.display = "block";

};
function volver(){
  location.reload();
}