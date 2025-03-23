//import {render, fireEvent, screen} from "@testing-library/jest-dom"
import { fireEvent, render, screen} from '@testing-library/react';
import renderer from "react-test-renderer"

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

test('decreament counter', ()=>{
    //rendering component
    render(<Counter/>)

    //getting the elements
    const counter = screen.getByTestId('counter');  
    const decButton = screen.getByTestId("dec");
    // const reset = screen.getByTestId("reset");

    expect(counter).toHaveTextContent('Count:- 0');

    // Click the increment button
    fireEvent.click(decButton);

    // Check if the count updated
    expect(counter).toHaveTextContent('Count:- -1');
})

describe("Counter Screenshot",()=>{
    it("should match the screenshot", ()=>{
        const tree = renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})