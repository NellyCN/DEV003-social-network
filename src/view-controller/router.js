import { components } from "../views"

const changeView = (route) => {
    const loginSection = document.getElementById('loginSection')
    loginSection.innerHTML = '';
    switch (route) {
        case '#/login':
            { return loginSection.appendChild(components.login()) }
        case '#/register':
            { return loginSection.appendChild(components.register()) }
        case '#/wall':
            // console.log(loginSection);
            { return loginSection.appendChild(components.wall()) }
        default:
            { return loginSection.appendChild(components.login()) }
            // break
    }
    // console.log(loginSection);
    // console.log(route)
}

export { changeView }