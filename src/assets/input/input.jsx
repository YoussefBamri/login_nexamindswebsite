import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


//nsobhom b yarn yarn add @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

const Input = ({ placeholder, className, type = 'text' }) => {
    const [inputType, setInputType] = useState(type); // jebet type bch narfou password wala text
    const [visible, setVisible] = useState(false); //hne nchoufou ken visible wala le yani utilisateur amal clique al eye wala le ken clique yodher ken awed cloque okhra generalement bch ytmaskaa

    const togglePasswordVisibility = () => { //hedhi copier m google 
        setVisible(!visible); //par defaut yekhou etat non visible
        setInputType(inputType === 'password' ? 'text' : 'password'); //etat te3 input yekhdhou bch ymanipuli bih 
    };

    return (
        <div className="relative ">
            <input
                type={inputType}
                className={`border border-gray-300 rounded-full bg-white py-3 w-full ${className}`}
                placeholder={placeholder}
            /> 
            {type === 'password' && ( //si password
                <span //affichage te3 eye 
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility} //hne manipulation mte3 foncion elle affiche leye tant que houa password 
                    //houa par defaut eye faslach yani mchatbaa star jey bch twali visible leye ttbadel mch mchatba
                >
                    <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                </span>
            )} 
        </div>
    );
};

export default Input;