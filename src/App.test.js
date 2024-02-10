// Importing the jest testing library
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe('App Component', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading');
  const buttonElement = screen.getByRole('button');

  // Test 1
  test('Toggle Page Heading', () => {
    expect(headingElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(headingElement).not.toBeVisible();
    fireEvent.click(buttonElement);
    const newHeadingElement = screen.getByRole('heading');
    expect(newHeadingElement).toBeVisible();
  });
});
