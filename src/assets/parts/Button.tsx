import style from '../scss/Button.module.scss'

type ButtonProps = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({children, onClick}: ButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={style.btn}>{children}</button>
        </>
    )
} 