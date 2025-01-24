import React from 'react';
import Input from '../input/input';

const SignIn = ({ setIsSignIn }) => {
    return (
        <div className="w-full max-w-[497px] min-h-[500px] ">
            <div className="mx-8">
                <h1 className="text-2xl mt-3 font-medium font-poppins">
                    Login as <span className=" text-orangeDark">Talent</span>
                </h1>
                <p className="mb-6 mt-3 text-gray-500 font-poppins">
                    Don't have an account?{' '}
                    <span>
                        <a
                            className=" text-orangeDark cursor-pointer font-medium"
                            onClick={() => setIsSignIn(false)}
                        >
                            Sign up
                        </a>
                    </span>
                </p>

                <div className="flex flex-col gap-y-4">
                    <Input 
                        label="Email" 
                        placeholder="Enter your email" 
                        className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins" 
                    />
                    <Input 
                        label="Password" 
                        type="password" 
                        placeholder="Enter your password" 
                        className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins" 
                    />
                </div>

                <div className=" text-orangeDark mt-4 text-[14px] underline text-center cursor-pointer">
                    Forgot Password?
                </div>

                <div className="flex justify-center">
                    <button className="mt-8 bg-orangeDark text-white py-4 px-20 rounded-full hover:bg-orange-700 transition font-medium">
                        Sign in
                    </button>
                </div>

                <div>
                    <h6 className="mt-6 text-center text-gray-500 font-poppins">
                        New here? 
                        <span 
                            className=" text-orangeDark cursor-pointer font-medium" 
                            onClick={() => setIsSignIn(false)}
                        >
                            Sign up now!
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
