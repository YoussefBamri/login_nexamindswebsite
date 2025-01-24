import React, { useState } from 'react';
import Input from '../input/input';
import SignIn from '../Signin/SignIn';


const RightSide = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className="w-full max-w-[497px] min-h-[500px] rounded-3xl px-6 pb-7 pt-10 shadow-2xl">
            {isSignIn ? (
                <SignIn setIsSignIn={setIsSignIn} />
            ) : (
                <div className="mx-8">
                    <h1 className="text-2xl mt-3 font-medium">
                        Sign up now as <span className=" text-orangeDark">Talent</span>
                    </h1>
                    <p className="mb-6 mt-3 text-gray-500 font-poppins">
                        Already have an account?{' '}
                        <span>
                            <a
                                className="  text-orangeDark cursor-pointer font-medium"
                                onClick={() => setIsSignIn(true)}
                            >
                                Sign in
                            </a>
                        </span>
                    </p>

                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-4">
                            <Input 
                                label="First name" 
                                placeholder="first name" 
                                className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
                            />
                            <Input 
                                label="Last name" 
                                placeholder="last name" 
                                className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
                            />
                        </div>
                        <Input 
                            type="email" 
                            label="Email" 
                            placeholder="email" 
                            className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
                        />
                        <Input 
                            label="Password" 
                            type="password" 
                            placeholder="password" 
                            className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
                        />
                        <Input 
                            label="Confirm password" 
                            type="password" 
                            placeholder="Confirm password" 
                            className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-5 w-full max-w-[269px] bg-orangeDark text-sm p-4 pl-6 text-white rounded-full hover:bg-orange-700 transition font-medium">
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightSide;
