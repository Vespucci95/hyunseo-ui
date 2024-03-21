import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

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
