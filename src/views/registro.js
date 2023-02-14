export default () => {
    const viewRegister = `
    <div class = "container" id= "container">
          
            <figure class="logo">
              <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <h5 class="wellcomeLogReg">Regístrate para ver recomendaciones para tu pròximo viaje ;)</h5>
            <input class ="controls" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" type="text" name="user" value="" placeholder="Nombre de Usuario">
            <input class ="controls" type="text" name="password" value="" placeholder="Contraseña">
            <input class ="controls" type="text" name="confirmPassword" value="" placeholder="Confirmar Contraseña">
            <input class="registerBtn" id ="registerBtn" type="submit" value="REGÍSTRATE">
            <p class="text-center">Revisa tu email y accede al link para autenticar tu cuenta e <a href="#/login">Inicia Sesión</a></p>
    </div>
    `;
    const sectionElem = document.createElement('section');
    sectionElem.innerHTML = viewRegister;
   
    const registerBtn = sectionElem.querySelector('#registerBtn');
    registerBtn.addEventListener('click', () => {
        console.log('registrate');
    })
    return sectionElem;
};