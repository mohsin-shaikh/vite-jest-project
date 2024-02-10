// Importing the jest testing library
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Button from './button';


// test('handle click', async () => {
//   const onClick = jest.fn();
//   render(<Button>Refresh</Button>);
//   const buttonElement = await screen.findByText(/Refresh/i);
//   fireEvent.click(buttonElement);
//   expect(onClick).toHaveBeenCalledTimes(1);
// });

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe('Button Component', () => {
  // const setToggle = jest.fn();
  render(<Button id='refresh-button'>Refresh</Button>);
  const buttonElement = screen.getByRole('button');

  // Test 1
  test('Button Rendering', () => {
    expect(buttonElement).toBeInTheDocument();
  });

  // Test 2
  test('Button Text', () => {
    expect(buttonElement).toHaveTextContent('Refresh');
  });

});
