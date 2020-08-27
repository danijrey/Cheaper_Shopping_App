import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';  
import ProviderFormCreate from './ProviderFormCreate';


describe ('ProveiderFormCreate', ()=>{
    it ('Should render correctly form with data-testis="ProviderForm"', ()=>{
        const {getByTestId}=render(
            <MemoryRouter>
                <ProviderFormCreate/>
            </MemoryRouter>
        );
        expect(getByTestId('ProviderForm')).toBeInTheDocument();
    })
})
