let intro = document.createElement("div");
intro.id = "introEkrans";

let introTitle = document.createElement("h1");
introTitle.innerText = "Dark Fantasy Pixel Game";

let introTeksts = document.createElement("p");
introTeksts.innerText = "";

let pogaTurpinat = document.createElement("button");
pogaTurpinat.id = "pogaTurpinat";
pogaTurpinat.innerText = "Turpināt";

function showFloatingText(text, color, x = 160, y = 100) {
  const floatText = document.createElement("div");
  floatText.classList.add("floating-text");
  floatText.innerText = text;
  floatText.style.left = x + "px";
  floatText.style.top = y + "px";
  floatText.style.color = color;
  document.body.appendChild(floatText);
  setTimeout(() => floatText.remove(), 1000);
}

intro.appendChild(introTitle);
intro.appendChild(introTeksts);
intro.appendChild(pogaTurpinat);
document.body.appendChild(intro);

pogaTurpinat.addEventListener("click", function(){
  intro.style.display = "none"; 
  kaste.style.display = "block"; 
});



let kaste = document.createElement("div");
kaste.id = "kaste";

let ieprieksejais = localStorage.getItem("spelesRezultats");
let rezultatsBox = document.createElement("div");
rezultatsBox.id = "rezultatsBox";

if (ieprieksejais) {
  let dati = JSON.parse(ieprieksejais);
  let ieprRez = document.createElement("p");
  ieprRez.innerHTML = `📜 Pēdējais rezultāts: ${dati.punkti} punkti, ${dati.dzivibas} dzīvības, ${dati.eliksiri} eliksīri (${dati.datums})`;
  ieprRez.style.fontSize = "14px";
  ieprRez.style.marginTop = "10px";
  rezultatsBox.appendChild(ieprRez);
}
kaste.appendChild(rezultatsBox);


let kaste2 = document.createElement("div");
kaste2.id = "kaste2";

let kaste4 = document.createElement("div");
kaste4.id = "kaste4";

document.body.appendChild(kaste);

let pogaSakt = document.createElement("button");
pogaSakt.innerHTML = "Sākt spēli!";
pogaSakt.id = "pogaSakt";
kaste.appendChild(pogaSakt);

let noteikumi = document.createElement("button");
noteikumi.id = "noteikumi";
noteikumi.innerHTML = "Noteikumi ";
kaste.appendChild(noteikumi);

let punkti = 0;
const pretinieki = ["Devil in Suit", "Shadow Green", "Shadow Fiend", "Pudge", "Night Stalker", "Invoker", "Terrorblade", "Zeus of the light", "Elder Titan", "Broodmother", "Mephistophilus"];
const pretiniekiAtteli = ["boss1.png", "boss2.png", "boss3.png", "boss4.png", "boss5.png", "boss6.png", "boss7.png", "boss8.png", "boss9.png", "boss10.png", "boss11.png"];
let pretiniekaHP = 0;
let pretiniekaATK = 0;
let speletajaATK = 0;
let speletajaHP = 100;
let eliksiri = 5;
let totemVozrozhdeniya = 5;
let bossHP = 200;
let bossATK = 1.5; 

let audio = new Audio("burzum-sol-austan-east-of-the-sun.mp3");
let playButton = document.createElement("button");
audio.volume = 0.2;
playButton.id = "playButton";
playButton.innerHTML = "🔈";
kaste.appendChild(playButton);
playButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause(); 
  }

});

let img = new Image();

function saglabatRezultatu() {
  const dati = {
    punkti: punkti,
    dzivibas: speletajaHP,
    eliksiri: eliksiri,
    datums: new Date().toLocaleString()
  };
  localStorage.setItem("spelesRezultats", JSON.stringify(dati));
}

function saglabatRezultatu() {
  const dati = {
    punkti: punkti,
    dzivibas: speletajaHP,
    eliksiri: eliksiri,
    datums: new Date().toLocaleString()
  };
  localStorage.setItem("spelesRezultats", JSON.stringify(dati));
}


