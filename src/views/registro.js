export default () => {
    const viewRegister = `
    <container class = "loginContainer" id= "loginContainer">
        <section>  
            <figure class="logo">
              <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <h5 class="wellcomeLogReg">Regístrate para ver recomendaciones para tu pròximo viaje ;)</h5>
            <input class ="controls" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" type="text" name="names" value="" placeholder="Nombres y Apellidos">
            <input class ="controls" type="text" name="user" value="" placeholder="Nombre de Usuario"> 
            <input class ="controls" type="text" name="password" value="" placeholder="Contraseña">
            <input class ="controls" type="text" name="confirmPassword" value="" placeholder="Confirmar Contraseña">
            <input class ="controls type="submit" name="submit" value="REGISTRAR USUARIO">
        </section>
        <section>
            <h5 class="text-center">Revisa tu email y accede al link para autenticar tu cuenta e <h5 class="linkLogib">Inicia Sesión</h5></h5>
        </section>
    </container>`
        ;

    const divElem = document.createElement('section');
    divElem.innerHTML = viewRegister;

    return divElem;
};