import React from 'react';
import {render} from '@testing-library/react';
import ProviderForm from './ProviderForm';


describe ('ProviderForm',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (<ProviderForm/>); 
    expect (container.firstChild).toMatchSnapshot();
    });
});