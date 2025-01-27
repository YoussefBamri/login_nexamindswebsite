import React from 'react';
import Input from '../input/input';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = ({ setIsSignIn }: { setIsSignIn: (value: boolean) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form className="w-full max-w-[497px] min-h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-8">
        <h1 className="text-2xl mt-3 font-medium font-poppins">
          Login as <span className="text-orangeDark">Talent</span>
        </h1>
        <p className="mb-6 mt-3 text-gray-500 font-poppins">
          Don't have an account?{' '}
          <span>
            <a
              className="text-orangeDark cursor-pointer font-medium"
              onClick={() => setIsSignIn(false)}
            >
              Sign up
            </a>
          </span>
        </p>

        <div className="flex flex-col gap-y-4">
          <Input
            placeholder="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "email invalide",
              },
            })}
            className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input
            type="password"
            placeholder="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "min mdp 8",
              },
            })}
            className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="text-orangeDark mt-4 text-[14px] underline text-center cursor-pointer">
          Forgot Password?
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 bg-orangeDark text-white py-4 px-20 rounded-full hover:bg-orange-700 transition font-medium"
          >
            Sign in
          </button>
        </div>

        <div>
          <h6 className="mt-6 text-center text-gray-500 font-poppins">
            New here?{' '}
            <span
              className="text-orangeDark cursor-pointer font-medium"
              onClick={() => setIsSignIn(false)}
            >
              Sign up now!
            </span>
          </h6>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
