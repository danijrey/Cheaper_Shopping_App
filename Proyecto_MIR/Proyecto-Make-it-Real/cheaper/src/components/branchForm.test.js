import React from 'react';
import { render, fireEvent, getAllByTestId} from '@testing-library/react'
import BranchForm from './branchForm';



describe ('BranchForm' , ()=> {
    it ('should render correctly', () => {
        const {container} = render (<BranchForm/>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it ('Should render form with data-testid="BranchForm" correctly', ()=>{
        const {getByTestId}=render(<BranchForm/>);
 
        expect(getByTestId("BranchForm")).toBeInTheDocument();
    })
});                             