import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders dashboard tag', () => {
    render(<Landing />);
    const liElement = screen.getByText(/View Source/i);
    expect(liElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Landing />);
    const liElement = screen.getByText(/Documentation/i);
    expect(liElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Landing />);
    const liElement = screen.getByText(/Examples/i);
    expect(liElement).toBeInTheDocument();
});