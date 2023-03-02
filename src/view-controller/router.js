import { components } from '../views';

const changeView = (route) => {
	const divRoot = document.getElementById('root');
	divRoot.innerHTML = '';
	switch (route) {
		case '#/login':
			{ return divRoot.appendChild(components.login()) };
		case '#/register':
			{ return divRoot.appendChild(components.register()) };
		case '#/wall':
			// console.log(divRoot);
			{ return divRoot.appendChild(components.wall()) };
		default:
			{ return divRoot.appendChild(components.login()) };
			// break;
	}
	// console.log(divRoot);
	// console.log(route)
};

export { changeView };