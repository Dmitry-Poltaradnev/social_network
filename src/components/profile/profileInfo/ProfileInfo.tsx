import React from 'react';

export const ProfileInfo = ({user}: { user: any }) => {
    return (
        <div>
            {user.user.photos && user.user.photos.large ? (
                <img style={{width: '100px', height: '100px', margin: '20px'}} src={user.user.photos.large}
                     alt="User profile"/>
            ) : (
                <div>Фото не загружено</div> // Показать, если фото нет
            )}
            <p>Name: {user.user.fullName}</p>
            <p>Description: {user.user.lookingForAJobDescription}</p>
            <p>About: {user.user.aboutMe}</p>
        </div>
    );
};

