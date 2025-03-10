//import {render, fireEvent, screen} from "@testing-library/jest-dom"
import { fireEvent, render, screen} from '@testing-library/react';

import Counter from "../Counter"

test('increament counter', ()=>{
    //rendering component
    render(<Counter/>)

    //getting the elements
    const counter = screen.getByTestId('counter');
    const incButton = screen.getByTestId('inc');
    // const decButton = screen.getById("dec");
    // const reset = screen.getById("reset");

    expect(counter).toHaveTextContent('Count:- 0');

    // Click the increment button
    fireEvent.click(incButton);

    // Check if the count updated
    expect(counter).toHaveTextContent('Count:- 1');


})