import { render, screen } from '@testing-library/react';
import { Button } from '../index';

describe('<Button>', () => {
  it('renders component', () => {
    expect(1).toBe(1);
    const { container } = render(<Button>Button</Button>);
    const text = screen.getByText('Button');
    expect(text).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
