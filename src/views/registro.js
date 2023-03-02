import { createUserEmail } from '../lib/firebase';

export default () => {
  const viewRegister = `
    <div class = "container" id= "container" data-testid="registerContainer">
      <div class ="background">        
        <figure class="logo">
          <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
        </figure>    
        <h5 class="wellcomeLogReg">Regístrate para ver recomendaciones para tu pròximo viaje ;)</h5>
        <input class ="controls" id="textEmail" type="email" name="email" value="" placeholder="Correo Electrónico">
        <input class ="controls" type="text" name="user" value="" placeholder="Nombre de Usuario">
        <input class ="controls" id="passwordRegister" type="password" name="password" value="" placeholder="Contraseña">
        <input class="registerBtn" id ="registerBtn" type="submit" value="REGÍSTRATE">
        <p class="text-center">Revisa tu email y accede al link para autenticar tu cuenta e <a href="#/login">Inicia Sesión</a></p>
      </div>
    </div>
    `;
  const sectionElem = document.createElement('section'); // padre de viewRegister, incluirle clase e id?
  sectionElem.innerHTML = viewRegister;

  const registerAccount = sectionElem.querySelector('#registerBtn');
  registerAccount.addEventListener('click', () => {
    const emailUser = document.getElementById('textEmail').value;
    const passwordUser = document.getElementById('passwordRegister').value;
    createUserEmail(emailUser, passwordUser);
  });
  return sectionElem;
};
