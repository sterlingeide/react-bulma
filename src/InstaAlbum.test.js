import { render, screen } from '@testing-library/react';
import InstaAlbum from './InstaAlbum';

test('renders dashboard tag', () => {
    render(<InstaAlbum />);
    const navbarElement = screen.getByText(/explore/i);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<InstaAlbum />);
    const navbarElement = screen.getByTitle(/favorite_border/i);
    expect(navbarElement).toBeInTheDocument();
});

test('renders dashboard tag', () => {
    render(<InstaAlbum />);
    const navbarElement = screen.getByText(/person_outline/i);
    expect(navbarElement).toBeInTheDocument();
});