import { createPost, getPostsOnSnapShot, logout, getPost, deletePost, updatePost } from '../lib/firebase'

export default () => {
    const sectionElement = document.createElement('section');
    let editStatus = false;
    let id= '';
    sectionElement.classList.add('backgroundMuro');
    sectionElement.innerHTML = `
        <header>
            <div class="headerWall"
                <figure>
                    <img class="logoTravellxWall" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
                </figure>
                <button type="button" class="logoutWall" id ="logoutBtn">Log Out</button>
            </div>
        </header>
        <main>
            <section class="wallTemplate">
                <div class="userWellcome">
                            <label class="userName">HOLA,</label>
                            <p class ="userEmailWellcome" type="text"></p> 
                </div>
                <form class="createPost" id="idcreatePost">
                    <input type="hidden" id="post-id" value="">
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
    `;

    getPostsOnSnapShot((querySnapshot) => {

        let html = '';
        const showPostCreated = document.getElementById('showPostCreated');
        querySnapshot.forEach((post) => {       // Todos los post de firestore con sus propiedades incluído document-data(objeto)-user y comment
            const dataPost = post.data();       // Todos los objetos-js(posts) creados con sus propiedades
            // console.log('post', post.data());
            // console.log('postd', dataPost);
            // console.log(doc.id);
            html += `
            <div class="templatePost">
                <div>
                    <h3 class="userName" id="iduserName" type="text">${dataPost.user}</h3>
                    <h3 class="userName" id="iduserName" type="text">${dataPost.date}</h3>
                    <p class="createdPost" id="idcreatedPost" type="text">${dataPost.comment}</p>
                </div>
                <div class="buttonsEdit">
                    <button type="button" class="editBtn" id="ideditBtn" data-id="${post.id}">EDITAR</button>
                    <button type="button" class="cancelBtn" id="idCancelBtn" data-id="${post.id}">CANCELAR</button>
                    <button type="button" class="deleteBtn" id="idDeleteBtn" data-id="${post.id}">ELIMINAR</button>
                </div>
            </div>    
        `;
        });
        showPostCreated.innerHTML = html;

        // **** CREAR POST ****
        const crearPost = sectionElement.querySelector('#idCreateBtn');
        // console.log (crearPost);
        crearPost.addEventListener("click", () => {
            const userNamePost = sectionElement.querySelector('#iduserName').value;
            const postMessage = sectionElement.querySelector('#idtextPost').value;
            // console.log(postMessage);
            
            if (editStatus == false ) {
                createPost(userNamePost, postMessage);
                // console.log(editStatus);
            } else {
                updatePost(id, {user: userNamePost, comment: postMessage});
                editStatus = false;
                id=''
                // sectionElement.ideditBtn. ='Actualizar';
                sectionElement.querySelector('#ideditBtn').setAttribute('Publicar', 'Actualizar');
            }
            sectionElement.querySelector('#idcreatePost').reset();
        });

        // **** EDITAR POST ****
        const editBtn = showPostCreated.querySelectorAll('.editBtn');

        editBtn.forEach((editClick) => {
            editClick.addEventListener('click', async (e) => {  // Del Objeto event, extraemos informacion del botón. lo reemplazamos por las props a extraer de "target", extraemos con llaves
                const doc = await getPost(e.target.dataset.id);
                const post = doc.data();
                sectionElement.querySelector('#iduserName').value = post.user;
                sectionElement.querySelector('#idtextPost').value = post.comment;
                // console.log(doc.data());
                // console.log('editando');
                // console.log(dataset.id); // usar "data-id" como atributo del botón para extraer el id directamente
                // console.log(event.target.dataset.id);
                editStatus = true;
                id = doc.id;
                
                // sectionElement.editBtn.innerHTML = '';
            });
        });

        // **** CANCEL POST ****
        const cancelBtn = showPostCreated.querySelectorAll('.cancelBtn');

        cancelBtn.forEach((cancelClick) => {
            cancelClick.addEventListener('click', () => {  // Del Objeto event, extraemos informacion del botón. lo reemplazamos por las props a extraer de "target", extraemos con llaves
                console.log('cancel');
                // console.log(dataset.id); // usar "data-id" como atributo del botón para extraer el id directamente
                // console.log(event.target.attributes.dataid.value);

            });
        });

        // **** BORRAR POST ****
        const deleteBtn = showPostCreated.querySelectorAll('.deleteBtn');
        // console.log('deletePost', deleteBtn);

        deleteBtn.forEach((deleteClick) => {
            deleteClick.addEventListener('click', ({ target: { dataset } }) => {  // Del Objeto event, extraemos informacion del botón. lo reemplazamos por las props a extraer de "target", extraemos con llaves
                // console.log('borrando');
                // console.log(dataset.id); // usar "data-id" como atributo del botón para extraer el id directamente
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
