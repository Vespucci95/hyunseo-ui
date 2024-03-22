import * as React from 'react';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

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

type Animal = {
  say: () => void;
  print: () => void;
};

const animal: Animal = {
  say() {
    console.log('hello world!');
  },
  print: () => {
    console.log('foo');
  },
};

export default {
  Button,
  animal,
};
