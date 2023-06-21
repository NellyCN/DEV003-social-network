import { createUserEmail } from '../lib/firebase';

export default () => {
  const viewRegister = `
    <div class = "container">
        <div class = "containerPic" id= "container" data-testid="registerContainer">
        </div>
        <div class = "containerBackground">
            <div class ="background">        
                <figure class="logo">
                  <img class="logoTravellx" src="/Imagenes/travellx.png" alt="logoTravellx">
                </figure>
                <h5 class="wellcomeLogReg">Regístrate para ver recomendaciones para tu pròximo viaje ;)</h5>
                <form class="register" id="idregisterform">
                    <input class ="controls" id="textEmail" type="email" name="email" value="" placeholder="Correo Electrónico">
                    <input class ="controls" id="iduserName" type="text" name="user" value="" placeholder="Nombre de Usuario">
                    <input class ="controls" id="passwordRegister" type="password" name="password" value="" placeholder="Contraseña">
                    <input class="registerBtn" id ="registerBtn" type="submit" value="REGÍSTRATE">
                    <p class="text-center">Revisa tu email y accede al link para autenticar tu cuenta e <a href="#/login">Inicia Sesión</a></p>
                </form>
            </div>  
        </div>
    </div>
  `;
  const sectionElem = document.createElement('section'); // padre de viewRegister, incluirle clase e id?
  sectionElem.innerHTML = viewRegister;

  const registerAccount = sectionElem.querySelector('#registerBtn');
  registerAccount.addEventListener('click', () => {
    const userName = document.getElementById('iduserName').value; // console.log(userName);
    const emailUser = document.getElementById('textEmail').value;
    const passwordUser = document.getElementById('passwordRegister').value;
    createUserEmail(userName, emailUser, passwordUser);
    // eslint-disable-next-line no-alert
    alert('Usuario registrado con éxito! Puedes volver y loguearte ;)');
    sectionElem.querySelector('#idregisterform').reset();
  });
  return sectionElem;
};
