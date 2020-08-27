import React from 'react';
import {render} from '@testing-library/react';
import SearchProducts from './SearchProducts';


describe ('SearchProducts',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (<SearchProducts/>); 
    expect (container.firstChild).toMatchSnapshot();
    });
});