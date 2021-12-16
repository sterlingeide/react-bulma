import { render, screen } from '@testing-library/react';
import Cheatsheet from './Cheatsheet';

test('renders dashboard tag', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByTitle(/CSS/i);
    expect(liElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByTitle(/JS/i);
    expect(liElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByTitle(/HTML/i);
    expect(liElement).toBeInTheDocument();
});
