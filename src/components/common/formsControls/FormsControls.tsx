import React from 'react';

// export const Input = ({input,meta,...props}: any) => {
//     return (
//         <div>
//             <input type="text" {...input} {...props} />
//         </div>
//     );
// };

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <input {...input} {...props} style={{border: hasError ? '1px solid red' : '1px solid black'}} />
            {hasError && <span style={{color: 'red'}}>{meta.error}</span>}
        </div>
    );
};

