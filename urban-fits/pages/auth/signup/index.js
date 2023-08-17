import React, { useState, useEffect, useRef } from 'react'
import AuthPage from '..'
import Link from 'next/link'
import Head from 'next/head'
import Button from '@/components/buttons/simple_btn'
import Tooltip from '@/components/tooltip'
import toaster from '@/utils/toast_function'
import AlertPage from '@/components/alertPage'
import countryCodes from '@/static data/countryCodes'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession, signIn } from "next-auth/react"
import useUser from '@/hooks/useUser'
import * as Yup from 'yup'
import { useFormik } from 'formik'
//Image imports
import Image from 'next/image'
import google_logo from '@/public/logos/google-logo.svg'
import apple_logo from '@/public/logos/apple-logo.svg';

export default function Signup() {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { user, updateUser } = useUser()
    const [showPass, setShowPass] = useState(false)

    const passRef = useRef()

    if (user && user.email) return <AlertPage type="success" heading="You are already signed in !" />

    const onsubmit = async (values, x, oAuthQuery) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/signup/${oAuthQuery ? oAuthQuery : ''}`, values)
            console.log(res)
            if (res.data.success && res.data.payload && oAuthQuery) {
                const { data } = res
                await updateUser(data.payload, true)
                toaster("success", data.msg)
                router.push('/user/myaccount')
            }
            if (res.data.success && res.data.payload && !oAuthQuery) {
                router.push(`/auth/signup/verification/${values.email}`)
            }
        }
        catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        setLoading(false)
    }

    const signupuSchema = Yup.object({
        username: Yup.string().min(5, 'Username must be at least 5 characters long').max(24, 'Username cannot exceed 24 characters').matches(/^[A-Za-z0-9_]+$/, 'Username must contain only letters, numbers, and underscores').notOneOf([' ', '-'], 'Username should not contain any spaces or hyphen symbols').required('Username is required'),
        email: Yup.string().email().required('Please enter your email address'),
        // phone: Yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, Please enter a valid phone number with postal code and space eg. +971 0000000000).required(),
        phone_prefix: Yup.string().required('Phone prefix is required to save'),
        phone_number: Yup.string().min(6, 'Phone number can be a minimum of 6 digits').max(14, 'Phone number can be a maximum of 14 digits').required('Phone number is required to save'),
        password: Yup.string().min(8).max(30).required('Please enter your password'),
        accept_policies: Yup.boolean().required("You can't go ahead uless you agree with our policies").oneOf([true], "You can't go further without accepting our policies).required(You can't go further without accepting our policies")
    })
    const initialSignupValues = { username: '', email: '', phone_prefix: 'Conuntry Code', phone_number: '', password: '', accept_policies: '' }
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialSignupValues,
        validationSchema: signupuSchema,
        onSubmit: onsubmit
    })

    const providerSignIn = (name) => {
        sessionStorage.setItem('oauth', true);
        sessionStorage.setItem('register_provider', name);
        signIn(name)
    }

    useEffect(() => {
        if (user && user.email) return
        const oauth = sessionStorage.getItem('oauth')
        const register_provider = sessionStorage.getItem('register_provider')
        if (oauth && session) {
            let username = session.user.email.split('@')[0]
            let name = session.user.name.split(' ')
            let firstname = name[0]
            name.shift()
            let lastname = name.join(' ')
            const loginDetails = { email: session.user.email, username, firstname, lastname, image: session.user.image, register_provider }
            onsubmit(loginDetails, null, '?auth=OAuth')
            return sessionStorage.removeItem('oauth')
        }
        else return
    }, [session])

    return (
        <>
            <Head>
                <title>Urban Fits - Sign Up</title>
            </Head>
            <AuthPage loading={loading} height="h-screen lg:h-auto" >
                <form className="h-full bg-white p-2 font_gotham text-base flex flex-col justify-between md:justify-around lg:block" onReset={handleReset} onSubmit={handleSubmit} >
                    <section className="w-full mb-6">
                        <h1 className="lg:hidden text-[22px] mb-5 text-left font_urbanist">Sign Up</h1>
                        <div className="relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                            {touched.username && errors.username ? <Tooltip classes="form-error" content={errors.username} /> : null}
                            <input className="w-full outline-none border-none" type="text" name="username" id="username" value={values.username} onBlur={handleBlur} onChange={handleChange} placeholder="Username" />
                        </div>
                        <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                            {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                            <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Email' />
                        </div>
                        <div className={` relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                            {touched.phone_prefix && errors.phone_prefix ? <Tooltip classes="form-error" content={errors.phone_prefix} /> : null}
                            <select defaultValue='Country Code' value={values.phone_prefix} name='phone_prefix' onBlur={handleBlur} className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                                <option value={null}>Select Country Code</option>
                                {countryCodes.map((item) => {
                                    if (!item.code) return <option disabled>{item.name}</option>
                                    return <option value={item.code}>{item.name} {item.code}</option>
                                })}
                            </select>
                        </div>
                        <div className={`relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                            {touched.phone_number && errors.phone_number ? <Tooltip classes="form-error" content={errors.phone_number} /> : null}
                            <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone_number" id="phone_number" size="15" maxLength={15} value={values.phone_number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" />
                        </div>
                        <div className={`relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                            {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                            <input ref={passRef} className="w-full outline-none border-none" type={showPass ? "text" : "password"} name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password' />
                            <i onClick={() => {
                                passRef.current.focus();
                                if (showPass) return setShowPass(false);
                                if (!showPass) return setShowPass(true)
                            }} className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"} text-black font-bold cursor-pointer select-none`} />
                        </div>
                        <div className="my-3 text-gray-400 text-xs md:text-sm text-left">
                            Password must be at least 8 characters and can’t be easy to guess - commonly used or risky passwords are not premitted.
                        </div>
                    </section>

                    <section>
                        <div className="relative w-full h-14 mb-5 flex items-center">
                            {touched.accept_policies && errors.accept_policies ? <Tooltip classes="form-error" content={errors.accept_policies} /> : null}
                            <div className='mr-2' >
                                <input className='rounded' type="checkbox" id="accept_policies" name="accept_policies" value={values.accept_policies} onChange={handleChange} />
                            </div>
                            <label htmlFor='accept_policies' className="w-full cursor-pointer text-sm text-left">
                                <p className="ml-1 text-gray-400">By creating an account, I agree to the <Link href="/policies/terms&conditions" className=' text-black underline' >Terms & Conditions</Link>.I have read the <Link href="/policies/legalnotice" className=' text-black underline' >Legal Notice</Link> and <Link href="/policies/privacypolicy" className=' text-black underline' >Privacy Policy</Link></p>
                            </label>
                        </div>
                        <Button loading={loading} classes='w-full' type="submit" >Sign Up</Button>
                        <Link href='/auth/login' className='underline text-xs md:text-sm'><h1 className='w-full text-center' >Log in with an Existing Account</h1></Link>
                        <button onClick={() => providerSignIn("google")} name='google' className="group w-full h-12 my-4 py-2 px-2 flex justify-center items-center bg-gray-100 text-lg border border-gray-400 rounded-full hover:shadow-xl transition">
                            <Image src={google_logo} width={50} height={50} className='w-6 md:w-8 mr-3' alt="google" />
                            <span className='w-0 whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:w-32'>Sign Up with</span>
                            Google
                        </button>
                    </section>
                </form>
            </AuthPage>
        </>
    )
}