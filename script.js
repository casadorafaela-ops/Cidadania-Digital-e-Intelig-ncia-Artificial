// ANIMAÇÃO DE NÚMEROS
const numbers = document.querySelectorAll(".num");

numbers.forEach(num => {
  const update = () => {
    const target = +num.getAttribute("data-target");
    const current = +num.innerText;

    const step = target / 80;

    if(current < target){
      num.innerText = Math.ceil(current + step);
      setTimeout(update, 20);
    } else {
      num.innerText = target;
    }
  };

  update();
});

// SCROLL SUAVE SIMPLES
document.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    target.scrollIntoView({behavior:"smooth"});
  });
});
