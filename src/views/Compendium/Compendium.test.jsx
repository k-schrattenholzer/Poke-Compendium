import { screen, render } from '@testing-library/react'
import Compendium from './Compendium'

it ('should fetch shows, then render the list', async () => {
  render(<Compendium />)

  const loading = screen.getByText(/loading/)
  expect(loading).toBeInTheDocument()

  const shows = await screen.findByRole('*', {
    name: 'showList'
  },);

  expect(shows).toMatchSnapshot();
})