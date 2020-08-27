import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import  BranchFormCreate from './BranchFormCreate';

describe ('BranchFormCreate', ()=> {
    it ('Should render the text: "sucursal" correctly', ()=>{
        const{getByText}=render (
            <MemoryRouter>
                <BranchFormCreate/>
            </MemoryRouter>
        );
        expect(getByText(/sucursal/)).toBeInTheDocument();
    })
})