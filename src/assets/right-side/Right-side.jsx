import React, { useState } from 'react';
import Input from '../input/input';
import SignIn from '../signin/SignIn';

const RightSide = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className=" p-[50px] bg-white shadow-2xl rounded-3xl max-w-[497px] mb-[100px] mt-0">
            {isSignIn ? (
                <SignIn setIsSignIn={setIsSignIn} />
            ) : (
                <>
                    <h1 className="text-2xl mx-4 mt-3 font-medium font-poppins">
                        Sign up now as <span className="text-orange-600">Talent</span>
                    </h1>
                    <p className="mb-6 mx-4 mt-3 text-gray-500 font-poppins">
                        Already have an account? 
                        <span>
                            <a
                                className="text-orange-600 cursor-pointer font-medium font-poppins"
                                onClick={() => setIsSignIn(true)}
                            > Sign in</a>
                        </span>
                    </p>

                    <div className="space-y-4 flex-col">
                        <div className="flex gap-x-4">
                            <Input 
                                label="First name" 
                                placeholder="First name" 
                                className="w-[184.8px] h-[48px] text-gray-700 placeholder-gray-500 px-[16px] py-[24px] text-[14px] font-poppins" 
                            />
                            <Input 
                                label="Last name" 
                                placeholder="Last name" 
                                className=" w-[184.8px] h-[48px] w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins" 
                            />
                        </div>
                        <div className="space-y-4">
                            <Input 
                                type="email" 
                                label="Email" 
                                placeholder="Enter your email" 
                                className=" w-[385px] h-[48px]  w-full text-gray-700 placeholder-gray-500 px-[8px] py-[24px] text-[14px] font-poppins" 
                            />
                            <Input 
                                label="Password" 
                                type="password" 
                                placeholder="Enter your password" 
                                className=" w-[385px] h-[48px] w-full text-gray-700 placeholder-gray-500  px-4 py-3 text-[14px] font-poppins" 
                            />
                            <Input 
                                label="Confirm Password" 
                                type="password" 
                                placeholder="Confirm your password" 
                                className=" w-[385px] h-[48px] w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins" 
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-8 bg-orange-600 text-white py-3 px-16 rounded-full hover:bg-orange-700 transition font-medium">
                            Sign up
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RightSide;
