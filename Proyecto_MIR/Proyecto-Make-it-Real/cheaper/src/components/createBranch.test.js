import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import CreateBranch from './createBranch';


describe ('CreateBranch',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
        <MemoryRouter> 
          <CreateBranch/>
        </MemoryRouter>
    );  
    expect (container.firstChild).toMatchSnapshot();
    });
});