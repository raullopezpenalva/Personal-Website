import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';


test('renders home page', () => {
  render(<RouterProvider router={router} />);
  
  expect(screen.getByText(/Hola, soy Raúl López Penalva/i)).toBeInTheDocument();
});