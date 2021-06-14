import React from "react";

export const  TextInput = ({ labelText,placeholder,suggestions, value,setValue,error }) =>{

    return(
        <div className='m-4 items-center '>
            <label className='block text-gray-700 p-1  font-bold mb-2' htmlFor={labelText}>
                {labelText}
            </label>
            <div className='-mt-2'>
                <input
                    value={value}
                    className='w-full  py-2 px-3 text-gray-700 border border-gray-200  '
                    id={labelText}
                    onChange={(e)=> {
                        setValue(e.target.value)
                    }}
                    type='text'
                    placeholder={placeholder}
                />

            </div>
            {
                error?(
                    <p className="text-sm text-red-700">This field is required.</p>
                ):(
                    <div className="hidden">
                    </div>
                )
            }
        </div>
    );
}
