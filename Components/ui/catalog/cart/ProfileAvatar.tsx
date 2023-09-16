import React, { FC } from 'react';
import { useProfile } from '../../../../hooks/useProfile';
import Image from 'next/image';

const ProfileAvatar: FC = () => {

    const {profile} = useProfile()

    return (
        <div>
            {
                profile?.avatarPath && (
                    <Image
                        alt='avatar'
                        src={profile.avatarPath}
                        width={43}
                        height={43}
                        className='rounded-full border-primary border border-solid hover:opacity-80'
                    />
                )
            }
        </div>
    );
};

export default ProfileAvatar;