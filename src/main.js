import './style.css'
import './puzzle.js'

function showDemo(demoNumber) {
  for (let i = 1; i <= 3; i++) {
    const section = document.querySelector(`#demo-section-${i}`);
    if (i === demoNumber) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  }
}

document.querySelector('#demo1').addEventListener('click', () => showDemo(1));
document.querySelector('#demo2').addEventListener('click', () => showDemo(2));
document.querySelector('#demo3').addEventListener('click', () => showDemo(3));