pogaSakt.addEventListener("click", function(){
pogaSakt.style.display = "none";
noteikumi.style.display = "none";
rezultatsBox.style.display = "none";

function proveritZdorovie() {
  if (speletajaHP <= 0 && totemVozrozhdeniya > 0) {
      speletajaHP = 100;
      parbauditEliksiraBridinajumu();
      speletajaDzivibas.innerHTML = "Spelētāja dzīvības: " + speletajaHP;
      totemVozrozhdeniya--;
    }
  }

if (punkti >= 10) {
  random = 10; 
  img.classList.add("enemy-spawn");
  setTimeout(() => {
    img.classList.remove("enemy-spawn");
  }, 500);
  pretiniekaHP = 200; 
  pretiniekiUzraksts.innerHTML = " Wild " + pretinieki[random] + " parādījās!"
}

let random = Math.floor(Math.random() * 8);
img.src = pretiniekiAtteli[random];

let punktiUzraksts = document.createElement("p");
punktiUzraksts.id = "punktiUzraksts";
punktiUzraksts.innerHTML = "Punkti: " + punkti;
kaste.appendChild(punktiUzraksts);

let pretiniekiUzraksts = document.createElement("p");
pretiniekiUzraksts.id = "pretiniekiUzraksts";
pretiniekiUzraksts.innerHTML = " Wild " + pretinieki[random] + " parādījās!"
kaste.appendChild(pretiniekiUzraksts);

pretiniekaHP = Math.floor(Math.random()*100)
let pretiniekaDzivibas = document.createElement("p");
pretiniekaDzivibas.id = "Pretiniekadzivibas";
pretiniekaDzivibas.innerHTML = pretinieki[random] + " dzīvības: " + pretiniekaHP;
kaste.appendChild(pretiniekaDzivibas);

let laukums = document.createElement("canvas");
let ctx = laukums.getContext("2d");
laukums.id = "laukums";
laukums.width = 150;
laukums.height = 150;
kaste.appendChild(laukums);
img.onload = function(){
  ctx.clearRect(0,0,200,150);
  ctx.drawImage(img, 0,25, 150,100)
}
  
let pretiniekaUzbrukums = document.createElement("p");
pretiniekaUzbrukums.id = "pretiniekaUzbrukums";
pretiniekaUzbrukums.innerHTML = "Pretinieka uzbrukums: " + pretiniekaATK;
kaste.appendChild(pretiniekaUzbrukums);

let speletajaUzbrukums = document.createElement("p");
speletajaUzbrukums.id = "speletajaUzbrukums";
speletajaUzbrukums.innerHTML = "Spēlētāja uzbrukums: " + speletajaATK;
kaste.appendChild(speletajaUzbrukums);

let speletajaDzivibas = document.createElement("p");
speletajaDzivibas.id = "speletajaDzivibas";
speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
kaste.appendChild(speletajaDzivibas);

let Eliksiri = document.createElement("p");
Eliksiri.id = "Eliksiri";
Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
kaste.appendChild(Eliksiri);

  let pogaU = document.createElement("button");
  pogaU.innerHTML = "U";
  pogaU.id = "pogaU";
  kaste.appendChild(pogaU);
  pogaU.addEventListener("click", function(){
    if( speletajaHP > 0 && pretiniekaHP >0){
      speletajaATK = Math.floor(Math.random()*50+1);
      pretiniekaATK = Math.floor(Math.random()*50+1);
      speletajaUzbrukums.innerHTML = "Spēlētāja uzbrukums: " + speletajaATK;
      pretiniekaUzbrukums.innerHTML = "Pretinieka uzbrukums: " + pretiniekaATK;
      speletajaHP -= pretiniekaATK;
      parbauditEliksiraBridinajumu(); 
      pretiniekaHP -= speletajaATK;
      showFloatingText("-" + speletajaATK, "red", 180, 140);
      speletajaDzivibas.innerHTML = "Spēlētēja dzīvības: " + speletajaHP;
      speletajaDzivibas.classList.add("hurt-effect");
      setTimeout(() => {
        speletajaDzivibas.classList.remove("hurt-effect");
      }, 400);
      pretiniekaDzivibas.innerHTML = pretinieki[random] + " dzīvības: " + pretiniekaHP;
      img.classList.add("enemy-damage-effect");
      setTimeout(() => {
        img.classList.remove("enemy-damage-effect");
      }, 300);
      pretiniekaDzivibas.classList.add("enemy-hurt");
      setTimeout(() => {
        pretiniekaDzivibas.classList.remove("enemy-hurt");
      }, 400);

    }

    if (speletajaATK > 40) {
      let crit = document.createElement("p");
      crit.innerHTML = "💥 CRITICAL!";
      crit.style.position = "fixed";
      crit.style.left = "140px";
      crit.style.top = "90px";
      crit.style.fontSize = "24px";
      crit.style.color = "red";
      crit.style.fontFamily = "Bebas Neue";
      crit.style.animation = "fadeOut 1s ease-out forwards";
      document.body.appendChild(crit);
      setTimeout(() => crit.remove(), 1000);
    }

    if(pretiniekaHP < 0){
      pretiniekaHP = 0;
      pretiniekaDzivibas.innerHTML = pretinieki[random] + " dzīvības: " + pretiniekaHP;
      punkti += 1;
      punktiUzraksts.innerHTML = "Punkti: " + punkti;
      punktiUzraksts.classList.add("score-flash");
      setTimeout(() => {
        punktiUzraksts.classList.remove("score-flash");
      }, 500);

      if (punkti === 10) {
        pretiniekiUzraksts.innerHTML = "Broodmother parādījās!";
        pretiniekaHP = bossHP;
        pretiniekaATK = bossATK;
        img.src = "boss11.png";
        pretiniekaDzivibas.innerHTML = "Broodmother dzīvības: " + pretiniekaHP;
      } else {
        const iespejamiba = Math.random();
        if (iespejamiba <= 0.2) {
          eliksiri += 1;
          Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
        }
      }
    }
    if (pretiniekaHP <= 0 && punkti == 11) {
      saglabatRezultatu();
      function raditDeathFlash() {
        const flash = document.createElement("div");
        flash.classList.add("death-flash");
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 500);
      }
      pretiniekaHP = 0;
      pretiniekaDzivibas.innerHTML = "Boss dzīvības: " + pretiniekaHP;
      punktiUzraksts.innerHTML = "Punkti: " + punkti;
      kaste.innerHTML = ""; // Очищаем игровое поле

      // Победный экран
      let uzvarasEkrans = document.createElement("div");
      uzvarasEkrans.id = "uzvarasEkrans";

      let virsraksts = document.createElement("h1");
      virsraksts.innerText = "🎉 Tu uzvarēji! 🎉";
      uzvarasEkrans.appendChild(virsraksts);

      let apraksts = document.createElement("p");
      apraksts.innerText = "Tu pieveici visus pretiniekus un iekaroji tumsu!";
      uzvarasEkrans.appendChild(apraksts);

      let restartPoga = document.createElement("button");
      restartPoga.innerText = "Spēlēt vēlreiz";
      restartPoga.classList.add("pogaRestart");
      restartPoga.addEventListener("click", function () {
        location.reload();
      });
      uzvarasEkrans.appendChild(restartPoga);

      document.body.appendChild(uzvarasEkrans);
    }
    proveritZdorovie();
    if (speletajaHP < 0) {
      saglabatRezultatu();
      speletajaHP = 0;
      kaste.style.display = "none";

      let zaudesanasEkrans = document.createElement("div");
      zaudesanasEkrans.id = "zaudesanasEkrans";

      let virsraksts = document.createElement("h1");
      virsraksts.innerText = "☠️ Tu zaudēji!";
      zaudesanasEkrans.appendChild(virsraksts);

      let apraksts = document.createElement("p");
      apraksts.innerText = "Tava dvēsele tika aprīta tumsā...";
      zaudesanasEkrans.appendChild(apraksts);

      let restartPoga = document.createElement("button");
      restartPoga.innerText = "Spēlēt vēlreiz";
      restartPoga.classList.add("pogaRestart");
      restartPoga.addEventListener("click", function () {
        location.reload();
      });
      zaudesanasEkrans.appendChild(restartPoga);

      document.body.appendChild(zaudesanasEkrans);
    }

    function showTotemNotification() {
      const notification = document.createElement("p");
      notification.id = "totemNotification";
      notification.innerHTML = "Totems izmantots. Palikuši: " + totemVozrozhdeniya;
      kaste.appendChild(notification);
      setTimeout(function() {
        kaste.removeChild(notification);
      }, 3000);
    }

    function proveritZdorovie() {
    if (speletajaHP <= 0 && totemVozrozhdeniya > 0) {
      speletajaHP = 100;
      parbauditEliksiraBridinajumu();
      speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
      totemVozrozhdeniya--;
      showTotemNotification();
    }
    }
  })

let pogaT = document.createElement("button");
pogaT.innerHTML = "T";
pogaT.id = "pogaT";
kaste.appendChild(pogaT);
pogaT.addEventListener("click", function(){
  if(pretiniekaHP == 0){
    random = Math.floor(Math.random() * 8);
    img.src = pretiniekiAtteli[random];
    pretiniekaHP = Math.floor(Math.random()*100);
    pretiniekiUzraksts.innerHTML = "Wild " + pretinieki[random] + " parādījās!"
    pretiniekaDzivibas.innerHTML = pretinieki[random] + " dzīvības: " + pretiniekaHP;
}
})

let pogaM = document.createElement("button");
pogaM.innerHTML = "M";
pogaM.id = "pogaM";
kaste.appendChild(pogaM);  

speletajaUzbrukums.classList.add("atk-effect");
setTimeout(() => {
  speletajaUzbrukums.classList.remove("atk-effect");
}, 400);

  
if (pretiniekaATK > 35) {
  pretiniekaUzbrukums.classList.add("danger-effect");
  setTimeout(() => {
    pretiniekaUzbrukums.classList.remove("danger-effect");
  }, 600);
}
  
let pogaE = document.createElement("button");
pogaE.innerHTML = "E";
pogaE.id = "pogaE";
kaste.appendChild(pogaE);
pogaE.addEventListener("click", function(){
  let eliksiraEfekts = document.createElement("p");
  eliksiraEfekts.innerText = "🧪 Eliksīrs izmantots!";
  eliksiraEfekts.style.position = "fixed";
  eliksiraEfekts.style.left = "120px";
  eliksiraEfekts.style.top = "100px";
  eliksiraEfekts.style.fontSize = "20px";
  eliksiraEfekts.style.color = "#00ff55";
  eliksiraEfekts.style.animation = "fadeOut 1.2s ease-out forwards";
  eliksiraEfekts.style.fontFamily = "Bebas Neue";
  document.body.appendChild(eliksiraEfekts);
  setTimeout(() => eliksiraEfekts.remove(), 1200);
  speletajaDzivibas.classList.add("heal-effect");
  setTimeout(() => {
    speletajaDzivibas.classList.remove("heal-effect");
  }, 600);
  if(eliksiri > 0 && speletajaHP < 100){
  const skaitlis = Math.random();
  if(skaitlis < 0.2){
    eliksiri -= 1;
    speletajaHP += 50;
  } else {
    eliksiri -= 1;
    speletajaHP += 30;
    parbauditEliksiraBridinajumu();
  }
  speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
  Eliksiri.innerHTML = "Eliksiri: " + eliksiri;
  }
  if(speletajaHP > 100){
    speletajaHP = 100;
    parbauditEliksiraBridinajumu();
    speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
  }
});  

pogaM.addEventListener("click", function(){
kaste.style.display = "none";
document.body.appendChild(kaste3);
});  

let kaste2 = document.createElement("div");
kaste2.id = "kaste2";
})

