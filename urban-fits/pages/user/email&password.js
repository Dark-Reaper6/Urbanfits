import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import jwt from 'jsonwebtoken';
import ifExists from '@/utils/if_exists';
import toaster from '@/utils/toast_function';
import Head from 'next/head';
import { Avatar } from './personalinfo';
import Loader from '@/components/loader';
import Navbar from '../../components/navbar';
import Button from '../../components/buttons/simple_btn';
import AccountMenu from '../../components/accountmenu'

// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

export default function EmailPassword() {
    const router = useRouter()
    //state to handle loader component
    const [loader, setLoader] = useState(false)
    // user data state
    const [user, setUser] = useState({})
    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email address"),
        confirm_email: Yup.string().email().required("Please enter your email address").oneOf([Yup.ref("email"), null], "Email must match"),
        password: Yup.string().min(8).max(30).required("Please enter your password")
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { email: '', password: '', confirm_email: '' },
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
            localStorage.setItem("authToken", res.payload)
            handleReset()
            setLoader(null)
            setValues({ confirm_email: '', password: '' })
        }
    })
    // determining if the scroll direction is upwards or downwards
    const [direction, setDirection] = useState('')
    const handleScroll = (e) => {
        e.target.scrollTop > 7 ? setDirection("-translate-y-20") : setDirection('translate-y-0')
    }
    // getting user payload form jwt token in localstorage
    useEffect(() => {
        const userData = jwt.decode(localStorage.getItem("authToken"))
        if (userData) {
            let user = userData._doc
            setUser(user)
            setValues({ email: ifExists(user.email) })
        }
        else return router.push('/access denied')
    }, [])
    return (
        <>
            <Head>
                <title>Email & Password</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {loader}
            <Navbar lowerLogo />
            <main className={`bg-gray-100 h-90vh lg_layout_height flex transition-all overflow-hidden duration-700`}>
                <AccountMenu direction={direction} />
                <section onScroll={handleScroll} className='w-full lg:w-[67%] font_gotham text-left px-4 pt-24 lg:pt-9 lg:pl-7 overflow-y-scroll' >
                    <div className="w-full lg:w-5/6 h-screen">
                        <div className="flex flex-row-reverse md:flex-row items-center gap-3">
                            <Avatar user={user} />
                            <span>
                                <h2 className="text-xl lg:text-2xl mb-4">My Account</h2>
                                <p className='text-xs lg:text-sm' >Welcome {ifExists(user.firstname)} !<br />Save or change your email address and password in this area to to tell us about you for further assistence.</p>
                            </span>
                        </div>
                        <form className="w-full mt-10 font_gotham space-y-10 overflow-x-hidden" onReset={handleReset} onSubmit={handleSubmit} >
                            <h1 className='text-xl' >Change Email</h1>
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
                                <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" >Cancel</Button>
                                <Button type="submit" classes="w-full md:w-1/3" >Save New Email</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}