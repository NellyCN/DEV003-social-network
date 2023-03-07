// importamos la funcion que vamos a testear
import { signInUserEP } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signInUserEP).toBe('function');
  });
});

jest.mock('../src/firebase/', () => ({
  signInUserEP: () => Promise.resolve({
    user:{email:true}
  })}));

