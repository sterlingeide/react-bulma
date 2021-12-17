import { render, screen } from '@testing-library/react';
import Inbox from './Inbox';

test('renders dashboard tag', () => {
    render(<Inbox />);
    const liElement = screen.getByText(/Inbox/);
    expect(liElement).toBeInTheDocument();
});
test('renders dashboard tag', () => {
    render(<Inbox />);
    const liElement = screen.getByText(/Starred/);
    expect(liElement).toBeInTheDocument();
});
test('renders dashboard tag', () => {
    render(<Inbox />);
    const liElement = screen.getByText(/Sent Mail/);
    expect(liElement).toBeInTheDocument();
});