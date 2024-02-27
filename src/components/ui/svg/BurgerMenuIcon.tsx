interface BurgerMenuIconProps {
    className?: string;
}

export const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({ className }) => {
    return (
        <svg
            className={className}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'></path>
        </svg>
    );
};