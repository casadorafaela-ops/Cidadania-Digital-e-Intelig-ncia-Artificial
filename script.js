// =====================
// PARTICLES
// =====================
const c=document.getElementById("bg");
const x=c.getContext("2d");

c.width=innerWidth;
c.height=innerHeight;

let p=[];

for(let i=0;i<100;i++){
p.push({
x:Math.random()*c.width,
y:Math.random()*c.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function anim(){
x.clearRect(0,0,c.width,c.height);

p.forEach(e=>{
e.x+=e.dx;
e.y+=e.dy;

if(e.x<0||e.x>c.width)e.dx*=-1;
if(e.y<0||e.y>c.height)e.dy*=-1;

x.beginPath();
x.arc(e.x,e.y,e.r,0,Math.PI*2);
x.fillStyle="#38bdf8";
x.fill();
});

requestAnimationFrame(anim);
}
anim();


// =====================
// XP SYSTEM
// =====================
let xp=0;
let level=1;

function gainXP(){
xp+=25;
if(xp>=100){level++;xp=0;}

document.getElementById("xp").innerText=xp;
document.getElementById("level").innerText=level;
}


// =====================
// QUIZ
// =====================
const q={
text:"O que é IA generativa?",
options:["Robôs","Criação de conteúdo","Internet","Jogos"],
correct:1
};

document.getElementById("q").innerText=q.text;

document.querySelectorAll("#quiz button").forEach((b,i)=>{
b.innerText=q.options[i];
});

function answer(i){
document.getElementById("result").innerText=
i===q.correct?"✔ Correto":"❌ Errado";
}


// =====================
// CHAT IA (NEURAL ENGINE)
// =====================
function chat(){
let t=document.getElementById("input").value.toLowerCase();

let r=
t.includes("ia")?"IA é um sistema que aprende com dados":
t.includes("cyber")?"Cyberbullying deve ser denunciado":
t.includes("privacidade")?"Proteja seus dados pessoais":
"Não tenho certeza, mas estou aprendendo...";

document.getElementById("output").innerText=r;
}


// =====================
// MISSÕES
// =====================
function missionComplete(){
document.getElementById("missionStatus").innerText="✔ Missão concluída!";
}
