import React from 'react';
import {render} from '@testing-library/react';
import LoginSignin from './LoginSignin';
import {MemoryRouter} from 'react-router-dom';

describe('LoginSignin', ()=> {
    it ('Should render the input correctly', ()=>{
        const {getByText}=render (
            <MemoryRouter>
                <LoginSignin/>
            </MemoryRouter>
        );

        expect(getByText(/Encuentra/)).toBeInTheDocument();
    })
})