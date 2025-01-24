import React from 'react';
import Input from '../input/input';

const SignIn = ({ setIsSignIn }) => {
    return (
        <div>
            <h1 className="text-2xl mx-4 mt-3 font-medium font-poppins">
                Login as <span className="text-orange-600">Talent</span>
            </h1>
            <p className="mb-6 mx-4 mt-3 text-gray-500 font-poppins">
                Don't have an account? 
                <span>
                    <a
                        className="text-orange-600 cursor-pointer font-medium font-poppins"
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign up
                    </a>
                </span>
            </p>

            <div className="space-y-4">
                <Input 
                    label="Email" 
                    placeholder="Email" 
                    className="w-[385px] h-[48px] text-gray-700 placeholder-gray-500 px-[16px] py-[24px] text-[14px] font-poppins" 
                />
                <Input 
                    label="Password" 
                    type="password" 
                    placeholder="Password" 
                    className="w-[385px] h-[48px] text-gray-700 placeholder-gray-500 px-[16px] py-[24px] text-[14px] font-poppins" 
                />
            </div>

            <div className="text-orange-600 mt-4 text-[14px] underline text-center cursor-pointer">
                Forgot Password?
            </div>

            <div className="flex justify-center">
                <button className="mt-8 bg-orange-600 text-white py-3 px-16 rounded-full hover:bg-orange-700 transition font-medium">
                    Sign in
                </button>
            </div>

            <div>
                <h6 className="mt-6 text-center text-gray-500 font-poppins">
                    New here? 
                    <span 
                        className="text-orange-600 cursor-pointer font-medium" 
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign up now!
                    </span>
                </h6>
            </div>
        </div>
    );
};

export default SignIn;
