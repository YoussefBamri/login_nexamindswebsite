import React from 'react';
import Input from '../input';

const SignIn = ({ setIsSignIn }) => {
    return (
        <div className="w-full max-w-[497px] rounded-3xl px-6 pb-7 pt-10 shadow-2xl">
            <h1 className="text-2xl mt-3 font-medium mx-8">
                Login as <span className="text-orange-600">Talent</span>
            </h1>
            <p className="mb-6 mt-3 mx-8">
                Don't have an account?{' '}
                <span>
                    <a
                        className="text-orange-600 cursor-pointer"
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign up
                    </a>
                </span>
            </p>

            <div className="flex flex-col gap-y-3 mx-8">
                <Input label="Email" placeholder="Email" />
                <Input label="Password" type="password" placeholder="Password" />
            </div>

            <div className="flex justify-center">
                <button className="mt-8 bg-orange-600 text-white py-4 px-20 rounded-full hover:bg-orange-700 transition">
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default SignIn;
