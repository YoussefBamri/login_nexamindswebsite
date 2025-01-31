import React, { useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//nsobhom b yarn yarn add @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const Input = forwardRef(({ placeholder, className, type = 'text', ...rest }, ref) => {
    const [inputType, setInputType] = useState(type); // jebet type bch narfou password wala text
    const [visible, setVisible] = useState(false); //hne nchoufou ken visible wala le yani utilisateur amal clique al eye wala le ken clique yodher ken awed cloque okhra generalement bch ytmaskaa

    const togglePasswordVisibility = () => { //hedhi copier m google 
        setVisible(!visible); //par defaut yekhou etat non visible
        setInputType(inputType === 'password' ? 'text' : 'password'); //etat te3 input yekhdhou bch ymanipuli bih 
    };

    return (
        <div className="relative">
            <input
                type={inputType}
                className={`mb-3 h-[48px] w-full max-w-md rounded-full border border-solid border-gray-300 px-6 w-full max-w-md rounded-full border border-solid border-gray-300  ${className}`}
                placeholder={placeholder}
                ref={ref} // Passer la ref ici
                {...rest}
            />
            {type === 'password' && (
                <span
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                >
                    <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                </span>
            )}
        </div>
    );
});

export default Input;