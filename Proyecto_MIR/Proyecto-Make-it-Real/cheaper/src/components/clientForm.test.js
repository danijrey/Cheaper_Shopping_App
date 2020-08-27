import React from 'react';
import {render, getAllByTestId} from '@testing-library/react';
import ClientForm from './clientForm';


describe ('ClientForm',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (<ClientForm/>); 
    expect (container.firstChild).toMatchSnapshot();
    });

    it('Should render form with data-testid="ClientForm"', ()=>{
        const {getByTestId}=render(<ClientForm/>);
        const client=getByTestId("ClientForm");
        expect(client).toBeInTheDocument();
    })
    it('Should render the following text ="Ingresa, Enviar"', ()=>{
        const {getByText}=render(<ClientForm/>);
        const clientText=getByText(/Ingresa/, /Enviar/);
        expect(clientText).toBeInTheDocument();
    })
});