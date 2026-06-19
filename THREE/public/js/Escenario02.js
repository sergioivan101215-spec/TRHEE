import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";

export default function ES02() {

  
    var tablazul = new THREE.MeshLambertMaterial({ color: 0x39A2E0 });
    var cajanaranja = new THREE.MeshLambertMaterial({ color: 0xE0CE7E });
    var etiquetamat = new THREE.MeshLambertMaterial({ color: 0xC2DE52 });

    var tablag = new THREE.BoxGeometry(90, 10, 180);
    var tablagm = new THREE.Mesh(tablag, tablazul);
    tablagm.scale.set(1, 0.5, 1);
    tablagm.position.set(-300, 90, 160);

    var tabla1g = new THREE.BoxGeometry(90, 10, 90);
    var tabla1m = new THREE.Mesh(tabla1g, tablazul);
    tabla1m.rotation.set(1.57, 0, 0);
    tabla1m.position.set(-300, 45, 80);

    var tabla2g = new THREE.BoxGeometry(90, 10, 90);
    var tabla2m = new THREE.Mesh(tabla2g, tablazul);
    tabla2m.rotation.set(1.57, 0, 0);
    tabla2m.position.set(-300, 45, 240);

    var cajag = new THREE.BoxGeometry(70, 5, 50);
    var cajam = new THREE.Mesh(cajag, cajanaranja);
    cajam.position.set(0, 45, 0);

    var cajaladoig = new THREE.BoxGeometry(70, 5, 27);
    var cajaladoim = new THREE.Mesh(cajaladoig, cajanaranja);
    cajaladoim.rotation.set(1.57, 0, 0);
    cajaladoim.position.set(0, 56, -25);

    var cajaladog = new THREE.BoxGeometry(70, 5, 27);
    var cajaladom = new THREE.Mesh(cajaladog, cajanaranja);
    cajaladom.rotation.set(1.57, 0, 0);
    cajaladom.position.set(0, 56, 25);

    var cajatraserog = new THREE.BoxGeometry(27, 5, 55);
    var cajatraserom = new THREE.Mesh(cajatraserog, cajanaranja);
    cajatraserom.rotation.set(0, 0, 1.57);
    cajatraserom.position.set(-35, 56, 0);

    var cajafrontalg = new THREE.BoxGeometry(15, 5, 55);
    var cajafrontalm = new THREE.Mesh(cajafrontalg, cajanaranja);
    cajafrontalm.rotation.set(0, 0, 1.57);
    cajafrontalm.position.set(35, 50, 0);

    var cajafrontal2g = new THREE.BoxGeometry(7, 5, 55);
    var cajafrontal2m = new THREE.Mesh(cajafrontal2g, cajanaranja);
    cajafrontal2m.rotation.set(0, 0, 1.57);
    cajafrontal2m.position.set(35, 66, 0);

    var etiquetag = new THREE.BoxGeometry(4, 5, 10);
    var etiquetam = new THREE.Mesh(etiquetag, etiquetamat);
    etiquetam.rotation.set(0, 0, 1.57);
    etiquetam.position.set(37, 56, 0);

    var grupocaja = new THREE.Group();
    grupocaja.add(cajam, cajaladoim, cajaladom, cajatraserom, cajafrontalm, cajafrontal2m, etiquetam);
    grupocaja.position.set(-300, -30, 110);

    var grupocaja2 = grupocaja.clone();
    grupocaja2.position.set(-300, -30, 210);

    var grupocaja3 = grupocaja.clone();
    grupocaja3.position.set(-300, 20, 210);

    var grupocaja4 = grupocaja.clone();
    grupocaja4.position.set(-300, 20, 110);

    var grupocaja5 = grupocaja.clone();
    grupocaja5.position.set(-300, -5, 110);

    var grupocaja6 = grupocaja.clone();
    grupocaja6.position.set(-300, -5, 210);

    // ====== PAREDES Y CRISTALES ======
    var paredmaterial = new THREE.MeshLambertMaterial({ color: 0xFA4D39 });
    var paredg = new THREE.BoxGeometry(800, 50, 10);
    var pared1 = new THREE.Mesh(paredg, paredmaterial);
    pared1.position.set(0, 20, 450);

    var pared2g = new THREE.BoxGeometry(10, 50, 800);
    var pared2 = new THREE.Mesh(pared2g, paredmaterial);
    pared2.position.set(-400, 20, 50);

    var pared3g = new THREE.BoxGeometry(10, 50, 800);
    var pared3 = new THREE.Mesh(pared3g, paredmaterial);
    pared3.position.set(400, 20, 50);

    var pared4g = new THREE.BoxGeometry(800, 50, 10);
    var pared4 = new THREE.Mesh(pared4g, paredmaterial);
    pared4.position.set(0, 20, -350);

    var cristal3g = new THREE.BoxGeometry(1, 400, 800);
    var cristal3 = new THREE.Mesh(cristal3g, new THREE.MeshLambertMaterial({ color: 0xB9B9B9, transparent: true, opacity: 0.5 }));
    cristal3.position.set(-400, 200, 50);

    var cristal4g = new THREE.BoxGeometry(1, 400, 800);
    var cristal4 = new THREE.Mesh(cristal4g, new THREE.MeshLambertMaterial({ color: 0xB9B9B9, transparent: true, opacity: 0.5 }));
    cristal4.position.set(400, 200, 50);

    // ====== "CASTILLOS" (postes de pared) ======
    var castillog = new THREE.BoxGeometry(20, 400, 50, 40);
    var castillom = new THREE.MeshLambertMaterial({ color: 0xFA4D39 });
    var castillo = new THREE.Mesh(castillog, castillom);
    castillo.position.set(-400, 200, -100);

    var castillo2 = castillo.clone();
    castillo2.position.set(-400, 200, 100);

    var castillo3 = castillo.clone();
    castillo3.rotation.set(0, 0.67, 0);
    castillo3.position.set(350, 200, -300);
    castillo3.scale.set(1, 1, 3.5);

    var castillo4 = castillo.clone();
    castillo4.rotation.set(0, -0.67, 0);
    castillo4.position.set(350, 200, 400);
    castillo4.scale.set(1, 1, 3.5);

    var castillo5 = castillo.clone();
    castillo5.rotation.set(0, 3.14, 0);
    castillo5.position.set(400, 200, -100);

    var castillo6 = castillo.clone();
    castillo6.rotation.set(0, 3.14, 0);
    castillo6.position.set(400, 200, 200);

    var castillo7 = castillo.clone();
    castillo7.rotation.set(0, 0.67, 0);
    castillo7.scale.set(1, 1, 3.5);
    castillo7.position.set(-350, 200, 400);

    var castillo8 = castillo.clone();
    castillo8.rotation.set(0, -0.67, 0);
    castillo8.scale.set(1, 1, 3.5);
    castillo8.position.set(-350, 200, -300);

    // ====== REJILLAS HORIZONTALES ======
    var rejillamadera1 = new THREE.BoxGeometry(800, 5, 5);
    var materialrejilla = new THREE.MeshLambertMaterial({ color: 0xFA9F69 });
    var meshrejilla1 = new THREE.Mesh(rejillamadera1, materialrejilla);
    meshrejilla1.position.set(0, 100, 450);

    var meshrejilla2 = meshrejilla1.clone();
    meshrejilla2.position.set(0, 300, 450);

    var meshrejilla3 = meshrejilla1.clone();
    meshrejilla3.position.set(0, 300, 450);

    var gruporejillas = new THREE.Group();
    gruporejillas.add(meshrejilla1, meshrejilla2, meshrejilla3);

    var meshrejilla4 = meshrejilla1.clone();
    meshrejilla4.position.set(0, 50, -350);

    var meshrejilla5 = meshrejilla1.clone();
    meshrejilla5.position.set(0, 50, 450);

    var meshrejilla6 = meshrejilla1.clone();
    meshrejilla6.position.set(-400, 50, 0);
    meshrejilla6.rotation.set(0, 1.57, 0);

    var meshrejilla7 = meshrejilla1.clone();
    meshrejilla7.position.set(400, 50, 0);
    meshrejilla7.rotation.set(0, 1.57, 0);

    // ====== REJILLAS VERTICALES ======
    var rejillavertical = new THREE.BoxGeometry(5, 400, 5);
    var meshrejillavertical1 = new THREE.Mesh(rejillavertical, materialrejilla);
    meshrejillavertical1.position.set(-400, 200, 75);

    var meshrejillavertical2 = meshrejillavertical1.clone();
    meshrejillavertical2.position.set(-400, 200, -75);

    var meshrejillavertical3 = meshrejillavertical1.clone();
    meshrejillavertical3.position.set(400, 200, 175);

    var meshrejillavertical4 = meshrejillavertical1.clone();
    meshrejillavertical4.position.set(400, 200, -75);

    var meshrejillavertical5 = meshrejillavertical1.clone();
    meshrejillavertical5.position.set(-400, 200, 125);

    var meshrejillavertical6 = meshrejillavertical1.clone();
    meshrejillavertical6.position.set(-400, 200, 325);

    var meshrejillavertical7 = meshrejillavertical1.clone();
    meshrejillavertical7.position.set(-400, 200, -225);

    var meshrejillavertical8 = meshrejillavertical1.clone();
    meshrejillavertical8.position.set(-400, 200, -125);

    var meshrejillavertical9 = meshrejillavertical1.clone();
    meshrejillavertical9.position.set(400, 200, 225);

    var meshrejillavertical10 = meshrejillavertical1.clone();
    meshrejillavertical10.position.set(400, 200, -225);

    var meshrejillavertical11 = meshrejillavertical1.clone();
    meshrejillavertical11.position.set(400, 200, -175);

    var meshrejillavertical12 = meshrejillavertical1.clone();
    meshrejillavertical12.position.set(400, 200, -125);

    var meshrejillavertical13 = meshrejillavertical1.clone();
    meshrejillavertical13.position.set(400, 200, 325);

    var meshrejillavertical14 = meshrejillavertical1.clone();
    meshrejillavertical14.position.set(400, 200, 275);

    var meshrejillavertical15 = meshrejillavertical1.clone();
    meshrejillavertical15.position.set(400, 200, 100);

    var meshrejillavertical16 = meshrejillavertical1.clone();
    meshrejillavertical16.position.set(400, 200, 0);

    var meshrejillavertical17 = meshrejillavertical1.clone();
    meshrejillavertical17.position.set(-400, 200, -175);

    var meshrejillavertical18 = meshrejillavertical1.clone();
    meshrejillavertical18.position.set(-400, 200, 225);

    // ====== PUERTA / METAL / MADERA ======
    var metalg = new THREE.BoxGeometry(200, 50, 15);
    var metalm = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var metali = new THREE.Mesh(metalg, metalm);
    metali.position.set(-400, 25, 0);
    metali.receiveShadow = true;
    metali.castShadow = true;
    metali.rotation.set(0, 1.57, 0);

    var metal2g = new THREE.BoxGeometry(200, 60, 15);
    var metal2m = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var metali2 = new THREE.Mesh(metal2g, metal2m);
    metali2.position.set(-400, 320, 0);
    metali2.receiveShadow = true;
    metali2.castShadow = true;
    metali2.rotation.set(0, 1.57, 0);

    var maderag = new THREE.BoxGeometry(50, 300, 10);
    var maderam = new THREE.MeshLambertMaterial({ color: 0xFA9F69 });
    var madera = new THREE.Mesh(maderag, maderam);
    madera.position.set(-400, 200, -50);
    madera.receiveShadow = true;
    madera.castShadow = true;
    madera.rotation.set(0, 1.57, 0);

    var maderag2 = new THREE.BoxGeometry(50, 300, 10);
    var maderam2 = new THREE.MeshLambertMaterial({ color: 0xFA9F69 });
    var madera2 = new THREE.Mesh(maderag2, maderam2);
    madera2.position.set(-400, 200, 50);
    madera2.receiveShadow = true;
    madera2.castShadow = true;
    madera2.rotation.set(0, 1.57, 0);

    var maderag3 = new THREE.BoxGeometry(50, 50, 10);
    var maderam3 = new THREE.MeshLambertMaterial({ color: 0xFA9F69 });
    var madera3 = new THREE.Mesh(maderag3, maderam3);
    madera3.position.set(-400, 270, 0);
    madera3.receiveShadow = true;
    madera3.castShadow = true;
    madera3.rotation.set(0, 1.57, 0);

    var maderag4 = new THREE.BoxGeometry(50, 50, 10);
    var maderam4 = new THREE.MeshLambertMaterial({ color: 0xFA9F69 });
    var madera4 = new THREE.Mesh(maderag4, maderam4);
    madera4.position.set(-400, 70, 0);
    madera4.receiveShadow = true;
    madera4.castShadow = true;
    madera4.rotation.set(0, 1.57, 0);

    var manijag = new THREE.BoxGeometry(10, 40, 5);
    var manijam = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var manija = new THREE.Mesh(manijag, manijam);
    manija.position.set(-390, 150, -50);
    manija.receiveShadow = true;
    manija.castShadow = true;
    manija.rotation.set(0, 1.57, 0);

    var manijag2 = new THREE.BoxGeometry(10, 40, 5);
    var manijam2 = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var manija2 = new THREE.Mesh(manijag2, manijam2);
    manija2.position.set(-385, 150, -45);
    manija2.receiveShadow = true;
    manija2.castShadow = true;
    manija2.scale.set(1, 0.5, 1);
    manija2.rotation.set(1.57, 1.57, 0);

    // ====== SILLÓN ======
    var sillong = new THREE.BoxGeometry(80, 50, 100);
    var sillonm = new THREE.MeshLambertMaterial({ color: 0xFB2E19 });
    var sillon = new THREE.Mesh(sillong, sillonm);
    sillon.position.set(-300, 25, 350);
    sillon.rotation.set(0, 0.67, 0);
    sillon.receiveShadow = true;
    sillon.castShadow = true;

    var respladoSillonG = new THREE.BoxGeometry(30, 100, 100);
    var respladoSillon = new THREE.Mesh(respladoSillonG, sillonm);
    respladoSillon.position.set(-335, 50, 380);
    respladoSillon.rotation.set(0, 0.67, 0);
    respladoSillon.receiveShadow = true;
    respladoSillon.castShadow = true;

    var respladodelgadog = new THREE.SphereGeometry(50);
    var respladodelgado = new THREE.Mesh(respladodelgadog, sillonm);
    respladodelgado.scale.set(0.4, 1, 1);
    respladodelgado.position.set(-335, 90, 380);
    respladodelgado.rotation.set(0, 0.67, 0);
    respladodelgado.receiveShadow = true;
    respladodelgado.castShadow = true;

    var respladolateralg = new THREE.BoxGeometry(20, 100, 100);
    var respladolateral = new THREE.Mesh(respladolateralg, sillonm);
    respladolateral.position.set(-250, 40, 380);
    respladolateral.rotation.set(0, 2.25, 0);
    respladolateral.receiveShadow = true;
    respladolateral.castShadow = true;

    var respladolateral2g = new THREE.BoxGeometry(20, 100, 100);
    var respladolateral2 = new THREE.Mesh(respladolateral2g, sillonm);
    respladolateral2.position.set(-320, 40, 300);
    respladolateral2.rotation.set(0, 2.25, 0);
    respladolateral2.receiveShadow = true;
    respladolateral2.castShadow = true;

    var respladodelgado2 = respladodelgado.clone();
    respladodelgado2.position.set(-325, 60, 375);

    // ====== PUFFS ======
    var puffg = new THREE.SphereGeometry(40, 30, 40);
    var puffm = new THREE.MeshLambertMaterial({ color: 0x11BD2E });
    var puff = new THREE.Mesh(puffg, puffm);
    puff.scale.set(0.9, 0.6, 1);
    puff.position.set(-200, 10, 160);
    puff.castShadow = true;
    puff.receiveShadow = true;

    var puff2 = puff.clone();
    puff2.position.set(-210, 10, 160);
    puff2.scale.set(0.8, 0.8, 1);
    puff2.rotation.set(0, 0, 0.67);

    // ====== COLGANTES DECORATIVOS DE TECHO ======
    var colgantg = new THREE.TorusGeometry(600, 1, 20, 40);
    var colgantm = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var colgante = new THREE.Mesh(colgantg, colgantm);
    colgante.position.set(0, 400, 0);
    colgante.scale.set(1, 0.1, 1);
    colgante.rotation.set(0, 0.77, 0);

    var adorno1g = new THREE.BoxGeometry(60, 5, 50);
    var adorno1m = new THREE.MeshLambertMaterial({ color: 0x16F3FA });
    var adorno1 = new THREE.Mesh(adorno1g, adorno1m);
    adorno1.rotation.set(1.57, 0, 2.35);
    adorno1.position.set(0, 310, 0);
    adorno1.castShadow = true;

    var adorno2g = new THREE.SphereGeometry(15);
    var adorno2m = new THREE.MeshLambertMaterial({ color: 0x3E8AFB });
    var adorno2 = new THREE.Mesh(adorno2g, adorno2m);
    adorno2.rotation.set(1.57, 0, 2.35);
    adorno2.position.set(0, 310, 0);
    adorno2.scale.set(1, 0.3, 1);
    adorno2.castShadow = true;

    var pinzag = new THREE.BoxGeometry(2, 20, 5);
    var pinzam = new THREE.MeshLambertMaterial({ color: 0x096568 });
    var pinza = new THREE.Mesh(pinzag, pinzam);
    pinza.position.set(22, 330, -22);
    pinza.rotation.set(0, 1.57, 0);

    var pinza2 = pinza.clone();
    pinza2.position.set(-20, 330, 22);
    pinza2.rotation.set(0, 1.57, 0);

    var grupocolgante = new THREE.Group();
    grupocolgante.add(adorno1, adorno2, pinza, pinza2);

    var grupocolgante2 = grupocolgante.clone();
    grupocolgante2.position.set(60, 0, -60);

    var grupocolgante3 = grupocolgante.clone();
    grupocolgante3.position.set(-60, 0, 60);

    var grupocolgantes = new THREE.Group();
    grupocolgantes.add(grupocolgante, grupocolgante2, grupocolgante3);

    var grupocolgantes2 = grupocolgantes.clone();
    grupocolgantes2.position.set(180, 10, -200);
    grupocolgantes2.rotation.set(0.09, 0, 0);

    var grupocolgantes3 = grupocolgantes.clone();
    grupocolgantes3.position.set(-170, 10, 200);
    grupocolgantes3.rotation.set(-0.09, 0, 0);

    // ====== MESA Y SILLAS ======
    var mesag = new THREE.BoxGeometry(100, 5, 100);
    var mesam = new THREE.MeshLambertMaterial({ color: 0xFB8A72 });
    var mesa = new THREE.Mesh(mesag, mesam);
    mesa.position.set(200, 70, -200);

    var patag = new THREE.CylinderGeometry(5, 5, 70);
    var patam = new THREE.MeshLambertMaterial({ color: 0x07494B });
    var pata1 = new THREE.Mesh(patag, patam);
    pata1.position.set(170, 35, -170);

    var pata2 = pata1.clone();
    pata2.position.set(230, 35, -170);

    var pata3 = pata1.clone();
    pata3.position.set(170, 35, -230);

    var pata4 = pata1.clone();
    pata4.position.set(230, 35, -230);

    var sillasg = new THREE.BoxGeometry(50, 5, 50);
    var sillasm = new THREE.MeshLambertMaterial({ color: 0xEDF988 });
    var silla = new THREE.Mesh(sillasg, sillasm);
    silla.position.set(200, 25, -300);

    var respaldog = new THREE.BoxGeometry(50, 50, 5);
    var respaldom = new THREE.MeshLambertMaterial({ color: 0xEDF988 });
    var respaldo = new THREE.Mesh(respaldog, respaldom);
    respaldo.position.set(200, 50, -325);

    var patag2 = new THREE.CylinderGeometry(3, 3, 40);
    var patam2 = new THREE.MeshLambertMaterial({ color: 0x07494B });
    var patasilla1 = new THREE.Mesh(patag2, patam2);
    patasilla1.position.set(185, 0, -285);

    var patasilla2 = patasilla1.clone();
    patasilla2.position.set(215, 0, -285);

    var patasilla3 = patasilla1.clone();
    patasilla3.position.set(185, 0, -315);

    var patasilla4 = patasilla1.clone();
    patasilla4.position.set(215, 0, -315);

    var gruposilla = new THREE.Group();
    gruposilla.add(silla, respaldo, patasilla1, patasilla2, patasilla3, patasilla4);

    var gruposilla2 = gruposilla.clone();
    gruposilla2.position.set(470, 10, -200);
    gruposilla2.rotation.set(0, 2.35, 0);

    var sillasm2 = new THREE.MeshLambertMaterial({ color: 0xFA81E9 });
    var silla3 = new THREE.Mesh(sillasg, sillasm2);
    silla3.position.set(200, 35, -100);

    var respaldo3 = new THREE.Mesh(respaldog, sillasm2);
    respaldo3.position.set(200, 60, -75);

    var patasilla3_1 = new THREE.Mesh(patag2, patam2);
    patasilla3_1.position.set(185, 10, -85);

    var patasilla3_2 = patasilla3_1.clone();
    patasilla3_2.position.set(215, 10, -85);

    var patasilla3_3 = patasilla3_1.clone();
    patasilla3_3.position.set(185, 10, -115);

    var patasilla3_4 = patasilla3_1.clone();
    patasilla3_4.position.set(215, 10, -115);

    var sillasm4 = new THREE.MeshLambertMaterial({ color: 0x5F41F8 });
    var silla4 = new THREE.Mesh(sillasg, sillasm4);
    silla4.position.set(300, 35, -100);

    var respaldo4 = new THREE.Mesh(respaldog, sillasm4);
    respaldo4.position.set(300, 60, -75);

    var patasilla4_1 = new THREE.Mesh(patag2, patam2);
    patasilla4_1.position.set(285, 10, -85);

    var patasilla4_2 = patasilla4_1.clone();
    patasilla4_2.position.set(315, 10, -85);

    var patasilla4_3 = patasilla4_1.clone();
    patasilla4_3.position.set(285, 10, -115);

    var patasilla4_4 = patasilla4_1.clone();
    patasilla4_4.position.set(315, 10, -115);

    var gruposilla4 = new THREE.Group();
    gruposilla4.add(
        silla4, respaldo4, patasilla4_1, patasilla4_2, patasilla4_3, patasilla4_4,
        respaldo3, gruposilla, gruposilla2
    );
    gruposilla4.position.set(400, 0, 100);
    gruposilla4.rotation.set(0, 1.57, 0);

    // ====== TECHO Y FOCO ======
    var techog = new THREE.BoxGeometry(800, 10, 800);
    var techom = new THREE.MeshLambertMaterial({ color: 0xBDB8C0 });
    var techo = new THREE.Mesh(techog, techom);
    techo.position.set(0, 400, 50);
    techo.receiveShadow = true;
    techo.castShadow = true;

    var focog = new THREE.SphereGeometry(10);
    var focom = new THREE.MeshLambertMaterial({ color: 0xEFFA89 });
    var foco = new THREE.Mesh(focog, focom);
    foco.position.set(0, 390, 0);

    // ====== PISO ======
    var base = new THREE.BoxGeometry(800, 1, 800);
    var tps = new THREE.TextureLoader().load("./img/piso.jpg");
    var mtex = new THREE.MeshLambertMaterial({ map: tps });
    var meshbase = new THREE.Mesh(base, mtex);
    meshbase.receiveShadow = true;
    meshbase.position.set(0, -1, 50);

    // ====== TAPETE PATRÓN (hexágonos) ======
    var tg = new THREE.SphereGeometry(50, 18);
    var tm = new THREE.MeshLambertMaterial({ color: 0xDCA014 });
    var tap = new THREE.Mesh(tg, tm);
    tap.castShadow = true;
    tap.scale.set(1, 0.01, 1);

    var tgc = new THREE.SphereGeometry(35, 18);
    var tmc = new THREE.MeshLambertMaterial({ color: 0xE0BD74 });
    var tapc = new THREE.Mesh(tgc, tmc);
    tapc.castShadow = true;
    tapc.position.set(0, 0.4, 0);
    tapc.scale.set(1, 0.01, 1);

    var tgco = new THREE.SphereGeometry(20, 18);
    var tmco = new THREE.MeshLambertMaterial({ color: 0xDCA014 });
    var tapco = new THREE.Mesh(tgco, tmco);
    tapco.castShadow = true;
    tapco.position.set(0, 1, 0);
    tapco.scale.set(1, 0.01, 1);

    var hg = new THREE.OctahedronGeometry(35, 0);
    var hm = new THREE.MeshLambertMaterial({ color: 0xA68D56 });
    var hex = new THREE.Mesh(hg, hm);
    hex.castShadow = true;
    hex.position.set(0, 0.7, 0);
    hex.scale.set(0.2, 0.01, 1);

    var hg2 = hex.clone();
    hg2.rotation.set(0, 0.5, 0);

    var hg3 = hex.clone();
    hg3.rotation.set(0, 1, 0);

    var hg4 = hex.clone();
    hg4.rotation.set(0, 1.5, 0);

    var hg5 = hex.clone();
    hg5.rotation.set(0, 2, 0);

    var hg6 = hex.clone();
    hg6.rotation.set(0, 2.5, 0);

    var grupotapetepatron = new THREE.Group();
    grupotapetepatron.add(tap, tapc, tapco, hex, hg2, hg3, hg4, hg5, hg6);
    grupotapetepatron.position.set(-100, 0, 0);
    grupotapetepatron.scale.set(2.5, 2.5, 2.5);

    // ====== TAPETES DE COLORES (cuadrícula) ======
    var tg2 = new THREE.BoxGeometry(10, 1, 10);
    var tm2 = new THREE.MeshLambertMaterial({ color: 0x00FF00 });
    var tap2 = new THREE.Mesh(tg2, tm2);
    tap2.castShadow = true;
    tap2.position.set(-5, 0.1, 143);
    tap2.rotation.set(0, 0.5, 0);

    var tg3 = new THREE.BoxGeometry(10, 1, 10);
    var tm3 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    var tap3 = new THREE.Mesh(tg3, tm3);
    tap3.castShadow = true;
    tap3.position.set(10, 0.1, 150);

    var tg4 = new THREE.BoxGeometry(10, 1, 10);
    var tm4 = new THREE.MeshLambertMaterial({ color: 0x0000FF });
    var tap4 = new THREE.Mesh(tg4, tm4);
    tap4.castShadow = true;
    tap4.position.set(20, 0.1, 150);

    var tg5 = new THREE.BoxGeometry(10, 1, 10);
    var tm5 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var tap5 = new THREE.Mesh(tg5, tm5);
    tap5.castShadow = true;
    tap5.position.set(30, 0.1, 150);

    var tg6 = new THREE.BoxGeometry(10, 1, 10);
    var tm6 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap6 = new THREE.Mesh(tg6, tm6);
    tap6.castShadow = true;
    tap6.position.set(0, 0.1, 160);

    var tg7 = new THREE.BoxGeometry(10, 1, 10);
    var tm7 = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    var tap7 = new THREE.Mesh(tg7, tm7);
    tap7.castShadow = true;
    tap7.position.set(10, 0.1, 160);

    var tg8 = new THREE.BoxGeometry(10, 1, 10);
    var tm8 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var tap8 = new THREE.Mesh(tg8, tm8);
    tap8.castShadow = true;
    tap8.position.set(20, 0.1, 160);

    var tg9 = new THREE.BoxGeometry(10, 1, 10);
    var tm9 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap9 = new THREE.Mesh(tg9, tm9);
    tap9.castShadow = true;
    tap9.position.set(30, 0.1, 160);

    var tg10 = new THREE.BoxGeometry(10, 1, 10);
    var tm10 = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    var tap10 = new THREE.Mesh(tg10, tm10);
    tap10.castShadow = true;
    tap10.position.set(0, 0.1, 170);

    var tg11 = new THREE.BoxGeometry(10, 1, 10);
    var tm11 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap11 = new THREE.Mesh(tg11, tm11);
    tap11.castShadow = true;
    tap11.position.set(10, 0.1, 170);

    var tg12 = new THREE.BoxGeometry(10, 1, 10);
    var tm12 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var tap12 = new THREE.Mesh(tg12, tm12);
    tap12.castShadow = true;
    tap12.position.set(20, 0.1, 170);

    var tg13 = new THREE.BoxGeometry(10, 1, 10);
    var tm13 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap13 = new THREE.Mesh(tg13, tm13);
    tap13.castShadow = true;
    tap13.position.set(30, 0.1, 170);

    var tg14 = new THREE.BoxGeometry(10, 1, 10);
    var tm14 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var tap14 = new THREE.Mesh(tg14, tm14);
    tap14.castShadow = true;
    tap14.position.set(0, 0.1, 180);

    var tg15 = new THREE.BoxGeometry(10, 1, 10);
    var tm15 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap15 = new THREE.Mesh(tg15, tm15);
    tap15.castShadow = true;
    tap15.position.set(10, 0.1, 180);

    var tg16 = new THREE.BoxGeometry(10, 1, 10);
    var tm16 = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    var tap16 = new THREE.Mesh(tg16, tm16);
    tap16.castShadow = true;
    tap16.position.set(20, 0.1, 180);

    var tg17 = new THREE.BoxGeometry(10, 1, 10);
    var tm17 = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var tap17 = new THREE.Mesh(tg17, tm17);
    tap17.castShadow = true;
    tap17.position.set(30, 0.1, 180);

    var grupotapetes = new THREE.Group();
    grupotapetes.add(
        tap2, tap3, tap4, tap5, tap6, tap7, tap8, tap9,
        tap10, tap11, tap12, tap13, tap14, tap15, tap16, tap17
    );
    grupotapetes.position.set(0, 0, -550);
    grupotapetes.scale.set(5, 1, 5);

    // ====== TAPETES AZULES ======
    var tga18 = new THREE.BoxGeometry(70, 0.1, 50);
    var tma18 = new THREE.MeshLambertMaterial({ color: 0x5478D6 });
    var tpa18 = new THREE.Mesh(tga18, tma18);
    tpa18.castShadow = true;
    tpa18.position.set(100, 0.001, 30);

    var tga19 = new THREE.BoxGeometry(50, 0.1, 30);
    var tma19 = new THREE.MeshLambertMaterial({ color: 0x7FA2D6 });
    var tpa19 = new THREE.Mesh(tga19, tma19);
    tpa19.castShadow = true;
    tpa19.scale.set(0.8, 1, 0.8);
    tpa19.position.set(100, 0.09, 30);

    var tga20 = new THREE.BoxGeometry(70, 0.1, 50);
    var tma20 = new THREE.MeshLambertMaterial({ color: 0x5478D6 });
    var tpa20 = new THREE.Mesh(tga20, tma20);
    tpa20.castShadow = true;
    tpa20.position.set(100, 0.19, -30);

    var tga21 = new THREE.BoxGeometry(50, 0.1, 30);
    var tma21 = new THREE.MeshLambertMaterial({ color: 0x7FA2D6 });
    var tpa21 = new THREE.Mesh(tga21, tma21);
    tpa21.castShadow = true;
    tpa21.position.set(100, 0.3, -30);
    tpa21.scale.set(0.8, 1, 0.8);

    var grupotapetesazules = new THREE.Group();
    grupotapetesazules.add(tpa18, tpa19, tpa20, tpa21);
    grupotapetesazules.position.set(0, 0, 0);
    grupotapetesazules.scale.set(2, 2, 2);

    // ====== PERSONAJE "HAMM" ======
    var rosa = new THREE.MeshLambertMaterial({ color: 0xE09082 });
    var rosafuerte = new THREE.MeshLambertMaterial({ color: 0xE06972 });
    var negro = new THREE.MeshLambertMaterial({ color: 0x000000 });

    var narizg = new THREE.CylinderGeometry(5.5, 6, 5, 50);
    var nariz = new THREE.Mesh(narizg, rosa);
    nariz.position.set(0, 37, 10);
    nariz.rotation.set(1.57, 0, 0);

    var bolang = new THREE.SphereGeometry(5.5);
    var bolan = new THREE.Mesh(bolang, rosa);
    bolan.position.set(0, 37, 12.5);
    bolan.scale.set(1, 1, 0.2);

    var cabg = new THREE.SphereGeometry(15, 40, 40);
    var cabeza = new THREE.Mesh(cabg, rosa);
    cabeza.scale.set(1, 0.9, 0.7);
    cabeza.position.set(0, 40, 0);

    var cachete1 = cabeza.clone();
    cachete1.scale.set(1.2, 0.6, 0.9);
    cachete1.position.set(0, 40, 0);

    var ojog = new THREE.SphereGeometry(2);
    var ojo = new THREE.Mesh(ojog, negro);
    ojo.position.set(-3, 45, 8);

    var ojo2 = ojo.clone();
    ojo2.position.set(3, 45, 8);

    var cejag = new THREE.SphereGeometry(3);
    var ceja = new THREE.Mesh(cejag, negro);
    ceja.scale.set(1, 0.1, 0.3);
    ceja.rotation.set(-0.40, -0.30, 0.30);
    ceja.position.set(-5, 48, 7);

    var cejag2 = new THREE.SphereGeometry(3);
    var ceja2 = new THREE.Mesh(cejag2, negro);
    ceja2.scale.set(1, 0.1, 0.3);
    ceja2.rotation.set(-0.40, 0.30, -0.30);
    ceja2.position.set(5, 48, 7);

    var orejag = new THREE.TorusGeometry(5, 2, 40, 3);
    var oreja = new THREE.Mesh(orejag, rosa);
    oreja.position.set(-10, 50, 0);

    var oreja2 = oreja.clone();
    oreja2.rotation.set(0, 0, 0.78);
    oreja2.position.set(11, 50, 0);

    var grupoorejas = new THREE.Group();
    grupoorejas.add(oreja, oreja2);

    var orejagt = new THREE.TorusGeometry(3, 3, 40, 3);
    var orejat = new THREE.Mesh(orejagt, rosafuerte);
    orejat.scale.set(1, 1, 0.7);
    orejat.position.set(-10, 50, 0);

    var oreja2t = orejat.clone();
    oreja2t.scale.set(1, 1, 0.7);
    oreja2t.rotation.set(0, 0, 0.78);
    oreja2t.position.set(11, 50, 0);

    var onarg = new THREE.SphereGeometry(2);
    var onar = new THREE.Mesh(onarg, rosafuerte);
    onar.position.set(-2, 37, 13.5);
    onar.scale.set(0.5, 1, 0.1);

    var onar2 = onar.clone();
    onar2.position.set(2, 37, 13.5);

    var torsog = new THREE.SphereGeometry(15, 40, 6);
    var torso = new THREE.Mesh(torsog, rosa);
    torso.scale.set(1, 1, 0.7);
    torso.position.set(0, 20, 0);

    var torsocg = new THREE.CylinderGeometry(15, 17, 15, 40);
    var torsoc = new THREE.Mesh(torsocg, rosa);
    torsoc.position.set(0, 12.5, 0);
    torsoc.scale.set(1, 1, 0.69);

    var basetorsog = new THREE.SphereGeometry(15);
    var baset = new THREE.Mesh(basetorsog, rosa);
    baset.position.set(0, 5, 0);
    baset.scale.set(1.14, 0.5, 0.79);

    var bocgg = new THREE.SphereGeometry(5, 10, 20, 1, 2);
    var bocabierta = new THREE.Mesh(bocgg, rosa);
    bocabierta.position.set(0, 32.7, 6);
    bocabierta.scale.set(1.5, 1.2, 1);
    bocabierta.rotation.set(1.7, 0, 1.77);

    var bbag = new THREE.TorusGeometry(5, 0.5, 16, 40);
    var bba = new THREE.Mesh(bbag, rosa);
    bba.position.set(0, 33, 6.4);
    bba.scale.set(1.2, 1.3, 1);
    bba.rotation.set(1.90, 0, 0);

    var bog = new THREE.CylinderGeometry(3, 4, 4, 40);
    var bo = new THREE.Mesh(bog, rosa);
    bo.rotation.set(1.57, 0, 0);
    bo.position.set(0, 15, 10);

    var tabog = new THREE.SphereGeometry(3);
    var tabo = new THREE.Mesh(tabog, rosafuerte);
    tabo.scale.set(1, 0.2, 1);
    tabo.rotation.set(1.57, 0, 0);
    tabo.position.set(0, 15, 12);

    var bdg = new RoundedBoxGeometry(10, 10, 6, 1, 1);
    var bd = new THREE.Mesh(bdg, rosa);
    bd.position.set(12.7, 22.5, 0);
    bd.rotation.set(0, 0, 1.1);
    bd.scale.set(1, 1, 0.8);

    var mbdg = new THREE.TorusKnotGeometry(2, 2, 30, 46);
    var mbd = new THREE.Mesh(mbdg, rosa);
    mbd.position.set(15, 17, 0);

    var grupobrazo = new THREE.Group();
    grupobrazo.add(bd, mbd);

    var gpb2 = grupobrazo.clone();
    gpb2.position.set(0, 0, 0);
    gpb2.rotation.set(0, 3.14, 0);

    var lpg = new RoundedBoxGeometry(1, 9, 5, 1, 1);
    var lp = new THREE.Mesh(lpg, rosafuerte);
    lp.position.set(0, 20, -8.1);
    lp.rotation.set(0.10, 0, 0);

    // ---- accesorios de hamm (moneda, parche, gorro, piercing, tatuaje) ----
    var naranja = new THREE.MeshLambertMaterial({ color: 0xE09000 });
    var plata = new THREE.MeshLambertMaterial({ color: 0x89BBBD });
    var platamg = new THREE.SphereGeometry(2);
    var narmg = new THREE.SphereGeometry(1.8);
    var monedaplata = new THREE.Mesh(platamg, plata);
    var monedanaranja = new THREE.Mesh(narmg, naranja);
    monedanaranja.scale.set(1.5, 1, 1);
    var monedacomp = new THREE.Group();
    monedacomp.add(monedaplata, monedanaranja);
    monedacomp.scale.set(0.1, 1, 1);
    monedacomp.position.set(0, 20, -11);

    var lineaparcheg = new THREE.TorusGeometry(10, 0.3, 20, 20);
    var lineaparche = new THREE.Mesh(lineaparcheg, negro);
    lineaparche.scale.set(0.9, 0.5, 1);
    lineaparche.rotation.set(1.5, -0.68, 0);
    lineaparche.position.set(8.3, 48.8, 0);

    var parcheg = new THREE.SphereGeometry(4, 6, 4);
    var parche = new THREE.Mesh(parcheg, negro);
    parche.scale.set(1, 1, 0.1);
    parche.rotation.set(1.57, -0.70, 0);
    parche.position.set(8, 49, 5);

    var blanco = new THREE.MeshLambertMaterial({ color: 0xffffff });

    var bolasomg = new THREE.SphereGeometry(4);
    var bolasom = new THREE.Mesh(bolasomg, negro);
    bolasom.scale.set(1.5, 1, 1.3);
    bolasom.rotation.set(0.30, 0, 0);
    bolasom.position.set(0, 52, -3);

    var bolasomg1 = new THREE.SphereGeometry(1);
    var bolasom1 = new THREE.Mesh(bolasomg1, blanco);
    bolasom1.scale.set(1.5, 0.8, 1);
    bolasom1.rotation.set(0.30, 0, 0);
    bolasom1.position.set(0, 54, 3);

    var lineasomg = new THREE.TorusGeometry(6, 1, 10, 30);
    var lineasom = new THREE.Mesh(lineasomg, negro);
    lineasom.scale.set(1.5, 1, 1.3);
    lineasom.rotation.set(1.20, 0, 0);
    lineasom.position.set(0, 52, -3);

    var basesomg = new THREE.SphereGeometry(7);
    var basesom = new THREE.Mesh(basesomg, negro);
    basesom.scale.set(1.3, 1, 0.1);
    basesom.rotation.set(1.20, 0, 0);
    basesom.position.set(0, 52, -3);

    var pierg = new THREE.TorusGeometry(2, 0.3, 20, 20);
    var pier = new THREE.Mesh(pierg, plata);
    pier.position.set(0, 37, 14);
    pier.rotation.set(1.57, 0, 0);

    var tatuajeg = new THREE.TorusKnotGeometry(1.2, 0.3, 20, 20);
    var tatuaje = new THREE.Mesh(tatuajeg, negro);
    tatuaje.scale.set(1, 1, 0.1);
    tatuaje.rotation.set(1.57, -0.46, 0);
    tatuaje.position.set(15, 27, 0);

    // grupo completo del personaje "hamm" (cuerpo + accesorios)
    var hamm = new THREE.Group();
    hamm.add(
        lp, gpb2, grupobrazo,
        tabo, bo, bba, bocabierta,
        baset, torsoc, torso,
        onar, onar2,
        oreja2t, orejat, grupoorejas,
        ceja, ceja2, ojo, ojo2,
        cachete1, cabeza, bolan, nariz,
        monedacomp, lineaparche, parche,
        bolasom, bolasom1, lineasom, basesom,
        pier, tatuaje
    );

    hamm.name = "hamm";

    var hamm2 = hamm.clone();
    hamm2.position.set(250, 75, -200);
    hamm2.name = "hamm2";

    
    const ES02 = new THREE.Group();
    ES02.add(
        tablagm, tabla1m, tabla2m,
        grupocaja, grupocaja2, grupocaja3, grupocaja4, grupocaja5, grupocaja6,
        pared1, pared2, pared3, pared4,
        cristal3, cristal4,
        castillo, castillo2, castillo3, castillo4, castillo5, castillo6, castillo7, castillo8,
        gruporejillas, meshrejilla4, meshrejilla5, meshrejilla6, meshrejilla7,
        meshrejillavertical1, meshrejillavertical2, meshrejillavertical3, meshrejillavertical4,
        meshrejillavertical5, meshrejillavertical6, meshrejillavertical7, meshrejillavertical8,
        meshrejillavertical9, meshrejillavertical10, meshrejillavertical11, meshrejillavertical12,
        meshrejillavertical13, meshrejillavertical14, meshrejillavertical15, meshrejillavertical16,
        meshrejillavertical17, meshrejillavertical18,
        metali, metali2,
        madera, madera2, madera3, madera4,
        manija, manija2,
        sillon, respladoSillon, respladodelgado, respladolateral, respladolateral2, respladodelgado2,
        puff, puff2,
        colgante,
        grupocolgantes, grupocolgantes2, grupocolgantes3,
        mesa, pata1, pata2, pata3, pata4,
        gruposilla4,
        silla3, respaldo3,
        patasilla3_1, patasilla3_2, patasilla3_3, patasilla3_4,
        techo, foco,
        meshbase,
        grupotapetepatron,
        grupotapetes,
        grupotapetesazules,
        hamm,
        hamm2
    );

    return ES02;
}