let uzvara = document.createElement("p");
uzvara.id = "uzvara";
uzvara.innerHTML = "Tu uzvarēji! ";
kaste2.appendChild(uzvara);

let kaste3 = document.createElement("div");
kaste3.id = "kaste3";

let pogaBeigt = document.createElement("button");
pogaBeigt.innerHTML = "Beigt";
pogaBeigt.id = "pogaBeigt";
kaste3.appendChild(pogaBeigt); 

pogaBeigt.addEventListener("click", function(){
  location.reload();  
});

let Tuzaudeji = document.createElement("p");
Tuzaudeji.id = "Tuzaudeji";
Tuzaudeji.innerHTML = "Tu zaudēji! ";
kaste3.appendChild(Tuzaudeji);

pogaBeigt.addEventListener("click", function(){
  location.reload();  
})

pogaBeigt.addEventListener("click", function(){
kaste3.style.display = "none";
let kaste = document.createElement("div");
kaste.id = "kaste";
document.body.appendChild(kaste3);
});  

function parbauditEliksiraBridinajumu() {
  if (speletajaHP <= 20) {
    Eliksiri.classList.add("eliksirs-warning");
  } else {
    Eliksiri.classList.remove("eliksirs-warning");
  }
}

let damagePopup = document.createElement("p");
damagePopup.innerText = `-${speletajaATK}`;
damagePopup.style = `
  position: fixed;
  left: 160px;
  top: 90px;
  font-size: 18px;
  font-family: 'Bebas Neue';
  color: red;
  animation: fadeOut 1s ease-out forwards;
`;
document.body.appendChild(damagePopup);
setTimeout(() => damagePopup.remove(), 1000);

