// import {}
export default () => {
    const viewLogin = `
    <div class = "container" id= "container">
            <figure class="logo">
              <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <p class="wellcomeLogReg">Conéctate con viajeros, comparte experiencias, recomienda lugares a otros viajeros como tú</p>
            <input class ="controls" id="emailLogin" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" id="passLogin"type="password" name="password" value="" placeholder="Contraseña">
            <input class="loginBtn" id ="loginBtn" type="button" value="INICIAR SESIÓN">
            <p class="loginText">O</p>
            <p class="loginText">¿AÚN NO TIENES UNA CUENTA?</p>
            <a href ="#/register" class="linkViewRegister" id ="linkViewRegister" value="REGÍSTRATE">        
    </div>
   `;

    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = viewLogin;
   
    const loginBtn = sectionElement.querySelector('#loginBtn');
    // const auth
    loginBtn.addEventListener('click', () => {
        // e.preventDefault()

        // const email = loginBtn['emailLogin']
        // const password = loginBtn['passLogin']
        // signInWithEmailAndPassword(auth,...)
        console.log('LOGUEAR');
    })
    return sectionElement;
};