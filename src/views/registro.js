export default () => {
    const viewRegister = `
    <div class = "registerContainer" id= "registerContainer">
          
            <figure class="logo">
              <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <h5 class="wellcomeLogReg">Regístrate para ver recomendaciones para tu pròximo viaje ;)</h5>
            <input class ="controls" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" type="text" name="user" value="" placeholder="Nombre de Usuario">
            <input class ="controls" type="text" name="password" value="" placeholder="Contraseña">
            <input class ="controls" type="text" name="confirmPassword" value="" placeholder="Confirmar Contraseña">
            <button class="controlBtn" id ="registerBtn" type="button">REGÍSTRATE</button>
            <p class="text-center">Revisa tu email y accede al link para autenticar tu cuenta e <a href="#">Inicia Sesión</a></p>
        </div>
    `;
    const divElem = document.createElement('section');
    divElem.innerHTML = viewRegister;
   
    const registerBtn = divElem.querySelector('#registerBtn');
    registerBtn.addEventListener('click', () => {
        console.log('registrate');
    })
    return divElem;
};