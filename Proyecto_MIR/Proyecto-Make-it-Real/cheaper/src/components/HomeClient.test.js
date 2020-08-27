import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import HomeClient from './HomeClient';


describe ('HomeClient',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
        <MemoryRouter> 
          <HomeClient/>
        </MemoryRouter>
    );  
    expect (container.firstChild).toMatchSnapshot();
    });

    it('Should render elements with the following Id = "HomeClient" ', () => {
      const { getByTestId } = render(
        <MemoryRouter>
          <HomeClient/>
        </MemoryRouter>
      );
      const id = getByTestId('HomeClient');
      expect(id).toBeInTheDocument();
    });
});