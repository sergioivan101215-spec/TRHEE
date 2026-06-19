import * as THREE from "./three.module.js";
import {RoundedBoxGeometry} from "./RoundedBoxGeometry.js";

export default function ES03(){


// Espacio para colocar los objetos
var base = new THREE.BoxGeometry(700,0.5,700);

var colorbase = new THREE.MeshLambertMaterial({color:0x785412});
var texturasuelo=new THREE.TextureLoader().load("./Assets/pisom.jpg");
var materialTs=new THREE.MeshLambertMaterial({map:texturasuelo});
texturasuelo.wrapS=THREE.RepeatWrapping;
texturasuelo.wrapT=THREE.RepeatWrapping;
texturasuelo.repeat.set(6,6);



var suelo = new THREE.Mesh(base,materialTs);

//scene.add(suelo);
////////////////////
suelo.receiveShadow = true;
var pareda = new THREE.BoxGeometry(700,150,0.5);
var texturapared=new THREE.TextureLoader().load("./Assets/pared.jpg");
var materiala=new THREE.MeshLambertMaterial({map:texturapared});
texturapared.wrapS=THREE.RepeatWrapping;
texturapared.wrapT=THREE.RepeatWrapping;
texturapared.repeat.set(2,2);
var pared = new THREE.Mesh(pareda,materiala);
pared.position.set(0,75,-350);
//scene.add(pared);



var pared2 = new THREE.BoxGeometry(700,250,0.5);
var texturaparedc=new THREE.TextureLoader().load("./Assets/pael.jpg");
var material1=new THREE.MeshLambertMaterial({map:texturaparedc});
texturaparedc.wrapS=THREE.RepeatWrapping;
texturaparedc.wrapT=THREE.RepeatWrapping;
texturaparedc.repeat.set(2,2);

var paredc = new THREE.Mesh(pared2,material1);
paredc.position.set(0,275,-350);
//scene.add(paredc);


var parizq = paredc.clone();
parizq.rotation.set(0,-1.5756,0);
parizq.position.set(-347,273,0);
//scene.add(parizq);


var paredd = new THREE.BoxGeometry(200,250,0.5);
var texturaparedm=new THREE.TextureLoader().load("./Assets/pael.jpg");
var material2=new THREE.MeshLambertMaterial({map:texturaparedm});
texturaparedm.wrapS=THREE.RepeatWrapping;
texturaparedm.wrapT=THREE.RepeatWrapping;
texturaparedm.repeat.set(1,2);
texturaparedm.offset.x=-1;
texturaparedm.offset.y=-10;
var paredn = new THREE.Mesh(paredd,material2);
paredn.position.set(349,275,-251);
paredn.rotation.set(0,1.5756,0);
//scene.add(paredn);

var pareddd = new THREE.BoxGeometry(300,250,0.5);
var texturaparedo=new THREE.TextureLoader().load("./Assets/pael.jpg");
var material3=new THREE.MeshLambertMaterial({map:texturaparedm});
texturaparedo.wrapS=THREE.RepeatWrapping;
texturaparedo.wrapT=THREE.RepeatWrapping;
texturaparedo.repeat.set(1,2);
texturaparedo.offset.x=-1;
texturaparedo.offset.y=-10;

// Antes esta malla se guardaba en la variable "paredx", que más abajo se
// volvía a reasignar a otra malla distinta: la primera pared (esta de aquí)
// se perdía por completo si no existía un "scene" global que la capturara.
// Se renombra a "paredx1" para conservar la referencia.
var paredx1 = new THREE.Mesh(pareddd,material3);
paredx1.position.set(351,274,200);
paredx1.rotation.set(0,1.5756,0);
//scene.add(paredx1);


var pareddd2 = new THREE.BoxGeometry(202,150,0.5);
var texturaparedo2=new THREE.TextureLoader().load("./Assets/pael.jpg");
var material3b=new THREE.MeshLambertMaterial({map:texturaparedm});
texturaparedo2.wrapS=THREE.RepeatWrapping;
texturaparedo2.wrapT=THREE.RepeatWrapping;
texturaparedo2.repeat.set(1,1);
texturaparedo2.offset.x=-1;
texturaparedo2.offset.y=-10;


// esta es la segunda malla que antes pisaba a "paredx"; ahora es "paredx2"
var paredx2 = new THREE.Mesh(pareddd2,material3b);
paredx2.position.set(350,325,-50);
paredx2.rotation.set(0,1.5756,0);
//scene.add(paredx2);




var pelota = new THREE.SphereGeometry(20,20,20);
var texturapelota=new THREE.TextureLoader().load("./Assets/pelota.jpg");
var materialp=new THREE.MeshLambertMaterial({map:texturapelota});
texturapelota.wrapS=THREE.RepeatWrapping;
texturapelota.wrapT=THREE.RepeatWrapping;
texturapelota.repeat.set(2,1);


var pelotas = new THREE.Mesh(pelota,materialp);
pelotas.position.set(110,20,20);
//scene.add(pelotas);


var camtabla = new THREE.BoxGeometry(10,10,100);
var tcama= new THREE.MeshLambertMaterial({color:0xE0E0E0});
var cama = new THREE.Mesh(camtabla,tcama);


//scene.add(cama);

var c1 = cama.clone();
c1.position.set(32.5,0,54);
c1.rotation.set(0,1.5756,0);
c1.scale.set(1,1,0.75);
//scene.add(c1);

var c2 = cama.clone();
c2.position.set(32.5,0,-54);
c2.rotation.set(0,1.5756,0);
c2.scale.set(1,1,0.75);
//scene.add(c2);

var c3 = cama.clone();
c3.position.set(65,0,0);
//scene.add(c3);

var c4 = cama.clone();
c4.rotation.set(1.5756,0,0);
c4.scale.set(0.5,0.5,0.75);
c4.position.set(65,10,60);
//scene.add(c4);

var c5 = cama.clone();
c5.rotation.set(1.5756,0,0);
c5.scale.set(0.5,0.5,0.75);
c5.position.set(65,10,-60);
//scene.add(c5);

var c6 = cama.clone();
c6.rotation.set(1.5756,0,0);
c6.scale.set(0.5,0.5,0.75);
c6.position.set(3,10,-60);
//scene.add(c6);

var c7 = cama.clone();
c7.rotation.set(1.5756,0,0);
c7.scale.set(0.5,0.5,0.75);
c7.position.set(3,10,60);
//scene.add(c7);

var par2 = pared.clone();
par2.rotation.set(0,1.5756,0);
par2.position.set(350,75,0);
//scene.add(par2);

var par3 = pared.clone();
par3.rotation.set(0,1.5756,0);
par3.position.set(-350,75,0);
//scene.add(par3);
 

var col = new RoundedBoxGeometry(80,20,120,10,1.5);
var tcol= new THREE.MeshLambertMaterial({color:0x0567A6});
var colchon = new THREE.Mesh(col,tcol);
//scene.add(colchon);
colchon.position.set(32.5,15,0);

var al = new RoundedBoxGeometry (35,20,10,20,4.5);
var tal = new THREE.MeshLambertMaterial({color:0x693813});
var almoa = new THREE.Mesh(al,tal);
//scene.add(almoa);
almoa.rotation.set(-0.7878,0,0);
almoa.position.set(32.5,35,-50);

var ccompleta = new THREE.Group();
ccompleta.add(cama,c1,c2,c3,c4,c5,c6,c7,colchon,almoa);
//scene.add(ccompleta);
ccompleta.position.set(140,70,-190);
ccompleta.scale.set(2.4,2.5,2.5);


var alf = new RoundedBoxGeometry(180,2,300,10,30);
var talf = new THREE.MeshLambertMaterial({color:0x0066FF});
var alfombra = new THREE.Mesh(alf,talf);
//scene.add(alfombra);
alfombra.position.set(-40,2,80);



// estructura
var mub = new THREE.BoxGeometry(90,90,45);
var tmub = new THREE.MeshLambertMaterial({color:0xffffff});
var mueble = new THREE.Mesh(mub,tmub);
//scene.add(mueble);
mueble.position.set(-220,45,220);

// material cajones
var tcaj = new THREE.MeshLambertMaterial({color:0xD9D9D9});

// cajon 1
var caj = new THREE.BoxGeometry(72,18,4);
var cajon1 = new THREE.Mesh(caj,tcaj);
//scene.add(cajon1);
cajon1.position.set(-220,70,244);

// cajon 2
var cajon2 = cajon1.clone();
//scene.add(cajon2);
cajon2.position.set(-220,45,244);

// cajon 3
var cajon3 = cajon1.clone();
//scene.add(cajon3);
cajon3.position.set(-220,20,244);

// perillas
var per = new THREE.SphereGeometry(2,20,20);
var tper = new THREE.MeshLambertMaterial({color:0xffffff});

// cajon 1
var p1 = new THREE.Mesh(per,tper);
//scene.add(p1);
p1.position.set(-235,70,247);

var p2 = p1.clone();
//scene.add(p2);
p2.position.set(-205,70,247);

// cajon 2
var p3 = p1.clone();
//scene.add(p3);
p3.position.set(-235,45,247);

var p4 = p1.clone();
//scene.add(p4);
p4.position.set(-205,45,247);

// cajon 3
var p5 = p1.clone();
//scene.add(p5);
p5.position.set(-235,20,247);

var p6 = p1.clone();
//scene.add(p6);
p6.position.set(-205,20,247);

var mmcom = new THREE.Group();
mmcom.add(p1,p2,p3,p4,p5,p6,cajon1,cajon2,cajon3,mueble);
//scene.add(mmcom);
mmcom.position.set(300,3,-740);
mmcom.scale.set(2.4,2.5,2);



var tblanco = new THREE.MeshLambertMaterial({color:0xffffff});
var tgris = new THREE.MeshLambertMaterial({color:0xE0E0E0});
var tmadera = new THREE.MeshLambertMaterial({color:0xB85A2B});


// tapa superior
var mg = new THREE.BoxGeometry(45,5,40);
var mesa = new THREE.Mesh(mg,tblanco);
//scene.add(mesa);
mesa.position.set(215,42,-170);

// cuerpo lateral izquierdo
var lat1g = new THREE.BoxGeometry(5,40,35);
var lat1 = new THREE.Mesh(lat1g,tblanco);
//scene.add(lat1);
lat1.position.set(195,22,-170);

// cuerpo lateral derecho
var lat2 = lat1.clone();
//scene.add(lat2);
lat2.position.set(235,22,-170);

// fondo
var fondog = new THREE.BoxGeometry(35,40,5);
var fondo = new THREE.Mesh(fondog,tblanco);
//scene.add(fondo);
fondo.position.set(215,22,-185);

// repisa inferior
var repg = new THREE.BoxGeometry(35,4,35);
var repisa = new THREE.Mesh(repg,tgris);
//scene.add(repisa);
repisa.position.set(215,5,-170);

// cajon
var cajg = new THREE.BoxGeometry(34,12,34);
var cajon = new THREE.Mesh(cajg,tgris);
//scene.add(cajon);
cajon.position.set(215,28,-170);

// perilla
var perg = new THREE.SphereGeometry(2,20,20);
var perilla = new THREE.Mesh(perg,tmadera);
//scene.add(perilla);
perilla.position.set(215,28,-152);


// base roja
var baseg = new THREE.SphereGeometry(10,20,20);
var tbase = new THREE.MeshLambertMaterial({color:0xC94A22});
var baseL = new THREE.Mesh(baseg,tbase);
//scene.add(baseL);
baseL.scale.set(1,1.2,1);
baseL.position.set(215,57,-170);

// cuello
var cuellog = new THREE.CylinderGeometry(2,2,8);
var cuello = new THREE.Mesh(cuellog,tgris);
//scene.add(cuello);
cuello.position.set(215,68,-170);

// pantalla
var pang = new THREE.CylinderGeometry(12,16,18,20);
var pantalla = new THREE.Mesh(pang,tblanco);
//scene.add(pantalla);
pantalla.position.set(215,80,-170);

var gmueble = new THREE.Group();

gmueble.add(mesa,lat1,lat2,fondo,repisa,cajon,perilla);

//scene.add(gmueble);

gmueble.position.set(-600,0,230);
gmueble.scale.set(3,3,3);

var glampara = new THREE.Group();

glampara.add(baseL,cuello,pantalla);

//scene.add(glampara);
glampara.position.set(-600,0,230);
glampara.scale.set(3,3,3);



// marco exterior
var v1g = new THREE.BoxGeometry(80,140,4);
var tblanco2 = new THREE.MeshLambertMaterial({color:0xffffff});
var marco = new THREE.Mesh(v1g,tblanco2);
//scene.add(marco);
marco.position.set(260,190,-349);

// vidrio
var v2g = new THREE.BoxGeometry(62,105,2);
var tvidrio = new THREE.MeshLambertMaterial({color:0xFFFFFF,transparent:true,opacity:0.45});

var vidrio = new THREE.Mesh(v2g,tvidrio);
vidrio.position.set(260,180,-347);
//scene.add(vidrio);

// parte superior decorativa
var v3g = new THREE.BoxGeometry(95,10,8);
var corona = new THREE.Mesh(v3g,tblanco2);
//scene.add(corona);
corona.position.set(260,265,-348);

// persiana
var v4g = new THREE.BoxGeometry(60,55,3);
var tper2 = new THREE.MeshLambertMaterial({color:0xFFFFFF});
var persiana = new THREE.Mesh(v4g,tper2);
//scene.add(persiana);
persiana.position.set(260,205,-346);

// base inferior
var v5g = new THREE.BoxGeometry(90,8,8);
var baseven = new THREE.Mesh(v5g,tblanco2);
//scene.add(baseven);
baseven.position.set(260,112,-348);

var gventana = new THREE.Group();

gventana.add(marco,vidrio,corona,persiana,baseven);

//scene.add(gventana);
gventana.rotation.set(0,-1.5756,0)
gventana.position.set(0,-30,-700);
gventana.scale.set(2.5,1.5,1);



// VENTILADOR 

// base techo
var vg1 = new THREE.CylinderGeometry(4,4,6);
var gris = new THREE.MeshLambertMaterial({color:0xBDBDBD});
var basev = new THREE.Mesh(vg1,gris);


// tubo
var vg2 = new THREE.CylinderGeometry(1.5,1.5,18);
var tubo = new THREE.Mesh(vg2,gris);
tubo.position.set(0,10,0);

// centro
var vg3 = new THREE.SphereGeometry(6,20,20);
var centrov = new THREE.Mesh(vg3,gris);
centrov.scale.set(1,0.7,1);


// aspas
var vg4 = new THREE.BoxGeometry(45,1.5,8);
var madera = new THREE.MeshLambertMaterial({color:0x8B5A2B});

var aspa1 = new THREE.Mesh(vg4,madera);
aspa1.position.set(22,0,0);

var aspa2 = aspa1.clone();
aspa2.position.set(-22,0,0);

var aspa3 = aspa1.clone();
aspa3.rotation.set(0,1.57,0);
aspa3.position.set(0,0,22);

var aspa4 = aspa3.clone();
aspa4.position.set(0,0,-22);

// grupo
var gventilador = new THREE.Group();

gventilador.add(basev,tubo,centrov,aspa1,aspa2,aspa3,aspa4);

//scene.add(gventilador);
gventilador.scale.set(2.7,2.7,2.7);
gventilador.position.set(0,400,0);


var cab = new THREE.SphereGeometry(5,20,10);
var material1b= new THREE.MeshLambertMaterial({color:0xffbf7c});
var cabeza= new THREE.Mesh(cab,material1b);
//scene.add(cabeza);
cabeza.scale.set(1,1.05,0.8);

var oreja1= new THREE.Mesh(cab,material1b);
oreja1.position.set(4,0,0);
oreja1.scale.set(0.5,0.4,0.25);
//scene.add(oreja1);

var oreja2= new THREE.Mesh(cab,material1b);
oreja2.position.set(-4,0,0);
oreja2.scale.set(0.5,0.4,0.25);
//scene.add(oreja2);

var material2b= new THREE.MeshLambertMaterial({color:0xffffff});
var ojo= new THREE.Mesh(cab,material2b);
//scene.add(ojo);
ojo.scale.set(0.3,0.3,0.1);
ojo.position.set(-2,1,3.4);
ojo.rotation.set(0,-0.4,0);

var ojo2= new THREE.Mesh(cab,material2b);
//scene.add(ojo2);
ojo2.scale.set(0.3,0.3,0.1);
ojo2.position.set(2,1,3.4);
ojo2.rotation.set(0,0.4,0);


var material3c= new THREE.MeshLambertMaterial({color:0x21a745});

var pup= new THREE.Mesh(cab,material3c);
//scene.add(pup);
pup.scale.set(0.15,0.15,0.1);
pup.position.set(1.5,1,3.7);

var pup1= new THREE.Mesh(cab,material3c);
//scene.add(pup1);
pup1.scale.set(0.15,0.15,0.1);
pup1.position.set(-1.5,1,3.7);

var rostro = new THREE.Group();
rostro.add(cabeza,ojo,ojo2,oreja1,oreja2,pup,pup1);
//scene.add(rostro);
rostro.position.set(0,20,0);


var cuer = new THREE.CylinderGeometry(4,8,12,20,20);
var cuerpo= new THREE.Mesh(cuer,material2b);
//scene.add(cuerpo);
cuerpo.position.set(0,10.3,0);
cuerpo.scale.set(0.9,1,0.7);

var material4= new THREE.MeshLambertMaterial({color:0xff0000});
var cab2 = new THREE.SphereGeometry(4,20,20);
var cabello= new THREE.Mesh(cab2,material4);
//scene.add(cabello);
cabello.position.set(0,23,-0.2);
cabello.scale.set(1,0.6,0.8);

var cabello2= new THREE.Mesh(cab2,material4);
//scene.add(cabello2);
cabello2.position.set(0,21.1,-1);
cabello2.scale.set(1,1,1);

var brazo= new THREE.Mesh(cab2,material2b);
//scene.add(brazo);
brazo.scale.set(0.5,1,0.5 );
brazo.position.set(-5,12,1); 
brazo.rotation.set(-0.4,0,0);

var brazo1= new THREE.Mesh(cab2,material2b);
//scene.add(brazo1);
brazo1.scale.set(0.5,1,0.5 );
brazo1.position.set(5,12,1); 
brazo1.rotation.set(-0.4,0,0);

var brazo2= new THREE.Mesh(cab2,material2b);
//scene.add(brazo2);
brazo2.scale.set(0.45,1,0.5 );
brazo2.position.set(-2,10.1,3.5); 
brazo2.rotation.set(0,-0.4,-1.6);




var material5= new THREE.MeshLambertMaterial({color:0xffcd00});
var cod = new THREE.CylinderGeometry(1.2,2,4,20,20);
var codi= new THREE.Mesh(cod,material5);
//scene.add(codi);
codi.position.set(-1.1,10.2,5);
codi.scale.set(0.9,1,0.6);
codi.rotation.set(0,-0.45,-1.6);

var codi1= new THREE.Mesh(cod,material5);
//scene.add(codi1);
codi1.position.set(1.1,10.2,5);
codi1.scale.set(0.9,1,0.6);
codi1.rotation.set(0,0.45,1.6);


var material5b= new THREE.MeshLambertMaterial({color:0xff2000});
var som = new THREE.TorusGeometry(5,2,20,20);
var sombre= new THREE.Mesh(som,material5b);
//scene.add(sombre);
sombre.position.set(0,23,-0.8);
sombre.scale.set(1,1,0.3);
sombre.rotation.set(0.8,0,0);


var som1 = new THREE.TorusGeometry(4,1.8,5,5);
var sombre1= new THREE.Mesh(som1,material5b);
//scene.add(sombre1);
sombre1.position.set(0,23,-2);
sombre1.scale.set(1,1,1);
sombre1.rotation.set(0.8,0,0);


var figura = new THREE.Group();

figura.add(rostro,cuerpo,cabello,cabello2,brazo,brazo1,brazo2,codi,codi1,sombre,sombre1);
//scene.add(figura);

var figura2 = figura.clone();
figura2.position.set(-160,220,-260);
//scene.add(figura2);



const ES03 = new THREE.Group();
ES03.add(
  suelo,pared,paredc,parizq,paredn,paredx1,paredx2,pelotas,par2,par3,alfombra,
  
  ccompleta,mmcom,gmueble,glampara,gventana,gventilador,figura,figura2
);
return ES03;
}