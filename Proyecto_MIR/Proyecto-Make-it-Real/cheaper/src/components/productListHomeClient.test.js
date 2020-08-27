import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProductListHomeClient from './productListHomeClient';


describe ('ProductForm',() =>{
    it('Should render the element with data-testid="ListHomeClient"', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <ProductListHomeClient/>
            </MemoryRouter>
        );
        expect(getByTestId('ListHomeClient')).toBeInTheDocument();
    });/*
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
    })*/
    
});