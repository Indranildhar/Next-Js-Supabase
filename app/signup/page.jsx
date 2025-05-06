'use client'
import React, { useState } from 'react'
import { Formik, Field, Form } from "formik";
import { LoginSchema } from '@/utils/schema/schema';
import { RegisterSchema } from '@/utils/schema/schema';
import { FaEye, FaEyeSlash, FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { SiSupabase } from "react-icons/si";
function page() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (values) => {
        console.log(values)
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({password: values.password, email: values.email}),
        }
        const response = await fetch('/api/user', requestOptions)
        const result = await response.json()
        console.log(result)
    }
  return (
    
    <div className='relative min-h-screen flex flex-col justify-center items-center p-4'>

        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: "url('/image/workspace-login.jpg')",
            backgroundSize: "cover",
            }}
        >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className='relative flex items-center justify-center gap-2 mb-4'>
            <SiSupabase className='text-green-700  text-3xl mb-4' />
            <p className='text-3xl mb-4 text-white'>Supabase</p>
        </div>
        <div className="relative z-10 w-full max-w-md">
            <div className='w-full rounded-lg p-4 bg-white/95 p-8 shadow-xl backdrop-blur-sm'>
                
                <h1 className='mb-6 text-2xl text-center font-bold text-gray-900'>Sign in to your account</h1>

                <Formik
                    initialValues={{ email: "", password: "", password_confirmation: '', rememberMe: false }}
                    validationSchema={RegisterSchema}
                    onSubmit={async (values, ) => {
                        handleSubmit(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="space-y-5">
                            <div >
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 ">
                                    Your email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full rounded-lg px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && touched.email ? (
                                <div className="text-red-500 text-xs">{errors.email}</div>
                                ) : null}
                            </div> 
                            <div >
                                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Field
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="w-full rounded-lg px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 "
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {errors.password && touched.password ? (
                                <div className="text-red-500 text-xs ">
                                    {errors.password}
                                </div>
                                ) : null}
                            </div>

                            <div >
                                <label htmlFor="password_confirmation" className="mb-2 block text-sm font-medium text-gray-700">
                                    Confirm password
                                </label>
                                <div className="relative">
                                    <Field
                                        name="password_confirmation"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        className="w-full rounded-lg px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 "
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                    {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {errors.password_confirmation && touched.password_confirmation ? (
                                <div className="text-red-500 text-xs ">
                                    {errors.password_confirmation}
                                </div>
                                ) : null}
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'> 
                                    <Field 
                                        type="checkbox"
                                        name="rememberMe"
                                        id="remember"
                                        className='h-4 w-4 rounded-lg'                                
                                    />
                                    <label htmlFor="remember" className='text-sm font-medium text-gray-700'>
                                        I accept the Terms and Conditions
                                    </label>

                                </div>
                                <Link href={'#'} className='text-sm font-medium text-blue-500 hover:underline'>
                                    Forgot password?
                                </Link>
                                
                            </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center gap-2 px-6 py-2 ${isLoading ? `cursor-not-allowed` : ""}`}
                        >
                            Create An Account   
                            {isLoading ? <ImSpinner8 className="animate-spin mr-1 h-5 w-5" /> : ""}
                        </button>

                        {/* {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">
                            {errorMessage}
                            </div>
                        )} */}
                        </Form>
                    )}
                </Formik>

                <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                    <Link href="/login" className="font-medium text-blue-500 hover:underline">
                    Login here
                    </Link>
                </p>

                

            </div>
        </div>
    </div>
  )
}

export default page
