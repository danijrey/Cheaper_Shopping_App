import React from 'react';
import {render} from '@testing-library/react';
import Slider from './slider';


describe ('Slider',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (<Slider/>); 
    expect (container.firstChild).toMatchSnapshot();
    });
});