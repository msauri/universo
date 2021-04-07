var cartas = [];
var alumne
var lugarAsignado

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
  var ref = baseDatos.ref("registro");
  
  
  function gotData(data){
    var registro = data.val();
    var keys=Object.keys(registro);
    console.log(keys)
    for (var i=0; i< keys.length; i++){
        var k = keys[i];
        var nombre= registro[k].nombre
        var lugar= registro[k].lugar

        console.log(nombre,lugar)
        document.getElementById("demo").innerHTML += (nombre +" " + lugar+"<br>")
    }
   
  }
function errData(err){
    console.log("Error!")
}


opcionesLugares=["Universidad", "Escuela", "Aeropuerto", "Embajada", "Cárcel", "Ministerio", "Biblioteca", "Club", "Cancha", "Discoteca", "Establo", "Mansión", "Vivero", "laboratorio", "Clínica", "Base Espacial", "Baño", "Crucero", "Avión", "Shopping", "Sala de espera", "Oficina", "Consultorio", "Museo", "Cocina", "Vestuario", "Camarín", "Garaje", "Supermercado", "Baldío", "Comercio", "Peluquería", "Colegio", "Taller", "Fábrica", "Galería", "Deposito", "Iglesia-Templo", "Lavadero", "Gimnasio", "Cyber", "Unidad básica", "Estación de Tren/Micro", "Geriátrico", "Boliche", "Salón de fiestas", "Parque de diversiones", "Puerto", "Teatro", "Hospital", "Centro de estética", "Centro cultural", "Spa", "Albergue Transitorio", "Garita", "Natatorio", "Central Atómica", "Cuartel"]
opcionesImagenes=["img/01.png","img/02.png","img/03.png","img/04.png", "img/05.png", "img/06.png", "img/07.png","img/08.png","img/09.png","img/10.png","img/11.png","img/12.png","img/13.png", "img/14.png","img/15.png","img/16.png","img/17.png","img/18.png"]

function SortearCartas(){
  
  var vacio = document.forms["FormularioAlumne"]["text_id"].value;
  if(vacio == ""){
    alert("completa tu nombre y apellido porfa")
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
    var posicion2=Math.floor(Math.random()*58);
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
    if (f.style.display === "none") {
      f.style.display = "block";
    } else {
      f.style.display = "none";
    }
    var x = document.getElementById("div 1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
};


