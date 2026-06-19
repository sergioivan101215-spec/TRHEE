import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function ES04() {

    // ====== PISO ======
    var piso1 = new THREE.BoxGeometry(800, 0.5, 800);
    var texturaP = new THREE.TextureLoader().load("./img/luna.jpg");
    var materialP = new THREE.MeshLambertMaterial({ map: texturaP });
    var pisom = new THREE.Mesh(piso1, materialP);

    // ====== PERSONAJE (cabeza, cara, cuerpo) ======
    var cuerpoverde = new THREE.MeshLambertMaterial({ color: 0x4BE049 });
    var verde = new THREE.MeshLambertMaterial({ color: 0x44CC43 });

    var cabezag = new THREE.SphereGeometry(10, 500, 500);
    var cabeza = new THREE.Mesh(cabezag, cuerpoverde);
    cabeza.position.set(0, 30, 0);
    cabeza.scale.set(1, 0.7, 0.6);

    var antenag = new THREE.SphereGeometry(0.8);
    var antena = new THREE.Mesh(antenag, cuerpoverde);
    antena.position.set(0, 38, 0);

    var cant = new THREE.CylinderGeometry(0.6, 0.9, 2);
    var cuerpoantena = new THREE.Mesh(cant, cuerpoverde);
    cuerpoantena.position.set(0, 37, 0);

    var b1 = new THREE.TorusGeometry(1, 0.2, 30, 8);
    var b2 = new THREE.Mesh(b1, verde);
    b2.rotation.set(0.08, 0, 0);
    b2.position.set(0, 29, 5.8);
    b2.scale.set(1, 0.8, 1);

    var sn = new THREE.SphereGeometry(5);
    var sn1 = new THREE.Mesh(sn, verde);
    sn1.scale.set(0.5, 0.05, 0.1);
    sn1.position.set(3.1, 29.5, 5.3);
    sn1.rotation.set(0, 0.20, 0.20);

    var sn2 = new THREE.SphereGeometry(5);
    var sn12 = new THREE.Mesh(sn2, verde);
    sn12.scale.set(0.5, 0.05, 0.1);
    sn12.position.set(-3.1, 29.5, 5.3);
    sn12.rotation.set(0, -0.20, -0.20);

    var sonrisag = new THREE.Group();
    sonrisag.add(b2, sn1, sn12);
    sonrisag.position.set(0, -1, 0);

    var blanco = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var blancojo = new THREE.SphereGeometry(2);
    var ojoblanco = new THREE.Mesh(blancojo, blanco);
    ojoblanco.position.set(0, 34, 4.87);
    ojoblanco.scale.set(1, 1, 0.1);
    ojoblanco.rotation.set(-0.40, 0, 0);

    var oj2 = ojoblanco.clone();
    oj2.position.set(5, 32, 4.87);
    oj2.rotation.set(-0.40, 0.40, 0);

    var oj3 = ojoblanco.clone();
    oj3.position.set(-5, 32, 4.8);
    oj3.rotation.set(-0.25, -0.40, 0);

    var negro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var negg1 = new THREE.SphereGeometry(1.2);
    var negg2 = new THREE.Mesh(negg1, negro);
    negg2.position.set(0, 33.8, 5.1);
    negg2.scale.set(1, 1, 0.1);
    negg2.rotation.set(-0.40, 0, 0);

    var negg3 = negg2.clone();
    negg3.position.set(4.7, 32, 5.3);
    negg3.rotation.set(-0.40, 0.40, 0);

    var negg4 = negg2.clone();

    var negg5 = negg2.clone();
    negg5.position.set(-4.7, 31.9, 5.2);
    negg5.rotation.set(-0.25, -0.40, 0);

    // ====== OREJAS ======
    var or = new THREE.TorusKnotGeometry(0.5, 0.5, 100, 20, 1);
    var orejas = new THREE.Mesh(or, cuerpoverde);
    orejas.rotation.set(0, 0, -0.30);
    orejas.scale.set(2, 2, 1);
    orejas.position.set(9, 30, 0);

    var orejas2 = orejas.clone();
    orejas2.rotation.set(0, 0, 0.60);
    orejas2.scale.set(2, 2, 1);
    orejas2.position.set(9, 32, 0);

    var gorejas = new THREE.Group();
    gorejas.add(orejas, orejas2);

    var gorejas2 = gorejas.clone();
    gorejas2.position.set(-18, 0, 0);

    // ====== CUERPO AZUL ======
    var azulcuerpo = new THREE.MeshLambertMaterial({ color: 0x125BDE });

    var cuelloma = new THREE.TorusGeometry(6, 1, 16, 100);
    var cuelllo = new THREE.Mesh(cuelloma, azulcuerpo);
    cuelllo.rotation.set(1.57, 0, 0);
    cuelllo.position.set(0, 24, 0);
    cuelllo.scale.set(1, 0.7, 1);

    var cuep1 = new THREE.SphereGeometry(10, 40, 6);
    var cuepo = new THREE.Mesh(cuep1, azulcuerpo);
    cuepo.position.set(0, 15, 0);
    cuepo.scale.set(1, 1, 0.7);

    var cuadrocm = new THREE.CylinderGeometry(9, 11.1, 7, 40);
    var cuadrocuepo = new THREE.Mesh(cuadrocm, azulcuerpo);
    cuadrocuepo.scale.set(0.99, 1, 0.7);
    cuadrocuepo.position.set(0, 15, 0);

    var bas = new THREE.SphereGeometry(10);
    var baseBody = new THREE.Mesh(bas, azulcuerpo);
    baseBody.position.set(0, 10, 0);
    baseBody.scale.set(1.13, 0.6, 0.80);

    // ====== BRAZOS ======
    var brazizqg = new THREE.CylinderGeometry(3, 2, 5, 20);
    var brazoizq = new THREE.Mesh(brazizqg, azulcuerpo);
    brazoizq.rotation.set(0, 0, 1.57);
    brazoizq.scale.set(1, 1, 0.8);
    brazoizq.position.set(9, 19, 0);

    var man = new THREE.CylinderGeometry(2, 2.4, 2, 20);
    var manga = new THREE.Mesh(man, azulcuerpo);
    manga.position.set(11.4, 19.2, 0);
    manga.rotation.set(0, 0, 1.90);

    var brazod = new THREE.Group();
    brazod.add(brazoizq, manga);

    var brazoder = brazod.clone();
    brazoder.rotation.set(0, 0, 3.7);
    brazoder.position.set(-11, 38, 0);

    var palma = new THREE.TorusKnotGeometry(1, 0.9, 130, 100, 2);
    var palmas = new THREE.Mesh(palma, cuerpoverde);
    palmas.position.set(13, 19.6, 0);
    palmas.scale.set(1, 1, 1.5);

    var palmas2 = palmas.clone();
    palmas2.position.set(-12, 14, 0);

    // ====== ACCESORIOS DEL PERSONAJE ======
    var azulf = new THREE.MeshLambertMaterial({ color: 0x1245DE });
    var plan = new THREE.TorusGeometry(2, 0.2, 10, 16);
    var planetita = new THREE.Mesh(plan, azulf);
    planetita.position.set(4, 18.5, 5.5);
    planetita.scale.set(1, 1, 1.5);
    planetita.rotation.set(-0.30, 0.30, 0);

    var plan2 = new THREE.TorusGeometry(2, 0.2, 10, 16);
    var planeta2 = new THREE.Mesh(plan2, azulf);
    planeta2.position.set(4, 18.5, 5.5);
    planeta2.scale.set(1.7, 0.5, 1.5);
    planeta2.rotation.set(-0.30, 0.30, 0.6);

    var plata = new THREE.MeshLambertMaterial({ color: 0x00DAE0 });
    var perffg = new THREE.TorusGeometry(1, 0.1, 16, 40);
    var perfo = new THREE.Mesh(perffg, plata);
    perfo.position.set(10, 33, 0);
    perfo.rotation.set(0, 1.57, 0);

    var perfo2 = perfo.clone();
    perfo2.position.set(11, 33, 0);
    perfo2.rotation.set(0, 1.77, 0);

    var coyarg = new THREE.TorusGeometry(5, 0.2, 4, 40);
    var coyar = new THREE.Mesh(coyarg, plata);
    coyar.position.set(0, 22, 5);
    coyar.scale.set(0.7, 0.8, 1);
    coyar.rotation.set(-0.48, 0, 0);

    var cruzm = new THREE.BoxGeometry(0.5, 2, 0.5);
    var cruz = new THREE.Mesh(cruzm, plata);
    cruz.position.set(0, 0.7, 0);

    var cruzmitad = cruz.clone();
    cruzmitad.rotation.set(0, 0, 1.57);

    var cruzcompleta = new THREE.Group();
    cruzcompleta.add(cruz, cruzmitad);
    cruzcompleta.position.set(0, 16.8, 7);

    var amarillo = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });
    var amarillosw = new THREE.MeshLambertMaterial({ color: 0xD0E000 });

    var coronag = new THREE.CylinderGeometry(4, 3, 5, 8, 1, 0);
    var corona = new THREE.Mesh(coronag, amarillo);
    corona.rotation.set(0, 0, -0.30);
    corona.position.set(5, 38, 0);

    var coronasw = new THREE.Mesh(coronag, amarillosw);
    coronasw.rotation.set(0, 0, -0.30);
    coronasw.position.set(5, 38, 0);

    var esfg = new THREE.SphereGeometry(3);
    var esf = new THREE.Mesh(esfg, amarillosw);
    esf.position.set(15, 23, 0);

    var linesfg = new THREE.TorusGeometry(2.2, 1, 16, 100);
    var lineaesf = new THREE.Mesh(linesfg, azulcuerpo);
    lineaesf.rotation.set(0.70, 0.30, 0);
    lineaesf.position.set(15, 23, 0);

    var rojo = new THREE.MeshLambertMaterial({ color: 0xE02000 });
    var estg = new THREE.SphereGeometry(3.1, 5);
    var estrellita = new THREE.Mesh(estg, rojo);
    estrellita.position.set(15, 23, 0);
    estrellita.scale.set(0.9, 1, 0.9);
    estrellita.rotation.set(1.57, -0.40, -0.30);

    var paletag = new THREE.CylinderGeometry(0.3, 0.3, 6);
    var paleta = new THREE.Mesh(paletag, plata);
    paleta.rotation.set(0, 0, 0.78);
    paleta.position.set(-15, 16, 0);

    var paestg = new THREE.CylinderGeometry(2, 2, 0.3, 5, 3);
    var paest = new THREE.Mesh(paestg, amarillo);
    paest.position.set(-15, 20, 0);

    var paest2 = paest.clone();
    paest2.rotation.set(0, 0.78, 0);

    var estp = new THREE.Group();
    estp.add(paest, paest2);
    estp.position.set(-2, 18, -20);
    estp.rotation.set(1.57, 0, 0);

    // ====== FONDO ESPACIAL ======
    var baseGeom = new THREE.BoxGeometry(800, 400, 0.5);
    var texturafondo = new THREE.TextureLoader().load("./img/fondo1.jpg");
    var materialTs = new THREE.MeshLambertMaterial({ map: texturafondo });
    texturafondo.wrapS = THREE.RepeatWrapping;
    texturafondo.wrapT = THREE.RepeatWrapping;
    texturafondo.repeat.set(3, 1.5);
    var par = new THREE.Mesh(baseGeom, materialTs);
    par.position.set(0, 200, -400);

    var p1 = par.clone();
    p1.position.set(399, 199, 0);
    p1.rotation.set(0, 1.5756, 0);
    p1.scale.set(1, 1, 0.75);

    // ====== PLANETA GRANDE (textura) ======
    var planeGeom1 = new THREE.SphereGeometry(200, 300, 20);
    var texturaplan1 = new THREE.TextureLoader().load("./img/plan1.jpg");
    var materialp1 = new THREE.MeshLambertMaterial({ map: texturaplan1 });
    texturaplan1.wrapS = THREE.RepeatWrapping;
    texturaplan1.wrapT = THREE.RepeatWrapping;
    texturaplan1.repeat.set(2, 1);
    var planetaGrande = new THREE.Mesh(planeGeom1, materialp1);
    planetaGrande.position.set(-100, 200, -450);

    // ====== ESTRUCTURA / TORRE ======
    var mb = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var bsr = new RoundedBoxGeometry(9, 150, 5, 10, 2);
    var roc = new THREE.Mesh(bsr, mb);
    roc.position.set(-150, 75, -80);

    var nb = new THREE.MeshLambertMaterial({ color: 0x12B55A });
    var band = new THREE.BoxGeometry(50, 35, 4, 10, 20, 3);
    var bande = new THREE.Mesh(band, nb);
    bande.position.set(-130, 160, -80);

    // ====== SOL ======
    var planeGeom2 = new THREE.SphereGeometry(80, 300, 20);
    var texturaplan2 = new THREE.TextureLoader().load("./img/sol.jpg");
    var materialp2 = new THREE.MeshLambertMaterial({ map: texturaplan2 });
    texturaplan2.wrapS = THREE.RepeatWrapping;
    texturaplan2.wrapT = THREE.RepeatWrapping;
    texturaplan2.repeat.set(2, 1);
    var sol = new THREE.Mesh(planeGeom2, materialp2);
    sol.position.set(400, 300, -260);

    // ====== PLANETA AZUL SIMPLE ======
    var plan2geom = new THREE.SphereGeometry(120, 100, 20);
    var tplan = new THREE.MeshLambertMaterial({ color: 0x0000FF });
    var planet2 = new THREE.Mesh(plan2geom, tplan);
    planet2.position.set(400, 100, 150);

    // ====== COHETE (grupo interactivo) ======
    var cap = new THREE.SphereGeometry(80, 40, 20);
    var tcap = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var capsula = new THREE.Mesh(cap, tcap);
    capsula.scale.set(0.7, 0.9, 0.6);
    capsula.position.set(190, 100, -80);

    var roj = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    var baseCil = new THREE.CylinderGeometry(80, 80, 50, 30, 2, 5);
    var navb2 = new THREE.Mesh(baseCil, roj);
    navb2.position.set(190, 40, -80);
    navb2.scale.set(0.6, 0.7, 0.5);

    var baseBox = new THREE.BoxGeometry(30, 45, 30);
    var navb = new THREE.Mesh(baseBox, roj);
    navb.position.set(160, 20, -55);
    navb.scale.set(0.6, 0.7, 0.5);

    var base2 = navb.clone();
    base2.position.set(200, 20, -47);
    base2.rotation.set(0, 0.3656, 0);

    var base3 = navb.clone();
    base3.position.set(200, 20, -115);

    var base4 = navb.clone();
    base4.position.set(160, 20, -105);

    var pSph = new THREE.SphereGeometry(10, 0, 2);
    var pnt = new THREE.Mesh(pSph, roj);
    pnt.position.set(190, 170, -75);
    pnt.scale.set(0.75, 6, 0.75);

    var p2Sph = new THREE.SphereGeometry(20, 10, 12);
    var pnt2 = new THREE.Mesh(p2Sph, roj);
    pnt2.position.set(190, 160, -77);

    var venMat = new THREE.MeshLambertMaterial({ color: 0x27BEF5, transparent: true, opacity: 0.5 });
    var perffgV = new THREE.SphereGeometry(30);
    var perfoV = new THREE.Mesh(perffgV, venMat);
    perfoV.position.set(156, 110, -60);
    perfoV.rotation.set(0, 1.57, 0);

    var cohete = new THREE.Group();
    cohete.add(pnt2, pnt, base4, base3, base2, navb, capsula, navb2, perfoV);
    cohete.name = "cohete";

    // ====== NAVE PLATILLO (grupo interactivo) ======
    var gris = new THREE.MeshLambertMaterial({ color: 0x999999 });
    var oscuro = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var azul = new THREE.MeshLambertMaterial({ color: 0x27BEF5 });
    var verdeM = new THREE.MeshLambertMaterial({ color: 0x44CC43 });

    var navg = new THREE.SphereGeometry(20, 40, 20);
    var navebase = new THREE.Mesh(navg, gris);
    navebase.scale.set(1.8, 0.4, 1.8);
    navebase.position.set(0, 0, 0);

    var arog = new THREE.TorusGeometry(28, 3, 16, 40);
    var aro = new THREE.Mesh(arog, oscuro);
    aro.rotation.set(1.57, 0, 0);
    aro.position.set(0, -2, 0);

    // Nota: en el HTML original esta geometría se llamaba "cabg", igual que la
    // cabeza del personaje; se renombra a "cabinag" para evitar colisión de nombres.
    var cabinag = new THREE.SphereGeometry(12, 40, 20);
    var cabina = new THREE.Mesh(cabinag, azul);
    cabina.scale.set(1, 0.6, 1);
    cabina.position.set(0, 8, 0);

    var antg = new THREE.CylinderGeometry(0.5, 0.5, 6);
    var antenaNav = new THREE.Mesh(antg, gris);
    antenaNav.position.set(0, 15, 0);

    var puntag = new THREE.SphereGeometry(1.5);
    var punta = new THREE.Mesh(puntag, verdeM);
    punta.position.set(0, 19, 0);

    var patag = new THREE.CylinderGeometry(0.6, 0.8, 8);
    var pata1 = new THREE.Mesh(patag, oscuro);
    pata1.position.set(12, -8, 12);
    pata1.rotation.set(0, 0, 0.30);

    var basepg = new THREE.SphereGeometry(2);
    var basep1 = new THREE.Mesh(basepg, gris);
    basep1.scale.set(1, 0.3, 1);
    basep1.position.set(14, -12, 12);

    var patag1 = new THREE.Group();
    patag1.add(pata1, basep1);

    var patag2 = patag1.clone();
    patag2.position.set(-24, 0, 0);

    var patag3 = patag1.clone();
    patag3.position.set(-24, 0, -24);

    var patag4 = patag1.clone();
    patag4.position.set(0, 0, -24);

    var veng = new THREE.SphereGeometry(2);
    var ven1 = new THREE.Mesh(veng, verdeM);
    ven1.scale.set(1, 1, 0.4);
    ven1.position.set(14, 3, 14);

    var ven2 = ven1.clone();
    ven2.position.set(-14, 3, 14);

    var ven3 = ven1.clone();
    ven3.position.set(14, 3, -14);

    var ven4 = ven1.clone();
    ven4.position.set(-14, 3, -14);

    var nave = new THREE.Group();
    nave.add(navebase, aro, cabina, antenaNav, punta, patag1, patag2, patag3, patag4, ven1, ven2, ven3, ven4);
    nave.position.set(-150, 80, 120);
    nave.rotation.set(0, 0.6, 0);
    nave.name = "nave";

   
    const ES04 = new THREE.Group();
    ES04.add(
        pisom,
        cabeza, antena, cuerpoantena,
        sonrisag,
        ojoblanco, oj2, oj3,
        negg2, negg3, negg4, negg5,
        gorejas, gorejas2,
        cuelllo, cuepo, cuadrocuepo, baseBody,
        brazod, brazoder,
        palmas, palmas2,
        planetita, planeta2,
        perfo, perfo2,
        coyar,
        cruzcompleta,
        corona, coronasw,
        esf, lineaesf, estrellita,
        paleta, estp,
        par, p1,
        planetaGrande,
        roc, bande,
        sol,
        planet2,
        cohete,
        nave
    );

    return ES04;
}