// importamos la funcion que vamos a testear
import { components } from '../src/views';
import { signInUserEP } from '../src/lib/firebase';

jest.mock('../src/lib/firebase', () => ({
  signInUserEP: jest.fn(() => console.log('soy espía')),
}));

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signInUserEP).toBe('function');
  });
});

// jest.mock('../src/lib/firebase', () => ({
//   createPost: jest.fn(() => console.log('soy un espía'))
// }));

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof createPost).toBe('function');
//   });
// });

describe('Login', () => {
  it('el componente de login debería mostrarse correctamente', () => {
    // GIVEN - DADO: contexto necesario para tu prueba, mocks elements html etc
    const divRoot = document.createElement('div');
    divRoot.id = 'root';
    document.body.append(divRoot);
    // WHEN - ejecutar el codigo o las funciones que quieres probar
    divRoot.appendChild(components.login());
    const divContainer = document.querySelector('[data-testid="loginContainer"]'); // si no lo encuentra retornar{a null}
    // THEN - expects, resultado esperado
    expect(divContainer).not.toBeNull();
    // console.log(document.body.innerHTML)
  });
});

describe('Register', () => {
  it('los componentes de registro deberían mostrarse correctamente', () => {
    // GIVEN - DADO: contexto necesario para tu prueba, mocks elements html etc
    const divRoot = document.createElement('div');
    divRoot.id = 'root';
    document.body.append(divRoot);
    // WHEN - ejecutar el codigo o las funciones que quieres probar
    divRoot.appendChild(components.register());
    const divContainer = document.querySelector('[data-testid="registerContainer"]'); // si no lo encuentra retornar{a null}
    // THEN - expects, resultado esperado
    expect(divContainer).not.toBeNull();
    // console.log(document.body.innerHTML)
  });
});

// describe('Muro', () => {
//   it('los componentes de muro deberían mostrarse correctamente', () => {
//     // GIVEN - DADO: contexto necesario para tu prueba, mocks elements html etc
//     const divRoot = document.createElement('div');
//     divRoot.id ='root';
//     document.body.append(divRoot);
//     // WHEN - ejecutar el codigo o las funciones que quieres probar
//     divRoot.appendChild(components.wall());
// si no lo encuentra retornar{a null}
//     const divContainer = document.querySelector('[data-testid="wallContainer"]');
//     // THEN - expects, resultado esperado
//     expect(divContainer).not.toBeNull();
//   });
// });
