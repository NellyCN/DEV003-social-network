export default () => {
    const viewLogin = `
    
        <container class = "loginContainer" id= "loginContainer">
            <figure class="logo">
                <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <h5 class="wellcomeLogReg">Conéctate con viajeros, comparte experiencias, recomienda lugares a otros viajeros como tú</h5>
            <input class ="controls" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" type="password" name="contraseña" value="" placeholder="Contraseña">
            <button class ="loginBtn" type="button" name="loginButton" value="INICIAR SESIÓN">
            <h5 class="loginText">O</h5>
            <h5 class="loginText">¿AÚN NO TIENES UNA CUENTA?</h5>
            <button class ="registBtn type="button" name="button" value="REGÍSTRATE">
        </container>
    
    <section class = "portadaLogin" id= "portadaLogin">
        <div >
        
        </div>
    </section>`
    ;

    const divElem = document.createElement('section');
    divElem.innerHTML = viewLogin;

    return divElem;
};