import React from 'react';

type BtnTypeProps = {
    btnEffect: () => void;
    btnName: string
    disabled?: boolean;
}

export const Button = ({btnEffect, btnName, disabled}: BtnTypeProps) => {
    return (
        <button disabled={disabled} onClick={btnEffect}>{btnName}</button>
    );
};

