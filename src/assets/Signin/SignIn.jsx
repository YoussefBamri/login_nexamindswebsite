import React from "react";
import Input from "../input/input";
import { useForm } from "react-hook-form";
import { useSignin } from "./auth.hook";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
const queryClient=new QueryClient();
const SignIn = () => {
  const { register,handleSubmit,formState: { errors },} = useForm();

  const { mutate, isPending, isError, isSuccess, error, data } = useSignin();

  const onSubmit = (formData) => {
    if (isPending) return;
    mutate(formData);
  };

  return (
    <div className="w-full max-w-[497px] min-h-full">
      <div className="mx-8">
        <h1 className="text-2xl mt-3 font-medium font-poppins">
          Login as <span className="text-orangeDark">Talent</span>
        </h1>
        <p className="mb-6 mt-3 text-gray-500 font-poppins">
          Don't have an account?{" "}
          <span className="text-orangeDark cursor-pointer font-medium">
            Sign up
          </span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
            <Input
              placeholder="Email"
              className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email invalide",
                },
              })}
            />
            {errors.email && (
              <p className="text-orangeDark text-sm">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="Password"
              className="w-full text-gray-700 placeholder-gray-500 px-4 py-3 text-[14px] font-poppins"
              {...register("password", {
                required: "Le mot de passe est requis",
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              })}
            />
            {errors.password && (
              <p className="text-orangeDark text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="text-orangeDark mt-4 text-[14px] underline text-center cursor-pointer">
            Forgot Password?
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isPending}
              className={`mt-8 w-full max-w-[269px] text-sm p-4 rounded-full transition font-medium  
                bg-orangeDark hover:bg-orange-700 text-white
                disabled:bg-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:hover:bg-gray-400 flex items-center justify-center gap-2
              `}
            >
              {isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Connecting...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        {isError && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            ❌ <strong>Error:</strong>{" "}
            {error.response?.data?.message || "Something went wrong!"}
          </div>
        )}
        {isSuccess && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            ✅ <strong>Success:</strong> {data.message}
          </div>
        )}

        <div>
          <h6 className="mt-6 text-center text-gray-500 font-poppins">
            New here?{" "}
            <span className="text-orangeDark cursor-pointer font-medium">
              Sign up now!
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
