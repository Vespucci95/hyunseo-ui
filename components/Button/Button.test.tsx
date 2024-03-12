import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../index';

describe('<Button>', () => {
  it('renders component', () => {
    const {container} = render(<Button>Button</Button>);

    const text = screen.getByText('Button')
    expect(text).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
