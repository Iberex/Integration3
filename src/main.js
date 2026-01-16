import './style.css'

let currentDemo = '';

function showDemo(demoNumber) {
  currentDemo = demoNumber;
  const contentDiv = document.querySelector('#content');
  
  if (demoNumber === 1) {
    contentDiv.innerHTML = '<h1>Puzzel</h1>';
  } else if (demoNumber === 2) {
    contentDiv.innerHTML = '<h1>Lamp</h1>';
  } else if (demoNumber === 3) {
    contentDiv.innerHTML = '<h1>Tactiek</h1>';
  }
}

document.querySelector('#app').innerHTML = `
  <div>
    <div class="button-container">
      <button id="demo1">Demo 1</button>
      <button id="demo2">Demo 2</button>
      <button id="demo3">Demo 3</button>
    </div>
    <div id="content">
      <h1>Hello World</h1>
    </div>
  </div>
`

document.querySelector('#demo1').addEventListener('click', () => showDemo(1));
document.querySelector('#demo2').addEventListener('click', () => showDemo(2));
document.querySelector('#demo3').addEventListener('click', () => showDemo(3));
