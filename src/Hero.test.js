import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders dashboard tag', () => {
    render(<Hero />);
    const divElement = screen.getByText(/HI/);
    expect(divElement).toBeInTheDocument();
});
test('renders dashboard tag', () => {
    render(<Hero />);
    const divElement = screen.getByText(/HellO/);
    expect(divElement).toBeInTheDocument();
});
test('renders dashboard tag', () => {
    render(<Hero />);
    const divElement = screen.getByText(/Hiya/);
    expect(divElement).toBeInTheDocument();
});