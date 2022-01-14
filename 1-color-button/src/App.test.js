import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App/>);
  // Find an element with a role of button and text of 'Change to blue
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  // expect the button text to be 'Changed to red'
  expect(colorButton.textContent).toBe('Change to red');
});