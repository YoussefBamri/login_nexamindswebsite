import { useForm } from "react-hook-form";
import { useSignup } from "../right-side/auth.hook";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        values: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
    });

    const { error, isError, isSuccess, isPending, mutate, data } = useSignup(); 
    const onSubmit = (formData) => {
        if (isPending) return;
        mutate(formData);

    };

    return (
        <div className="mx-8">
                        <h1 className="text-2xl mt-3 font-medium">
                            Sign up now as <span className="text-orangeDark">Talent</span>
                        </h1>

                        <p className="mb-6 mt-3 text-gray-500 font-poppins">
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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex gap-x-4">
                                    <div className="w-full">
                                        <Input
                                            placeholder="First name"
                                            {...register("firstName", {
                                                required: "First name is required",
                                                maxLength: { value: 30, message: "First name cannot exceed 30 characters" }
                                            })}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            placeholder="Last name"
                                            {...register("lastName", {
                                                required: "Last name is required",
                                                maxLength: { value: 30, message: "Last name cannot exceed 30 characters" }
                                            })}
                                        />
                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                    </div>
                                </div>

                                <div className="w-full">
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+\.(fr|com)$/i,
                                                message: "invalid email"
                                            }
                                        })}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="w-full">
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,
                                                message: "Password must contain at least one uppercase letter and one symbol"
                                            }
                                        })}
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                                </div>

                                <div className="w-full">
                                    <Input
                                        type="password"
                                        placeholder="Confirm password"
                                        {...register("confirmPassword", {
                                            required: "Confirm password is required",
                                            minLength: { value: 6, message: "Confirm password must be at least 6 characters" },
                                            validate: (value) => value === watch('password') || "Passwords do not match"
                                        })}
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`mt-5 w-full max-w-[269px] text-sm p-4 rounded-full transition font-medium  
                                    bg-orangeDark hover:bg-orange-700 text-white
                                    disabled:bg-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:hover:bg-gray-400`}
                                > 
                                    {isPending ? (
                                        <div className='flex items-center justify-center'>
                                            <svg className="w-5 h-5 mr-2 text-white animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"></path>
                                            </svg>
                                            <span>Processing...</span>
                                        </div>
                                    ) : (
                                        "Sign up"
                                    )}
                                </button>
                            </div>
                        </form>

                        {isError && (
                            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                                ❌ <strong>Error:</strong> {error.response?.data?.message || "Something went wrong!"}
                            </div>
                        )}

                        {isSuccess && (
                            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                                ✅ <strong>Success:</strong> {data.message}
                            </div>
                        )}
                    </div>
    )
}

export default SignUp;