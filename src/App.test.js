import { render, screen } from '@testing-library/react';
import App from './App';

it('renders compendium', () => {
  render(<App />);
  const linkElement = screen.getByText(/compendium/);
  expect(linkElement).toMatchSnapshot();
});
