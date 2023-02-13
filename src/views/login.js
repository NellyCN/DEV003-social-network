export default () => {
    const viewLogin = `
    
        <container class = "loginContainer" id= "loginContainer">
            <figure class="logo">
                <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>    
            <p class="wellcomeLogReg">Conéctate con viajeros, comparte experiencias, recomienda lugares a otros viajeros como tú</p>
            <input class ="controls" type="text" name="email" value="" placeholder="Correo Electrónico">
            <input class ="controls" type="password" name="contraseña" value="" placeholder="Contraseña">
            <button class ="loginBtn" type="button" name="loginButton" value="INICIAR SESIÓN">
            <p class="loginText">O</p>
            <p class="loginText">¿AÚN NO TIENES UNA CUENTA?</p>
            <input class ="loginBtn" type="submit" name="submit" value="REGÍSTRATE">
            
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

