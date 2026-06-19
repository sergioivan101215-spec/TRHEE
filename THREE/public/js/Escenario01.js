import * as THREE from "./three.module.js";

export default function ES01(){

    

    

    var base = new THREE.BoxGeometry(700,0.5,700);
    var texturasuelo = new THREE.TextureLoader().load("./Assets/suelo.jpg");
    var materialTs = new THREE.MeshLambertMaterial({map:texturasuelo});
    texturasuelo.wrapS = THREE.RepeatWraaping;
    texturasuelo.wrapT = THREE.RepeatWraaping;
    texturasuelo.repeat.set(15,15);

    var suelo = new THREE.Mesh(base,materialTs);
    //scene.add(suelo);
    suelo.receiveShadow = true;

    var pareda = new THREE.BoxGeometry(700,500,0.5);
    var texturapared = new THREE.TextureLoader().load("./Assets/gran.jpg");
    var materiala = new THREE.MeshLambertMaterial({map:texturapared});
    texturapared.wrapS = THREE.RepeatWraaping;
    texturapared.wrapT = THREE.RepeatWraaping;
    texturapared.repeat.set(2,2);

    var pared = new THREE.Mesh(pareda,materiala);
    pared.position.set(0,250,-350);
    //scene.add(pared);

    var tabla = new THREE.BoxGeometry(10,20,700);
    var ttabla = new THREE.MeshLambertMaterial({color:0xE0E0E0});
    var borde = new THREE.Mesh(tabla,ttabla);

    var ttl = new THREE.BoxGeometry(100,10,700);
    var tttl = new THREE.MeshLambertMaterial({color:0xE0E0E0});
    var tmue = new THREE.Mesh(ttl,tttl);

    var par2 = pared.clone();
    par2.rotation.set(0,1.5756,0);
    par2.position.set(350,250,0);
    //scene.add(par2);

    var par3 = pared.clone();
    par3.rotation.set(0,1.5756,0);
    par3.position.set(-350,250,0);
   // scene.add(par3);

    var br2 = borde.clone();
    br2.rotation.set(0,1.5756,0);
    br2.position.set(-350,0,-350);

    var br3 = borde.clone();
    br3.position.set(-700,0,0);

    var tl1 = tmue.clone();
    tl1.position.set(0,100,90);
    tl1.scale.set(1,1,0.75);

    var tl2 = tmue.clone();
    tl2.position.set(0,200,0);

    var tl3 = tmue.clone();
    tl3.position.set(0,400,0);

    var tl4 = tmue.clone();
    tl4.rotation.set(1.5756,0,0);
    tl4.position.set(0,200,350);
    tl4.scale.set(1,1,0.58);

    var tl5 = tmue.clone();
    tl5.rotation.set(1.5756,0,0);
    tl5.position.set(0,200,-350);
    tl5.scale.set(1,1,0.58);

    var tl6 = tmue.clone();
    tl6.rotation.set(1.5756,0,0);
    tl6.position.set(0,100,-170);
    tl6.scale.set(1,1,0.3);

    var vay = new THREE.Group();
    vay.add(br2,br3,borde);
    //scene.add(vay);
    vay.position.set(350,200,0);

    var mueble = new THREE.Group();
    mueble.add(tl1,tl2,tl3,tl4,tl5,tl6,tmue);
    //scene.add(mueble);
    mueble.position.set(0,0,0);

    var cj1 = new THREE.BoxGeometry(60,40,40);
    var tcj1 = new THREE.MeshLambertMaterial({color:0xff0000});
    var caja1 = new THREE.Mesh(cj1,tcj1);
    //scene.add(caja1);
    caja1.position.set(0,120,80);

    var cj2 = new THREE.BoxGeometry(40,35,60);
    var tcj2 = new THREE.MeshLambertMaterial({color:0x00ff00});
    var caja2 = new THREE.Mesh(cj2,tcj2);
    //scene.add(caja2);
    caja2.position.set(0,120,70);

    var cj3 = new THREE.BoxGeometry(80,30,35);
    var tcj3 = new THREE.MeshLambertMaterial({color:0x0000ff});
    var caja3 = new THREE.Mesh(cj3,tcj3);
    //scene.add(caja3);
    caja3.position.set(0,210,0);

    var pg = new THREE.SphereGeometry(18,20,20);
    var tp = new THREE.MeshLambertMaterial({color:0xffff00});
    var pelota = new THREE.Mesh(pg,tp);
    //scene.add(pelota);
    pelota.position.set(-10,120,-80);

    var rg = new THREE.BoxGeometry(25,35,20);
    var tr = new THREE.MeshLambertMaterial({color:0xE0E0E0});
    var robot = new THREE.Mesh(rg,tr);
    //scene.add(robot);
    robot.position.set(90,205,-70);

    var rc = new THREE.SphereGeometry(10,20,20);
    var cabeza = new THREE.Mesh(rc,tr);
    //scene.add(cabeza);
    cabeza.position.set(90,232,-70);

    var car = new THREE.BoxGeometry(45,15,25);
    var tcar = new THREE.MeshLambertMaterial({color:0xff8800});
    var carro = new THREE.Mesh(car,tcar);
    //scene.add(carro);
    carro.position.set(-100,210,-70);

    var ll = new THREE.SphereGeometry(6,20,20);
    var tll = new THREE.MeshLambertMaterial({color:0x000000});

    var ll1 = new THREE.Mesh(ll,tll);
    //scene.add(ll1);
    ll1.position.set(-115,198,-58);

    var ll2 = ll1.clone();
    //scene.add(ll2);
    ll2.position.set(-85,198,-58);

    var ll3 = ll1.clone();
    //scene.add(ll3);
    ll3.position.set(-115,198,-82);

    var ll4 = ll1.clone();
    //scene.add(ll4);
    ll4.position.set(-85,198,-82);

    var og = new THREE.SphereGeometry(15,20,20);
    var toso = new THREE.MeshLambertMaterial({color:0x8B5A2B});
    var oso = new THREE.Mesh(og,toso);
    //scene.add(oso);
    oso.position.set(0,120,80);

    var oc1 = new THREE.Mesh(og,toso);
    //scene.add(oc1);
    oc1.scale.set(0.4,0.4,0.4);
    oc1.position.set(-8,135,90);

    var oc2 = oc1.clone();
    //scene.add(oc2);
    oc2.position.set(8,135,90);

    var grobot = new THREE.Group();
    grobot.add(robot,cabeza);
    //scene.add(grobot);
    grobot.scale.set(1.5,1.5,1.5);
    grobot.position.set(-120,-80,240);

    var gcarro = new THREE.Group();
    gcarro.add(carro,ll1,ll2,ll3,ll4);
    //scene.add(gcarro);
    gcarro.scale.set(1.5,1.5,1.5);
    gcarro.position.set(150,-85,0);

    var goso = new THREE.Group();
    goso.add(oso,oc1,oc2);
    //scene.add(goso);
    goso.scale.set(1.5,1.5,1.5);
    goso.position.set(0,-48,0);


    /////////////////////////////////////////
    

var cab = new THREE.SphereGeometry(5,20,10);
var material1= new THREE.MeshLambertMaterial({color:0xffbf7c});
var cabeza= new THREE.Mesh(cab,material1);
//scene.add(cabeza);
cabeza.scale.set(1,1.3,0.8);

var oreja1= new THREE.Mesh(cab,material1);
oreja1.position.set(4,0,0);
oreja1.scale.set(0.5,0.4,0.25);
//scene.add(oreja1);

var oreja2= new THREE.Mesh(cab,material1);
oreja2.position.set(-4,0,0);
oreja2.scale.set(0.5,0.4,0.25);
//scene.add(oreja2);

var material2= new THREE.MeshLambertMaterial({color:0xffffff});
var ojo= new THREE.Mesh(cab,material2);
//scene.add(ojo);
ojo.scale.set(0.3,0.3,0.1);
ojo.position.set(-2,1,3.4);
ojo.rotation.set(0,-0.4,0);

var ojo2= new THREE.Mesh(cab,material2);
//scene.add(ojo2);
ojo2.scale.set(0.3,0.3,0.1);
ojo2.position.set(2,1,3.4);
ojo2.rotation.set(0,0.4,0);


var material3= new THREE.MeshLambertMaterial({color:0x5e3a00});

var pup= new THREE.Mesh(cab,material3);
//scene.add(pup);
pup.scale.set(0.15,0.15,0.1);
pup.position.set(1.5,1,3.7);

var pup1= new THREE.Mesh(cab,material3);
//scene.add(pup1);
pup1.scale.set(0.15,0.15,0.1);
pup1.position.set(-1.5,1,3.7);

var rostro = new THREE.Group();
rostro.add(cabeza,ojo,ojo2,oreja1,oreja2,pup,pup1);
//scene.add(rostro);
rostro.position.set(0,20,0);

var material5= new THREE.MeshLambertMaterial({color:0xffcd00});

var cuer = new THREE.CylinderGeometry(4,8,12,20,20);
var cuerpo= new THREE.Mesh(cuer,material5);
//scene.add(cuerpo);
cuerpo.position.set(0,10.3,0);
cuerpo.scale.set(0.9,1,0.7);

var material4= new THREE.MeshLambertMaterial({color:0x5e3a00});
var cab = new THREE.SphereGeometry(4,20,20);
var cabello= new THREE.Mesh(cab,material4);
//scene.add(cabello);
cabello.position.set(0,23,-0.2);
cabello.scale.set(1,0.6,0.8);


var cabello2= new THREE.Mesh(cab,material4);
//scene.add(cabello2);
cabello2.position.set(0,22.5,-1);
cabello2.scale.set(1,1,1);

var bra = new THREE.SphereGeometry(5,20,10);
var brazo= new THREE.Mesh(cab,material5);
//scene.add(brazo);
brazo.scale.set(0.5,1,0.5 );
brazo.position.set(-5,12,1); 
brazo.rotation.set(-0.4,0,0);

var brazo1= new THREE.Mesh(cab,material5);
//scene.add(brazo1);
brazo1.scale.set(0.5,1,0.5 );
brazo1.position.set(5,12,1); 
brazo1.rotation.set(-0.4,0,0);

var brazo2= new THREE.Mesh(cab,material5);
//scene.add(brazo2);
brazo2.scale.set(0.45,1,0.5 );
brazo2.position.set(-2,10.1,3.5); 
brazo2.rotation.set(0,-0.4,-1.6);

var brazo3= new THREE.Mesh(cab,material5);
//scene.add(brazo3);
brazo3.scale.set(0.45,1,0.5 );
brazo3.position.set(2,10.1,3.5); 
brazo3.rotation.set(0,0.4,1.6);



var material6= new THREE.MeshLambertMaterial({color:0x5e3a00});
var som = new THREE.TorusGeometry(5,2,20,20);
var sombre= new THREE.Mesh(som,material6);
//scene.add(sombre);
sombre.position.set(0,23,-0.8);
sombre.scale.set(1,1,0.3);
sombre.rotation.set(0.8,0,0);


var som1 = new THREE.TorusGeometry(4,1.8,5,5);
var sombre1= new THREE.Mesh(som1,material6);
//scene.add(sombre1);
sombre1.position.set(0,23,-2);
sombre1.scale.set(1,1,1);
sombre1.rotation.set(0.8,0,0);

var material7= new THREE.MeshLambertMaterial({color:0x3d85c6});

var cint = new THREE.CylinderGeometry(8,8,12,20,20);
var cintura= new THREE.Mesh(cint,material7);
//scene.add(cintura);
cintura.position.set(0,2.5,0);
cintura.scale.set(0.9,0.3,0.7);

var material8= new THREE.MeshLambertMaterial({color:0xff0000});

var pan = new THREE.CylinderGeometry(4.5,5,12,20,20);
var pand= new THREE.Mesh(pan,material8);
//scene.add(pand);
pand.position.set(0,10,0);
pand.scale.set(0.9,1,0.7);

var personaje = new THREE.Group();
personaje.add(rostro,pand,cintura,sombre1,sombre,brazo3,brazo2,brazo1,brazo,cabello2,cabello,cuerpo);
//scene.add(personaje);
personaje.position.set(0,10,0);


var personaje2 = personaje.clone();
personaje2.position.set(-160,5,-260);
//scene.add(personaje2);

var personaje3 = personaje.clone();
personaje3.position.set(-250,5,300);
personaje3.rotation.set(0,3,0);
//scene.add(personaje3);

const ES01 = new THREE.Group();
ES01.add(personaje,pared,suelo,par2,par3,personaje2,personaje3,goso,gcarro,grobot,pelota,mueble,vay,caja2,caja3);
return ES01;
}



 
 


