import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Registry from './Registry';


describe ('Registry',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
    <MemoryRouter>
        <Registry/>
    </MemoryRouter> 
    
    ); 
    expect (container.firstChild).toMatchSnapshot();
    });
});