import React from 'react';

export const PasswordInput = ({labelText,placeholder,value,setValue}) => {
    return (
        <div className='m-4  items-center '>
            <label className='block text-gray-700 p-1  font-bold mb-2' htmlFor={labelText}>
                {labelText}
            </label>
            <div className='-mt-2'>
                <input
                    value={value}
                    className='w-full  py-2 px-3 text-gray-700 border border-gray-200 leading-tight focus:border-2 no-outline'
                    id={labelText}
                    onChange={(e)=> {
                        setValue(e.target.value)
                    }}
                    type='password'
                    placeholder={placeholder}
                />
            </div>
        </div>

    );
};