noteikumi.addEventListener("click", function(){
pogaSakt.style.display = "none";
noteikumi.style.display = 'none';
kaste4.innerHTML = "1) Spēlētājam ir 100 dzīvības<br><br>2)Pretinieki tiek ģenerēti automātiski<br><br>3) Spēlētāja un pretinieka uzbrukums tiek ģenerēts nejauši no 0 - 50<br><br>4) Spēlētājam iedoti 5 eliksīri, kuri atjauno spēlētāja dzīvības nejauši no 50 - 100 punktiem;<br><br>5) Katru reizi, kad pretinieks tiek uzveikts, spēlētājam ir 20% iespējamība, ka izkrīt papildus eliksīrs;<br><br>6) Katru reizi, kad pretinieks tiek pieviekts, spēlētājs iegūst 1 punktu;<br><br>7) Kad saņemti 10 punkti, parādās galvenais boss;<br><br>8) Ja spēlētājam ir 0 dzīvības, spēle beidzas.<br><br> 9) Spēlētajam ir 5 totemi, kas atdzīvina spēlētāju, ja viņa veselība nokrītas līdz 0"; 
  kaste.appendChild(kaste4);

let atpakal = document.createElement("button");
atpakal.id = "atpakal";
atpakal.innerHTML = "Atpakaļ";
kaste.appendChild(atpakal);
  
atpakal.addEventListener("click", function(){
  location.reload();

function proveritZdorovie() {
  if (speletajaHP <= 0 && totemVozrozhdeniya > 0) {
    speletajaHP = 100;
    parbauditEliksiraBridinajumu();
    speletajaDzivibas.innerHTML = "Spēlētāja dzīvības: " + speletajaHP;
    totemVozrozhdeniya--;
    showTotemNotification();
  }
}

});
});

