import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewProduct from './NewProduct';


describe('NewProduct', () => {
    it('should render correctly', () => {
        const { container } = render(
            <MemoryRouter>
                <NewProduct />
            </MemoryRouter>

        );
        expect(container.firstChild).toMatchSnapshot();
    });
    it('Should render the element with data-testid="newProduct"', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <NewProduct />
            </MemoryRouter>
        );
        expect(getByTestId('newProduct')).toBeInTheDocument();
    })
});