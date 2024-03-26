import * as React from 'react';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames/bind';
const cx = cn.bind(styles);

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button ref={ref} className={cx('container', className)} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
