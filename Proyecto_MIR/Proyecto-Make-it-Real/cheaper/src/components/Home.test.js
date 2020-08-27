import React from 'react';
import { render, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';


describe('Home', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should render elements with the following Id = "HomeProvider","ProductList","Slider","NewBranchLink","NewProductLink" ', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const links = getByTestId('HomeProvider','ProductList', 'Slider', 'NewBranchLink', 'NewProductLink');
    expect(links).toBeInTheDocument();
  });
  it('Should render elemente with the following placeholder text= "búsqueda", "Ubicación"', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const placeholders = getByPlaceholderText(/búsqueda/, /Ubicación/);
    expect(placeholders).toBeInTheDocument();
  });
});