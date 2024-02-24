interface HotelLocationProps {
    className?: string;
}

const HotelLocation: React.FC<HotelLocationProps> = ({ className }) => (
    <svg className={className} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <defs>
            <style>
                {`.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}`}
            </style>
        </defs>
        <path
            className='cls-1'
            d='M20.59,10.09C20.59,16.77,12,22.5,12,22.5S3.41,16.77,3.41,10.09a8.59,8.59,0,0,1,17.18,0Z'
        />
        <line className='cls-1' x1='9.14' y1='6.27' x2='9.14' y2='13.91' />
        <line className='cls-1' x1='14.86' y1='6.27' x2='14.86' y2='13.91' />
        <line className='cls-1' x1='9.14' y1='10.09' x2='14.86' y2='10.09' />
    </svg>
);

export default HotelLocation;
