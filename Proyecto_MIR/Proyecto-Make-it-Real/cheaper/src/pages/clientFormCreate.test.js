import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import  ClientFormCreate from './ClientFormCreate';

describe('ClientFormCreate', ()=>{
    it ('Should render the text: "Ingresa" correctly ', ()=>{
        const{getByText}=render (
            <MemoryRouter>
                <ClientFormCreate/>
            </MemoryRouter>
        );
        expect(getByText(/Ingresa/)).toBeInTheDocument();
    })
})