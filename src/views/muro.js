// import { doc } from 'firebase/firestore';
import { createPost, getPosts, getPostsSnapShot } from '../lib/firebase'

export default () => {
    const viewWall = `
    <div class ="backgroundMuro"> 
        <header>
            <div class="headerWall"
                <figure>
                    <img class="logoTravellxWall" src="/Imagenes/titleLogoTravellx.png" alt="logoTravellx">
                </figure>
                <input class="logoutWall" id ="logoutBtn" type="submit" value="Logout">
            </div>
        </header>
        <div class="userWellcome">
                    <label class="userName">HOLA,</label>
                    <p class ="userEmailWellcome" type="text" name="userEmail"></p> 
        </div>
        <div class = "createPost">
            <div class = "newPost" id= "newPost">
            <textarea class="textPost" id="idtextPost" name="textarea" rows="5" cols="40">Comparte aquí tus experiencias...</textarea>
                <button type="button" class="postBtn" id="idCreateBtn">PUBLICAR</button>
            </div>
            <div class ="showPostCreated">
            </div>
        </div>
    </div>          
    `;

    const sectionElement = document.createElement('section');
    sectionElement.innerHTML = viewWall;
    const showPostCreated = sectionElement.querySelector('.showPostCreated');

    // se llama al metodo getposts
    getPosts().then((posts) => {   //  obteniendo Todos los posts, array de objetos de la coleccion posts
        // console.log(posts); // 
        const htmlPosts = publicatedPost(posts);  // se genera el html con los posts x cada post, publicando posts 
        showPostCreated.innerHTML = htmlPosts;   // se inyecta en el div clase showPostCreated

    });
    getPostsSnapShot();
    // FIN DEL LOAD


    // CREAR POST
    const crearPost = sectionElement.querySelector('#idCreateBtn');
    // console.log (crearPost);
    crearPost.addEventListener("click", () => {

        const postMessage = sectionElement.querySelector('#idtextPost').value;
        // console.log(postMessage);
        createPost(postMessage);

        // // se llama al metodo getpost (Encapsular en un metodo ---)
        getPosts().then((posts) => {   //  obteniendo Todos los posts, array de objetos de la coleccion posts
            // console.log(posts); // 
            const htmlPosts = publicatedPost(posts);  // se genera el html con los posts x cada post, publicando posts 
            showPostCreated.innerHTML = htmlPosts;   // se inyecta en el div clase showPostCreated
    
        });
    

});
return sectionElement; // en el valor de retorno es donde se va a mostrar los elementos del Dom
};


// PUBLICAR POSTS EN EL MURO
export const publicatedPost = (posts) => {   // 
    if (posts.length) {      //Si existen datos, los va a recorrer
        let template = '<div class="templatePosts">';

        posts.forEach(post => {
            // console.log(post);
            const dataPost = post.data();
            const divPost = `
                <div class="templatePost">
                    <div>
                        <h3>hora</h1>
                        <h3>usuario</h1>
                    </div>
                    <div>
                        <p class="createdPost" id="idcreatedPost" type="text">${dataPost.comment}</p>
                    </div>
                    <div class="buttonsEdit">
                        <button type="button" class="editBtn" id ="ideditBtn">EDITAR</button>
                        <button type="button" class="editBtn" id ="idCancelBtn">CANCELAR</button>
                        <button type="button" class="editBtn" id ="idDeleteBtn">ELIMINAR</button>
                    </div>
                </div>    
            `;
            template += divPost
        });

        template += '</div>';
        // template.innerHTML = template;
        return template;

    } else {
        // template.innerHTML = '<li> No hay posts aún </li>';
        return ' No hay posts aún ';
    }
};

// export const Logout =() => {
//     const logoutBtn = document.getElementById ('logoutBtn')
//     logoutBtn.addEventListener('click', () => {
//         // Firebase.auth.signOut();
//         location.href = '#/login';
//     });
// }

