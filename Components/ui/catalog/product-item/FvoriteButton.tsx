import React, { FC } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useProfile } from '../../../../hooks/useProfile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserSevice } from '../../../../providers/user.service';

const FavoriteButton: FC<{id : number}> = ({id}) => {

    const {profile} = useProfile()

    const queryCash = useQueryClient()

    const {mutate} = useMutation(['toggle favorites'], () => UserSevice.toggleFavorites(id), {
        onSuccess: () => queryCash.invalidateQueries(['get profile'])
    })

    const isExists =profile && profile.favorites.some((item) => item.id === id  )

    return (
        <div>
            <button
                onClick={() => mutate()}
                className='text-primary transform scale-150'
            >
                {isExists 
                        ? <AiFillHeart/>
                        : <AiOutlineHeart/>
                }
            </button>
        </div>
    );
};

export default FavoriteButton;