import * as React from 'react';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import './Button.module.scss';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>(
  ({ children, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
