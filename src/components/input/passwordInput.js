import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

export const PasswordInput = ({labelText,placeholder,value,setValue}) => {
    const [type,setType]=useState("password");
    return (
        <div className='m-4  items-center '>
            <label className='block text-gray-700 p-1  font-bold mb-2' htmlFor={labelText}>
                {labelText}
            </label>
            <div className='-mt-2 flex'>
                <input
                    value={value}
                    className='w-full  py-2 px-3 text-gray-700 border border-gray-200 leading-tight focus:border-2 no-outline'
                    id={labelText}
                    onChange={(e)=> {
                        setValue(e.target.value)
                    }}
                    type={type}
                    placeholder={placeholder}
                />
                <button className={(type==="password")?"text-gray-400 bg-white px-2 ":" px-2 bg-white text-gray-900"} onClick={()=>{
                    if(type==="password"){
                        setType("text");
                    }else{
                        setType("password");
                    }
                }}>
                    <FontAwesomeIcon icon={faEye}/>
                </button>

            </div>
        </div>

    );
};
