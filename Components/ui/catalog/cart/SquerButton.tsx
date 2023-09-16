import React, {FC} from 'react';
import { IconType } from 'react-icons';

interface SqueryProps {
    Icon : IconType
    number ?: number
    onClick ?: () => void
 }

const SquerButton: FC<SqueryProps> = ({Icon, number, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            className='h-10 w-10 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors durartion-200 relative rounded '
        >
            {!!number && (
                <span className='flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5 text-xs text-secondary absolute -top-1 -right-1' >
                    {number}
                </span>
            )}
            <Icon className='text-secondary' size={26} />
        </button>
    );
};

export default SquerButton;