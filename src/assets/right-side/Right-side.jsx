import React, { useState } from 'react';
import SignIn from '../Signin/SignIn';
import SignUp from '../signup/Sign-up';

const RightSide = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className='min-h-[600px] w-full max-w-[497px]'>
            <div className="w-full rounded-3xl px-6 pb-7 pt-10 shadow-2xl">
                {isSignIn ? (
                    <SignIn setIsSignIn={setIsSignIn} />
                ) : (
                    <SignUp />
                )}
            </div>
        </div>
    );
};

export default RightSide;
