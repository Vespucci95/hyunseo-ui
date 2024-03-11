import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(({ children, ...rest }, ref) => {
    return (
        <button
            ref={ref}
            {...rest}
        >
            {children}
        </button>
    )
})

export default Button;
