import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import CreateProduct from './createProduct';


describe ('CreateProduct',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
        <MemoryRouter> 
          <CreateProduct/>
        </MemoryRouter>
    );  
    expect (container.firstChild).toMatchSnapshot();
    });
});