import React, { useState } from 'react'
import { Formik, Field, Form } from "formik";
import { LoginSchema } from '@/utils/schema/schema';


function page() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = () => {

    }
  return (
    
    <div className='min-h-screen flex flex-col justify-center items-center p-4'>
        <div className='w-full max-w-lg border border-red-500 rounded-lg p-4'>
            <h1 className='text-2xl text-center font-semibold'>Sign in to your account</h1>

            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-6">
                    <div className="space-y-2">
                        <Field
                            name="email"
                            type="email"
                            placeholder="Your email*"
                            className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && touched.email ? (
                        <div className="text-red-500 text-sm">{errors.email}</div>
                        ) : null}
                    </div>

                    <div className="space-y-2">
                        <Field
                        name="password"
                        type="password"
                        placeholder="Your password*"
                        className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && touched.password ? (
                        <div className="text-red-500 text-sm">
                            {errors.password}
                        </div>
                        ) : null}
                    </div>

                    <div className="flex items-center justify-between">
                        {/* <div className="flex items-center">
                        <Field
                            type="checkbox"
                            name="rememberMe"
                            id="remember"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-700"
                        >
                            Remember Me
                        </label>
                        </div> */}
                        {/* <div>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot password?
                        </Link>
                        </div> */}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center gap-2 px-6 py-3 ${isLoading ? `cursor-not-allowed` : ""}`}
                    >
                        Log in
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

            

        </div>
    </div>
  )
}

export default page
