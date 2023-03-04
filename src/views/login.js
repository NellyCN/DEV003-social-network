import { signInUserEP } from '../lib/firebase';

export default () => {
  const viewLogin = `
    <div class = "container">
    
        <div class = "containerPic" data-testid="loginContainer">
        </div>

        <div class = "containerBackground">
            <div class ="background">
              <figure class="logo">
                  <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
              </figure>    
              <p class="wellcomeLogReg">Conéctate con viajeros, comparte experiencias, recomienda lugares a otros viajeros como tú</p>
              <input class ="controls" id="emailLogin" type="email" name="email" value="" placeholder="Correo Electrónico">
              <input class ="controls" id="passLogin"type="password" name="password" value="" placeholder="Contraseña">
              <input class="loginBtn" id ="loginBtn" type="submit" value="INICIAR SESIÓN">
              <p class="loginText">O</p>
              <p class="loginText">¿AÚN NO TIENES UNA CUENTA?</p>
              <a href ="#/register" class="linkViewRegister">REGÍSTRATE</a>   
            </div>
        </div>
    </div>
   `;

  const sectionElement = document.createElement('section'); // padre de viewLogin
  sectionElement.innerHTML = viewLogin;

  const loginAccount = sectionElement.querySelector('#loginBtn');
  loginAccount.addEventListener('click', (e) => {
    e.preventDefault();

    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passLogin').value;

    signInUserEP(emailLogin, passwordLogin)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...muro
        location.href = '#/wall';
        // console.log(user);
      })
      .catch((error) => {
        // mantenerlo en el login 
        const errorCode = error.code;
        const errorMessage = error.message;
        location.href = '#/login';
      });
    // console.log(emailLogin, passwordLogin);
  });
  //     console.log('LOGUEAR');
  return sectionElement;
};
