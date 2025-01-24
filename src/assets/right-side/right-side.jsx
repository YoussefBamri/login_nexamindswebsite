import React, { useState } from 'react';
import Input from '../input/input';

const RightSide = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className="w-full max-w-[497px] min-h-[500px] rounded-3xl px-6 pb-7 pt-10 shadow-2xl">
            {isSignIn ? (
                <div className="mx-8">
                    <h1 className="text-2xl mt-3 font-medium">
                        Login as <span className="text-orange-600">Talent</span>
                    </h1>
                    <p className="mb-6 mt-3">
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

                    <div className="flex flex-col gap-y-3">
                        <Input label="Email" placeholder="Email" />
                        <Input label="Password" type="password" placeholder="Password" />
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-8 bg-orange-600 text-white py-4 px-20 rounded-full hover:bg-orange-700 transition">
                            Sign in
                        </button>
                    </div>
                </div>
            ) : (
                <div className="mx-8">
                    <h1 className="text-2xl mt-3 font-medium">
                        Sign up now as <span className="text-orange-600">Talent</span>
                    </h1>
                    <p className="mb-6 mt-3">
                        Already have an account?{' '}
                        <span>
                            <a
                                className=" text-orange-600 cursor-pointer"
                                onClick={() => setIsSignIn(true)}
                            >
                                Sign in
                            </a>
                        </span>
                    </p>

                    <div className="flex flex-col gap-y-3">
                        <div className="flex gap-x-4 justify-between">
                            <Input label="First name" placeholder="First name" />
                            <Input label="Last name" placeholder="Last name" />
                        </div>
                        <Input type="email" label="Email" placeholder="Email" />
                        <Input label="Password" type="password" placeholder="Password" />
                        <Input label="Confirm password" type="password" placeholder="Confirm password" />
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-5 w-full max-w-[269px] bg-orange-600 text-sm p-4 pl-6 text-white rounded-full">
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightSide;
