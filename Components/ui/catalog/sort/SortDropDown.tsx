import React, { Dispatch, FC, SetStateAction } from 'react';
import { EnumSortFilters } from '../../../../services/product/products.interface';

interface SortProps {
    sortType: EnumSortFilters,
    setSortType: Dispatch<SetStateAction<EnumSortFilters>>
}

const SortDropDown: FC<SortProps> = ({sortType, setSortType}) => {
    return <div className='text-right mb-2'>
        <select value={sortType} onChange={(e) => setSortType((e.target.value as any))} className=' appearance-none py-1 px-2 bg-white'>
        {(Object.keys(EnumSortFilters) as Array<keyof typeof EnumSortFilters>).map((key) => {
            return <option 
            key={key}
                value={EnumSortFilters[key]}
                >
            {EnumSortFilters[key]}
            </option>
        })}
    </select>
    </div>
    
};

export default SortDropDown;