import React, { useState } from 'react';
import Input from '../input/input';
import SignIn from '../Signin/SignIn';

const RightSide = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className="w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl min-h-[500px] rounded-3xl px-6 pb-7 pt-10 shadow-2xl mx-auto">
            {isSignIn ? (
                <SignIn setIsSignIn={setIsSignIn} />
            ) : (
                <div className="mx-4 sm:mx-6">
                    <h1 className="text-2xl sm:text-3xl mt-3 font-medium">
                        Sign up now as <span className="text-orangeDark">Talent</span>
                    </h1>
                    <p className="mb-6 mt-3 text-gray-500 font-poppins text-center sm:text-left">
                        Already have an account?{' '}
                        <span>
                            <a
                                className="text-orangeDark cursor-pointer font-medium"
                                onClick={() => setIsSignIn(true)}
                            >
                                Sign in
                            </a>
                        </span>
                    </p>

                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input label="First name" placeholder="First name" className="w-full" />
                            <Input label="Last name" placeholder="Last name" className="w-full" />
                        </div>
                        <Input type="email" label="Email" placeholder="Email" className="w-full" />
                        <Input label="Password" type="password" placeholder="Password" className="w-full" />
                        <Input label="Confirm password" type="password" placeholder="Confirm password" className="w-full" />
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-5 w-full max-w-xs bg-orangeDark text-sm p-4 text-white rounded-full hover:bg-orange-700 transition font-medium">
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightSide;
