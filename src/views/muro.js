export default () => {
    const viewWall = `
        <header>
            <figure class="logo">
                <img class="logoTravellx" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
            </figure>
            <label class="userName">HOLA User1!</label>
        
            </header>
      <div class = "wall" id= "wall">
                  
                 
      </div>
     `;
  
    const sectionElement = document.createElement('section'); //padre de viewLogin
    sectionElement.innerHTML = viewWall;
  
    return sectionElement;
};