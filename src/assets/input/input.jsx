import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, className,placeholder, type = "text" }) => {
    const [password, setpassword] = useState(false);

    const visibilte = () => {
        setpassword(!password);
    };

    return (
        <div className="relative">
            <input
                type={password ? "text" : type}
                placeholder={placeholder}
               className={`max-w-md h-[48px] border border-gray-300 rounded-full p-4 bg-white w-full ${className}`}

            />
            {type === "password" && (
                <span
                    onClick={visibilte}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                    <FontAwesomeIcon icon={password ? faEyeSlash : faEye} />
                </span>
            )}
        </div>
    );
};

export default Input;