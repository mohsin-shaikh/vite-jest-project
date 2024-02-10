// Importing the jest testing library
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Heading from './heading';

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe('Heading Component', () => {
  render(<Heading id='page-heading'>My React App Testing with Jest</Heading>);
  const headingElement = screen.getByRole('heading');

  // Test 1
  test('Heading Rendering', () => {
    expect(headingElement).toBeInTheDocument();
  });

  // Test 2
  test('Heading Text', () => {
    expect(headingElement).toHaveTextContent('My React App Testing with Jest');
  });

});
