// import { doc } from 'firebase/firestore';
import { createPost, getPosts, getPostsSnapShot, logout, deletePost } from '../lib/firebase'

export default () => {
    const viewWall = `
    <div class ="backgroundMuro">
        <header>
            <div class="headerWall"
                <figure>
                    <img class="logoTravellxWall" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
                </figure>
                <button type="button" class="logoutWall" id ="logoutBtn">Log Out</button>
            </div>
        </header>

        <section class="wallTemplate">
            <div class="userWellcome">
                        <label class="userName">HOLA,</label>
                        <p class ="userEmailWellcome" type="text"></p> 
            </div>
            <div class="createPost" id="createPost">
                <input type="hidden" id="post-id" value="">
                
                
                <div class="newPost" id="newPost">
                    <input type="text" class="userName" id="iduserName" placeholder="User Name">
                    <textarea class="textPost" id="idtextPost" name="textarea" rows="5" cols="40" placeholder="Comparte aquí tus experiencias..."></textarea>
                    <div class="btnpost">    
                        <button type="button" class="postBtn" id="idCreateBtn">PUBLICAR</button>
                    </div>
                </div>
                <div class ="showPostCreated">
                </div>
            </div>
        </section>
    </div>          
    `;
    // <p id="idDatetime">fecha y hora</p> //
    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = viewWall;
    const showPostCreated = sectionElement.querySelector('.showPostCreated');
    // const createPostTemplate = sectionElement.querySelector('#createPost').innerHTML = "";

    // se llama al metodo getposts
    getPosts().then((posts) => {   //  obteniendo Todos los posts, array de objetos de la coleccion posts
        // console.log(posts); // 
        const htmlPosts = publicatedPost(posts);  // se genera el html con los posts x cada post, publicando posts 
        showPostCreated.innerHTML = htmlPosts;   // se inyecta en el div clase showPostCreated

    });
    getPostsSnapShot();
    // FIN DEL LOAD


    // **** lOGOUT USER ****
    sectionElement.querySelector('#logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });


    // **** CREAR POST ****

    const crearPost = sectionElement.querySelector('#idCreateBtn');
    // console.log (crearPost);
    crearPost.addEventListener("click", () => {
        const userNamePost = sectionElement.querySelector('#iduserName').value;
        // sectionElement.querySelector('#idDatetime').innerHTML = Date()
        const postMessage = sectionElement.querySelector('#idtextPost').value;
        // console.log(postMessage);
        createPost(userNamePost, postMessage);

        // // se llama al metodo getpost (Encapsular en un metodo ---)
        getPosts().then((posts) => {   //  obteniendo Todos los posts, array de objetos de la coleccion posts
            // console.log(posts); // 
            const htmlPosts = publicatedPost(posts);  // se genera el html con los posts x cada post, publicando posts 
            showPostCreated.innerHTML = htmlPosts;   // se inyecta en el div clase showPostCreated

        });
        // return createPostTemplate;

    });
    return sectionElement; // en el valor de retorno es donde se va a mostrar los elementos del Dom


};


// **** PUBLICAR POSTS EN EL MURO ****

export const publicatedPost = (posts) => {   // 
    if (posts.length) {      //Si existen datos, los va a recorrer
        let template = '<div class="templatePosts">';

        posts.forEach(post => {     // Todos los post de firestore con sus propiedades incluído document-data(objeto)-user y comment
            // console.log(post);
            const dataPost = post.data(); // Todos los objetos-js(posts) creados con sus propiedades
            
            const divPost = `
                <div class="templatePost">
                    <div>
                        <h3 class="userName" id="iduserName" type="text">${dataPost.user}</h3>
                        <h3 class="userName" id="iduserName" type="text">${dataPost.date}</h3>
                        <p class="createdPost" id="idcreatedPost" type="text">${dataPost.comment}</p>
                    </div>
                    <div class="buttonsEdit">
                        <button type="button" class="editBtn" id ="ideditBtn">EDITAR</button>
                        <button type="button" class="idCancelBtn" id ="idCancelBtn">CANCELAR</button>
                        <button type="button" class="idDeleteBtn" id ="idDeleteBtn">ELIMINAR</button>
                    </div>
                </div>    
            `;
            template += divPost;
        });

        template += '</div>';
        
        // template.innerHTML = template;
        console.log(template);
        // const deletePost = template.querySelectorAll('.showPostCreated');
        // console.log('deletePost', deletePost);

        // deletePost.forEach((boton) => {
        //     boton.addEventListener('click', () => {
        //         console.log('borrando');
        //     })

        // });
        return template;

    } else {
        // template.innerHTML = '<li> No hay posts aún </li>';
        return ' No hay posts aún ';
    };
};


//* <h4 class="userName" id="idDatetime" type="text">${datePost}</h4>   */

