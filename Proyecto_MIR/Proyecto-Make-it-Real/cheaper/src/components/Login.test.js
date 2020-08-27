import React from 'react';
import {render} from '@testing-library/react';
import Login from './Login';


describe ('Login',() =>{
    it('Should render correctly ', () => {
      const { getByText } = render(<Login/>);
      expect(getByText(/Bienvenido/,/Encuentra/,/Sesión/)).toBeInTheDocument();
    });

    it('Should render elements with the following placeholder text = "Contraseña","Correo"', () => {
        const { getByPlaceholderText } = render(<Login/>);
        expect( getByPlaceholderText(/Contraseña/,/Correo/)).toBeInTheDocument();
      });
});