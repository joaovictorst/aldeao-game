const aldeao = document.querySelector('.aldeao');

const creeper = document.querySelector('.creeper');

const reiniciar = document.querySelector('.reiniciar');

const fimdojogo = document.querySelector('.game-over');

const gameover = false

const jump = () => {
  aldeao.classList.add('jump');
  aldeao.src = './img/aldeao-pulo.gif'

  setTimeout(() => {
    aldeao.classList.remove('jump');
    aldeao.src = './img/aldeao-correndo.gif'
  }, 650);

} 



const loop = setInterval(() => {

  const creeperPosition = creeper.offsetLeft;
  const aldeaoPosition = +window.getComputedStyle(aldeao).bottom.replace('px','');

  if(creeperPosition <= 60 && creeperPosition > -60 && aldeaoPosition < 100) {

    creeper.src = './img/creeperExplosao.gif'
    creeper.style.animation = 'none';
    creeper.style.left = `${creeperPosition}px`;

    aldeao.style.animation = 'none';
    aldeao.style.bottom = `${aldeaoPosition}px`
    aldeao.src = './img/1.png'

    setInterval(() => {
    fimdojogo.style.display = 'flex';
    }, 1600)
    clearInterval(loop)
  }

}, 10);

document.addEventListener('keydown', jump);
