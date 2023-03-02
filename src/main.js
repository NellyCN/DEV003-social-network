import { changeView } from './view-controller/router.js';
// import "./lib/configfirebase.js"

const init = () => {
  changeView(window.location.hash);
  // .hash para que traiga só}lo el enlace despues del hash
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
