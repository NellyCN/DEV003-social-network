import {
  createPost, getPostsOnSnapShot, logout, getPost, deletePost, updatePost,
} from '../lib/firebase';

export default () => {
  const sectionElement = document.createElement('section');
  let editStatus = false;
  let id = '';
  sectionElement.classList.add('backgroundMuro'); // Asignamos clase al section
  sectionElement.innerHTML = `
    <div class = "containerWall" id= "idcontainerWall" data-testid="wallContainer">
        <header>
             <div class="headerWall"
                <figure>
                    <img class="logoTravellxWall" src="/Imagenes/travellxlogo.png" alt="logoTravellx">
                </figure>
                <button type="button" class="logoutWall" id ="logoutBtn">Log Out</button>
            </div>
        </header>
        <section class="bodyWall"> 
          <main>
              <section class="wallTemplate">
                  <div class="userWellcome">
                              <label class="userName">HOLA!</label>
                              <p class ="userEmailWellcome" type="text"></p> 
                  </div>
                  <form class="createPost" id="idcreatePost">
                      
                      <div class="newPost" id="newPost">
                          <input type="text" class="userName" id="iduserName" placeholder="User Name">
                          <textarea class="textPost" id="idtextPost" name="textarea" rows="5" cols="40" placeholder="Comparte aquí tus experiencias..."></textarea>
                          <div class="btnpost">    
                              <button type="button" class="postBtn" id="idCreateBtn">PUBLICAR</button>
                          </div>
                      </div>
                  </form>
              </section>
              <section class ="showPostCreated" id="showPostCreated">
              </section>
          </main>
        </section>
    </div>          
    </section>          
    `;

  getPostsOnSnapShot((querySnapshot) => {
    let html = '';
    const showPostCreated = document.getElementById('showPostCreated');
    // Todos los post de firestore con sus propiedades incluído document-data(objeto)-user y comment
    querySnapshot.forEach((post) => {
      const dataPost = post.data(); // Todos los objetos-js(posts) creados con sus propiedades
      // console.log('post', post.data());
      // console.log('postd', dataPost);
      // console.log(doc.id);
      html += `
            <div class="templatePost">
                <div class="postContainer">
                    <h3 class="userName" id="idUserName" type="text">${dataPost.user}</h3>
                    <h3 class="userName" id="idUserName" type="text">${dataPost.date}</h3>
                    <p class="createdPost" id="idCreatedPost" type="text">${dataPost.comment}</p>
                </div>
                <div class="buttonsEdit">
                    <button type="button" class="editBtn" id="idEditBtn" data-id="${post.id}">EDITAR</button>
                    <button type="button" class="likeBtn" id="idLikeBtn" data-id="${post.id}">LIKE</button>
                    <button type="button" class="deleteBtn" id="idDeleteBtn" data-id="${post.id}">ELIMINAR</button>
                </div>
            </div>    
        `;
    });
    showPostCreated.innerHTML = html;

    // **** CREAR POST ****
    const crearPost = sectionElement.querySelector('#idCreateBtn');
    // console.log (crearPost);
    crearPost.addEventListener('click', (e) => {
      e.preventDefault();
      const userNamePost = sectionElement.querySelector('#iduserName').value;
      const postMessage = sectionElement.querySelector('#idtextPost').value;
      // console.log(postMessage);

      if (editStatus === false) {
        createPost(userNamePost, postMessage);

        // console.log(editStatus);
      } else {
        updatePost(id, { user: userNamePost, comment: postMessage });
        editStatus = false;
        id = '';
        // sectionElement.ideditBtn. ='Actualizar';
        // sectionElement.querySelector('#ideditBtn').setAttribute('Publicar', 'Actualizar');
      }
      sectionElement.querySelector('#idcreatePost').reset();
    });

    // **** EDITAR POST ****
    const editBtn = showPostCreated.querySelectorAll('.editBtn');

    editBtn.forEach((editClick) => {
      // Del Objeto event, extraemos {} la prop target del botón
      editClick.addEventListener('click', async (e) => {
        // usar atributo del botón "data-id" para extraer el id
        const doc = await getPost(e.target.dataset.id);
        const post = doc.data();
        sectionElement.querySelector('#iduserName').value = post.user;
        sectionElement.querySelector('#idtextPost').value = post.comment;
        // console.log(doc.data());
        // console.log('editando');
        // console.log(dataset.id); // usar atributo del botón "data-id" para extraer el id
        // console.log(event.target.dataset.id);
        editStatus = true;
        id = doc.id;
        // post.user.focus();
        // sectionElement.editBtn.innerHTML = '';
      });
    });

    // **** CANCEL POST ****
    // const cancelBtn = showPostCreated.querySelectorAll('.cancelBtn');

    // **** BORRAR POST ****
    const deleteBtn = showPostCreated.querySelectorAll('.deleteBtn');
    // console.log('deletePost', deleteBtn);

    deleteBtn.forEach((deleteClick) => {
      deleteClick.addEventListener('click', ({ target: { dataset } }) => { // Del Objeto event, extraemos con llaves la propiedad dataset del objeto "target")
        // console.log('borrando');
        // console.log(dataset.id);
        // console.log(event.target.attributes.dataid.value);
        deletePost(dataset.id);
      });
    });

    // **** lOGOUT USER ****
    sectionElement.querySelector('#logoutBtn').addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  });
  return sectionElement; // en el valor de retorno es donde se va a mostrar los elementos del Dom
};
