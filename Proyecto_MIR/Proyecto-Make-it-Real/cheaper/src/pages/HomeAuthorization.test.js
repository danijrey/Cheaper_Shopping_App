import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import  HomeAuthorization from './HomeAuthorization';

describe('HomeAuthorization', ()=>{
    it ('Should render correctly when is authorizated', ()=>{
        const {getByTestId}=render (
            <MemoryRouter>
               <HomeAuthorization/> 
            </MemoryRouter>
        );
        expect(getByTestId('search')).toBeInTheDocument();
    })
})