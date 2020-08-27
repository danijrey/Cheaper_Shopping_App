import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProductForm from './productForm';


describe ('ProductForm',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
    <MemoryRouter>
        <ProductForm/>
    </MemoryRouter> 
    
    ); 
    expect (container.firstChild).toMatchSnapshot();
    });
    it('Should render the element with data-testid="productForm"', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <ProductForm/>
            </MemoryRouter>
        );
        expect(getByTestId('productForm')).toBeInTheDocument();
    });
    it('Should render the element with the following text="Nuevo","Eliminar","Editar"', () => {
        const {getByText } = render(
            <MemoryRouter>
                <ProductForm/>
            </MemoryRouter>
        );
        expect(getByText(/Nuevo/,/Eliminar/,/Editar/)).toBeInTheDocument();
    })
        it('Should render the element with the following placeholder text="Ingresa","Descripcion","$"', () => {
        const {getByPlaceholderText } = render(
            <MemoryRouter>
                <ProductForm/>
            </MemoryRouter>
        );
        expect(getByPlaceholderText(/Ingresa/,/Descripcion/,/$/)).toBeInTheDocument();
    })
    
});