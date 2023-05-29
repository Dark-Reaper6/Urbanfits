import React, { useState } from 'react'
import Error403 from '../403';
import useUser from '@/hooks/useUser';
import User from '.';
import Link from 'next/link'
import toaster from '@/utils/toast_function';
import Head from 'next/head';
import Loader from '@/components/loaders/loader';
import Button from '../../components/buttons/simple_btn';

// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

export default function EmailPassword() {
    const {user, updateUser} = useUser()
    //state to handle loader component
    const [loader, setLoader] = useState(false)
    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email address"),
        confirm_email: Yup.string().email().required("Please enter your email address").oneOf([Yup.ref("email"), null], "Email must match"),
        password: Yup.string().min(8).max(30).required("Please enter your password")
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { email: user?.email, password: '', confirm_email: '' },
        validationSchema: validatedSchema,
        onSubmit: async (values) => {
            setLoader(<Loader />)
            let response = await fetch(`${process.env.HOST}/api/user/update?id=${user._id}&authpassword=${values.password}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: values.confirm_email })
            })
            let res = await response.json()
            if (!res.success) toaster("error", res.msg)
            if (res.success) toaster("success", res.msg)
            if (!res.payload) return setLoader(null)
            updateUser(res.payload)
            handleReset()
            setLoader(null)
            setValues({ confirm_email: '', password: '' })
        }
    })
    if(!user) return <Error403 />
    return (
        <>
            <Head>
                <title>Email & Password</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {loader}
            <User>
                <form className="w-full mt-10 font_gotham space-y-10 overflow-x-hidden" onReset={handleReset} onSubmit={handleSubmit} >
                    <h1 className='text-xl lg:text-[22px] font_gotham_medium tracking-widest' >CHANGE EMAIL</h1>
                    <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                        <input className="w-full bg-transparent outline-none border-none" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email*" />
                    </div>
                    <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        {touched.confirm_email && errors.confirm_email ? <Tooltip classes="form-error" content={errors.confirm_email} /> : null}
                        <input className="w-full bg-transparent outline-none border-none" name="confirm_email" id="confirm_email" value={values.confirm_email} onChange={handleChange} onBlur={handleBlur} placeholder="Confirm Email*" />
                    </div>
                    <div className="relative w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                        <input className="w-full bg-transparent outline-none border-none" type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password*" /><Link href='/resetpassword' ><i className="material-symbols-outlined">edit_square</i></Link>
                    </div>
                    <div className="w-full flex justify-end space-x-4">
                        <Button type="reset" bg="bg-gray-100" text="black" font='font_gotham_medium' classes="w-full md:w-1/3" >CANCEL</Button>
                        <Button type="submit" classes="w-full md:w-1/3" font='font_gotham_medium' >SAVE NEW EMAIL</Button>
                    </div>
                </form>
            </User>
        </>
    )
}